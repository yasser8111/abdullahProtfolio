import Contact from "../sections/Contact";

export const siteData = {
  personalInfo: {
    name: "Abdullah brishan",
    email: "abdullahbrishan.dev@gmail.com",
    phone: "+967774401320",
  },

  socialLinks: {
    instagram: "bn_khaled24",
    facebook: "https://www.facebook.com/share/1FmFdauG8s/"
  },

  contactSection: {
    heading: "/Contact",
    links: "/Links",
    social: "/Social",
    sloganLines: ["Let's build something", "great together."],
  },

  heroSection: {
    sloganLines: ["Design fast &", "Build faster."],
    descriptions:
      "I build websites like Tetris — placing every piece perfectly until everything fits.",
  },

  bioSection: {
    heading: "/Bio",
    greeting: "Hi, I'm Abdullah",
    bio: "Computer Science student, UI/UX designer and frontend developer passionate about building modern websites and designing clean user interfaces. I focus on writing maintainable code, improving user experience, and using modern web technologies to build fast and scalable digital products.",
    buttons: {
      resume: "Show my works",
      about: "About Me",
    },
  },

  // navLinks: [
  //   { id: "bio", title: "BIO" },
  //   { id: "work", title: "WORK" },
  //   { id: "contact", title: "CONTACT" },
  // ],
  links: {
    nav: [
      { id: "bio", title: "BIO" },
      { id: "work", title: "WORK" },
      { id: "contact", title: "CONTACT" },
    ],
    contact: [
      { id: "hero", title: "Home" },
      { id: "bio", title: "Bio" },
      { id: "About", title: "About" },
      { id: "work", title: "Work" },
      { id: "contact", title: "Contact" },
    ],
  },

  aboutPage: {
    heading: "/About Me",

    greeting: "Hi I'm Abdullah Brishan",

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
      ],
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
      "/imges/Auth.png",
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
      "/imges/Dashboard.png",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveLink: "#",
    githubLink: "https://github.com/yasser8111",
  }
];
