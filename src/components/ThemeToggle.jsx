export const ThemeToggle = ({ label, theme, onChange }) => {
    return (
        <div className="floating-control">
            <span className="control-label">{label}</span>
            <div
                className={`segmented-control${theme === "light" ? " is-second" : ""}`}
                role="group"
                aria-label={label}
            >
                <span className="segmented-thumb" aria-hidden="true" />
                <button
                    type="button"
                    className={`segmented-option${theme === "dark" ? " is-active" : ""}`}
                    aria-pressed={theme === "dark"}
                    onClick={() => onChange("dark")}
                >
                    Dark
                </button>
                <button
                    type="button"
                    className={`segmented-option${theme === "light" ? " is-active" : ""}`}
                    aria-pressed={theme === "light"}
                    onClick={() => onChange("light")}
                >
                    Light
                </button>
            </div>
        </div>
    );
};
