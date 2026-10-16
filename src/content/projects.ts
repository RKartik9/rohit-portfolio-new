export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  url: string;
  urlLabel?: string;
  role: string;
  category: string;
  summary: string;
  tags: string[];
  stack: string[];
  metrics: { value: string; label: string }[];
  problem: string;
  solution: string;
  highlights: { title: string; body: string }[];
  cover: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "roboviewer",
    title: "RoboViewer",
    client: "Orangewood Labs",
    year: "2025 — Ongoing",
    url: "https://roboviewer.orangewood.co",
    role: "Software Developer",
    category: "3D desktop platform",
    summary:
      "A desktop platform for robot simulation and offline programming: design a 3D workcell, import CAD, configure robots and peripherals, and test a program before it ever touches hardware.",
    tags: ["Simulation", "3D", "Desktop"],
    stack: ["Three.js", "React", "TypeScript", "Node.js", "WebSockets", "gRPC"],
    metrics: [
      { value: "3D", label: "Workcell design" },
      { value: "Sim → Real", label: "Same program, real robot" },
      { value: "Node", label: "Visual programming" },
    ],
    problem:
      "Programming an industrial robot usually means standing next to it with a teach pendant. Every change costs floor time, and mistakes are found on real hardware where they are expensive.",
    solution:
      "RoboViewer moves that work to the desk. Engineers lay out a full cell in 3D, import CAD for parts and fixtures, wire up conveyors, grippers and IO, then build programs with a node graph and run them in simulation. When it works, the same program runs on the physical robot.",
    highlights: [
      {
        title: "3D workcell editor",
        body: "Three.js scene with robots, conveyors, feeders and imported CAD models that can be positioned, configured and animated.",
      },
      {
        title: "Node-based programming",
        body: "A visual graph for motion, gripper and IO steps, so programs can be built and read without writing robot code.",
      },
      {
        title: "Sim-to-real execution",
        body: "Real-time communication between the simulated program and the physical robot so a tested program can be run on hardware.",
      },
      {
        title: "Pose and asset libraries",
        body: "Saved poses, joint states and reusable scene assets that teams can export, share and re-import.",
      },
    ],
    cover: "/projects/roboviewer/cover.jpg",
    featured: true,
  },
  {
    slug: "robogpt",
    title: "RoboGPT",
    client: "Orangewood Labs",
    year: "2024 — Ongoing",
    url: "https://robogpt.orangewood.co",
    role: "Software Developer",
    category: "AI product",
    summary:
      "A natural-language interface for robotic arms. Operators describe a task in text or voice, in multiple languages, and RoboGPT turns it into robot actions.",
    tags: ["AI", "Voice", "Platform"],
    stack: ["Next.js", "FastAPI", "Python", "RAG", "Tool calling", "WebSockets"],
    metrics: [
      { value: "10×", label: "Faster to program an arm" },
      { value: "Text + voice", label: "Multilingual commands" },
      { value: "Agentic", label: "Conversational assistant" },
    ],
    problem:
      "Industrial robot programming needs specialist skills, which keeps automation out of reach for many shop floors and slows every new deployment.",
    solution:
      "RoboGPT puts a language layer on top of the robot. Requests go through retrieval and tool integrations that map intent onto real robot capabilities, so machine tending, palletizing, welding and dispensing tasks can be set up by talking to the system.",
    highlights: [
      {
        title: "Text and voice control",
        body: "Commands in multiple languages through chat or browser speech APIs, routed to the robot or to simulation.",
      },
      {
        title: "Retrieval and tool calling",
        body: "Application services that connect natural-language requests to robot skills, documentation and workflows.",
      },
      {
        title: "Simulation from a prompt",
        body: "Describe an environment and get a simulated scenario and report back, before running anything on hardware.",
      },
      {
        title: "Agentic assistant",
        body: "A conversational agent that holds context across a session, useful for debugging and iterating on tasks.",
      },
    ],
    cover: "/projects/robogpt/cover.jpg",
    featured: true,
  },
  {
    slug: "kosha",
    title: "Kosha",
    client: "Personal product",
    year: "2026",
    url: "https://kosha.rohitkartik.in",
    role: "Design & development",
    category: "Developer tools",
    summary:
      "A hand-picked treasury of free UI libraries and design resources: component kits, motion tools, icons, fonts and templates, each one checked by a person.",
    tags: ["Directory", "SEO", "Next.js"],
    stack: ["Next.js", "TypeScript", "MongoDB", "Node.js", "Vercel"],
    metrics: [
      { value: "122", label: "Free tools listed" },
      { value: "15", label: "Categories" },
      { value: "0", label: "Accounts needed" },
    ],
    problem:
      "Free UI libraries and design resources are scattered across GitHub, Twitter and listicles that go stale. Finding a trustworthy, actually-free tool takes longer than it should.",
    solution:
      "Kosha is a curated directory with honest license labels. Browse by category and framework, save tools to your browser, compare up to four side by side, or start from a ready-made stack.",
    highlights: [
      {
        title: "Server-rendered and SEO-first",
        body: "Dynamic routes for every category and tool, rendered on the server with structured metadata.",
      },
      {
        title: "Compare and save",
        body: "Side-by-side comparison of frameworks, licenses and GitHub stars, plus local saves without an account.",
      },
      {
        title: "Starter stacks",
        body: "Curated tool sets for landing pages, dashboards and portfolios that open straight into comparison.",
      },
      {
        title: "Editorial design",
        body: "A warm, magazine-style interface with fanning cards, marquees and an italic serif voice.",
      },
    ],
    cover: "/projects/kosha/cover.jpg",
    featured: true,
  },
  {
    slug: "client-portfolio",
    title: "Client portfolio",
    client: "Client portfolio",
    year: "2026",
    url: "https://www.saheemahmad.in",
    urlLabel: "Live site",
    role: "Design & development",
    category: "Portfolio",
    summary:
      "A portfolio for a mechanical and robotics engineer that presents cobot cells and special purpose machines the way an engineer would: problem, machine, numbers.",
    tags: ["Portfolio", "Case studies", "Motion"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    metrics: [
      { value: "7", label: "Case studies" },
      { value: "10+", label: "Systems showcased" },
      { value: "3", label: "Awards featured" },
    ],
    problem:
      "Industrial automation work is hard to show online. The machines live on client shop floors, and generic portfolio templates make them look like any other project.",
    solution:
      "Each project leads with the client, the one hard mechanical problem and a single headline number, such as a 2 minute cycle cut to 12 seconds. The rest of the site follows the same structure: capabilities, experience timeline, recognition and a direct contact.",
    highlights: [
      {
        title: "Metric-led project cards",
        body: "Every system is introduced by one number that matters to a client: cycle time, throughput or manual work saved.",
      },
      {
        title: "Capability map",
        body: "Design software, manufacturing methods, robots and ways of working, grouped by where they show up in a build.",
      },
      {
        title: "Experience timeline",
        body: "A numbered path from an AMR built at IIT Delhi to leading mechanical design at Orangewood Labs.",
      },
      {
        title: "Fast and accessible",
        body: "Static pages, skip links and a resume download, deployed on Vercel.",
      },
    ],
    cover: "/projects/client-portfolio/cover.jpg",
    featured: true,
  },
  {
    slug: "bazaarly",
    title: "Bazaarly",
    client: "Independent project",
    year: "2026",
    url: "https://bazaarly-beta.vercel.app",
    role: "Design & development",
    category: "E-commerce",
    summary:
      "A full e-commerce storefront for India: eight shopping categories, deals, cart, wishlist and order tracking, with checkout through Razorpay.",
    tags: ["E-commerce", "Payments", "Next.js"],
    stack: ["Next.js", "React", "Razorpay", "Vercel"],
    metrics: [
      { value: "8", label: "Shopping categories" },
      { value: "UPI + COD", label: "Checkout options" },
      { value: "End to end", label: "Browse to order tracking" },
    ],
    problem:
      "An online store has to earn trust in seconds: clear prices and discounts, fast browsing across many categories, and a checkout that supports the way people in India actually pay.",
    solution:
      "Bazaarly is a complete storefront with category pages, editor's picks, bestsellers and new arrivals, a cart and wishlist, and account pages for orders and addresses. Payments run through Razorpay with UPI, cards, net banking, wallets and cash on delivery.",
    highlights: [
      {
        title: "Catalogue and discovery",
        body: "Eight categories with collections, featured picks, bestsellers and new arrivals, each product showing price, discount, rating and variants.",
      },
      {
        title: "Cart and checkout",
        body: "Add to cart from any listing, promo codes and a Razorpay checkout covering UPI, cards, net banking, wallets and COD.",
      },
      {
        title: "Customer account",
        body: "Orders, addresses, wishlist and profile, plus order tracking, returns and refunds pages.",
      },
      {
        title: "Trust built in",
        body: "Delivery, returns and support promises surfaced across the store, alongside reviews and brand listings.",
      },
    ],
    cover: "/projects/bazaarly/cover.jpg",
    featured: true,
  },
  {
    slug: "housieco",
    title: "HousieCo",
    client: "Client project",
    year: "Client work",
    url: "https://housieco.com",
    role: "Design & development",
    category: "Real estate",
    summary:
      "A full-stack real estate platform for listing and booking properties, designed in Figma and built on Next.js with a PostgreSQL backend.",
    tags: ["Full-stack", "Figma", "PostgreSQL"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    metrics: [
      { value: "Figma", label: "Designed first" },
      { value: "Full-stack", label: "Frontend to database" },
      { value: "Responsive", label: "Every breakpoint" },
    ],
    problem:
      "The client needed a property platform that could handle listings, search and bookings, and that looked credible next to established real estate sites.",
    solution:
      "I designed the product interface in Figma, then built it as a Next.js app with reusable UI components and a PostgreSQL database managed through Drizzle ORM.",
    highlights: [
      {
        title: "Listings and search",
        body: "Property pages and search with filters, backed by a typed PostgreSQL schema.",
      },
      {
        title: "Reusable component system",
        body: "Shared UI components carried over from the Figma design so pages stay consistent.",
      },
    ],
    cover: "/projects/housieco/cover.jpg",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
