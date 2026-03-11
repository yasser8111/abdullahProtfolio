export const siteData = {
  personalInfo: {
    name: "Yaser Tareq",
    email: "yasserxd653@gmail.com",
    phone: "+967739770762",
  },

  socialLinks: {
    linkedin: "yaser-tareq",
    github: "yasser8111",
    instagram: "yaser.tareq",
    twitter: "yaser_tareq",
  },

  contactSection: {
    heading: "/Contact",
    links: "/Links",
    social: "/Social",
    sloganLines: ["Let's build something", "great together."],
  },

  heroSection: {
    sloganLines: ["Clean code.", "Smart design."],
    descriptions: [
      "I build modern websites focused on performance, user experience, and clean design.",
      "Computer Science student and frontend developer.",
    ],
    year: "2026",
    designerCredit: "Design by Yaser Tareq",
  },

  bioSection: {
    heading: "/Bio",
    greeting: "Hi, I'm Yaser",
    bio: "I am a Computer Science student and a frontend developer passionate about building modern websites and designing clean user interfaces. I focus on writing maintainable code, improving user experience, and using modern web technologies to build fast and scalable digital products.",
    buttons: {
      resume: "Download Resume",
      about: "About Me",
    },
  },

  navLinks: [
    { id: "home", title: "Home" },
    { id: "bio", title: "Bio" },
    { id: "work", title: "Work" },
    { id: "contact", title: "Contact" },
  ],

  aboutPage: {
    heading: "/About Me",

    greeting: "Hi I'm Yaser Tareq",

    paragraphs: [
      "I am a Computer Science student who enjoys building websites and creating modern digital experiences. My goal is to combine design and development to produce websites that are both visually appealing and technically strong.",

      "I specialize in frontend development using modern technologies such as HTML, CSS, JavaScript, and React. I also focus on writing clean, maintainable code and building responsive interfaces that work smoothly across all devices.",

      "Beyond web development, I am also exploring artificial intelligence tools, automation systems, and modern development workflows to improve productivity and build smarter applications.",
    ],

    skillsHeading: "/Skills",

    development: {
      title: "Development",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Responsive Design",
        "Tailwind CSS",
        "REST APIs",
        "Firebase",
        "Git & GitHub",
        "Vercel",
      ],
    },

    design: {
      title: "Design",
      skills: [
        "Figma",
        "UI Design",
        "UX Principles",
        "Wireframing",
        "Prototyping",
        "Typography",
        "Design Systems",
        "Color Theory",
      ],
    },

    ai: {
      title: "AI & Tools",
      skills: [
        "Prompt Engineering",
        "ChatGPT",
        "Claude",
        "Gemini",
        "Google AI Studio",
        "OpenAI API",
        "AI Integration",
        "AI Agents",
        "GitHub Copilot",
        "Ollama",
        "Local LLM Setup",
        "Hugging Face",
        "Docker",
        "n8n",
        "Make (Integromat)",
        "Automation Workflows",
        "API Integration",
      ],
    },

    certificates: {
      title: "/Certificates",
      list: [],
    },
  },

  worksSection: {
    title: "/Works",
  },
};

export const projects = [
  {
    id: 1,
    title: "Next Store",
    category: "E-commerce Website",
    description:
      "An electronics e-commerce website built with HTML, CSS, and JavaScript. The store focuses on modern design, fast loading performance, and a simple product ordering system.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    githubLink: "https://github.com/yasser8111",
  },

  {
    id: 2,
    title: "Portfolio Website",
    category: "Personal Portfolio",
    description:
      "A modern portfolio website designed to showcase projects, skills, and experience. Built with React and focused on smooth UI interactions and clean design.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveLink: "#",
    githubLink: "https://github.com/yasser8111",
  },

  {
    id: 3,
    title: "YasserGPT",
    category: "AI Application",
    description:
      "An AI chat system designed to provide intelligent responses and manage conversations with multiple users. Built as part of the YaserGPT project.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    technologies: ["JavaScript", "API Integration", "AI"],
    liveLink: "https://yassergpt811.vercel.app",
    githubLink: "https://github.com/yasser8111/YasserGPT",
  },
];
