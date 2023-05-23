import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const MyToy = () => {

    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])

    const url = `http://localhost:5000/newAddedToy?email=${user?.email}`

    useEffect(() => {
        fetch(url)
        .then (res => res.json())
        .then( data => setMyToys(data))
    }, [])

    return (
        <div>
            <h2>My Toys : {myToys.length}</h2>
        </div>
    );
};

export default MyToy;