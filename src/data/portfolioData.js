// src/data/portfolioData.
import { IconBrandReact } from "@tabler/icons-react"

export const personalInfo = {
  name: "Mohsin Shaikh",
  title: "Full Stack Developer (MERN)",
  subtitle: "Full-Stack React Developer",
  bio: "Passionate Full Stack Developer with 1+ years of experience building optimize web applications. I love creating efficient, user-friendly solutions that make a real impact.",
  location: "Mumbai",
  email: "mohsin022520@gmail.com",
  phone: "+91 9321830576",
  resume: "/Resume_Mohsin_Shaikh.pdf",
  social: {
    github: "https://github.com/mohsin-shk",
    linkedin: "https://www.linkedin.com/in/mohsin-shaikh2002/",
    portfolio: "https://mohsin-shaikh.netlify.app/"
  }
};

export const skills = {
  frontend: [
    { name: "React.js", level: 85, icon: "⚛️" },
    { name: "JavaScript (ES6+)", level: 85, icon: "🚀" },
    { name: "HTML5 & CSS3", level: 85, icon: "🎨" },
    { name: "Tailwind CSS", level: 75, icon: "🎭" },
    { name: "Redux/Context API", level: 75, icon: "🔄" },
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Express.js", level: 80, icon: "🚄" },
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "RESTful APIs", level: 90, icon: "🔗" },
    { name: "MVC", level: 85, icon: "🏗️" },
  ],
  tools: [
    { name: "Git & GitHub", level: 85, icon: "📚" },
    { name: "Postman", level: 90, icon: "📮" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Cursor", level: 80, icon: "🔎" },
    { name: "Python", level: 90, icon: "🐍" },
  ]
};

export const projects = [
  {
    id: 1,
    title: "Documind",
    description: "A full-stack AI-powered document analysis platform where users can upload documents and interact with them through a chat interface — asking questions, generating summaries, and comparing multiple documents. Built on a RAG pipeline using OpenAI embeddings and Pinecone for semantic retrieval, the platform grounds every AI response in the actual document content rather than hallucinated answers.",
    image: "/documind_2.png",
    technologies: ["Open AI", "Pinecone", "Vector DB", "RAG","Langchain","Cloudinary","Node.js","React"],
    liveUrl: "https://docu-mind-front-end-iota.vercel.app/",
    githubUrl: "https://github.com/mohsin-shk/DocuMind-BackEnd",
    featured: true
  },
  {
    id: 2,
    title: "VideoTube",
    description: "A full-stack YouTube like video streaming and video sharing platform with interactive features like comment,like, subscribe etc.",
    image: "/video_tube.png",
    technologies: ["React", "Mongo DB", "Tailwind CSS", "API",'Express','Node.js'],
    liveUrl: "",
    githubUrl: "https://github.com/mohsin-shk/videoTube-fe",
    featured: true
  },
  {
    id: 3,
    title: "HotelGo",
    description: "A Full stack implementation of a hotel booking platform developed with React, Node.js, and MongoDB, featuring user authentication, search/filter functionality",
    image: "/HotelGo.jpg",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    liveUrl: "",
    githubUrl: "https://github.com/mohsin-shk/HotelGo",
    featured: false
  },
  {
    id: 4,
    title: "CryptFund",
    description: "Blockchain-based crowdfunding platform where users can create decentralized campaigns and donate using MetaMask wallet authentication for secure Web3 transactions.",
    image: "/CryptFund.png",
    technologies: ["React", "Web3", "Smart-Contract", "Solidity", "ThirdWeb"],
    liveUrl: "",
    githubUrl: "https://github.com/mohsin-shk/CryptFund",
    featured: false
  },
  {
    id: 5,
    title: "Predict360",
    description: "Machine learning-powered web application that predicts house prices in Bangalore using linear regression based on property features like rooms, bathrooms, and location.",
    image: "Predict360.png",
    technologies: ["HTML", "Flask", "Python", "Jupyter", "ML"],
    liveUrl: "",
    githubUrl: "https://github.com/mohsin-shk/Predict360",
    featured: false
  },
  
  {
    id: 6,
    title: "Password Generator",
    description: "JavaScript-based password generator enabling users to create custom secure passwords with configurable length and character types including letters, numbers, and symbols.",
    image: "/pwdgen.png",
    technologies: ["HTML", "Javascript", "CSS", "Tools"],
    liveUrl: "",
    githubUrl: "https://github.com/mohsin-shk/Password-Generator",
    featured: false
  },
  {
    id: 7,
    title: "Quick Movies",
    description: "Web application for searching movies and viewing detailed information including IMDb ratings and plot summaries.",
    image: "/movie.png",
    technologies: ["HTML", "Javascript", "CSS", "API"],
    liveUrl: "",
    githubUrl: "https://github.com/mohsin-shk/Movie-Search-App",
    featured: false
  },
  {
    id: 8,
    title: "AudioEncryptor",
    description: "Python audio encryption tool that secures audio files using XOR-based encryption with private keys and format conversion for enhanced protection during transmission.",
    image: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "XOR", "Cryptography", "Cybersecurity"],
    liveUrl: "",
    githubUrl: "https://github.com/mohsin-shk/AudioEncryptor",
    featured: false
  },
];

export const stats = [
  { label: "Personal Projects", value: 10, suffix: "+" },
  { label: "Developement Experience", value: 1.5, suffix: "+" },
  { label: "Technologies Mastered", value: 8, suffix: "+" },
  { label: "Group Projects", value: 3, suffix: "+" }
];

export const experience = [
  {
    company: "Codedaddy Web Solutions",
    position: "Frontend Developer Intern",
    duration: "Jan 2024 - May 2024",
    description: ["Built UI for a customer service platform (tickets & complaints) using React",
      "Managed state with Redux Toolkit for smoother data flow",
      "Integrated APIs and improved overall user experience"],
    technologies: ["React", "JavaScript", "Redux", "Mongoose"]
  },
  {
    company: "Falcrow Labs Inc",
    position: "Full Stack Developer",
    duration: "Feb 2025 - Jan 2026",
    description: ["Developed reusable, responsive UI components using React & Tailwind CSS, ensuring design consistency across application.",
      "Applied frontend performance techniques including lazy loading, code-splitting, memoization, and useCallback.",
      "Contributed to backend development by building RESTful APIs using Node.js, MongoDB, Mongoose ODM, and Express.js.",
      "Integrated third-party services and APIs to extend application functionality.",
      "Conducted code reviews to maintain clean architecture, readability, and best practices."],
    technologies: ["React", "JavaScript", "TailwindCSS", "Redux", "Solana"]
  }
];
