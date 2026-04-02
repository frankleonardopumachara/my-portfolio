export const SectionTitle = ({ eyebrow, title, description }) => {
    return (
        <div className="section-title-block" data-animate="rise">
            <p className="section-eyebrow">{eyebrow}</p>
            <h2 className="section-heading">{title}</h2>
            {description ? <p className="section-description">{description}</p> : null}
        </div>
    );
};
