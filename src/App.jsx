import React, { useEffect, useTransition } from "react";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Expertise } from "./components/Expertise";
import { Footer } from "./components/Footer";
import { AmbientGlyphField } from "./components/AmbientGlyphField";
import { LanguageToggle } from "./components/LanguageToggle";
import { ThemeToggle } from "./components/ThemeToggle";
import { portfolioContent } from "./content/portfolio";

const THEME_STORAGE_KEY = "portfolio-theme";

export const App = () => {
    const [isPending, startTransition] = useTransition();
    const [language, setLanguage] = React.useState("en");
    const [theme, setTheme] = React.useState(() => {
        if (typeof window === "undefined") {
            return "dark";
        }

        return window.localStorage.getItem(THEME_STORAGE_KEY) === "light" ? "light" : "dark";
    });
    const content = portfolioContent[language];
    const themeLabel = language === "es" ? "Tema" : "Theme";

    useEffect(() => {
        document.documentElement.lang = language;
        document.title = content.meta.title;

        const description = document.querySelector('meta[name="description"]');
        if (description) {
            description.setAttribute("content", content.meta.description);
        }

        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute("content", content.meta.title);
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute("content", content.meta.description);
        }
    }, [content.meta.description, content.meta.title, language]);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
        window.localStorage.setItem(THEME_STORAGE_KEY, theme);

        const themeColor = document.querySelector('meta[name="theme-color"]');
        if (themeColor) {
            themeColor.setAttribute("content", theme === "light" ? "#f6f8ff" : "#050816");
        }
    }, [theme]);

    useEffect(() => {
        const animatedElements = Array.from(document.querySelectorAll("[data-animate]"));

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            animatedElements.forEach((element) => element.classList.add("is-visible"));
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.16,
                rootMargin: "0px 0px -8% 0px",
            },
        );

        animatedElements.forEach((element) => {
            element.classList.remove("is-visible");
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, [language, theme]);

    const handleLanguageChange = (nextLanguage) => {
        if (nextLanguage === language) {
            return;
        }

        startTransition(() => {
            setLanguage(nextLanguage);
        });
    };

    const handleThemeChange = (nextTheme) => {
        if (nextTheme === theme) {
            return;
        }

        setTheme(nextTheme);
    };

    return (
        <div className="app-shell">
            <div className="app-gradient app-gradient-blue" aria-hidden="true" />
            <div className="app-gradient app-gradient-red" aria-hidden="true" />
            <div className="app-gradient app-gradient-yellow" aria-hidden="true" />
            <AmbientGlyphField theme={theme} />
            <div className="floating-controls">
                <ThemeToggle label={themeLabel} theme={theme} onChange={handleThemeChange} />
                <LanguageToggle
                    label={content.localeLabel}
                    language={language}
                    onChange={handleLanguageChange}
                    isPending={isPending}
                />
            </div>
            <main>
                <div key={`${language}-${theme}`} className="page-language-stage">
                    <Hero content={content.hero} />
                    <Experience content={content.experience} />
                    <Expertise content={content.expertise} />
                    <Footer content={content.footer} />
                </div>
            </main>
        </div>
    );
};
