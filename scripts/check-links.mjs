import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

// Inspect actual rendered links without contacting third parties.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: PortfolioPage } = await server.ssrLoadModule('/src/pages/PortfolioPage.jsx');
  const html = renderToStaticMarkup(
    React.createElement(MemoryRouter, { initialEntries: ['/portfolio'] }, React.createElement(PortfolioPage))
  );
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  const anchors = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)];
  const attribute = (markup, name) => markup.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];

  for (const [, attrs] of anchors) {
    const href = attribute(attrs, 'href');
    assert.ok(href, 'Every anchor needs a destination');
    if (href.startsWith('#')) assert.ok(ids.has(href.slice(1)), `Missing section: ${href}`);
    else if (href.startsWith('mailto:')) assert.equal(href, 'mailto:i.marwan2006@gmail.com');
    else if (href.startsWith('/')) continue;
    else {
      assert.equal(new URL(href).protocol, 'https:');
      assert.equal(attribute(attrs, 'target'), '_blank', href);
      assert.equal(attribute(attrs, 'rel'), 'noopener noreferrer', href);
    }
  }

  for (const url of ['https://marwanibrahim850.github.io/dar-estate/', 'https://senarty.infinityfree.io', 'https://marwanibrahim850.github.io/project-manger/']) {
    assert.ok(anchors.some(([, attrs]) => attribute(attrs, 'href') === url), `Missing project URL: ${url}`);
  }

  const sectionSource = (name) => readFileSync(`src/components/sections/${name}.jsx`, 'utf8');
  for (const id of ['home', 'about', 'tech-stack', 'projects', 'learning-journey', 'contact']) {
    assert.ok(ids.has(id), `Missing section ID: ${id}`);
  }

  assert.match(readFileSync('src/components/Navbar.jsx', 'utf8'), /scrollIntoView/);
  assert.match(sectionSource('FooterSection'), /scrollTo/);
  assert.match(sectionSource('ContactSection'), /window.location.href = `mailto:\${personalInfo.email}\?subject=/);

  if (existsSync('dist/index.html')) {
    const built = readFileSync('dist/index.html', 'utf8');
    assert.ok(built.length > 0, 'dist/index.html exists and is not empty');
  }

  console.log(`PASS: ${anchors.length} rendered links, project URLs, section destinations, and email handlers checked.`);
} finally {
  await server.close();
}
