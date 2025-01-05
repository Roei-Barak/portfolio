interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  tags: string[];
  features?: string[];
}

export const projects: Project[] = [
  {
    title: "Ethical Hacking Tools",
    description: "A comprehensive collection of cybersecurity and ethical hacking tools, demonstrating practical application of security concepts and penetration testing methodologies.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Roei-Barak/EthicalHackingTools",
    tags: ["Python", "Kali Linux", "Cybersecurity", "Networking", "Penetration Testing"],
    features: [
      "Network scanning and enumeration tools",
      "Security assessment utilities",
      "Vulnerability analysis tools",
      "Custom security scripts",
      "Ethical hacking frameworks integration"
    ]
  },
  {
    title: "Computer Science Projects",
    description: "A collection of academic computer science projects showcasing fundamental concepts, algorithms, and data structures implementations.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Roei-Barak/Computer-Science",
    tags: ["C++", "Data Structures", "Algorithms", "Object-Oriented Programming", "Academic"],
    features: [
      "Advanced data structures implementations",
      "Algorithm optimization techniques",
      "Problem-solving demonstrations",
      "Academic coursework solutions",
      "Computer science fundamentals"
    ]
  },
  {
    title: "Full Stack E-Commerce",
    description: "A comprehensive e-commerce platform built with modern web technologies, featuring user authentication, product management, and secure payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Roei-Barak/Full-Stack",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart functionality",
      "Secure payment processing",
      "Admin dashboard for product management"
    ]
  },
  {
    title: ".NET Student Management System",
    description: "A robust student management system developed in .NET, demonstrating clean architecture and modern software engineering practices.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Roei-Barak/dotNet5785_2334_9611",
    tags: ["C#", ".NET", "Entity Framework", "SQL Server", "LINQ"],
    features: [
      "Student enrollment and course registration",
      "Grade management system",
      "Attendance tracking",
      "Report generation",
      "Data analysis and visualization"
    ]
  }
];