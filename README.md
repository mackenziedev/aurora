# Modern Astro Portfolio

A cutting-edge, high-performance portfolio website built with Astro 5, featuring a stunning dark theme with gradient accents, comprehensive blog system, dynamic project showcase, GitHub API integration, and advanced animations. This portfolio is designed for developers, designers, and creative professionals who want to showcase their work in a modern, performant, and visually striking way.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Content Management](#content-management)
- [Customization](#customization)
- [Components](#components)
- [Styling](#styling)
- [Performance](#performance)
- [Deployment](#deployment)
- [Advanced Features](#advanced-features)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

### Core Features
- **Lightning Fast Performance**: Built with Astro's island architecture for optimal performance with minimal JavaScript
- **Modern Dark Theme**: Sophisticated dark color scheme with gradient accents and glassmorphism effects
- **Fully Responsive**: Optimized for all devices from mobile phones to large desktop screens
- **SEO Optimized**: Built-in SEO best practices with meta tags, Open Graph, and structured data
- **Accessibility First**: WCAG 2.1 compliant with proper ARIA labels and keyboard navigation

### Content Features
- **Full MDX Support**: Write rich content with React components embedded in Markdown
- **Dynamic Blog System**: Complete blogging platform with tags, categories, and search functionality
- **Project Showcase**: Beautiful project gallery with filtering, categories, and detailed case studies
- **GitHub Integration**: Automatically fetch and display your GitHub repositories
- **Content Collections**: Type-safe content management with Astro's content collections API

### Design Features
- **Gradient Text Effects**: Eye-catching gradient text animations throughout the site
- **Glassmorphism UI**: Modern frosted glass effects on cards and components
- **Smooth Animations**: Carefully crafted animations using CSS and JavaScript
- **Stacked Card Effects**: Interactive stacked cards that spread on hover
- **Hover Gradients**: Dynamic gradient effects that follow your cursor
- **Custom Scrollbar**: Styled scrollbar matching the dark theme

### Interactive Features
- **Animated Statistics**: Counter animations for showcasing achievements
- **Interactive Timeline**: Visual timeline for work experience with hover effects
- **Skill Visualization**: Animated skill bars and technology cards
- **Dynamic Filtering**: Real-time project filtering based on categories
- **Social Cards**: Animated social media cards with stacking effects
- **Contact Form**: Beautiful contact section with form validation

## Tech Stack

### Core Technologies
- **Astro 5.0**: Modern static site generator with partial hydration
- **TypeScript**: Type-safe development experience
- **Tailwind CSS 3.4**: Utility-first CSS framework for rapid styling
- **MDX**: Markdown with JSX for rich content authoring

### Styling & UI
- **Font Awesome 6.7**: Comprehensive icon library with 30,000+ icons
- **Google Fonts**: Custom typography with Outfit font family
- **CSS Animations**: Smooth, performant animations without JavaScript overhead
- **Glassmorphism**: Modern UI design trend with frosted glass effects

### Development Tools
- **Vite**: Next-generation frontend tooling for fast development
- **PostCSS**: CSS transformations and optimizations
- **Autoprefixer**: Automatic vendor prefixing for cross-browser compatibility

## Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm, yarn, or pnpm package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your site**
   Edit `src/config.js` with your personal information:
   ```javascript
   export const siteConfig = {
     name: "Your Name",
     title: "Your Professional Title",
     email: "your@email.com",
     domain: "yourdomain.com",
     // ... more configuration
   }
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
portfolio/
├── public/                      # Static assets
│   ├── images/                  # Image files
│   │   └── profile.jpg         # Your profile picture
│   ├── favicon.svg             # Site favicon
│   └── robots.txt              # SEO robots file
├── src/
│   ├── components/             # Reusable Astro components
│   │   ├── Navigation.astro    # Main navigation bar
│   │   ├── Hero.astro          # Hero section with intro
│   │   ├── Stats.astro         # Animated statistics
│   │   ├── Skills.astro        # Skills showcase
│   │   ├── Experience.astro    # Work timeline
│   │   ├── Projects.astro      # Project grid with filtering
│   │   ├── Articles.astro      # Blog post grid
│   │   ├── Contact.astro       # Contact section
│   │   ├── SocialCards.astro   # Stacked social cards
│   │   └── Footer.astro        # Site footer
│   ├── content/                # Content collections
│   │   ├── blog/               # Blog posts (MDX)
│   │   │   ├── post-1.mdx
│   │   │   └── post-2.mdx
│   │   ├── projects/           # Project case studies (MDX)
│   │   │   ├── project-1.mdx
│   │   │   └── project-2.mdx
│   │   └── config.ts           # Content collection schemas
│   ├── layouts/                # Page layouts
│   │   └── BaseLayout.astro    # Base HTML structure
│   ├── lib/                    # Utility functions
│   │   └── utils.ts            # Helper functions
│   ├── pages/                  # File-based routing
│   │   ├── index.astro         # Homepage
│   │   ├── about.astro         # About page
│   │   ├── 404.astro           # 404 error page
│   │   ├── 500.astro           # 500 error page
│   │   ├── blog/               # Blog routes
│   │   │   ├── index.astro     # Blog listing
│   │   │   └── [slug].astro    # Individual blog post
│   │   └── projects/           # Project routes
│   │       ├── index.astro     # Project listing
│   │       └── [slug].astro    # Individual project
│   ├── styles/                 # Global styles
│   │   └── globals.css         # Global CSS and Tailwind
│   └── config.js               # Site configuration
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## Configuration

### Site Configuration

All site-wide settings are centralized in `src/config.js`. This makes it easy to update your personal information, social links, and site metadata in one place.

```javascript
export const siteConfig = {
  // Personal Information
  name: "Mackenzie",
  title: "Full-Stack Developer",
  email: "hello@mackenziedev.site",
  domain: "mackenziedev.site",
  bio: "Passionate developer creating modern web experiences",
  
  // Assets
  avatar: "/images/profile.jpg",
  favicon: "/favicon.svg",
  
  // Social Media Links
  socials: [
    { 
      name: "GitHub", 
      url: "https://github.com/yourusername", 
      icon: "fa-brands fa-github" 
    },
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/yourusername", 
      icon: "fa-brands fa-linkedin" 
    },
    { 
      name: "Twitter", 
      url: "https://twitter.com/yourusername", 
      icon: "fa-brands fa-twitter" 
    },
    // Add more social links as needed
  ],
  
  // Navigation Menu
  navigation: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#articles" },
    { name: "Contact", href: "#contact" },
  ],
  
  // Statistics (displayed in Stats component)
  stats: [
    { label: "Years Experience", value: 5 },
    { label: "Projects Completed", value: 50 },
    { label: "Happy Clients", value: 30 },
    { label: "GitHub Stars", value: 1000 },
  ],
  
  // Skills (displayed in Skills component)
  skills: [
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "React", level: 92, category: "Frontend" },
    { name: "Node.js", level: 88, category: "Backend" },
    // Add more skills
  ],
  
  // Work Experience (displayed in Experience component)
  experience: [
    {
      company: "Tech Company",
      position: "Senior Developer",
      period: "2022 - Present",
      description: "Leading development of web applications",
    },
    // Add more experience entries
  ],
  
  // Footer Configuration
  footer: {
    showImprint: true,
    showPrivacy: true,
    showTerms: true,
    imprintUrl: "/imprint",
    privacyUrl: "/privacy",
    termsUrl: "/terms",
  }
}
```

### Icon Configuration

This portfolio uses Font Awesome 6.7 for all icons. Icons are specified using Font Awesome class names:

- **Brand Icons**: `fa-brands fa-{icon-name}` (e.g., `fa-brands fa-github`)
- **Solid Icons**: `fa-solid fa-{icon-name}` (e.g., `fa-solid fa-envelope`)
- **Regular Icons**: `fa-regular fa-{icon-name}` (e.g., `fa-regular fa-heart`)

Find icons at [fontawesome.com/icons](https://fontawesome.com/icons)

## Content Management

### Adding Blog Posts

Create a new MDX file in `src/content/blog/`:

```mdx
---
title: "Your Awesome Blog Post Title"
description: "A compelling description that will appear in previews and SEO"
publishDate: 2024-01-15
author: "Your Name"
tags: ["javascript", "web-development", "tutorial"]
image: "/images/blog/post-image.jpg"
featured: true
---

## Introduction

Your blog post content goes here. You can use all Markdown features plus MDX components.

### Code Examples

```javascript
const greeting = "Hello, World!";
console.log(greeting);
```

### Images

![Alt text](/images/blog/example.jpg)

### Lists

- Point one
- Point two
- Point three

And much more!
```

### Adding Projects

Create a new MDX file in `src/content/projects/`:

```mdx
---
title: "Amazing Project Name"
description: "Brief description of what this project does"
tags: ["React", "TypeScript", "Tailwind CSS"]
category: "Web App"
image: "/images/projects/project-screenshot.jpg"
github: "https://github.com/yourusername/project"
demo: "https://project-demo.com"
order: 1
featured: true
---

## Project Overview

Detailed description of your project, the problem it solves, and the technologies used.

## Features

- Feature one
- Feature two
- Feature three

## Technical Details

Explain the architecture, challenges faced, and solutions implemented.

## Results

Share metrics, user feedback, or other outcomes.
```

### Project Categories

Projects are automatically categorized based on the `category` field in the frontmatter. The Projects component dynamically generates filter buttons based on all unique categories found in your projects. Common categories include:

- Web App
- Mobile App
- AI/ML
- Design
- Open Source
- Client Work

## Customization

### Color Scheme

Edit colors in `src/styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Background Colors */
    --background: #121212;      /* Main background */
    --surface: #1E1E1E;         /* Card backgrounds */
    
    /* Text Colors */
    --primary: #F5F5F5;         /* Primary text */
    --secondary: #A6A6A6;       /* Secondary text */
    
    /* Accent Colors */
    --accent: #3D3D3D;          /* Borders and accents */
    --primary-gradient: linear-gradient(135deg, #6366f1, #8b5cf6);
    --secondary-gradient: linear-gradient(135deg, #ec4899, #8b5cf6);
  }
}
```

### Typography

The site uses Google Fonts with Outfit as the primary font family. To change fonts:

1. Update the Google Fonts link in `src/layouts/BaseLayout.astro`
2. Update the font family in `tailwind.config.mjs`

```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      fontFamily: {
        body: ['Outfit', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
}
```

### Animations

Custom animations are defined in `src/styles/globals.css`. You can add new animations or modify existing ones:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

## Components

### Navigation Component

The navigation bar features:
- Smooth scroll to sections
- Auto-hide on scroll down, show on scroll up
- Gradient background with glassmorphism
- GitHub button with icon
- Responsive mobile menu

### Hero Component

The hero section includes:
- Large gradient text for your name/title
- Animated profile picture
- Social media links
- Call-to-action buttons
- Particle background effect

### Stats Component

Displays animated counters for:
- Years of experience
- Projects completed
- Happy clients
- GitHub stars
- Custom statistics

### Skills Component

Showcases your technical skills with:
- Animated skill bars
- Category grouping
- Hover effects
- Progress indicators

### Experience Component

Timeline visualization featuring:
- Work history
- Hover gradient effects
- Company logos
- Detailed descriptions

### Projects Component

Dynamic project showcase with:
- Automatic category filtering
- Glassmorphism cards
- Hover animations
- GitHub and demo links
- Featured project highlighting

### SocialCards Component

Interactive stacked cards that:
- Spread and rotate on hover
- Link to social profiles
- Display platform icons
- Smooth animations

### Footer Component

Comprehensive footer with:
- Social media links
- Navigation links
- Toggleable legal links (imprint, privacy, terms)
- Copyright information
- Gradient decorations

## Styling

### Tailwind CSS

This project uses Tailwind CSS 3.4 with custom configuration. Key utilities:

```html
<!-- Glassmorphism -->
<div class="glass">Content</div>

<!-- Gradient Text -->
<h1 class="gradient-text">Heading</h1>

<!-- Gradient Background -->
<div class="gradient-bg">Content</div>

<!-- Hover Glow Effect -->
<button class="glow-hover">Button</button>
```

### Custom CSS Classes

Defined in `globals.css`:

- `.glass`: Glassmorphism effect
- `.glass-hover`: Enhanced glass effect on hover
- `.gradient-text`: Gradient text effect
- `.gradient-bg`: Gradient background
- `.glow-hover`: Glow effect on hover
- `.animate-float`: Floating animation

## Performance

### Optimization Features

- **Zero JavaScript by Default**: Astro ships zero JavaScript unless needed
- **Image Optimization**: Automatic image optimization with Astro's Image component
- **CSS Purging**: Unused CSS automatically removed in production
- **Code Splitting**: Automatic code splitting for optimal loading
- **Lazy Loading**: Images and components lazy-loaded when needed

### Lighthouse Scores

Target scores (achievable with proper optimization):
- Performance: 95-100
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 95-100

### Performance Tips

1. Optimize images before uploading (use WebP format)
2. Minimize custom JavaScript
3. Use Astro's built-in image optimization
4. Enable caching headers in deployment
5. Use a CDN for static assets

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy

### Netlify

1. Connect your Git repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Deploy

### Cloudflare Pages

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### Custom Server

```bash
# Build the site
npm run build

# The dist/ folder contains your static site
# Upload to any static hosting service
```

## Advanced Features

### GitHub API Integration

Automatically fetch and display your GitHub repositories:

```javascript
// src/lib/github.ts
export async function getGitHubRepos(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  return response.json();
}
```

### Custom Redirects

Configure redirects in `astro.config.mjs`:

```javascript
export default defineConfig({
  redirects: {
    '/old-page': '/new-page',
    '/blog/old-post': '/blog/new-post',
  },
})
```

### RSS Feed

Generate an RSS feed for your blog:

```javascript
// src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Your Blog',
    description: 'Your blog description',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      link: `/blog/${post.slug}/`,
    })),
  });
}
```

## Troubleshooting

### Common Issues

**Issue**: Images not loading
- **Solution**: Ensure images are in the `public/` directory and paths start with `/`

**Issue**: Styles not applying
- **Solution**: Run `npm run dev` to rebuild Tailwind CSS

**Issue**: Content not updating
- **Solution**: Restart the dev server after adding new content files

**Issue**: Build errors
- **Solution**: Check that all frontmatter fields match the schema in `src/content/config.ts`

### Getting Help

- Check the [Astro documentation](https://docs.astro.build)
- Visit the [Astro Discord](https://astro.build/chat)
- Open an issue on GitHub

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## License

MIT License - feel free to use this template for your own portfolio.

## Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from [Font Awesome](https://fontawesome.com)
- Fonts from [Google Fonts](https://fonts.google.com)
