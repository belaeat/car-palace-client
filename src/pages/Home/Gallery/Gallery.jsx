

const Gallery = () => {
    return (
        <div className="my-20">
            <div className="mb-20 text-center">
                <h2 className="text-4xl font-bold mb-4">Toy Gallery</h2>
                <p className="text-lg">Some of our top selling products are displayed here.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/KyZ4LSb/1967-Chevy-Impala-SS.jpg" alt="" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/jWPNn4F/1989-Ford-Mustang-GT.jpg" alt="" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/Tvg76gG/Shu-Todoroki.jpg" alt="" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/MCvyyKs/1982-Pontiac-Firebird.jpg" alt="" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/MPrWFZN/1957-Chevy-Bel-Air.jpg" alt="" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/B2qwJhG/1967-Shelby-GT500.jpg" alt="" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/Gc8p3Xm/2015-Dodge-Challenger-SRT-Hellcat.jpg" alt="" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/sg6tSzv/1970-Plymouth-Road-Runner.jpg" alt="" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/9gTTZt2/Green-Toys-Race-Car.jpg" alt="" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/WHHpXy6/2020-Toyota-Supra.jpg" alt="" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/Sc8YM3m/Marshall-s-Fire-Engine-Vehicle.jpg" alt="" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/fCDsb8G/Batman-Batmobile.jpg" alt="" className="rounded-xl" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Gallery;