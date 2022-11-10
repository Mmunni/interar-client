import React, { useEffect, useState } from 'react';

const ReviewOrder = ({ review, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, phone, customer, price, service, status } = review;
    const [reviewService, setreviewService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setreviewService(data));
    }, [])
    return (
        <div>
            <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-error'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                reviewService?.img && 
                                <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button 
                onClick={() => handleStatusUpdate(_id)}
                className="btn bg-theme-color btn-xs">{status ? status : 'pending'}</button>
            </th>
        </tr>
        </div>
    );
};

export default ReviewOrder;