import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";


const MyToy = () => {

    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])

    const url = `https://b7a11-car-palace-server-belaeat.vercel.app/newAddedToy?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setMyToys(data))
    }, [])

    return (
        <div>
            <h2>My Toys : {myToys.length}</h2>

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
                            myToys.map(toys => <MyToysRow
                                key={toys._id}
                                toys={toys}
                            ></MyToysRow>)
                           }                     
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;