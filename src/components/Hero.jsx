import { useEffect, useRef } from "react";
import { personalInfo } from "../content/portfolio";
import { containsAws, renderAwsText } from "./AwsAccentText";
import { CodeEditorPanel } from "./CodeEditorPanel";

const photoUrl = `${import.meta.env.BASE_URL}hero-photo.png`;
const resumeUrl = `${import.meta.env.BASE_URL}${personalInfo.resumeFileName}`;

export const Hero = ({ content }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return undefined;
        }

        let frameId = 0;

        const updateParallax = () => {
            frameId = 0;

            if (!sectionRef.current) {
                return;
            }

            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight || 1;
            const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
            const progress = Math.max(-1, Math.min(1, centerOffset / viewportHeight));

            sectionRef.current.style.setProperty("--hero-parallax", `${progress * 24}px`);
        };

        const handleScroll = () => {
            if (frameId) {
                return;
            }

            frameId = window.requestAnimationFrame(updateParallax);
        };

        updateParallax();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            if (frameId) {
                window.cancelAnimationFrame(frameId);
            }

            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <section className="hero-section" id="top" ref={sectionRef}>
            <div className="container hero-stack">
                <div className="hero-copy" data-animate="rise">
                    <p className="hero-eyebrow">{content.eyebrow}</p>

                    <h1 className="hero-title">{content.title}</h1>

                    <p className="hero-description">{content.description}</p>

                    <div className="hero-tags">
                        {content.highlights.map((highlight) => (
                            <span
                                key={highlight}
                                className={`hero-tag${containsAws(highlight) ? " aws-chip" : ""}`}
                            >
                                {renderAwsText(highlight, { highlight: !containsAws(highlight) })}
                            </span>
                        ))}
                    </div>

                    <div className="hero-actions">
                        <a className="button-primary" href={`mailto:${personalInfo.email}`}>
                            {content.primaryCta}
                        </a>
                        <a
                            className="button-secondary"
                            href={resumeUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {content.secondaryCta}
                        </a>
                    </div>
                </div>

                <div className="hero-showcase">
                    <div
                        className="hero-parallax-layer hero-parallax-portrait"
                        data-animate="rise"
                        style={{ "--reveal-delay": "120ms" }}
                    >
                        <div className="portrait-card">
                            <div className="portrait-chip portrait-chip-top">{content.photoTopBadge}</div>
                            <div className="portrait-chip portrait-chip-bottom">
                                {content.photoBottomBadge}
                            </div>
                            <img src={photoUrl} alt="Frank Leonardo Puma Chara" className="hero-portrait" />
                            <div className="portrait-panel">
                                <p>{content.availability}</p>
                                <strong>{content.location}</strong>
                                <span>{renderAwsText(content.credential)}</span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="hero-parallax-layer hero-parallax-signal"
                        data-animate="rise"
                        style={{ "--reveal-delay": "200ms" }}
                    >
                        <div className="hero-signal-card">
                            <p>{content.signalTitle}</p>
                            <div className="company-pills">
                                {content.companies.map((company) => (
                                    <span key={company}>{company}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        className="hero-parallax-layer hero-parallax-editor"
                        data-animate="rise"
                        style={{ "--reveal-delay": "280ms" }}
                    >
                        <CodeEditorPanel title={content.editorTitle} />
                    </div>
                </div>
            </div>
        </section>
    );
};
