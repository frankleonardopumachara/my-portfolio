import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Expertise } from "./components/Expertise";
import { RecentProjects } from "./components/RecentProjects";
import { Footer } from "./components/Footer";

export const App = () => {
    return (
        <div className="app-shell">
            <div className="app-gradient app-gradient-blue" aria-hidden="true" />
            <div className="app-gradient app-gradient-red" aria-hidden="true" />
            <div className="app-gradient app-gradient-yellow" aria-hidden="true" />
            <Navbar />
            <main>
                <Hero />
                <AboutMe />
                <Experience />
                <Expertise />
                <RecentProjects />
            </main>
            <Footer />
        </div>
    );
};
