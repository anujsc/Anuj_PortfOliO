import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, ExternalLink, TrendingUp } from "lucide-react";
import { experiences, education } from "@/data/portfolio";

export default function ExperienceSection() {
  const degrees = education.filter(e => e.type === "degree");
  const certifications = education.filter(e => e.type === "certification");

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto"
    >
      <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8">
        Education & Experience
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Experience Column */}
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            Work Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 hover:bg-card-hover transition-colors relative"
              >
                {exp.current && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Current
                  </div>
                )}
                {exp.promoted && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    <TrendingUp className="h-3 w-3" />
                    Promoted
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-primary font-medium">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h2>

          <div className="space-y-6 mb-8">
            {degrees.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 hover:bg-card-hover transition-colors"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-primary font-medium">{edu.institution}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-xs text-muted-foreground">{edu.year}</p>
                    {edu.gpa && (
                      <span className="text-xs text-accent font-medium">GPA: {edu.gpa}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-1.5">
                  {edu.highlights.map((highlight, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Certifications
          </h2>

          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (degrees.length + i) * 0.1 }}
                className="bg-card rounded-xl p-4 hover:bg-card-hover transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-heading font-bold text-foreground mb-1">
                      {cert.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.institution}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      <ExternalLink className="h-3 w-3" />
                      View
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-8 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Career Summary
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-heading font-bold text-primary">
                  1+
                </p>
                <p className="text-xs text-muted-foreground">Companies</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-primary">
                  {1}
                </p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-primary">
                  {certifications.length}
                </p>
                <p className="text-xs text-muted-foreground">Certifications</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-primary">
                  {Array.from(new Set(experiences.flatMap(e => e.technologies))).length}
                </p>
                <p className="text-xs text-muted-foreground">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
