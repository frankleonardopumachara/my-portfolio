import {Navbar} from "./components/Navbar";
import {Hero} from "./components/Hero";
import {AboutMe} from "./components/AboutMe";
import {Experience} from "./components/Experience";
import {RecentProjects} from "./components/RecentProjects.jsx";
import {Footer} from "./components/Footer.jsx";

export const App = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <AboutMe/>
            <Experience/>
            <RecentProjects/>
            {/*<Articles/>*/}
            {/*<Testimonies/>*/}
            {/*<Contact/>*/}
            <Footer/>
        </>
    )
}
