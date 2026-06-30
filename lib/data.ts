export const skills = [
  {
    icon: "Cloud",
    title: "AWS Core",
    description: "EC2, VPC, IAM, S3, RDS, ELB, NAT Gateway, Subnets, Routing Tables, Security Groups",
  },
  {
    icon: "ShieldCheck",
    title: "AWS Security & Compliance",
    description: "AWS Security Hub, AWS Config, IAM Policies, Private Subnet Architecture, Security Alerts & Compliance Checks",
  },
  {
    icon: "BarChart2",
    title: "AWS Monitoring & FinOps",
    description: "CloudWatch (Logs, EC2 Metrics, App Runner, Alarms), New Relic, Reserved Instances, Right-Sized Instances, Cost Optimisation",
  },
  {
    icon: "GitBranch",
    title: "CI/CD & DevOps",
    description: "GitHub Actions, Azure DevOps, CI/CD Pipeline Implementation, Automated Deployment",
  },
  {
    icon: "Code2",
    title: "Frontend & Mobile",
    description: "React, Flutter (mobile), HTML5, CSS3, JavaScript (ES6+), UI/UX Design",
  },
  {
    icon: "Server",
    title: "Backend & Databases",
    description: "Node.js, Express.js, PHP, REST APIs, MongoDB, MySQL, AWS RDS, Private Subnet Database Architecture",
  },
  {
    icon: "Plug",
    title: "Integrations & APIs",
    description: "Shopify API, Unleashed API, Xero API, Sparklayer",
  },
  {
    icon: "Database",
    title: "Data Engineering",
    description: "Hadoop, Hive, Spark, Big Data Pipelines, Data Quality & Performance Tuning",
  },
  {
    icon: "Terminal",
    title: "Languages",
    description: "JavaScript, PHP, Python, Java, C",
  },
  {
    icon: "Headphones",
    title: "IT Infrastructure",
    description: "Network Troubleshooting, LAN/WAN/WLAN, Identity & Access Management, Windows Server, Microsoft 365",
  },
  {
    icon: "Wrench",
    title: "Methodologies & Tools",
    description: "Agile/Scrum, SDLC, Requirements Gathering, UAT, Technical Documentation, Git, Shell Scripting",
  },
];

export const services = [
  {
    icon: "Headphones",
    title: "IT Support & Service Desk",
    items: ["Level 1/2 Desktop Support", "Incident & Problem Management", "Device Imaging & Deployment", "User Provisioning & IAM"],
  },
  {
    icon: "Cloud",
    title: "Cloud & Infrastructure",
    items: ["AWS (EC2, RDS, S3, VPC)", "System Administration", "Network Troubleshooting", "Uptime & Performance Monitoring"],
  },
  {
    icon: "Code2",
    title: "Software Development",
    items: ["Web Applications (React, Node, PHP)", "Internal Admin & Monitoring Tools", "Database Design & Management", "Vendor Integrations (Shopify, Xero, Unleashed)"],
  },
  {
    icon: "Cog",
    title: "Process Automation",
    items: ["Workflow Automation", "Shell Scripting & Scheduling", "Stock & Production Systems", "Agile & Scrum Delivery"],
  },
];

