# Marwan Ibrahim — Developer Portfolio

A project-focused developer portfolio built with React 19 and Vite. The visual direction is Obsidian & Chalk Editorial: near-black surfaces, chalk typography, orange accents, sharp geometry, and an editorial layout.

## Featured projects

- **Senarty** — A full-stack fishing e-commerce and discovery platform built with PHP, MySQL, HTML, CSS, and JavaScript. It includes authentication, a shopping cart and checkout, profiles, fishing spots, fish information, and an admin dashboard. [Repository](https://github.com/marwanibrahim850/senarty-fishing-ecommerce) · [Live demo](https://senarty.infinityfree.io)
- **Dar Estate** — A real estate frontend project built with HTML, CSS, and JavaScript. [Repository](https://github.com/marwanibrahim850/dar-estate) · [Live demo](https://marwanibrahim850.github.io/dar-estate/)
- **Project Manager** — A React task-management application styled with Tailwind CSS and using local storage. [Repository](https://github.com/marwanibrahim850/project-manger) · [Live demo](https://marwanibrahim850.github.io/project-manger/)

## Development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment

The GitHub Actions workflow at `.github/workflows/deploy.yml` publishes the `dist` directory to GitHub Pages when changes are pushed to `main`.

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The configured Vite base path is `/marwan-portfolio/`, so the production URL is:

https://marwanibrahim850.github.io/marwan-portfolio/
