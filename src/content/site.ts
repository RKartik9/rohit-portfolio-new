export const site = {
  name: "Rohit Kartik",
  shortName: "Rohit Kumar",
  role: "Software Engineer",
  discipline: "Full-Stack, Product & AI",
  location: "Noida, India",
  url: "https://rohitkartik.in",
  email: "rohit.kartik9@gmail.com",
  phone: "+91 83402 41584",
  phoneHref: "tel:+918340241584",
  resume: "/Rohit_Kumar_Resume.pdf",
  blog: "https://blogs.rohitkartik.in",
  formspree: "https://formspree.io/f/xblyarka",
  description:
    "Rohit Kartik is a software engineer who designs and builds fast web products: full-stack apps, product interfaces, AI features and interactive 3D.",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/rkartik9" },
    { label: "GitHub", href: "https://github.com/RKartik9" },
    { label: "Email", href: "mailto:rohit.kartik9@gmail.com" },
  ],
};

export const nav: { label: string; href: string; external?: boolean }[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: site.blog, external: true },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "2+", label: "Years shipping" },
  { value: "4", label: "Disciplines" },
  { value: "YC", label: "Backed team" },
];

export const disciplines = [
  {
    eyebrow: ["Direction &", "interface"],
    title: "Design",
    lead: "Structure, interface and look come together before a single line of code is written.",
    body: "Direction first, then pixels. I design in Figma so every choice is not just good-looking, but makes sense for the people using it.",
  },
  {
    eyebrow: ["Frontend &", "backend"],
    title: "Development",
    lead: "The design gets built properly: responsive, fast, and with motion that supports the story.",
    body: "React and Next.js on the front, Node.js or FastAPI behind it, PostgreSQL or MongoDB underneath. Typed end to end.",
  },
  {
    eyebrow: ["Language &", "tools"],
    title: "AI features",
    lead: "Natural-language interfaces that turn a sentence into real actions inside your product.",
    body: "Retrieval, tool calling, agents and MCP servers that connect LLMs to your data, APIs and workflows.",
  },
  {
    eyebrow: ["Beyond the", "browser"],
    title: "3D & real-time",
    lead: "Interactive 3D scenes and live data that feel instant, from product viewers to full desktop tools.",
    body: "Three.js, WebSockets and real-time services, including software that talks to physical hardware.",
  },
];

export const services = [
  "Product & UI design",
  "React & Next.js development",
  "Full-stack web apps",
  "E-commerce & payments",
  "APIs & real-time services",
  "AI integrations & agents",
  "3D & Three.js",
  "SEO, performance & deployment",
];

export const experience = [
  {
    company: "Orangewood Labs",
    note: "Y Combinator W18",
    role: "Software Developer",
    period: "Oct 2024 — Present",
    location: "Noida, UP",
    points: [
      "Build web interfaces, backend services and real-time systems with Next.js, React, FastAPI and Node.js.",
      "Built RoboViewer, a desktop platform with a Three.js 3D editor, CAD imports and node-based programming.",
      "Built RoboGPT, a natural-language product for controlling robotic systems with text and voice, using retrieval and tool calling.",
      "Shipped a robot-controlled photobooth app with automated capture and session handling.",
    ],
  },
  {
    company: "Noida Institute of Engineering and Technology",
    note: "CGPA 8.2 / 10",
    role: "B.Tech, Computer Science Engineering",
    period: "2020 — 2024",
    location: "Greater Noida, UP",
    points: [],
  },
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "Bash"] },
  { group: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Vite", "Three.js", "Framer Motion"] },
  { group: "Backend", items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets", "Serverless"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "Drizzle ORM", "SQL"] },
  { group: "AI", items: ["RAG", "MCP", "AI Agents", "Tool Calling", "Embeddings", "Vector Search"] },
  { group: "Tools", items: ["Git", "Docker", "Linux", "Vercel", "GCP", "Figma", "Blender"] },
];

export const faq = [
  {
    q: "What kind of work do you take on?",
    a: "Product interfaces, full-stack web apps, portfolio and marketing sites, AI features, and interactive 3D. From a fast landing page to a complete platform.",
  },
  {
    q: "Do you design as well as build?",
    a: "Yes. I design in Figma before writing code, so structure, layout and motion are agreed on first. Kosha, Bazaarly and several client portfolios were designed and built end to end.",
  },
  {
    q: "What does your usual stack look like?",
    a: "Next.js, React, TypeScript and Tailwind on the front, Node.js or FastAPI on the back, PostgreSQL or MongoDB for data, deployed on Vercel or GCP.",
  },
  {
    q: "Can you add AI to an existing product?",
    a: "Yes. I build retrieval, tool calling and agent features on top of existing APIs and data, so users can get things done in plain language.",
  },
  {
    q: "Do you stay involved after launch?",
    a: "If you want me to. I can keep improving performance, SEO and features after go-live, with one direct point of contact.",
  },
];
