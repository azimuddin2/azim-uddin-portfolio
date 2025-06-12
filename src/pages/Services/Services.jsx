import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';
import ErrorMessage from '../Shared/ErrorMessage/ErrorMessage';
import Service from './Service';

const Services = () => {

    const { isLoading, error, data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('https://azim-uddin-portfolio-server.vercel.app/services');
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <section className="max-w-screen-xl lg:mx-auto mx-5 lg:my-12 my-6">
            <div className="text-center">
                <h2 className="text-lg lg:text-xl text-primary font-medium">Development Track</h2>
                <h1 className="text-2xl lg:text-3xl font-medium text-secondary">Crafting Solutions Through Code</h1>
            </div>
            <div className="mt-5 lg:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </section>
    );
};

export default Services;