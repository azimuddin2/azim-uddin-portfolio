import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";

const ContactUs = () => {
    return (
        <section className="my-12">

            <div className="text-center mb-10">
                <h2 className="text-xl text-primary font-medium">Contact Us</h2>
                <h1 className="text-3xl font-medium capitalize">Stay connected with us</h1>
            </div>

            <div className="lg:flex justify-between items-center">

                <div className="flex-1">
                    <p className="lg:w-3/4 capitalize ">Hello Guys! I am a Full Stack web developer. I have 4+ years of experience in web programming. I am available to task on your project. You can share your career planning goals.</p>
                    <div className="mt-10">
                        <p className="flex items-center mb-2">
                            <FiPhoneCall className="text-lg text-primary mr-2" />
                            <span>+880 1883 061967 (BD) WhatsApp</span>
                        </p>
                        <p className="flex items-center mb-2">
                            <HiOutlineMail className="text-lg text-primary mr-2" />
                            <span>mohammadazimuddin274@gmail.com</span>
                        </p>
                        <p className="flex items-center">
                            <GrLocation className="text-lg text-primary mr-2" />
                            <span>Feni-Bangladesh</span>
                        </p>
                    </div>
                </div>

                <div className="flex-1 shadow p-10 rounded-lg">
                    <form>

                        <div className="form-control mb-3">
                            <input
                                name='name'
                                type="text"
                                placeholder="Enter Your Name"
                                className="input input-bordered rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>

                        <div className="form-control mb-3">
                            <input
                                name='name'
                                type="text"
                                placeholder="Enter Your Email"
                                className="input input-bordered rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>

                        <div className="form-control mb-3">
                            <select
                                className=" select select-bordered rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                                <option disabled selected>Select Your Service</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <textarea
                                name='message'
                                rows='5'
                                placeholder="Write Your Message Here..."
                                className="textarea input-bordered rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
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