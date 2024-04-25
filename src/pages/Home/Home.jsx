import Banner from "./Banner/Banner";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import Skills from "./Skills/Skills";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
            <Services></Services>
            <Projects></Projects>
            <Skills></Skills>
        </div>
    );
};

export default Home;