import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AboutUs from '../AboutUs/AboutUs';
import Tour from '../Tour/Tour';
import WhyChoose from '../WhyChoose/WhyChoose';
import img from '../../images/back.jpg';
import './Home.css';

const Home = () => {
    const [tours, setTours] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setTours(data));
    }, []);
    const sliced = tours.slice(0, 8);

    return (
        <div>
            {/* <img src="https://image.freepik.com/free-photo/high-angle-passport-tickets-arrangement_23-2148786166.jpg" alt="" /> */}

            <div className="p-4 banner" style={{ backgroundImage: `url("${img}")` }}>
                <h1 className="p-4 m-4 text-white fw-bold fs-1">Discover the most engaging places</h1>
            </div>
            <div id="" className="m-4 pt-4">
                <h2 className="fs-1 fw-bold mt-5 text-center mb-4">Our Main <span className="text-info">Offers</span> </h2>

                <Row xs={1} md={4} className="g-4">
                    {
                        sliced.map(tour => <Tour
                            key={tour._id}
                            tour={tour}
                        ></Tour>)
                    }
                </Row>
            </div>
            <WhyChoose></WhyChoose>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;