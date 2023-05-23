
import { useEffect, useState } from "react";
import Toy from "./Toy";


const AllToys = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setToys(data))
            // .then(data => console.log(data))
    }, [])


    return (

        <div>
            <h2>All Toys : {toys.length}</h2>

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
                            <th>Name</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Sub Category</th>
                            <th>Update</th>
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
        </div>


    );
};

export default AllToys;