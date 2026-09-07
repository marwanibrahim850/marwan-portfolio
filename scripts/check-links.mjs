import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

// Inspect the actual rendered links without contacting or submitting to third parties.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  const html = renderToStaticMarkup(React.createElement(App));
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  const anchors = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)];
  const attribute = (markup, name) => markup.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
  for (const [, attrs] of anchors) {
    const href = attribute(attrs, 'href');
    assert.ok(href, 'Every anchor needs a destination');
    if (href.startsWith('#')) assert.ok(ids.has(href.slice(1)), `Missing section: ${href}`);
    else if (href.startsWith('mailto:')) assert.equal(href, 'mailto:i.marwan2006@gmail.com');
    else {
      assert.equal(new URL(href).protocol, 'https:');
      assert.equal(attribute(attrs, 'target'), '_blank', href);
      assert.equal(attribute(attrs, 'rel'), 'noopener noreferrer', href);
    }
  }
  for (const url of ['https://marwanibrahim850.github.io/dar-estate/', 'https://senarty.infinityfree.io', 'https://marwanibrahim850.github.io/project-manger/']) {
    assert.ok(anchors.some(([, attrs, content]) => attribute(attrs, 'href') === url && content.startsWith('View Live ')), url);
  }
  const source = (name) => readFileSync(`src/components/${name}.jsx`, 'utf8');
  for (const id of ['home', 'about', 'skills', 'projects', 'capabilities', 'services', 'contact']) assert.ok(ids.has(id), id);
  for (const name of ['Navbar', 'Hero', 'Footer', 'Services']) assert.match(source(name), /behavior: 'smooth'/);
  for (const id of ['projects', 'contact']) assert.ok(source('Hero').includes(`scrollTo('${id}')`));
  assert.ok(source('Services').includes("getElementById('contact')"));
  assert.ok(source('Navbar').includes("section === 'What I Do' ? 'capabilities' : section.toLowerCase()"));
  assert.match(source('Navbar'), /setIsOpen\(false\)/);
  assert.match(source('Footer'), /window.scrollTo\(\{ top: 0, behavior: 'smooth' \}\)/);
  assert.match(source('Contact'), /window.location.href = `mailto:i.marwan2006@gmail.com\?subject=/);
  assert.doesNotMatch(source('Contact'), /Simulate form submission|sent successfully/);
  const built = readFileSync('build/index.html', 'utf8');
  for (const [, path] of built.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    assert.ok(path.startsWith('./'), `Non-relative build asset: ${path}`);
    assert.ok(existsSync(`build/${path.slice(2)}`), `Missing build asset: ${path}`);
    assert.ok(new URL(path, 'https://marwanibrahim850.github.io/Marwan-portfolio/').pathname.startsWith('/Marwan-portfolio/'));
  }
  console.log(`PASS: ${anchors.length} rendered links, all project URLs, section destinations, button handlers, email draft, and GitHub Pages build assets.`);
  console.log('Source/render checks only; browser interaction and external site availability are separate checks.');
} finally {
  await server.close();
}
