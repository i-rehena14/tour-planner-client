import React from 'react';

const Footer = () => {
    return (
        <div className="mb-0 bg-info mt-4 text-center footer text-white">
            <div className="d-lg-flex m-4 p-4">
                <div className="w-50">
                    <h2><i className="fas fa-suitcase-rolling"></i>TourPlan</h2>
                    <p>Every good facilities are included in our planning. Contact us to get help to plan your tour.</p>
                </div>
                <div className="w-50">
                    <h4>Our Services</h4>
                    <p>Booking</p>
                    <p>Guiding</p>
                </div>
                <div className="w-50">
                    {/* -------Follow----- */}
                    <h4>Follow Us </h4>
                    <i className="m-4 fab fa-facebook"></i>
                    <i className="m-4 fab fa-instagram"></i>
                    <i className="m-4 fab fa-youtube"></i>
                    <i className="m-4 fab fa-twitter"></i>
                </div>
            </div>
            <p className="p-2">Copyright&copy;2021 TourPlan. All Rights Reserved.</p>

        </div>
    );
};

export default Footer;