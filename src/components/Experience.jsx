import { experienceTimeline } from "../content/portfolio";
import { SectionTitle } from "./SectionTitle";

export const Experience = () => {
    return (
        <section className="section-shell" id="experience">
            <div className="container">
                <SectionTitle
                    eyebrow="Experiencia"
                    title="Construida en contextos donde la operación importa más que la demo."
                    description="La narrativa aquí ya no es “sé de muchas cosas”. Ahora es una secuencia clara de problemas reales resueltos en fintech y banca."
                />

                <div className="timeline">
                    {experienceTimeline.map((item) => (
                        <article className="timeline-card" key={`${item.company}-${item.period}`} data-animate="rise">
                            <div className="timeline-marker" aria-hidden="true" />
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <p>{item.company}</p>
                                    <span>{item.period}</span>
                                </div>
                                <h3>
                                    {item.role} · {item.company}
                                </h3>
                                <p className="timeline-summary">{item.summary}</p>
                                <ul>
                                    {item.highlights.map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
