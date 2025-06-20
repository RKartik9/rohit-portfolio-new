"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);


  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const skills = {
    Development: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Node.js", icon: "node-dot-js" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Vite", icon: "vite" },
    ],
    Design: [
      { name: "Figma", icon: "figma" },
      { name: "Adobe XD", icon: "adobexd" },
      { name: "Photoshop", icon: "adobephotoshop" },
      { name: "Blender", icon: "blender" },
    ],
    Languages: [
      { name: "JavaScript", icon: "javascript" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
    ],
    Tools: [
      { name: "Git", icon: "git" },
      { name: "Linux", icon: "linux" },
    ],
  };

  const services = [
    {
      title: "Web Developer",
      description:
        "Developing Full Stack Websites using latest frameworks like Next.js, Express.js, Node.js",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7l-8-5z" />
        </svg>
      ),
    },
    {
      title: "UI Designer",
      description:
        "Creating beautiful and elegant designs which enhance the user experience.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      title: "Problem Solver",
      description:
        "Strong command in Data Structures and Algorithms, solving problems daily to improve problem-solving ability.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
      ),
    },
  ];

  const experiences = [
    {
      title: "Software Developer",
      company: "Orangewood Labs",
      description:
        "Building web applications that interact with robots, bridging software and hardware",
      current: true,
    },
    {
      title: "Freelance Developer",
      company: "Various Clients",
      description: "Full-stack development",
      current: false,
    },
    {
      title: "Managed Network Expert (CSE)",
      company: "Chegg India",
      description: "Technical problem solving",
      current: false,
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 0.05, x: 0 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/3 -left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-orange-700 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hey there! I'm a Software Developer at Orangewood Labs, where I
            specialize in creating seamless web applications that bridge the
            fascinating world of software and robotics.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-12 text-center">
            What I Do
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <div className="text-orange-700 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-12 text-center">
            Tech Stack
          </h3>

          {/* Featured Skills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "Python",
              "MongoDB",
              "Figma",
              "Tailwind CSS",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="px-4 py-2 bg-secondary hover:bg-orange-50 hover:text-orange-700 text-secondary-foreground rounded-full text-sm font-medium transition-colors cursor-default border border-transparent hover:border-orange-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {Object.entries(skills).map(([category, items], categoryIndex) => {
      const isExpanded = expandedCategories.includes(category);
      const displayItems = isExpanded ? items : items.slice(0, 6);
      
      return (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 + categoryIndex * 0.1 }}
          className="p-4 rounded-lg bg-card border border-border hover:shadow-md transition-shadow"
        >
          <h4 className="text-base font-semibold text-foreground mb-3 text-center">
            {category}
          </h4>
          <div className="flex flex-wrap gap-1 justify-center">
            {displayItems.map((skill, index) => (
              <span
                key={skill.name}
                className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
              >
                {skill.name}
              </span>
            ))}
            {items.length > 6 && (
              <button
                onClick={() => toggleCategory(category)}
                className="text-xs text-orange-700 hover:text-orange-800 transition-colors cursor-pointer underline"
              >
                {isExpanded ? 'Show less' : `+${items.length - 6} more`}
              </button>
            )}
          </div>
        </motion.div>
      );
    })}
  </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-12 text-center">
            My Journey
          </h3>

          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                className={`relative pl-8 pb-8 ${
                  index !== experiences.length - 1
                    ? "border-l-2 border-border"
                    : ""
                }`}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-700 rounded-full border-4 border-background"></div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-foreground">
                      {exp.title}
                    </h4>
                    {exp.current && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full border border-orange-200">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

    
      </div>
    </section>
  );
};

export default About;