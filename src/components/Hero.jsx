import { heroHighlights, heroStats, personalInfo, proofCompanies } from "../content/portfolio";

const photoUrl = `${import.meta.env.BASE_URL}hero-photo.png`;
const resumeUrl = `${import.meta.env.BASE_URL}${personalInfo.resumeFileName}`;

export const Hero = () => {
    return (
        <section className="hero-section" id="top">
            <div className="container hero-grid">
                <div className="hero-copy" data-animate="rise">
                    <p className="hero-eyebrow">Backend engineer para fintech, banca y sistemas cloud</p>

                    <h1 className="hero-title">
                        Diseño plataformas transaccionales para productos que no pueden darse el lujo de fallar.
                    </h1>

                    <p className="hero-description">
                        Soy {personalInfo.fullName}. Construyo backend en Node.js y NestJS para pagos,
                        transferencias, backoffice financiero y arquitectura cloud con foco en resiliencia,
                        claridad de dominio y entrega real.
                    </p>

                    <div className="hero-tags">
                        {heroHighlights.map((highlight) => (
                            <span key={highlight} className="hero-tag">
                                {highlight}
                            </span>
                        ))}
                    </div>

                    <div className="hero-actions">
                        <a className="button-primary" href={`mailto:${personalInfo.email}`}>
                            Escribirme
                        </a>
                        <a
                            className="button-secondary"
                            href={resumeUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ver CV
                        </a>
                    </div>

                    <div className="hero-stats">
                        {heroStats.map((stat) => (
                            <article key={stat.value} className="stat-card">
                                <strong>{stat.value}</strong>
                                <span>{stat.label}</span>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="hero-visual" data-animate="float">
                    <div className="portrait-card">
                        <div className="portrait-halo" aria-hidden="true" />
                        <img src={photoUrl} alt="Frank Leonardo Puma Chara" className="hero-portrait" />
                        <div className="portrait-panel">
                            <p>Disponible para retos backend de alta exigencia</p>
                            <strong>{personalInfo.location}</strong>
                            <span>Inglés B2 · AWS Cloud Practitioner</span>
                        </div>
                    </div>

                    <div className="hero-signal-card">
                        <p>Equipos y dominios donde ya entregué valor</p>
                        <div className="company-pills">
                            {proofCompanies.map((company) => (
                                <span key={company}>{company}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
