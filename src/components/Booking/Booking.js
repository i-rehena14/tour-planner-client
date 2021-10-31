import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { tourId } = useParams();

    const [tour, setTour] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${tourId}`)
            .then(res => res.json())
            .then(data => setTour(data))
    }, []);
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Added Successfully!!');
                }
            })
    };
    return (
        <div>
            <h2>Booking: {tourId}</h2>
            <h3>name: {tour.name}</h3>
            <button onSubmit={onSubmit} className="btn btn-info">Book</button>
        </div>
    );
};

export default Booking;