import Banner from "./Banner/Banner";
import Certificate from "./Certificate/Certificate";
import ContactUs from "../../components/ContactUs/ContactUs";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import Skills from "../../components/Skills/Skills";
import Experience from "./Experience/Experience";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Experience></Experience>
            <Projects></Projects>
            <Skills></Skills>
            <Services></Services>
            <Certificate></Certificate>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;