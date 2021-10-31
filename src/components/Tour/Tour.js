import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tour = ({ tour }) => {
    const { _id, name, description, img, price } = tour;
    return (
        <div className=" pb-3">

            <Col className="shadow">
                <Card>
                    <Card.Img className="h-50" variant="top" src={img} />
                    <Card.Body className="p-4">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="text-secondary">
                            {description}
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