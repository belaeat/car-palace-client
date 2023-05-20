import bannerImage from '../../../assets/banner/banner1.jpg'
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Authentic Toys here</h1>
                        <p className="mb-5">Get authentic and best selling car toys all over the world from various vendors.</p>
                        <Link className='btn border-none bg-[#F16385]' to='/all-toys'>See All Toys</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;