# 🚀 Quick Start Guide

Welcome to your professional portfolio website! Follow these steps to get started.

## Step 1: Verify Installation ✅

All dependencies should already be installed. Verify by checking:

```bash
npm --version   # Should show v6.0.0 or higher
node --version  # Should show v14.0.0 or higher
```

## Step 2: Start Development Server

```bash
npm run dev
```

**Output should show:**
```
  VITE v8.2.2  ready in 125 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

Open `http://localhost:5173/` in your browser to see your portfolio!

## Step 3: Customize Your Portfolio

### Quick Edits (Start Here!)

1. **Update Your Name**
   - Open: `src/components/Hero.jsx`
   - Find: `<span className="bg-gradient-to-r...">Marwan Ibrahim</span>`
   - Replace with your name

2. **Update Your Title**
   - In the same file, find: `<h2 className="text-2xl...">Full Stack Web Developer</h2>`
   - Replace with your title

3. **Update Your Description**
   - In Hero component, find the `<p className="text-lg...">` tag
   - Replace with your description

4. **Update Contact Information**
   - `src/components/Contact.jsx` - Update email and social links
   - `src/components/Footer.jsx` - Update footer information

### Detailed Customization

Follow the `README.md` file for detailed instructions on customizing:
- Skills and proficiency levels
- Projects and live demo links
- Services offered
- Colors and theme

## Step 4: Hot Module Reloading (HMR)

While `npm run dev` is running:
- **Edit any component** → Browser updates automatically
- **No need to refresh!** → Changes appear instantly
- **Perfect for rapid customization**

## Step 5: Build for Production

Once satisfied with your portfolio:

```bash
npm run build
```

Creates an optimized `dist/` folder ready for deployment.

## Step 6: Deploy (Choose One)

### Option A: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Option B: Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Option C: Traditional Hosting
Upload the contents of `dist/` folder via FTP.

See `DEPLOYMENT.md` for detailed deployment instructions.

## File Structure Reference

```
src/
├── components/
│   ├── Navbar.jsx          ← Navigation & logo
│   ├── Hero.jsx            ← Your intro & name
│   ├── About.jsx           ← About you section
│   ├── Skills.jsx          ← Your skills
│   ├── Projects.jsx        ← Your projects
│   ├── Services.jsx        ← Services offered
│   ├── Contact.jsx         ← Contact form
│   └── Footer.jsx          ← Footer links
├── App.jsx                 ← Main app (don't edit)
├── App.css                 ← App styles
├── index.css               ← Global styles
└── main.jsx                ← Entry point (don't edit)
```

## Common Tasks

### Add a New Project

1. Open `src/components/Projects.jsx`
2. Find the `projects` array
3. Add your project:
```javascript
{
  title: 'Your Project Name',
  description: 'Project description here',
  technologies: ['Tech1', 'Tech2'],
  liveUrl: 'https://your-project-url.com',
  githubUrl: 'https://github.com/your-username/project',
  image: '🎯', // Use any emoji
}
```

### Update Skills

1. Open `src/components/Skills.jsx`
2. Find `skillCategories` array
3. Update skill names and descriptions

### Change Colors

1. Open `tailwind.config.js`
2. Find the `colors` section
3. Change HEX values:
```javascript
colors: {
  primary: '#YOUR-COLOR-HERE',
}
```

## Useful Commands

```bash
# Development
npm run dev           # Start dev server

# Production
npm run build         # Build for production
npm run preview       # Preview production build

# Code Quality
npm run lint          # Check code with Oxlint
```

## Tips & Tricks

💡 **Pro Tips:**

1. **Test on Mobile** - Press `F12` in browser → Toggle device toolbar
2. **Use Emoji Icons** - Replace `🏠` with any emoji in projects
3. **Smooth Scrolling** - Links automatically scroll smoothly
4. **Dark Theme** - Already included! Matches modern preferences
5. **Responsive Design** - Works on all devices automatically

## Troubleshooting

### Page doesn't load
```bash
# Clear cache and rebuild
rm -rf node_modules
npm install
npm run dev
```

### Components not showing
- Check browser console (F12) for errors
- Ensure component is imported in `App.jsx`
- Verify all closing tags are present

### Styles not applied
- Clear browser cache (Ctrl+Shift+Del)
- Verify Tailwind CSS classes are used
- Check `index.css` is imported

## Next Steps

1. ✅ Customize your information
2. ✅ Test on mobile (F12 → Toggle device)
3. ✅ Build for production (`npm run build`)
4. ✅ Deploy to your platform
5. ✅ Share on Upwork, Mostaql, LinkedIn

## Support Resources

- 📚 [README.md](README.md) - Complete documentation
- 🚀 [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
- 🎨 [Tailwind CSS](https://tailwindcss.com/docs) - Styling guide
- ⚛️ [React Docs](https://react.dev/) - React reference
- ⚡ [Vite Docs](https://vitejs.dev/) - Build tool reference

## Ready to Launch?

Your portfolio is production-ready! Follow these final steps:

1. Customize all content ✏️
2. Test thoroughly 🧪
3. Build for production 🏗️
4. Deploy 🚀
5. Share with clients 📢

---

**Questions?** Each component file has detailed comments explaining how to customize it.

**Good luck with your portfolio!** 💪
