import { skillGroups } from "../data.js";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="ghost-num">02</span>
          <div className="section-label">Toolkit</div>
          <h2 className="section-title">Technical skills</h2>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
