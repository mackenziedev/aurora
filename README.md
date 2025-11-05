# Astro Portfolio

A modern, high-performance portfolio website built with Astro, featuring a dark theme, blog, project showcase, and GitHub integration.

## Features

- Fast and lightweight with Astro's island architecture
- Full MDX support for rich content
- Dark theme with smooth animations
- Responsive design for all devices
- GitHub API integration
- Blog with tagging and search
- Project showcase with filtering
- SEO optimized
- Easy content management

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

All site configuration is centralized in `src/config.js`:

```javascript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  domain: "yourdomain.com",
  bio: "Your bio",
  avatar: "/images/profile.jpg",
  socials: [
    { name: "GitHub", url: "https://github.com/username", icon: "fa-brands fa-github" },
    // Add more social links
  ],
  navigation: [
    { name: "About", href: "#about" },
    // Add more nav items
  ]
}
```

## Adding Content

### Blog Posts

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
description: "Post description"
publishDate: 2024-01-01
tags: ["tag1", "tag2"]
image: "/path/to/image.jpg"
---

Your content here...
```

### Projects

Create a new `.mdx` file in `src/content/projects/`:

```mdx
---
title: "Project Name"
description: "Project description"
tags: ["tech1", "tech2"]
image: "/path/to/image.jpg"
github: "https://github.com/user/repo"
demo: "https://demo.com"
order: 1
---

Project details here...
```

## Project Structure

```
/
├── public/
│   └── images/          # Static images
├── src/
│   ├── components/      # Astro components
│   ├── content/         # Blog posts and projects
│   │   ├── blog/
│   │   └── projects/
│   ├── layouts/         # Page layouts
│   ├── lib/             # Utilities
│   ├── pages/           # Routes
│   ├── styles/          # Global styles
│   └── config.js        # Site configuration
├── astro.config.mjs     # Astro config
└── tailwind.config.mjs  # Tailwind config
```

## Customization

### Colors

Edit the color scheme in `src/styles/globals.css`:

```css
:root {
  --background: #121212;
  --primary: #f5f5f5;
  --secondary: #a6a6a6;
  --accent: #3d3d3d;
  --surface: #1e1e1e;
}
```

### Fonts

The site uses Google Fonts. Update fonts in `src/layouts/BaseLayout.astro`.

### Icons

This portfolio uses Font Awesome 6.7 for icons. Icon classes follow the format `fa-brands fa-{icon-name}` for brand icons and `fa-solid fa-{icon-name}` for regular icons. Update icon classes in `src/config.js` and components as needed.

## Deployment

Deploy to any static hosting platform:

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the dist/ folder
```

### Cloudflare Pages

Connect your repository and set build command to `npm run build` with output directory `dist`.

## Performance

- Lighthouse score: 100/100
- Zero JavaScript by default
- Optimized images
- Minimal CSS bundle
- Fast page transitions

## License

MIT License - feel free to use this template for your own portfolio.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
