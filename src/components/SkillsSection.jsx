const skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Bootstrap", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 78, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "Spring Boot", level: 80, category: "backend" },
  { name: "PHP", level: 75, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },

  // Databases
  { name: "MySQL", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "MongoDB", level: 78, category: "backend" },

  // Programming
  { name: "Java", level: 82, category: "programming" },
  { name: "Python", level: 80, category: "programming" },
  { name: "JavaScript", level: 85, category: "programming" },

  // Tools
  { name: "Git/GitHub", level: 88, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "IntelliJ IDEA", level: 85, category: "tools" },

  // Cloud & DevOps
  { name: "AWS (Basics)", level: 65, category: "tools" },

  // AI / Data
  { name: "Machine Learning", level: 70, category: "data" },
  { name: "Deep Learning", level: 68, category: "data" },
];





export const SkillsSection = () => {
    
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg" > {skill.name }</h3>
                                </div>
                            
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}