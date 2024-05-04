import Banner from "./Banner/Banner";
import Certificate from "./Certificate/Certificate";
import ContactUs from "./ContactUs/ContactUs";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import Skills from "./Skills/Skills";

const Home = () => {
    return (
        <div className="max-w-screen-xl lg:mx-auto mx-5">
            <Banner></Banner>
            <Services></Services>
            <Projects></Projects>
            {/* <Skills></Skills> */}
            {/* <Certificate></Certificate> */}
            {/* <ContactUs></ContactUs> */}
        </div>
    );
};

export default Home;