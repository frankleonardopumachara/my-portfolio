import { SectionTitle } from "./SectionTitle";
import { containsAws, renderAwsText } from "./AwsAccentText";

export const Expertise = ({ content }) => {
    return (
        <section className="section-shell" id="capabilities">
            <div className="container showcase-grid showcase-grid-reverse">
                <div className="showcase-copy">
                    <SectionTitle
                        eyebrow={content.eyebrow}
                        title={content.title}
                        description={content.description}
                    />

                    <div className="capabilities-column">
                        {content.capabilities.map((capability) => (
                            <article
                                key={capability.title}
                                className={`capability-card accent-${capability.accent}`}
                                data-animate="rise"
                            >
                                <h3>{capability.title}</h3>
                                <p>{renderAwsText(capability.description)}</p>
                                <div className="tag-list">
                                    {capability.tags.map((tag) => (
                                        <span key={tag} className={containsAws(tag) ? "aws-chip" : undefined}>
                                            {renderAwsText(tag, { highlight: !containsAws(tag) })}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="showcase-visual" data-animate="float">
                    <div className="showcase-stage expertise-stage">
                        <div className="details-grid showcase-details-grid">
                            <div className="stack-panel" data-animate="rise">
                                <h3>{content.stackTitle}</h3>
                                <div className="stack-groups">
                                    {content.stackGroups.map((group) => (
                                        <article key={group.name} className="stack-group">
                                            <p>{group.name}</p>
                                            <div className="tag-list">
                                                {group.items.map((item) => (
                                                    <span
                                                        key={item}
                                                        className={containsAws(item) ? "aws-chip" : undefined}
                                                    >
                                                        {renderAwsText(item, { highlight: !containsAws(item) })}
                                                    </span>
                                                ))}
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>

                            <aside className="credentials-panel" data-animate="rise">
                                <div className="credentials-card">
                                    <h3>{content.certificationsTitle}</h3>
                                    <div className="credential-list">
                                        {content.certifications.map((certification) => (
                                            <article key={certification.title}>
                                                <strong>{renderAwsText(certification.title)}</strong>
                                                <span>{certification.issuer}</span>
                                                <small>{certification.date}</small>
                                            </article>
                                        ))}
                                    </div>
                                </div>

                                <div className="credentials-card">
                                    <h3>{content.educationTitle}</h3>
                                    <strong>{content.education.title}</strong>
                                    <span>{content.education.institution}</span>
                                    <small>{content.education.detail}</small>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
