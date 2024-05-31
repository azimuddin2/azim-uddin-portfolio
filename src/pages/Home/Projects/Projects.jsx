import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import Project from "./Project";
import { useState } from "react";
import ProjectDetailsModal from "../../../components/ProjectDetailsModal/ProjectDetailsModal";
import './Projects.css';
import Loading from "../../Shared/Loading/Loading";
import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";

const Projects = () => {
    const [projectModal, setProjectModal] = useState(null);

    const { isLoading, error, data: projects = [] } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch('https://azim-uddin-portfolio-server.vercel.app/projects');
            const data = await res.json();
            return data;
        }
    });

    const projectsCollection = projects.slice(0, 12);

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
        <section className="max-w-screen-xl lg:mx-auto mx-4 my-6 lg:my-12">
            <div className="text-center">
                <h2 className="text-lg lg:text-xl text-primary font-medium">My Projects</h2>
                <h1 className="text-2xl lg:text-3xl font-medium text-secondary">Here Are Some Recent Works</h1>
            </div>
            <div>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#14a800",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "12px",
                        "--swiper-pagination-bullet-horizontal-gap": "3px",

                        "--swiper-navigation-color": "#fff",
                        "--swiper-navigation-size": "18px",
                        "--swiper-navigation-top-offset": "6%",
                    }}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay, A11y]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    className="mySwiper"
                    breakpoints={{
                        576: {
                            width: 576,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                        1280: {
                            width: 1280,
                            slidesPerView: 3,
                        },
                    }}
                    spaceBetween={0}
                >
                    {
                        projectsCollection?.map(project => <SwiperSlide key={project._id}>
                            <Project
                                project={project}
                                setProjectModal={setProjectModal}
                            ></Project>
                        </SwiperSlide>)
                    }
                </Swiper>
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