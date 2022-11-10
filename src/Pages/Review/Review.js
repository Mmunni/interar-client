import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewOrder from './ReviewOrder';

const Review = () => {
    useTitle('review');
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setreviews] = useState([])

    useEffect(() => {
        fetch(`https://interar-server.vercel.app/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('interar-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setreviews(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this review');
        if (proceed) {
            fetch(`https://interar-server.vercel.app/review/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('interar-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(rvw => rvw._id !== id);
                        setreviews(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`https://interar-server.vercel.app/review/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('interar-token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(rvw => rvw._id !== id);
                    const approving = reviews.find(rvw => rvw._id === id);
                    approving.status = 'Approved'

                    const newreviews = [approving, ...remaining];
                    setreviews(newreviews);
                }
            })
    }
    return (
        <div className='max-w-screen-xl mx-auto pt-32'>
            <h2 className="text-3xl lg:text-5xl">You have {reviews.length} reviews</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full mt-10">
                    
                    <tbody>
                        {
                            reviews.map(review => <ReviewOrder
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></ReviewOrder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Review;