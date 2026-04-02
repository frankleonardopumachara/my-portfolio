import { SectionTitle } from "./SectionTitle";

export const RecentProjects = ({ content }) => {
    return (
        <section className="section-shell" id="work">
            <div className="container">
                <SectionTitle
                    eyebrow={content.eyebrow}
                    title={content.title}
                    description={content.description}
                />

                <div className="case-grid">
                    {content.caseStudies.map((caseStudy) => (
                        <article
                            key={caseStudy.title}
                            className={`case-card accent-${caseStudy.accent}`}
                            data-animate="rise"
                        >
                            <span>{caseStudy.eyebrow}</span>
                            <h3>{caseStudy.title}</h3>
                            <p>{caseStudy.description}</p>
                            <strong>{caseStudy.detail}</strong>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