export const projects = [
  {
    title: "PickOps — Warehouse Management System",
    description: "Full-stack warehouse management platform (MERN Stack + Flutter) with Unleashed API integration for real-time inventory sync. Flutter mobile app used daily by warehouse staff for barcode scanning and order fulfilment; hosted on AWS with private subnet database architecture.",
    tags: ["MERN Stack", "Flutter", "AWS", "Unleashed API"],
    image: "/images/pickops logo.png",
    emoji: "📦",
    link: "https://pickops.remoteking.au",
  },
  {
    title: "OnTime — Employee Clock In/Out App",
    description: "Geofence-based attendance and HR application (MERN Stack + Flutter) integrated with Xero for leave applications, balance checks, and payslip access. Live and used daily by all Remote King employees.",
    tags: ["MERN Stack", "Flutter", "AWS", "Xero API"],
    image: "/images/on-time.png",
    emoji: "🕐",
    link: "https://ontime.remoteking.au",
  },
  {
    title: "AutoIDX — Automotive Parts Identification",
    description: "Smart automotive parts identification tool (MERN Stack + Flutter) integrated with Shopify. CI/CD pipeline via GitHub Actions for automated build and deployment.",
    tags: ["MERN Stack", "Flutter", "Shopify API", "GitHub Actions"],
    image: "/images/AutoIDX logo.png",
    emoji: "🚗",
    link: "https://autoidx.remoteking.au",
  },
  {
    title: "All Remotes — Retail E-Commerce Platform",
    description: "Complete retail e-commerce platform (in development) built in React, Node.js, MySQL, and AWS. Sole developer responsible for full-stack architecture, UI/UX, APIs, database, and AWS deployment with CloudWatch monitoring.",
    tags: ["React", "Node.js", "MySQL", "AWS", "CloudWatch"],
    image: "/images/Allremotes logo.png",
    emoji: "🛒",
    badge: "In Development",
    link: "https://allremotes.com.au",
  },
  {
    title: "Where Is My Kid",
    description: "A real-time child location tracking platform built for parent peace of mind.",
    tags: ["React", "Node.js", "AWS"],
    image: "/images/whereismykid.jpg",
    emoji: "📍",
    link: "https://dev.whereismykid.com",
  },
  {
    title: "CBI Electric — Stock & Production System",
    description: "A demo of the CBI Electric Stock and Production Management Software built in PHP and MySQL.",
    tags: ["PHP", "MySQL", "AWS"],
    image: "/images/cbi-logo.png",
    emoji: "⚡",
    link: "https://ajaychowdaryshaganti.github.io/CBi-electric/",
  },
  {
    title: "Sri Laxmi Electricals & Hardware",
    description: "Website for Sri Laxmi Electricals, a real-world client project.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/Laxmi.png",
    emoji: "🏪",
    link: "https://srilaxmielectricals.com/",
  },
  {
    title: "Book It Bro",
    description: "A booking application used in Indian hospitals (development phase).",
    tags: ["React", "Node.js"],
    image: "/images/bookitbro.png",
    emoji: "📅",
    link: "https://book-it-bro.com/",
  },
  {
    title: "The Hangout World",
    description: "Premium milkshakes & waffles café website for Kukatpally's Hangout — a real client project featuring a signature collection menu, franchise inquiry, and online ordering.",
    tags: ["HTML", "CSS", "JavaScript", "Client Project"],
    image: "/images/hangout logo.jpg",
    emoji: "🌐",
    link: "https://thehangoutworld.com/",
  },
];

