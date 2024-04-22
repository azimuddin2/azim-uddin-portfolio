import azimImg from '../../../assets/images/azim_uddin.jpeg';

const Banner = () => {
    return (
        <section>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img style={{border: '3px solid #14a800'}} src={azimImg} alt='azim uddin' className="lg:max-w-sm rounded-xl" />
                    <div>
                        <h1 className="text-5xl font-semibold">Hi! I'm Azim Uddin.</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;