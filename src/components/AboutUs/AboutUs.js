import React from 'react';

const AboutUs = () => {
    return (
        <div className="d-lg-flex m-4 pt-4">
            <div className="text-center pb-2">
                <h3 className="text-info">About Us</h3>
                <h1 className=" fw-bold">We Help You Planning Your Journey</h1>
                <p className="fw-light">We focus on customer's satisfaction. We highlight the location that are most beautiful and desired.Our tour guide are the best to guide you to the destination. Every good facilities are included in our planning.</p>
                <button className="border rounded-2 btn-info p-2 ms-4">Learn More <i className="fas fa-long-arrow-alt-right"></i></button>
            </div>
            <div>
                <img className="container-fluid" src="https://image.freepik.com/free-vector/tropical-rainforest-flamingo_1284-9754.jpg" alt="" />
            </div>
        </div>
    );
};

export default AboutUs;