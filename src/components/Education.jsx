import { education, certifications } from "../data.js";

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="section-head">
          <span className="ghost-num">05</span>
          <div className="section-label">Foundations</div>
          <h2 className="section-title">Education & certifications</h2>
        </div>
        <div className="edu-cert-grid">
          <div>
            {education.map((edu) => (
              <div className="edu-item" key={edu.deg}>
                <div className="deg">{edu.deg}</div>
                <div className="school">{edu.school}</div>
                <div className="date">{edu.date}</div>
              </div>
            ))}
            <div className="edu-item">
              <div className="deg" style={{ fontFamily: "var(--sans)", fontSize: "14px", color: "var(--text-secondary)", fontWeight: 600 }}>
                Languages: English (Professional)
              </div>
            </div>
          </div>
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <div className="cert-main">
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-issuer">{cert.issuer} · {cert.date}</span>
                </div>
                {cert.credId && <span className="cert-id">ID {cert.credId}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
