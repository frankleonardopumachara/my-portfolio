import { proofCards } from "../content/portfolio";
import { SectionTitle } from "./SectionTitle";

export const AboutMe = () => {
    return (
        <section className="section-shell" id="signal">
            <div className="container">
                <SectionTitle
                    eyebrow="Perfil"
                    title="No vendo humo visual. Vendo criterio técnico aplicado a productos sensibles."
                    description="La propuesta de valor del portfolio tenía que alinearse a tu realidad: backend para fintech, banca, cloud y dominio complejo. Por eso esta versión prioriza señal, profundidad y confianza."
                />

                <div className="proof-grid">
                    {proofCards.map((card) => (
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
