// Site Configuration
export const siteConfig = {
  // Personal Information
  name: "Mackenzie",
  title: "Full-stack Developer (With a Love-Hate Relationship to JavaScript)",
  email: "hello@mackenziedev.site",
  domain: "mackenziedev.site",
  bio: "Building fast, clean, and occasionally over-engineered things since the post-COVID boredom era. Fluent in HTML, Android Studio, and chaos.",

  // Profile Images
  avatar: "/images/profile.jpg",
  favicon: "/favicon.svg",

  // Theme Colors
  colors: {
    primary: "#6366f1", // Indigo
    secondary: "#8b5cf6", // Purple
    accent: "#ec4899", // Pink
    success: "#10b981", // Green
    warning: "#f59e0b", // Amber
  },

  // Social Media Links
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/mackenziedev",
      icon: "fa-brands fa-github",
    },
    {
      name: "Bluesky",
      url: "https://bsky.app/profile/mackenziedev.bsky.social",
      icon: "fa-solid fa-cloud", // fallback since no Bluesky icon
    },
  ],

  // Navigation Links
  navigation: [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Articles", href: "/#articles" },
    { name: "Contact", href: "/#contact" },
  ],

  // Footer Configuration
  footer: {
    showImprint: true,
    showPrivacy: true,
    showTerms: true,
    imprintLink: "/imprint",
    privacyLink: "/privacy",
    termsLink: "/terms",
    copyright: `© ${new Date().getFullYear()} Mackenzie. All rights reserved.`,
  },

  // Skills
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "HTML", level: 100, icon: "fa-brands fa-html5" },
        { name: "CSS", level: 95, icon: "fa-brands fa-css3-alt" },
        { name: "JavaScript", level: 70, icon: "fa-brands fa-js" },
        { name: "Tailwind CSS", level: 90, icon: "fa-solid fa-palette" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 75, icon: "fa-brands fa-node" },
        { name: "Java", level: 95, icon: "fa-brands fa-java" },
        { name: "Android Studio", level: 98, icon: "fa-solid fa-robot" },
        { name: "MongoDB", level: 80, icon: "fa-solid fa-leaf" },
      ],
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker", level: 60, icon: "fa-brands fa-docker" },
        { name: "Git", level: 85, icon: "fa-brands fa-git-alt" },
        { name: "CI/CD", level: 75, icon: "fa-solid fa-gears" },
        { name: "Linux", level: 80, icon: "fa-brands fa-linux" },
      ],
    },
  ],

  // Stats
  stats: [
    { label: "Years Coding", value: "5+", icon: "fa-solid fa-code" },
    { label: "Projects Completed", value: "40+", icon: "fa-solid fa-rocket" },
    { label: "Brain Cells Left", value: "3", icon: "fa-solid fa-brain" },
    { label: "Commits That Fixed Nothing", value: "∞", icon: "fa-solid fa-bug" },
  ],

  // Experience
  experience: [
    {
      year: "2025",
      title: "Abi & Code",
      company: "Still at Gymnasium",
      description:
        "Balancing final exams with debugging Android apps like a champ. Learned that caffeine and Java exceptions pair better than most wines.",
      technologies: ["Java", "Android Studio", "HTML", "CSS"],
    },
    {
      year: "2023 – 2024",
      title: "Android Magician",
      company: "Freelance & Personal Projects",
      description:
        "Turned coffee into Android apps. Built a few passion projects that actually worked, which was a nice surprise. Experimented with Kotlin, got bored, crawled back to Java.",
      technologies: ["Android", "Java", "Kotlin", "Firebase"],
    },
    {
      year: "2020 – 2022",
      title: "Self-Taught Chaos Developer",
      company: "Post-COVID Coding Arc",
      description:
        "Started learning coding during lockdown out of boredom. Accidentally discovered a genuine passion. Wrote some HTML that still haunts my dreams.",
      technologies: ["HTML", "CSS", "JS", "Node.js"],
    },
  ],

  // GitHub Integration
  github: {
    username: "mackenziedev",
    showRepos: true,
    maxRepos: 6,
  },
}
