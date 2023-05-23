

const MyToysRow = ({ toys }) => {

    const { toyName, toyPicture, subcategory, price, rating, availableQuantity } = toys
    

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-full h-24">
                        <img src={toyPicture} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{toyName}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>{availableQuantity}</td>
            <td>{subcategory}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default MyToysRow;