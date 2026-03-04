# NEPTUNES TECH - Premium Corporate Website

A stunning, modern corporate website built with Next.js 16, featuring premium GSAP-style animations, Three.js particle backgrounds, and a custom interactive cursor. Built for businesses that demand excellence.

## ✨ Features

### Premium Design & UX
- **Premium Dark Theme** - Deep violet/fuchsia/cyan gradient scheme with glassmorphism effects
- **Custom Interactive Cursor** - Smooth 60fps custom cursor with magnetic hover effects (desktop only)
- **Three.js Particle Background** - Animated 3D floating particles for visual depth
- **GSAP-Style Animations** - Smooth scroll-triggered animations throughout
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Glassmorphism UI** - Modern frosted glass card effects with subtle borders

### Sections Included
1. **Header** - Sticky glassmorphism navigation with mobile menu
2. **Hero** - Animated headline with Three.js background and floating stats
3. **About** - Company features and animated statistics counter
4. **Services** - 6 service cards with gradient hover effects
5. **Solutions** - Interactive solution cards with benefits list
6. **Portfolio** - Masonry grid layout with category filtering
7. **Testimonials** - Auto-scrolling testimonial carousel
8. **CTA** - High-impact conversion section with glowing stats
9. **Contact** - Modern contact form with info cards
10. **Footer** - Comprehensive footer with social links

### Technologies Used
- **Next.js 16** - React framework with Turbopack
- **React 19** - Latest React version
- **Tailwind CSS 4** - Utility-first CSS framework
- **GSAP 3.12** - Professional animation library with ScrollTrigger
- **Three.js 0.160** - 3D particle background effects
- **Lucide React** - Beautiful SVG icons
- **Radix UI** - Accessible component primitives

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

1. **Extract/Clone the project**
   ```bash
   cd neptunes-tech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`

### Building for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
/app
  ├── layout.jsx          # Root layout with metadata
  ├── page.jsx            # Main page assembling all sections
  └── globals.css         # Global styles and custom cursor CSS

/components
  ├── CustomCursor.jsx    # Interactive cursor (desktop only)
  ├── HeaderEnhanced.jsx  # Glassmorphism navigation
  ├── HeroEnhanced.jsx    # Hero with animated stats
  ├── ThreeBackground.jsx # Three.js particle system
  ├── About.jsx           # About section with stats
  ├── ServicesEnhanced.jsx # Service cards grid
  ├── Solutions.jsx       # Solution packages
  ├── MasonryPortfolio.jsx # Filterable portfolio grid
  ├── TestimonialsEnhanced.jsx # Testimonial carousel
  ├── CTA.jsx             # Call-to-action banner
  ├── ContactEnhanced.jsx # Contact form
  └── Footer.jsx          # Footer with links
  /ui                     # Shadcn UI components

/lib
  ├── mockData.js         # Centralized mock data
  ├── utils.js            # Utility functions
  └── gsapHelpers.js      # GSAP animation helpers

/hooks
  ├── useScrollAnimation.js
  ├── useScrollTrigger.js
  └── useMouseTracker.js
```

## 🎨 Customization

### Change Company Name
Update in `lib/mockData.js`:
```javascript
export const companyInfo = {
  name: 'YOUR COMPANY',
  tagline: 'Your tagline here',
  email: 'hello@yourcompany.com',
  phone: '+1 (555) 123-4567',
}
```

### Update Content
All mock data is centralized in `lib/mockData.js`:
- `navItems` - Navigation links
- `services` - Service offerings
- `solutions` - Solution packages
- `portfolioItems` - Portfolio projects
- `testimonials` - Client testimonials
- `aboutFeatures` / `aboutStats` - About section content
- `footerLinks` / `socialLinks` - Footer content

### Color Theme
The color scheme uses Tailwind gradients. Main colors:
- Primary: `violet-600` to `fuchsia-600`
- Accent: `cyan-500` to `blue-600`
- Background: `#030014` (deep dark)

## 📱 Responsive Design

- **Mobile** - Optimized for 320px+, default cursor shown
- **Tablet** - `md:` breakpoint at 768px
- **Desktop** - `lg:` breakpoint at 1024px, custom cursor enabled

## ⚡ Performance Features

- Custom cursor uses `requestAnimationFrame` for 60fps
- Three.js background optimized (50 particles, 30fps throttle)
- Scroll animations use GSAP ScrollTrigger
- Optimized images with lazy loading
- CSS animations use GPU acceleration

## 🎯 Custom Cursor

The custom cursor features:
- Smooth movement with CSS transforms
- Magnetic effect on `.magnetic` elements
- Hover scaling on interactive elements
- Hidden on mobile/tablet (default cursor shown)

Add magnetic effect to any element:
```jsx
<button className="magnetic">Hover me</button>
```

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm run build
# Push to GitHub and import in Vercel
```

### Other Platforms
Compatible with Netlify, AWS Amplify, DigitalOcean, or any Node.js hosting.

## 📄 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.1.6 | React framework |
| react | 19.2.4 | UI library |
| tailwindcss | 4.2.0 | CSS framework |
| gsap | ^3.12.2 | Animations |
| three | ^0.160.0 | 3D graphics |
| lucide-react | ^0.564.0 | Icons |

---

**Built with ❤️ for businesses that demand premium digital experiences**
