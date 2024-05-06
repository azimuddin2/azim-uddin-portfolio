import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading/Loading";
import ErrorMessage from "../Shared/ErrorMessage/ErrorMessage";
import Project from "./Project";
import { useState } from "react";
import ProjectDetailsModal from "../../components/ProjectDetailsModal/ProjectDetailsModal";

const Projects = () => {
    const [projectModal, setProjectModal] = useState(null);

    const { isLoading, error, data: projects = [] } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/projects');
            const data = await res.json();
            return data;
        }
    });

    const closeModal = () => {
        setProjectModal(null);
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <section className="max-w-screen-xl lg:mx-auto mx-5 lg:my-12 my-6">
            <div className="text-center">
                <h2 className="text-lg lg:text-xl text-primary font-medium">My Projects</h2>
                <h1 className="text-2xl lg:text-3xl font-medium text-secondary">Here Are Some Recent Works</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 lg:mt-8">
                {
                    projects?.map(project => <Project
                        key={project._id}
                        project={project}
                        setProjectModal={setProjectModal}
                    ></Project>)
                }
            </div>
            {
                projectModal && <ProjectDetailsModal
                    projectDetails={projectModal}
                    closeModal={closeModal}
                ></ProjectDetailsModal>
            }
        </section>
    );
};

export default Projects;