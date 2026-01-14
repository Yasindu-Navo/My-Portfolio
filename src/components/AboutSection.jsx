import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Software Engineer & Full-Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I’m a final-year Computer Science and Technology undergraduate at
              Uva Wellassa University of Sri Lanka with a strong foundation in
              full-stack web development. I enjoy building scalable,
              user-focused applications and working across the entire
              development lifecycle, from clean user interfaces to robust
              backend systems.
            </p>

            <p className="text-muted-foreground">
              My experience includes developing real-world applications using
              React, Spring Boot, Node.js, and SQL/NoSQL databases, as well as
              working on AI-driven and data-focused projects. I’m a fast learner
              with a passion for problem-solving, clean code, and continuously
              improving my skills to deliver reliable and impactful software
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center ">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/D.Y.Y.Navodh UWU_CST_21_024.pdf"
                download="Yasindu-Navodh-CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Full-Stack Development{" "}
                  </h4>
                  <p className="text-muted-foreground">
                    Building scalable web applications using React, Node.js,
                    Spring Boot, and SQL/NoSQL databases with clean and
                    maintainable code.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Problem Solver & Fast Learner{" "}
                  </h4>
                  <p className="text-muted-foreground">
                    Strong analytical mindset with a passion for solving complex
                    problems and quickly adapting to new technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Real-World Project Experience{" "}
                  </h4>
                  <p className="text-muted-foreground">
                    Hands-on experience developing e-commerce platforms,
                    AI-powered applications, and data-driven systems for real
                    clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
