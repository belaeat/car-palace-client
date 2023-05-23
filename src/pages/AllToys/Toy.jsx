import { Link } from "react-router-dom";


const Toy = ({ toy }) => {
    const { sellerName, toyName, subcategory, price, availableQuantity } = toy

    return (

        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>

            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <th>
                <Link to='/details'>View Details</Link>
            </th>
        </tr>

        

    );
};

export default Toy;