export const experience = [
  {
    role: "IT Support Officer (E-Exam Support)",
    company: "Monash University",
    location: "Melbourne",
    period: "Oct 2025 – Present",
    tags: ["Desktop Support", "WLAN", "Incident Management", "Device Imaging"],
    achievements: [
      { emoji: "🖥️", text: "Real-time Level 1/2 technical support for large-scale e-examinations across multiple campuses under strict SLAs" },
      { emoji: "🔧", text: "Diagnosed & resolved hardware, login, and network connectivity issues in zero-downtime, high-pressure environments" },
      { emoji: "📋", text: "Incident logging, escalation, and SLA adherence across all examination sessions" },
      { emoji: "📦", text: "Device imaging, setup, system validation, and AV equipment support across multiple examination venues" },
    ],
  },
  {
    role: "Software Engineer",
    company: "Remote King",
    location: "Hallam, Melbourne",
    period: "Jun 2025 – Present",
    tags: ["MERN Stack", "Flutter", "AWS", "React", "Node.js", "Shopify API", "Xero API", "Unleashed API", "GitHub Actions"],
    achievements: [
      { emoji: "📦", text: "Built PickOps — full-stack warehouse management system (MERN + Flutter) with Unleashed API integration, barcode scanning, and AWS-hosted private subnet architecture" },
      { emoji: "🕐", text: "Built OnTime — geofence-based employee clock in/out app (MERN + Flutter) integrated with Xero for leave management and payslip access; live daily by all staff" },
      { emoji: "🚗", text: "Built AutoIDX — smart automotive parts identification platform (MERN + Flutter + Shopify); CI/CD pipeline via GitHub Actions for automated deployment" },
      { emoji: "🛒", text: "Developing All Remotes — complete retail e-commerce platform in React, Node.js, MySQL, and AWS (sole developer)" },
      { emoji: "☁️", text: "Configured & managed AWS infrastructure: EC2, RDS, S3, VPC, ELB, Security Groups, IAM; private subnet architecture for secure database access via NAT Gateway" },
      { emoji: "📊", text: "CloudWatch monitoring for EC2, App Runner, and application logs with custom alarms; New Relic dashboard monitoring" },
      { emoji: "💰", text: "Implemented FinOps practices — reserved instances, right-sized EC2, load balancing to optimise cloud spend without compromising performance" },
      { emoji: "🔒", text: "Used AWS Security Hub and AWS Config for compliance checks and security configuration validation" },
    ],
  },
  {
    role: "Technical Support Engineer",
    company: "CBI Electric",
    location: "Hallam, Melbourne",
    period: "Jan 2023 – Jan 2025",
    tags: ["Desktop Support", "LAN/WAN", "AWS", "PHP", "MySQL"],
    achievements: [
      { emoji: "🖥️", text: "Built Stock Order and Production Management System in PHP and MySQL; initially on AWS (VPC, subnets, Security Groups, IAM), then migrated to local server for internal-only access" },
      { emoji: "☁️", text: "Configured VPC architecture including subnets, routing tables, and Security Groups for secure, isolated application environments" },
      { emoji: "🔧", text: "Desktop, printer, and application support; troubleshot LAN/WAN connectivity and hardware faults" },
      { emoji: "⚙️", text: "Automated stock and production workflows to improve operational efficiency" },
    ],
  },
  {
    role: "System Engineer",
    company: "Tata Consultancy Services",
    location: "Hyderabad, India",
    period: "Feb 2021 – Aug 2022",
    tags: ["Hadoop", "Hive", "PySpark", "Agile"],
    achievements: [
      { emoji: "🏦", text: "Embedded within the American Express Risk team — developed Hive queries to monitor Key Risk Indicators (KRIs) and identify anomalies in large-scale financial transaction data" },
      { emoji: "📊", text: "Designed and implemented scalable big data solutions using Hadoop, Hive, and Spark supporting data-driven decision making" },
      { emoji: "🔍", text: "Conducted data quality checks, performance tuning, and workflow optimisation across cross-functional teams" },
      { emoji: "⚙️", text: "Worked within Agile/Scrum delivery cycles across sprint planning, stand-ups, and retrospectives" },
    ],
  },
];

export const education = [
  {
    degree: "Master of Information Technology (Cloud Computing, DevOps)",
    institution: "Swinburne University of Technology",
    location: "Melbourne, Australia",
    period: "2022 – 2024",
  },
  {
    degree: "Bachelor of Technology — Electronics & Communications Engineering",
    institution: "Jawaharlal Nehru Technological University",
    location: "Hyderabad, India",
    period: "2016 – 2020",
  },
];

export const certifications = [
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", status: "in-progress" },
  { title: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", status: "in-progress" },
  { title: "ITIL Foundation", issuer: "IT Infrastructure Library", status: "in-progress" },
  { title: "Working With Children Check (Employee)", issuer: "Victoria, Australia", status: "current" },
  { title: "Full Australian Driver's Licence", issuer: "Victoria, Australia", status: "current" },
];
