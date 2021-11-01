import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Tour.css';

const Tour = ({ tour }) => {
    const { _id, name, description, img, price } = tour;

    // const { user, logOut } = useAuth();
    // const handleAddtoOrders = () => {
    //     const order = tour;
    //     order.status = "pending";
    //     order.email = `${user.email}`;
    //     // console.log(order);
    //     fetch('http://localhost:5000/addOrder', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(order)
    //     });
    // };

    return (
        <div className=" pb-3">

            <Col className="shadow ">
                <Card className="tour-card">
                    <Card.Img className="h-50" variant="top" src={img} />
                    <Card.Body className="p-4">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="text-secondary">
                            {description.slice(0, 100)}...
                        </Card.Text>
                        <div className="d-flex justify-content-between">
                            <h3 className="text-secondary fw-bold">${price}</h3>
                            <Link to={`/booking/${_id}`}>
                                <button className="btn btn-info">Book Now</button>
                            </Link>

                        </div>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Tour;