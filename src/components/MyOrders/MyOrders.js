import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const email = `${user.email}`;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://cryptic-plains-40866.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    const handleDelete = id => {
        console.log(id);
        const url = `https://cryptic-plains-40866.herokuapp.com/deleteMyOrder/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                    alert('Deleted Successfully.');
                }

            })
    }

    return (
        <div className="m-4">
            <h2 className="text-center fw-bold">My <span className=" text-info">Orders</span> : {orders?.length}</h2>
            <div className="row ">
                {orders.map(one =>
                    <div className="col-md-2 col-lg-4" key={one._id}>
                        <div className="border border p-4 m-2 shadow order">
                            <h4 className="fw-bold">{one.name}</h4>
                            <h5>Email: {one.email}</h5>
                            <h5>${one.price}</h5>
                            <h6>Status: {one.status}</h6>
                            <h6>{one.description}</h6>
                            <button onClick={() => handleDelete(one._id)} className="btn-danger rounded p-2">Delete</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;