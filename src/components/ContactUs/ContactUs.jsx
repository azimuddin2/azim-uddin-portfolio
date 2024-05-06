import { useQuery } from "@tanstack/react-query";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import Loading from "../../pages/Shared/Loading/Loading";
import ErrorMessage from "../../pages/Shared/ErrorMessage/ErrorMessage";
import toast from "react-hot-toast";

const ContactUs = () => {

    const { isLoading, error, data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/services');
            const data = await res.json();
            return data;
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const service = form.service.value;
        const message = form.message.value;

        const contactInfo = {
            name,
            email,
            service,
            message
        };
        console.log(contactInfo);
        form.reset();
        toast.success('Form submitted successfully.');
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <section className="max-w-screen-xl lg:mx-auto mx-5 my-8 lg:my-12">
            <div className="text-center mb-5 lg:mb-8">
                <h2 className="text-lg lg:text-xl text-primary font-medium">Contact Us</h2>
                <h1 className="text-2xl lg:text-3xl font-medium text-secondary capitalize">Stay connected with us</h1>
            </div>
            <div className="lg:flex justify-between items-center">
                <div className="flex-1">
                    <p className="lg:w-3/4 capitalize text-accent text-sm lg:text-base">Hello Guys! I am a Full Stack web developer. I have 4+ years of experience in web programming. I am available to task on your project. You can share your career planning goals.</p>
                    <div className="mt-5 lg:mt-10">
                        <p className="flex items-center mb-2 text-accent">
                            <FiPhoneCall className="text-lg text-primary mr-2" />
                            <span>+880 1883 061967 (BD) WhatsApp</span>
                        </p>
                        <p className="flex items-center mb-2 text-accent">
                            <HiOutlineMail className="text-lg text-primary mr-2" />
                            <span>mohammadazimuddin274@gmail.com</span>
                        </p>
                        <p className="flex items-center text-accent">
                            <GrLocation className="text-lg text-primary mr-2" />
                            <span>Feni-Bangladesh</span>
                        </p>
                    </div>
                </div>
                <div className="flex-1 bg-success shadow p-5 lg:p-10 rounded-lg mt-5 lg:mt-0">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-3">
                            <input
                                name='name'
                                type="text"
                                placeholder="Enter Your Name"
                                className="input bg-neutral text-secondary border-info input-bordered rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>
                        <div className="form-control mb-3">
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter Your Email"
                                className="input bg-neutral text-secondary border-info input-bordered rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>
                        <div className="form-control mb-3">
                            <select
                                name="service"
                                className="select bg-neutral text-secondary border-info select-bordered rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                                <option disabled selected className="text-accent">Select Your Service</option>
                                {
                                    services?.map(service => <option
                                        key={service._id}
                                        service={service}
                                    >
                                        {service.name}
                                    </option>)
                                }
                            </select>
                        </div>
                        <div className="form-control">
                            <textarea
                                name="message"
                                rows='4'
                                placeholder="Write Your Message Here..."
                                className="textarea bg-neutral text-secondary border-info input-bordered rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            ></textarea>
                        </div>
                        <button className="btn btn-primary text-white w-full mt-5">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;