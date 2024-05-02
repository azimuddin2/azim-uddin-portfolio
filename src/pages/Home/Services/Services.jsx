import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Service from "./Service";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loading from "../../../components/Loading/Loading";

const Services = () => {

    const { isLoading, error, data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/services`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <section className="my-12">
            <div className="text-center">
                <h2 className="text-lg lg:text-xl text-primary font-medium">My Services</h2>
                <h1 className="text-2xl lg:text-3xl font-medium text-secondary">Provide Awesome Services</h1>
            </div>
            <div className="mt-5 lg:mt-8">
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#14a800",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "12px",
                        "--swiper-pagination-bullet-horizontal-gap": "3px",
                    }}
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
                    spaceBetween={12}
                    modules={[A11y, Pagination, Navigation, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                >
                    {
                        services?.map(service => <SwiperSlide key={service._id}>
                            <Service service={service}></Service>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Services;