// import { Tab, TabList, Tabs } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';


const CarCategory = ({ categories }) => {
    const { toyPicture, toyName, rating, price } = categories;

    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={toyPicture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{toyName}</h2>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions">
                        <button className="btn border-none btn-block bg-[#F16385]">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCategory;