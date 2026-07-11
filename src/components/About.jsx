import { about } from "../data.js";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="ghost-num">01</span>
          <div className="section-label">About</div>
          <h2 className="section-title">A closer look</h2>
        </div>
        <div className="about-grid">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
