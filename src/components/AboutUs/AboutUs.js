import React from 'react';

const AboutUs = () => {
    return (
        <div className="d-lg-flex m-4 pt-4">
            <div>
                <h2 className="text-primary">About Us</h2>
                <h1 className="text-center">We Help You Planning Your Journey</h1>
                <p className="text-center">We focus on customer's satisfaction. We highlight the location that are most beautiful and desired.Our tour guide are the best to guide you to the destination. Every good facilities are included in our planning.</p>
                <button className="border rounded-2 btn-info p-2 ms-4">Learn More <i class="fas fa-long-arrow-alt-right"></i></button>
            </div>
            <div>
                <img className="container-fluid" src="https://image.freepik.com/free-vector/tropical-rainforest-flamingo_1284-9754.jpg" alt="" />
            </div>
        </div>
    );
};

export default AboutUs;