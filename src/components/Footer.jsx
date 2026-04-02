import { personalInfo } from "../content/portfolio";

const resumeUrl = `${import.meta.env.BASE_URL}${personalInfo.resumeFileName}`;

export const Footer = ({ content }) => {
    return (
        <footer className="footer-shell" id="contact">
            <div className="container footer-grid">
                <div className="footer-copy" data-animate="rise">
                    <p className="section-eyebrow">{content.eyebrow}</p>
                    <h2>{content.title}</h2>
                    {content.description ? <p>{content.description}</p> : null}
                </div>

                <div className="footer-card" data-animate="rise">
                    <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                    <a href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}>{personalInfo.phone}</a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                        {content.linkedinLabel}
                    </a>
                    <a href={personalInfo.github} target="_blank" rel="noreferrer">
                        {content.githubLabel}
                    </a>
                    <a href={resumeUrl} target="_blank" rel="noreferrer">
                        {content.resumeLabel}
                    </a>
                </div>
            </div>
        </footer>
    );
};
