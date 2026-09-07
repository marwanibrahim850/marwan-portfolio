# Component Documentation

Detailed guide to each component in the portfolio website.

## 📱 Navbar Component

**File:** `src/components/Navbar.jsx`

### Features
- Fixed navigation bar with smooth scroll
- Active section highlighting
- Mobile-responsive hamburger menu
- Logo with gradient text
- Smooth transitions

### Customization

**Change Logo Initials:**
```jsx
// Line ~20
<a href="#" className="...">
  MI  {/* ← Change to your initials */}
</a>
```

**Add/Remove Navigation Links:**
```jsx
// Line ~33
const sections = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'];
// Add or remove section names
```

**Change Logo Color:**
Edit the `bg-gradient-to-r from-blue-400 to-cyan-400` classes to your preferred colors.

---

## 🎯 Hero Component

**File:** `src/components/Hero.jsx`

### Features
- Full-screen hero section
- Animated gradient background
- Call-to-action buttons
- Social media links
- Professional SVG illustration
- Scroll indicator

### Customization

**Update Name:**
```jsx
// Line ~28
<span className="...">
  Marwan Ibrahim  {/* ← Change here */}
</span>
```

**Update Title:**
```jsx
// Line ~34
<h2 className="...">
  Full Stack Web Developer  {/* ← Change here */}
</h2>
```

**Update Description:**
```jsx
// Line ~39
<p className="...">
  I build modern, responsive websites...  {/* ← Change here */}
</p>
```

**Update Social Links:**
```jsx
// Lines 75-99
<a href="https://github.com/marwanibrahim850">  {/* ← Update URL */}
  {/* Change username in URL */}
</a>
```

**Change Button Colors:**
- `btn-primary` class controls primary button (blue/cyan gradient)
- `btn-outline` class controls outline button (blue border)

---

## 👤 About Component

**File:** `src/components/About.jsx`

### Features
- Scroll animation (IntersectionObserver)
- Profile image placeholder
- Expertise highlights with checkmarks
- Professional introduction
- Responsive layout

### Customization

**Update Introduction:**
```jsx
// Line ~51
<p className="...">
  I am a Full Stack Web Developer...  {/* ← Change here */}
</p>
```

**Update Expertise Items:**
```jsx
// Lines ~58-75
<div className="flex items-start gap-3">
  <div className="flex-shrink-0...">
    {/* Checkmark icon */}
  </div>
  <div>
    <h4 className="...">
      Frontend Development  {/* ← Change title */}
    </h4>
    <p className="...">
      React, JavaScript, HTML5...  {/* ← Change skills */}
    </p>
  </div>
</div>
```

**Update Profile Image:**
Replace the SVG placeholder (lines ~38-45) with your actual image:
```jsx
<img 
  src="/your-image.jpg" 
  alt="Profile" 
  className="w-full h-full rounded-3xl object-cover"
/>
```

---

## 💡 Skills Component

**File:** `src/components/Skills.jsx`

### Features
- Animated skill cards with hover effects
- Categorized skills (Frontend, Backend, Tools)
- Proficiency progress bars
- Gradient backgrounds
- Responsive grid layout

### Customization

**Add New Skill Category:**
```jsx
// In skillCategories array (line ~26)
{
  title: 'Mobile Development',  // ← Category name
  icon: '📱',                    // ← Emoji icon
  skills: ['React Native', 'Flutter'],  // ← Skill list
  color: 'from-green-500 to-emerald-500',  // ← Gradient colors
}
```

**Update Existing Skills:**
```jsx
// Find skillCategories array, update 'skills' property
skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
```

**Update Proficiency Bars:**
```jsx
// Lines ~87-94
{
  label: 'React & JavaScript',  // ← Skill name
  percentage: 95  // ← Proficiency (0-100)
}
```

**Change Gradient Colors:**
Update the `color` property in skillCategories to any Tailwind gradient:
```jsx
color: 'from-[YOUR-COLOR] to-[YOUR-COLOR]'
```

---

## 📁 Projects Component

**File:** `src/components/Projects.jsx`

### Features
- Project cards with hover animations
- Technology tags
- Live demo and code buttons
- Project descriptions
- Responsive grid

### Customization

**Add New Project:**
```jsx
// In projects array (line ~28)
{
  title: 'Your Project Name',
  description: 'Brief project description here.',
  technologies: ['React', 'JavaScript', 'CSS3'],
  liveUrl: 'https://your-project-url.com',
  githubUrl: 'https://github.com/your-username/project',
  image: '🎯',  // ← Use any emoji
}
```

**Update Existing Project:**
- Find the project in the `projects` array
- Update title, description, technologies, URLs

**Change Project Icon/Image:**
Replace emoji (e.g., `🏠` for real estate, `💼` for business)

**Update GitHub Link:**
```jsx
githubUrl: 'https://github.com/your-username/project-name'
```

---

## 🛠️ Services Component

**File:** `src/components/Services.jsx`

