import { profile } from "../data.js";

export default function Contact() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="section-label" style={{ justifyContent: "center" }}>Get in touch</div>
        <div className="contact-heading">Let's build something.</div>
        <p className="contact-sub">Open to full stack developer roles — {profile.location} & remote.</p>
        <div className="contact-links">
          <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="btn ghost" href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
          <a className="btn ghost" href={profile.github} target="_blank" rel="noopener noreferrer">{profile.githubLabel}</a>
        </div>
        <div className="footnote">{profile.location} · Designed with a little type, a little gradient.</div>
      </div>
    </footer>
  );
}
