import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tours, setTours] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setTours(data));
    }, []);

    return (
        <div id="" className="m-4">
            <h2 className="fs-1 fw-bold mt-5 text-center mb-4">Our Main <span className="text-info">Offers</span> </h2>

            <Row xs={1} md={4} className="g-4">
                {
                    tours.map(tour => <Tour
                        key={tour._id}
                        tour={tour}
                    ></Tour>)
                }
            </Row>
        </div>
    );
};

export default Tours;