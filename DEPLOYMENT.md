# Deployment Guide

## Quick Start Guide

### 1. Development Setup

Navigate to your project directory:
```bash
cd d:\OneDrive\Desktop\Marwan-portfolio
```

Start the development server:
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser. The site will hot-reload as you make changes.

## Customization Checklist

Before deploying, customize these sections:

### 1. Update Your Information in Components

#### Hero Section (`src/components/Hero.jsx`)
- [ ] Change "Marwan Ibrahim" to your name
- [ ] Update title if needed
- [ ] Update description
- [ ] Update social links (GitHub, LinkedIn, Email)

#### Navbar (`src/components/Navbar.jsx`)
- [ ] Change logo initials from "MI" to your initials

#### About Section (`src/components/About.jsx`)
- [ ] Update professional introduction
- [ ] Customize expertise highlights

#### Skills Section (`src/components/Skills.jsx`)
- [ ] Update frontend skills
- [ ] Update backend skills
- [ ] Update tools
- [ ] Adjust proficiency percentages

#### Projects Section (`src/components/Projects.jsx`)
- [ ] Add/update your projects
- [ ] Update project descriptions
- [ ] Update live demo links
- [ ] Update GitHub links

#### Services Section (`src/components/Services.jsx`)
- [ ] Customize services offered
- [ ] Update descriptions

#### Contact Section (`src/components/Contact.jsx`)
- [ ] Update email address
- [ ] Update social media links

#### Footer (`src/components/Footer.jsx`)
- [ ] Update copyright name
- [ ] Update social links

### 2. Customize Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',        // Your primary color
      'primary-light': '#60a5fa',
      dark: '#0f172a',           // Background color
    }
  }
}
```

## Building for Production

### 1. Build the Project

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### 2. Preview Production Build

```bash
npm run preview
```

Test the production build locally before deploying.

## Deployment Methods

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be live instantly.

### Option 2: Netlify

1. **Using Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy
```

2. **Using Netlify Dashboard:**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy!

### Option 3: GitHub Pages

1. Create a GitHub repository
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/marwan-portfolio
git branch -M main
git push -u origin main
```

3. In GitHub repository settings, enable GitHub Pages from the `gh-pages` branch

4. Deploy:
```bash
npm run build
# Manually copy dist/ contents to gh-pages branch or use a GitHub Action
```

### Option 4: Traditional Hosting

1. Build the project:
```bash
npm run build
```

2. Upload the `dist/` folder contents to your hosting provider via FTP or control panel

3. Set the root directory to the `dist/` folder

## Performance Tips

- [ ] Optimize images used in the portfolio
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Monitor Core Web Vitals
- [ ] Enable gzip compression on your server
- [ ] Consider using a CDN for static assets

## SEO Optimization

The portfolio is pre-optimized for SEO with:
- Proper meta tags
- Semantic HTML structure
- Alt text for images
- Mobile-friendly design

Consider adding:
- Google Analytics
- Google Search Console verification
- Open Graph tags for social sharing
- Structured data (Schema.org)

## Monitoring & Maintenance

After deployment:
- [ ] Test all links and forms
- [ ] Verify social media links work
- [ ] Test on different browsers
- [ ] Check mobile responsiveness
- [ ] Monitor error logs
- [ ] Update projects regularly
- [ ] Keep dependencies updated

## Updating Your Portfolio

To add new projects or update information:

1. Edit the relevant component
2. Test locally with `npm run dev`
3. Build with `npm run build`
4. Re-deploy to your hosting platform

## Troubleshooting

### Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Build fails
```bash
rm -rf node_modules
npm install
npm run build
```

### Deployment fails
- Ensure all dependencies are installed
- Check that build command runs successfully
- Verify no errors in console
- Check your Node.js version (v14+)

## Support & Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)

---

Once deployed, you can share your portfolio link on:
- Upwork
- Mostaql
- LinkedIn
- GitHub
- Your personal social media

Good luck! 🚀
