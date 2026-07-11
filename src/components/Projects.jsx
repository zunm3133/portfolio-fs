import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <span className="ghost-num">03</span>
          <div className="section-label">Selected work</div>
          <h2 className="section-title">Key projects</h2>
        </div>

        {projects.map((project) => (
          <div className="project" key={project.title}>
            <div className="project-head">
              <div>
                <div className="project-title">
                  {project.title}
                  {project.badge && <span className="project-badge">{project.badge}</span>}
                </div>
                <div className="project-tags">{project.tags}</div>
              </div>
              {project.links.length > 0 && (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.label}>
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <ul>
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
