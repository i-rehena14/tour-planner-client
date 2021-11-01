import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allOrders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleStatus = (id) => {
        orders.filter(one => {
            if (one._id === id) {
                one.status = "Approved";
            }

        });



    }


    return (

        <div className="m-4">
            <h2 className="text-center fw-bold">All <span className=" text-info">Orders</span> : {orders?.length}</h2>
            <div className="row ">
                {orders.map(one =>
                    <div className="col-md-2 col-lg-4" key={one._id}>
                        <div className="border border p-4 m-2 shadow order">
                            <h4 className="fw-bold">{one.name}</h4>
                            <h5>Email: {one.email}</h5>
                            <h5>${one.price}</h5>
                            <h6>Status: {one.status}</h6>
                            <h6>{one.description}</h6>
                            <button onClick={() => handleStatus(one._id)} className="btn btn-info me-4">Approve</button>
                            <button className="btn btn-info">delete</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageOrders;