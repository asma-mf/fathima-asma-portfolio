import { Code2, Database, GraduationCap, Globe, Layers, Sparkles, Wrench } from "lucide-react";

export const EMAIL = "fathuasma456@gmail.com";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { icon: Code2, label: "Projects built", value: "4+" },
  { icon: GraduationCap, label: "SE Student", value: "3rd Year" },
  { icon: Sparkles, label: "Tech focus", value: "Backend & Web" },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: [
      { name: "Java", level: 90 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 70 },
      { name: "C", level: 65 },
    ],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    items: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JSP", level: 85 },
      { name: "Servlets", level: 80 },
    ],
  },
  {
    title: "Frameworks",
    icon: Layers,
    items: [
      { name: "Spring MVC", level: 85 },
      { name: "Spring Boot", level: 65 },
      { name: "Hibernate / JPA", level: 70 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      { name: "SQL Server", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "JDBC", level: 80 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { name: "Git & GitHub", level: 80 },
      { name: "Maven", level: 75 },
      { name: "IntelliJ IDEA", level: 80 },
      { name: "Eclipse", level: 75 },
      { name: "Postman", level: 75 },
    ],
  },
];

export const timeline = [
  {
    icon: GraduationCap,
    period: "2023 — Present",
    title: "BSC (HONS) software Engineering",
    org: "University · 3rd Year",
    desc: "Core coursework in Data Structures, Algorithms, DBMS, Operating Systems, and Software Engineering. Maintaining a strong academic record while shipping side projects.",
  },
  {
    icon: Code2,
    period: "2024 — 2025",
    title: "Fresh Fold — Academic Capstone",
    org: "Java · Spring MVC · SQL Server",
    desc: "Designed and developed a full-stack laundry management system end-to-end — from database schema and MVC architecture to UI, authentication, and order workflows.",
  },
  {
    icon: Database,
    period: "2024",
    title: "Fitness Membership System",
    org: "Java · JSP · Servlets · OOP",
    desc: "Built a member, trainer, and attendance management application applying object-oriented design and file-handling persistence as a hands-on OOP project.",
  },
  {
    icon: Sparkles,
    period: "Ongoing",
    title: "Self-Learning & Practice",
    org: "Spring Boot · DSA · SQL",
    desc: "Currently deepening Spring Boot, REST APIs, and full-stack development. Daily problem-solving in Java on LeetCode and SQL practice across real-world schemas.",
  },
];
