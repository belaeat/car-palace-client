
import { useEffect, useState } from "react";
import Toy from "./Toy";


const AllToys = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://b7a11-car-palace-server-belaeat.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToys(data))
        // .then(data => console.log(data))
    }, [])




    return (

        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <Toy
                            key={toy._id}
                            toy={toy}
                        ></Toy>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;