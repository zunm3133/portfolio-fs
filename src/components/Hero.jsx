import { profile, stackLayers } from "../data.js";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">Full Stack Developer</div>
            <h1 className="hero-name">{profile.name}</h1>
            <div className="hero-role">{profile.role}</div>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-links">
              <a className="btn primary" href="#projects">View projects →</a>
              <a className="btn ghost" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="btn ghost" href={`mailto:${profile.email}`}>Email me</a>
              <a className="btn ghost" href="#contact">Contact</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-label">// current stack</div>
            {stackLayers.map((layer) => (
              <div className="stack-layer" key={layer.idx}>
                <span className="name"><span className="idx">{layer.idx}</span>{layer.name}</span>
                <span className="tech">{layer.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
