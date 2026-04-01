import { caseStudies } from "../content/portfolio";
import { SectionTitle } from "./SectionTitle";

export const RecentProjects = () => {
    return (
        <section className="section-shell" id="work">
            <div className="container">
                <SectionTitle
                    eyebrow="Casos destacados"
                    title="La página ya no parece un template: cuenta historias de producto que sí venden tu perfil."
                    description="Elegí combinar entregas profesionales con laboratorios técnicos para mostrar rango, profundidad y capacidad de explicar arquitectura sin volver el portfolio denso."
                />

                <div className="case-grid">
                    {caseStudies.map((caseStudy) => (
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
