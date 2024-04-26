import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/navigation";


// import required modules
import { A11y, Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import Project from "./Project";
import './Projects.css';

const Projects = () => {

    const { isLoading, error, data: projects = [] } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/projects');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <section className="my-20">

            <div className="text-center">
                <h2 className="text-lg lg:text-xl text-primary font-medium">My Projects</h2>
                <h1 className="text-2xl lg:text-3xl font-medium">Here Are Some Recent Works</h1>
            </div>

            <div className="mt-12">
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
                        projects.map(project => <SwiperSlide key={project._id}>
                            <Project project={project}></Project>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </section>
    );
};

export default Projects;