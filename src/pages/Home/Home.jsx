import Banner from "./Banner/Banner";
import Certificate from "./Certificate/Certificate";
import ContactUs from "../../components/ContactUs/ContactUs";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import Skills from "../../components/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Projects></Projects>
            <Skills></Skills>
            <Certificate></Certificate>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;