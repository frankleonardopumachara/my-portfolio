import { personalInfo } from "../content/portfolio";

const resumeUrl = `${import.meta.env.BASE_URL}${personalInfo.resumeFileName}`;

export const Footer = () => {
    return (
        <footer className="footer-shell" id="contact">
            <div className="container footer-grid">
                <div className="footer-copy" data-animate="rise">
                    <p className="section-eyebrow">Contacto</p>
                    <h2>Si necesitas backend serio para un producto serio, conversemos.</h2>
                    <p>
                        Esta versión del portfolio está pensada para posicionarte mejor frente a roles backend
                        senior, arquitectura aplicada y equipos de producto con contexto financiero o cloud.
                    </p>
                </div>

                <div className="footer-card" data-animate="rise">
                    <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                    <a href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}>{personalInfo.phone}</a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                    <a href={personalInfo.github} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    <a href={resumeUrl} target="_blank" rel="noreferrer">
                        Descargar CV
                    </a>
                </div>
            </div>
        </footer>
    );
};
