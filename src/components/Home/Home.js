import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AboutUs from '../AboutUs/AboutUs';
import Tour from '../Tour/Tour';
import WhyChoose from '../WhyChoose/WhyChoose';
import './Home.css';

const Home = () => {
    const [tours, setTours] = useState([])
    useEffect(() => {
        fetch('https://cryptic-plains-40866.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setTours(data));
    }, []);
    const sliced = tours.slice(0, 8);

    return (
        <div>

            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h1 className="">Discover The Most Engaging Places</h1>
                            <button className="rounded btn-info p-2 mt-2 text-white fw-bold">Discover More </button>
                        </div>
                    </div>
                </div>
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