### Features
- Service cards with gradient backgrounds
- Feature lists with checkmarks
- Hover animations
- Icon emojis
- Call-to-action buttons

### Customization

**Add New Service:**
```jsx
// In services array (line ~31)
{
  title: 'Your Service Name',
  description: 'Detailed service description.',
  icon: '🎯',  // ← Emoji icon
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  color: 'from-blue-500 to-cyan-500',  // ← Gradient
}
```

**Update Existing Service:**
- Find service in the `services` array
- Update description, features, icon

**Change Service Icon:**
Use any emoji that represents your service

**Update Colors:**
Change the `color` property to any Tailwind gradient combination

---

## ✉️ Contact Component

**File:** `src/components/Contact.jsx`

### Features
- Contact form with validation
- Multiple contact methods
- Success message after submission
- Social media links
- Responsive layout

### Customization

**Update Contact Information:**
```jsx
// In contactInfo array (line ~65)
{
  icon: '📧',
  title: 'Email',
  value: 'your-email@gmail.com',  // ← Change email
  link: 'mailto:your-email@gmail.com',
}
```

**Update Email Address:**
Replace `marwan.ibrahim850@gmail.com` with your email in:
- Contact info section (line ~65)
- Footer (Footer.jsx)
- Hero section (Hero.jsx)

**Update Social Links:**
```jsx
{
  icon: '💼',
  title: 'LinkedIn',
  value: 'Your Name',
  link: 'https://linkedin.com/in/your-username',  // ← Your LinkedIn
}
```

**Customize Success Message:**
```jsx
// Lines ~130-135
<h3 className="...">Thank You!</h3>
<p className="...">Your message has been sent successfully...</p>
```

**Add Form Validation:**
Form automatically validates:
- Name (required)
- Email (required, must be valid email)
- Message (required, min length)

---

## 🔗 Footer Component

**File:** `src/components/Footer.jsx`

### Features
- Multi-column layout
- Quick navigation links
- Social media icons
- Copyright information
- Scroll-to-top button

### Customization

**Update Brand Name:**
```jsx
// Line ~13
<h3 className="...">
  Marwan Ibrahim  {/* ← Change to your name */}
</h3>
```

**Update Brand Description:**
```jsx
// Lines ~15-17
<p className="...">
  Full Stack Web Developer crafting...  {/* ← Change */}
</p>
```

**Update Copyright Year:**
```jsx
// Line ~122
© {currentYear} Your Name.  {/* ← Change name */}
```

**Add/Remove Footer Links:**
```jsx
// Quick Links section (line ~24)
{['Home', 'About', 'Skills', 'Projects'].map((link) => (
  // ← Add or remove links here
))}
```

---

## 🎨 Styling & Customization

### Global Styles
**File:** `src/index.css`

- Contains Tailwind directives
- Custom animations (fadeIn, slideInUp, etc.)
- Utility classes (.btn, .card, etc.)
- Scrollbar styling
- Global font settings

### App Styles
**File:** `src/App.css`

- Component-specific styles
- Print styles
- Additional utilities

### Tailwind Configuration
**File:** `tailwind.config.js`

Customize colors, animations, and more:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',
      'primary-light': '#60a5fa',
      dark: '#0f172a',
    },
    animation: {
      'fade-in': 'fadeIn 0.6s ease-in-out',
      'slide-up': 'slideUp 0.6s ease-out',
    }
  }
}
```

---

## 🔄 Component Communication

### Active Section Highlighting

In `App.jsx`, the active section is tracked using `IntersectionObserver`:

```jsx
useEffect(() => {
  const handleScroll = () => {
    // Checks which section is in viewport
    // Updates activeSection state
    // Navbar uses this to highlight current section
  };
  
  window.addEventListener('scroll', handleScroll);
}, []);
```

The Navbar component receives `activeSection` as a prop:
```jsx
<Navbar activeSection={activeSection} />
```

---

## 🎯 Animation Patterns

All components use a similar pattern for scroll animations:

```jsx
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.1 }  // Trigger when 10% visible
  );

  const element = document.getElementById('section-id');
  if (element) observer.observe(element);

  return () => {
    if (element) observer.unobserve(element);
  };
}, []);
```

---

## 🚀 Performance Tips

1. **Lazy Load Images** - Use `<img loading="lazy">`
2. **Optimize SVGs** - Compress before embedding
3. **Use CSS animations** - More performant than JavaScript
4. **Minimal dependencies** - Only what's necessary
5. **Code splitting** - Already handled by Vite

---

## ✅ Best Practices

- ✓ Components are focused and single-purpose
- ✓ Proper accessibility with ARIA labels
- ✓ Semantic HTML structure
- ✓ Mobile-first responsive design
- ✓ Performance optimized
- ✓ Clean, readable code
- ✓ Reusable utility classes

---

## 📚 Related Documentation

- See `README.md` for project overview
- See `QUICKSTART.md` for quick customization
- See `DEPLOYMENT.md` for deployment guide

Need help? Check the comments in each component file!
