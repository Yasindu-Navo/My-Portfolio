const projects = [
  {
    id: 1,
    title: "Wave Mirissa - Handmade Jewelry Platform",
    description:
      "A full-stack e-commerce platform built for a real client, featuring personalized jewelry recommendations, virtual try-on functionality, and secure backend integration.",
    image: "/projects/project1.png",
    tags: ["React", "Spring Boot", "PostgreSQL", "Python", "NLP"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 2,
    title: "AI-Integrated Blog Application",
    description:
      "Smart blogging platform with AI-assisted content generation, user interactions, and an admin dashboard for managing posts and comments.",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "AI"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "Life-Line – Donation Management System",
    description:
      "Web-based donation system connecting donors with verified beneficiaries, including authentication, payment processing, and beneficiary verification workflows.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 4,
    title: "Solar Power Forecasting Research System",
    description:
      "Deep learning-based forecasting system to predict hourly solar generation and electricity demand, supporting proactive grid management decisions.",
    image: "/projects/project4.png",
    tags: ["Python", "Deep Learning", "Time Series", "Data Visualization"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects that showcase my skills in full-stack
          development, problem-solving, and building real-world applications
          with modern technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                      <img src={ project.image} alt={project.title}  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                  </div>
                  
                  <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                              <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{ tag}</span>
                          ))}
                          
                      </div>
                      
                </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
