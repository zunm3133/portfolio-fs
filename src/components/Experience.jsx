import { experience } from "../data.js";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <span className="ghost-num">04</span>
          <div className="section-label">Track record</div>
          <h2 className="section-title">Professional experience</h2>
        </div>
        <div className="commit-log">
          {experience.map((job) => (
            <div className="commit" key={job.role}>
              <div className="commit-hash">{job.dates}</div>
              <div className="commit-role">{job.role}</div>
              <div className="commit-meta">{job.company}</div>
              <ul>
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
