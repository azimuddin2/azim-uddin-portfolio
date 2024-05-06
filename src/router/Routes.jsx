import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Projects from "../pages/Projects/Projects";
import Skills from "../components/Skills/Skills";
import ContactUs from "../components/ContactUs/ContactUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'services',
                element: <Services></Services>
            },
            {
                path: 'projects',
                element: <Projects></Projects>
            },
            {
                path: 'skills',
                element: <Skills></Skills>
            },
            {
                path: 'contact',
                element: <ContactUs></ContactUs>
            }
        ],
    },
]);

export default router;