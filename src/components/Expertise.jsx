import { capabilities, certifications, education, stackGroups } from "../content/portfolio";
import { SectionTitle } from "./SectionTitle";

export const Expertise = () => {
    return (
        <section className="section-shell" id="capabilities">
            <div className="container">
                <SectionTitle
                    eyebrow="Especialidades"
                    title="El portfolio ahora habla tu idioma: dominio, operación y delivery."
                    description="Agrupé tus fortalezas en bloques legibles para reclutadores, founders y líderes técnicos que quieren saber rápido dónde aportas más valor."
                />

                <div className="capabilities-grid">
                    {capabilities.map((capability) => (
                        <article
                            key={capability.title}
                            className={`capability-card accent-${capability.accent}`}
                            data-animate="rise"
                        >
                            <h3>{capability.title}</h3>
                            <p>{capability.description}</p>
                            <div className="tag-list">
                                {capability.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="details-grid">
                    <div className="stack-panel" data-animate="rise">
                        <h3>Stack y patrones con los que suelo resolver</h3>
                        <div className="stack-groups">
                            {stackGroups.map((group) => (
                                <article key={group.name} className="stack-group">
                                    <p>{group.name}</p>
                                    <div className="tag-list">
                                        {group.items.map((item) => (
                                            <span key={item}>{item}</span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <aside className="credentials-panel" data-animate="rise">
                        <div className="credentials-card">
                            <h3>Certificaciones</h3>
                            <div className="credential-list">
                                {certifications.map((certification) => (
                                    <article key={certification.title}>
                                        <strong>{certification.title}</strong>
                                        <span>{certification.issuer}</span>
                                        <small>{certification.date}</small>
                                    </article>
                                ))}
                            </div>
                        </div>

                        <div className="credentials-card">
                            <h3>Educación</h3>
                            <strong>{education.title}</strong>
                            <span>{education.institution}</span>
                            <small>{education.detail}</small>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};
