export const profile = {
  name: "Zun Myat Hsu",
  role: "Full Stack Developer — MERN · .NET/C# · PHP/MySQL · Android",
  email: "zunmyathsu31@gmail.com",
  phone: "+65 8171 2119",
  phoneHref: "+6581712119",
  location: "Singapore",
  github: "https://github.com/zunm3133",
  githubLabel: "github.com/zunm3133",
  summary:
    "I build end-to-end web and mobile applications — from real-time features and RESTful APIs to relational and NoSQL data models. Backed by a strong SQL and data-analytics foundation, I turn requirements into secure, tested, production-deployed software.",
};

export const about = [
  "Full stack developer experienced in building end-to-end web and mobile applications across the MERN stack, .NET/C#, PHP/MySQL, and Android.",
  "Skilled in designing RESTful APIs, real-time features with WebSockets, relational and NoSQL data models, and responsive UIs — with a strong SQL and backend data-handling foundation carried over from prior data analytics work.",
  "Currently completing a BSc (Hons) in Computing Science at Coventry University, with a track record of shipping secure, tested, production-deployed applications.",
];

export const stackLayers = [
  { idx: "01", name: "Frontend", tech: "React (Vite), SCSS, Zustand" },
  { idx: "02", name: "Backend", tech: "Node.js, Express, ASP.NET" },
  { idx: "03", name: "Database", tech: "MongoDB, MySQL, SQL Server" },
  { idx: "04", name: "Mobile", tech: "Android Studio (Java)" },
  { idx: "05", name: "Infra", tech: "Vercel, Render, Cloudinary" },
];

export const skillGroups = [
  { title: "Languages", items: ["JavaScript", "C#", "PHP", "Java", "Python", "SQL"] },
  { title: "Frontend", items: ["React.js (Vite)", "React Router DOM", "SCSS", "Zustand / Context API", "Responsive UI design"] },
  { title: "Backend", items: ["Node.js / Express.js", "ASP.NET", "RESTful API design", "Socket.io (WebSockets)", "JWT & Bcrypt auth"] },
  { title: "Databases", items: ["MongoDB", "MySQL", "SQL Server", "Prisma ORM", "Schema & data modelling"] },
  { title: "Mobile", items: ["Android Studio (Java)"] },
  { title: "Tools & practices", items: ["Git / GitHub", "Vitest (unit & integration)", "Cloudinary, Vercel, Render", "Postman", "Agile / Scrum"] },
];

export const projects = [
  {
    title: "Property Rental Management System (PRMS)",
    badge: "FLAGSHIP",
    tags: "MERN · Socket.io · Prisma ORM · JWT · Vitest",
    links: [
      { label: "Live demo", href: "https://property-rental-xi.vercel.app" },
      { label: "GitHub", href: "https://github.com/zunm3133/PropertyRental" },
    ],
    points: [
      "Full-stack rental platform connecting tenants, property owners, and admins with role-based access control, dynamic property search/filtering, and an interactive map UI.",
      "Real-time chat between tenants and owners via Socket.io, plus lease and payment-installment tracking and a maintenance request workflow.",
      "Secure authentication (JWT, Bcrypt), data sanitization, and an admin moderation console for flagging abusive messages and restricting users.",
      "114+ automated unit and integration tests with Vitest; frontend deployed on Vercel, backend/socket services on Render, Cloudinary for image hosting.",
    ],
  },
  {
    title: "SmartHome — Home Automation System",
    tags: "Java · OOP",
    links: [
      { label: "GitHub", href: "https://github.com/zunm3133/Smart-Home" },
    ],
    points: [
      "Java-based home automation system for managing and simulating connected smart devices — lighting, climate, and security.",
      "Built around an object-oriented device/controller architecture for extensible device types and status handling.",
    ],
  },
  {
    title: "Gym Membership Management Application",
    tags: ".NET · C#",
    links: [
      { label: "GitHub", href: "https://github.com/zunm3133/GymMembership" },
    ],
    points: [
      "Desktop application to manage gym memberships — member registration, subscription plans, and renewals.",
      "Applied object-oriented design principles in C# to structure membership, billing, and reporting logic.",
    ],
  },
  {
    title: "GoodFood — Online Food Ordering Website",
    tags: "PHP · MySQL",
    links: [
      { label: "GitHub", href: "https://github.com/zunm3133/GoodFood" },
    ],
    points: [
      "Food ordering website with menu browsing, cart, and order management backed by a relational MySQL database.",
      "Designed the database schema and server-side logic in PHP to handle order processing and persistence.",
    ],
  },
  {
    title: "RentalU — Mobile Rental Application",
    tags: "Android Studio · Java",
    links: [
      { label: "GitHub", href: "https://github.com/zunm3133/RentalU_MobileApp" },
    ],
    points: [
      "Native Android application for browsing and managing rental listings on mobile.",
      "Implemented core mobile UI/UX flows and local data handling within the Android Studio environment.",
    ],
  },
  {
    title: "Bank Churn Prediction & Risk Segmentation",
    tags: "Python · Pandas · NumPy · Scikit-learn",
    links: [],
    points: [
      "Performed EDA on 10k+ records and built a Logistic Regression model with feature engineering, achieving 85%+ accuracy.",
      "Documented the full workflow for reproducibility.",
    ],
  },
];

export const experience = [
  {
    dates: "Jan 2023 → Oct 2025",
    role: "Data Analyst",
    company: "J.J Transportation Services",
    points: [
      "Designed and maintained Python/SQL data pipelines across multi-source datasets, achieving 99.9% data integrity.",
      "Built Spark-on-AWS data processing workflows, cutting processing time by 40% and enabling near-real-time analytics.",
      "Collaborated with cross-functional stakeholders to gather requirements, resolve data/system issues against SLA, and deliver Power BI/Tableau dashboards used in operational decision-making.",
    ],
  },
  {
    dates: "Feb 2019 → Dec 2022",
    role: "Logistics Coordinator",
    company: "Su Myat Aung Company Limited",
    points: [
      "Managed administrative datasets and compliance documentation across multi-stakeholder supply chain operations, consistently meeting SLA milestones.",
    ],
  },
];

export const education = [
  { deg: "BSc (Hons) Computing Science", school: "Coventry University", date: "Expected Mar 2026" },
  { deg: "Higher Diploma in Infocomm Technology", school: "TMC Academy", date: "Feb 2024" },
];

export const certifications = [
  { name: "Meta Back-End Developer Specialization", issuer: "Meta", date: "Oct 2024", credId: "UMKK1KOY20FH" },
  { name: "IBM Data Science Specialization", issuer: "IBM", date: "Oct 2024", credId: "A8LPBD8VMO3V" },
  { name: "Meta React Native Specialization", issuer: "Meta", date: "Sep 2024", credId: "WZ7AUWMP3WJR" },
  { name: "Meta Front-End Developer Specialization", issuer: "Meta", date: "Jul 2024", credId: "EW8RRUYTVY4W" },
  { name: "Google Business Intelligence Specialization", issuer: "Google", date: "2024", credId: null },
  { name: "Google Data Analytics Specialization", issuer: "Google", date: "2023", credId: null },
];
