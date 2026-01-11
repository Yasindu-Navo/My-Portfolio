
const projects = [
  {
    id: 1,
    title: "Wave Mirissa - Handmade Jewelry Platform",
    description:
      "A full-stack e-commerce platform built for a real client, featuring personalized jewelry recommendations, virtual try-on functionality, and secure backend integration.",
    image: "/projects/wave-mirissa.png",
    tags: ["React", "Spring Boot", "PostgreSQL", "Python", "NLP"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 2,
    title: "AI-Integrated Blog Application",
    description:
      "Smart blogging platform with AI-assisted content generation, user interactions, and an admin dashboard for managing posts and comments.",
    image: "/projects/ai-blog.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "AI"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "Life-Line – Donation Management System",
    description:
      "Web-based donation system connecting donors with verified beneficiaries, including authentication, payment processing, and beneficiary verification workflows.",
    image: "/projects/lifeline.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 4,
    title: "Solar Power Forecasting Research System",
    description:
      "Deep learning-based forecasting system to predict hourly solar generation and electricity demand, supporting proactive grid management decisions.",
    image: "/projects/solar-forecast.png",
    tags: ["Python", "Deep Learning", "Time Series", "Data Visualization"],
    demoUrl: "#",
    githubUrl: "#",
  },
];




export const ProjectSection = () => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>
            
            </div>
    </section>
    
}

