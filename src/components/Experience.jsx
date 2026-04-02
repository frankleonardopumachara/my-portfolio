import { SectionTitle } from "./SectionTitle";

export const Experience = ({ content }) => {
    return (
        <section className="section-shell" id="experience">
            <div className="container showcase-grid">
                <div className="showcase-copy">
                    <SectionTitle
                        eyebrow={content.eyebrow}
                        title={content.title}
                        description={content.description}
                    />

                    <div className="showcase-chip-list" data-animate="rise">
                        {content.items.map((item) => (
                            <span key={item.company}>{item.company}</span>
                        ))}
                    </div>
                </div>

                <div className="showcase-visual" data-animate="float">
                    <div className="showcase-stage experience-stage">
                        <div className="experience-board">
                            {content.items.map((item) => (
                                <article
                                    className="timeline-card experience-card"
                                    key={`${item.company}-${item.period}`}
                                    data-animate="rise"
                                >
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
                </div>
            </div>
        </section>
    );
};
