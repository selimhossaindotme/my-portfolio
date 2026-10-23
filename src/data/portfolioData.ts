export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: "Full-Stack" | "Backend" | "System Architecture";
  status: "Completed" | "In Active Development" | "Prototype";
  statusBadge: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  image: string;
  accentColor: "emerald" | "violet" | "cyan";
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  shortDesc: string;
  iconName: string;
  accent: "emerald" | "violet" | "cyan" | "amber";
  skills: { name: string; highlight?: boolean; level?: string }[];
  visualType: "network" | "radar" | "pipeline" | "cubes" | "shield";
}

export const portfolioData = {
  profile: {
    name: "MD Selim Hossain",
    shortName: "Selim",
    avatar: "/selim-hossain.jpg",
    tagline: "Junior Full-Stack Developer | Backend-Focused",
    heroHeading: {
      line1: "From",
      highlight1: "Concept",
      line2: "to Code — I Build",
      highlight2: "Scalable Systems",
      line3: "You Can Rely On 🚀 ⚡"
    },
    bio: "Computer Science & Engineering student and aspiring software engineer with a strong focus on backend architecture, resilient REST APIs, relational and NoSQL databases, authentication with RBAC, and seamless full-stack applications.",
    aboutDetailed: [
      "I am an enthusiastic Computer Science and Engineering student graduating in May 2027 from Bangladesh, with a deep passion for building high-performance server-side architectures and clean full-stack web applications.",
      "My primary strength lies in backend development — designing normalized PostgreSQL databases with Prisma, document schemas with MongoDB/Mongoose, and crafting secure, high-throughput RESTful APIs using Node.js, Express.js, TypeScript, Zod, and Role-Based Access Control (RBAC).",
      "On the frontend, I engineer responsive, accessible user interfaces using Next.js (App Router), React, TypeScript, and modern styling solutions like Tailwind CSS, backed by predictable state management with Redux Toolkit."
    ],
    location: "Bangladesh",
    education: {
      degree: "BSc in Computer Science and Engineering",
      institution: "Expected Graduation: May 2027",
      status: "Undergraduate CSE Student",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems (RDBMS & NoSQL)",
        "Object-Oriented Programming (OOP)",
        "Software Engineering & System Design",
        "Computer Networks & Security",
        "Operating Systems"
      ]
    },
    stats: [
      { label: "Projects Completed", value: "10+", subtext: "Full-stack & Backend" },
      { label: "Graduation Target", value: "May 2027", subtext: "BSc in CSE" },
      { label: "Core Competencies", value: "3+", subtext: "Full-Stack, DB, Security" },
      { label: "System Uptime Goal", value: "99.9%", subtext: "Clean Architecture" }
    ],
    socialLinks: {
      github: "https://github.com/selimhossain-dev",
      linkedin: "https://linkedin.com/in/selimhossain-dev",
      email: "selimhossain.dev@gmail.com",
      whatsapp: "https://wa.me/#"
    }
  },

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Toolbox", href: "#toolbox" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ],

  skillCategories: [
    {
      id: "frontend",
      name: "Frontend Development",
      shortDesc: "Reactive, accessible & type-safe user interfaces with Next.js & React.",
      iconName: "Layout",
      accent: "emerald",
      visualType: "network",
      skills: [
        { name: "React.js", highlight: true },
        { name: "Next.js (App Router)", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "JavaScript (ES6+)" },
        { name: "Tailwind CSS", highlight: true },
        { name: "Redux / Redux Toolkit" }
      ]
    },
    {
      id: "backend",
      name: "Backend Architecture",
      shortDesc: "Robust server logic, resilient REST APIs & scalable microservices.",
      iconName: "Server",
      accent: "violet",
      visualType: "radar",
      skills: [
        { name: "Node.js", highlight: true },
        { name: "Express.js", highlight: true },
        { name: "RESTful APIs", highlight: true },
        { name: "Zod Schema Validation", highlight: true },
        { name: "Error Handling Architecture" },
        { name: "Clean Architecture" }
      ]
    },
    {
      id: "databases",
      name: "Databases & ORMs",
      shortDesc: "High integrity data modeling, indexing, ACID transactions & schemas.",
      iconName: "Database",
      accent: "cyan",
      visualType: "cubes",
      skills: [
        { name: "PostgreSQL", highlight: true },
        { name: "Prisma ORM", highlight: true },
        { name: "MongoDB", highlight: true },
        { name: "Mongoose ODM" },
        { name: "Schema Migrations" },
        { name: "Query Optimization" }
      ]
    },
    {
      id: "security",
      name: "Auth & Security",
      shortDesc: "Enterprise grade authorization, session handling & tokens.",
      iconName: "ShieldCheck",
      accent: "emerald",
      visualType: "shield",
      skills: [
        { name: "JWT (JSON Web Tokens)", highlight: true },
        { name: "Role-Based Access Control (RBAC)", highlight: true },
        { name: "Password Hashing (Bcrypt)" },
        { name: "CORS & Helmet Security" },
        { name: "Rate Limiting" }
      ]
    },
    {
      id: "tools",
      name: "DevOps & Tools",
      shortDesc: "Modern developer workflow, containerization & API contract testing.",
      iconName: "Terminal",
      accent: "violet",
      visualType: "pipeline",
      skills: [
        { name: "Git & Version Control", highlight: true },
        { name: "GitHub Workflows", highlight: true },
        { name: "Docker (Containerization)", highlight: true },
        { name: "Postman (API Testing)", highlight: true },
        { name: "Vercel & Cloud Deployments" },
        { name: "Linux / Bash" }
      ]
    }
  ] as SkillCategory[],

  marqueeTechs: [
    { name: "Next.js", icon: "Layers" },
    { name: "React", icon: "Code2" },
    { name: "TypeScript", icon: "FileCode" },
    { name: "Node.js", icon: "Cpu" },
    { name: "Express.js", icon: "Server" },
    { name: "PostgreSQL", icon: "Database" },
    { name: "Prisma", icon: "Workflow" },
    { name: "MongoDB", icon: "HardDrive" },
    { name: "Docker", icon: "Box" },
    { name: "Tailwind CSS", icon: "Palette" },
    { name: "Redux", icon: "Network" },
    { name: "Zod", icon: "CheckCircle2" },
    { name: "Postman", icon: "Send" },
    { name: "GitHub", icon: "GitBranch" }
  ],

  projects: [
    {
      id: "ph-health-care",
      title: "PH Health Care",
      subtitle: "Comprehensive Health Care Management & Telehealth System",
      description: "A production-grade healthcare system connecting patients, doctors, and hospital administrators with streamlined booking, schedule management, and verified consultations.",
      longDescription: "Engineered with a decoupled full-stack architecture using Next.js on the client and an Express/Node.js backend with PostgreSQL and Prisma. Designed strictly with robust data validation and role-based security.",
      category: "Full-Stack",
      status: "Completed",
      statusBadge: "Implemented & Active",
      accentColor: "emerald",
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Zod", "JWT"],
      keyFeatures: [
        "Patient appointment booking engine with slot reservation & conflict prevention",
        "Doctor schedule management & consultation availability dashboard",
        "Multi-role access control for Admin, Doctor, and Patient personas",
        "Medical specialty catalog with dynamic search, filtering & doctor profiles",
        "Secure RESTful API architecture with Zod schema validation & unified error handling"
      ],
      metrics: [
        { label: "Role Types", value: "3 Roles (Admin/Doc/Patient)" },
        { label: "Data Integrity", value: "PostgreSQL + Prisma ACID" },
        { label: "Type Safety", value: "100% End-to-End TypeScript" }
      ],
      githubUrl: "https://github.com/selimhossain-dev/ph-health-care",
      liveDemoUrl: "https://ph-healthcare-demo.vercel.app",
      image: "/projects/ph-healthcare.png"
    },
    {
      id: "digital-wallet",
      title: "Digital Wallet & Ledger Engine",
      subtitle: "Secure Financial Transaction & Balance Management Core",
      description: "A resilient backend architecture and prototype simulating double-entry ledger book-keeping, peer-to-peer transfers, and tamper-resistant transaction histories.",
      longDescription: "Configured with transactional isolation levels in PostgreSQL to avoid race conditions and double-spending. Features JWT authorization and role separation between accounts, merchants, and system auditors.",
      category: "Backend",
      status: "In Active Development",
      statusBadge: "Architecture Prototype",
      accentColor: "violet",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "TypeScript", "JWT", "Zod", "Docker"],
      keyFeatures: [
        "Double-entry ledger simulation ensuring mathematical balance neutrality",
        "Atomic peer-to-peer transfer endpoints with rollback on failure",
        "Real-time balance computation & statement ledger generation",
        "Configurable transaction fee calculations and account tier permissions",
        "Strict JWT authentication with token revocation and role-based endpoints"
      ],
      metrics: [
        { label: "Transaction Model", value: "Double-Entry Ledger" },
        { label: "Concurrency", value: "Atomic DB Transactions" },
        { label: "Validation", value: "Zod Schema Enforced" }
      ],
      githubUrl: "https://github.com/selimhossain-dev/digital-wallet-core",
      liveDemoUrl: "https://digital-wallet-preview.vercel.app",
      image: "/projects/digital-wallet.png"
    },
    {
      id: "events-platform",
      title: "Events & Activities Platform",
      subtitle: "Dynamic Community Event Discovery & Ticket Reservation Flow",
      description: "A modern platform enabling users to explore local tech meetups, workshops, and social activities with interactive reservations and organizer dashboards.",
      longDescription: "Engineered to deliver rapid search queries and smooth state handling for seat availability, bookmarking, and multi-step registration forms with Redux Toolkit and Tailwind CSS.",
      category: "Full-Stack",
      status: "Prototype",
      statusBadge: "Configurable Prototype",
      accentColor: "cyan",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "MongoDB", "Express.js"],
      keyFeatures: [
        "Dynamic event discovery catalog with real-time text search & category filtering",
        "Interactive ticket reservation modal with quantity control and seat tier selection",
        "Client-side state orchestration using Redux Toolkit for seamless cart/booking flow",
        "Organizer portal prototype for publishing, editing, and monitoring registrations",
        "Mobile-first responsive interface with dark/light visual elegance"
      ],
      metrics: [
        { label: "State Store", value: "Redux Toolkit" },
        { label: "UI Response", value: "<100ms Transitions" },
        { label: "Layout", value: "Fluid Responsive Grid" }
      ],
      githubUrl: "https://github.com/selimhossain-dev/events-activities-platform",
      liveDemoUrl: "https://events-platform-preview.vercel.app",
      image: "/projects/events-platform.png"
    }
  ] as Project[],

  testimonials: [
    {
      quote: "Selim brings an exceptional methodical approach to backend design. His grasp of RESTful APIs, relational databases, and clean schema validation with Zod made our full-stack integration seamless.",
      author: "Senior Software Engineer",
      role: "Academic Project Mentor",
      avatar: "👨‍💻"
    },
    {
      quote: "A dedicated problem solver who understands not just how to write code, but why architectural decisions like database indexing and RBAC security matter for real-world reliability.",
      author: "Faculty Supervisor",
      role: "Dept. of Computer Science & Engineering",
      avatar: "🎓"
    }
  ]
};

