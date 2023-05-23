import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const AddToy = () => {

    const { user } = useContext(AuthContext)

    // toast
    const notify = () => toast.success("Toy Added Successfully")

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target
        const sellerName = form.sellerName.value;
        const sellerEmail = user?.email;
        const toyName = form.toyName.value;
        const toyPicture = form.toyPicture.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const details = form.details.value;

        const addToy = { sellerName, sellerEmail, toyName, toyPicture, subcategory, price, rating, availableQuantity, details }

        console.log(addToy)

        // sending data to backend

        fetch('https://b7a11-car-palace-server-belaeat.vercel.app/newAddedToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return (
        <div className="bg-[#86C8BC] rounded-lg mt-12">
            <h1 className="text-5xl p-12 font-bold text-center">Add New Toy</h1>
            <form onSubmit={handleAddToy} className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="sellerEmail" placeholder="Your email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="Your name" name="sellerName" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="toyName" placeholder="Toy name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Photo</span>
                        </label>
                        <input type="text" placeholder="Toy Photo URL" name="toyPicture" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        {/* <input type="text" placeholder="email" className="input input-bordered" /> */}
                        <select className="select select-bordered" name="subcategory">
                            <option disabled selected>Choose Category</option>
                            <option>classic</option>
                            <option>modern</option>
                            <option>construction</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="$" name="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating" name="rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" placeholder="Available Quantity" name="availableQuantity" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control my-12">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="Toy Description" name="details" className="input h-[100px] input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <input onClick={notify} className="btn border-none bg-[#F16385] btn-block" type="submit" value="Add Toy" />
                    <Toaster />
                </div>
            </form>

        </div>
    );
};

export default AddToy;