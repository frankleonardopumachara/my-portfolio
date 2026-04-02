import { SectionTitle } from "./SectionTitle";

export const AboutMe = ({ content }) => {
    return (
        <section className="section-shell" id="signal">
            <div className="container">
                <SectionTitle
                    eyebrow={content.eyebrow}
                    title={content.title}
                    description={content.description}
                />

                <div className="proof-grid">
                    {content.cards.map((card) => (
                        <article
                            key={card.title}
                            className={`proof-card accent-${card.accent}`}
                            data-animate="rise"
                        >
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
