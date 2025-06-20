"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 2,
      title: "SneakersHub",
      description: "Full-stack e-commerce platform offering seamless shopping experience with secure payment processing, dynamic cart management, and comprehensive order tracking system.",
      image: "/projects/urbankart.jpg",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Stripe", "TypeScript"],
      category: "Full Stack",
      githubUrl: "https://github.com/RKartik9/SneakersHub---Backend", 
      featured: true,
      type: "personal", // personal or professional
      
    },
    {
      id: 3,
      title: "Housieco",
      description: "Modern real estate web application for property booking and listing. Built for client with advanced search, property management, and booking system using latest Next.js features.",
      image: "/projects/housieco.jpg",
      technologies: ["Next.js", "Prisma", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      category: "Full Stack",
      featured: true,
      type: "personal", // personal or professional
      client: "Freelance Project",
      demoUrl: "https://housieco.com/"
    },
    {
      id: 1,
      title: "RoboGPT",
      description: "Soorrryyy! Under NDA",
      image: "/projects/robogpt.jpg",
      technologies: ["Next.js", "TypeScript", "WebSocket", "Node.js", "AI/ML"],
      category: "Full Stack",
      featured: true,
      type: "professional", 
      status: "In Development",
      company: "Orangewood Labs"
    },
  ];

  const filters = ["All", "Full Stack", "Frontend", "Design"];
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="work" className="py-20 relative overflow-hidden bg-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 0.05, x: 0 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/4 -right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-orange-700 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that showcase my expertise in full-stack development, 
            UI/UX design, and problem-solving through code.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.type === 'professional' 
                        ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                        : 'bg-green-100 text-green-700 border border-green-200'
                    }`}>
                      {project.type === 'professional' ? 'Professional' : 'Personal'}
                    </span>
                  </div>

                  {/* Status Badge */}
                  {project.status && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full border border-orange-200">
                        {project.status}
                      </span>
                    </div>
                  )}

                  {/* Placeholder for project image */}
                  <div className="w-full h-full bg-gradient-to-br from-red-600/10 to-orange-700/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-orange-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7l-8-5z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-orange-700 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Company/Client Info */}
                  {project.company && (
                    <p className="text-sm text-orange-700 font-medium mb-2">
                      @ {project.company}
                    </p>
                  )}
                  {project.client && (
                    <p className="text-sm text-muted-foreground mb-2">
                      {project.client}
                    </p>
                  )}

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-muted-foreground text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3 flex-wrap">
                    {/* Demo Button - Always show if available */}
                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-red-700 text-white rounded-lg text-sm font-medium hover:bg-red-800 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </motion.a>
                    )}

                    {/* GitHub Button - Only show for personal projects */}
                    {project.type === 'personal' && project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </motion.a>
                    )}

                    {/* Professional Project Indicator */}
                    {project.type === 'professional' && !project.demoUrl && (
                      <div className="flex items-center gap-2 px-4 py-2 border border-border text-muted-foreground rounded-lg text-sm font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Proprietary
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;