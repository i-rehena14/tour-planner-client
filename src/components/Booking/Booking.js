import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { tourId } = useParams();

    const [tour, setTour] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${tourId}`)
            .then(res => res.json())
            .then(data => setTour(data))
    }, []);
    // const onSubmit = data => {
    //     console.log(data);
    //     axios.post('http://localhost:5000/orders', data)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 alert('Order Added Successfully!!');
    //             }
    //         })
    // };

    const { user } = useAuth();
    const handleAddtoOrders = () => {
        const order = tour;
        order.status = "pending";
        order.email = `${user.email}`;
        // console.log(order);
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    alert('Order Added Successfully!!');
                }
            });
    };
    return (
        <div className="w-50 m-4">
            <Card className="">
                <Card.Img className="h-50" variant="top" src={tour.img} />
                <Card.Body className="p-4">
                    <Card.Title>{tour.name}</Card.Title>
                    <Card.Text className="text-secondary">
                        {tour.description}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                        <h3 className="text-secondary fw-bold">${tour.price}</h3>

                        <button onClick={handleAddtoOrders} className="btn btn-info">Place Order</button>

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Booking;