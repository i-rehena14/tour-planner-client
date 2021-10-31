import React from 'react';

const Footer = () => {
    return (
        <div className="mb-0 bg-info mt-4 text-center footer">
            <div className="d-flex m-4 p-4">
                <div className="w-50">
                    <h2>Our Services</h2>
                    <p>Booking</p>
                    <p>Guiding</p>
                </div>
                <div>
                    {/* -------Follow----- */}
                    <h2>Follow Us </h2>
                    <i class="m-4 fab fa-facebook"></i>
                    <i class="m-4 fab fa-instagram"></i>
                    <i class="m-4 fab fa-youtube"></i>
                    <i class="m-4 fab fa-twitter"></i>
                </div>
            </div>
            <p className="p-2">Copyright&copy;2021 TourPlan. All Rights Reserved.</p>

        </div>
    );
};

export default Footer;