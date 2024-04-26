import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
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
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;