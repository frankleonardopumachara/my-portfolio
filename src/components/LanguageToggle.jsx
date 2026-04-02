export const LanguageToggle = ({ label, language, onChange, isPending }) => {
    return (
        <div className="floating-control">
            <span className="control-label">{label}</span>
            <div
                className={`segmented-control${language === "en" ? " is-second" : ""}${isPending ? " is-pending" : ""}`}
                role="group"
                aria-label={label}
            >
                <span className="segmented-thumb" aria-hidden="true" />
                <button
                    type="button"
                    className={`segmented-option${language === "es" ? " is-active" : ""}`}
                    aria-pressed={language === "es"}
                    onClick={() => onChange("es")}
                >
                    ES
                </button>
                <button
                    type="button"
                    className={`segmented-option${language === "en" ? " is-active" : ""}`}
                    aria-pressed={language === "en"}
                    onClick={() => onChange("en")}
                >
                    EN
                </button>
            </div>
        </div>
    );
};
