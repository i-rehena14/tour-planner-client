import React from 'react';

const WhyChoose = () => {
    return (
        <div>
            <h1 className="m-4 pb-4 fw-bold text-center">Why <span className="text-info">Choose</span> Us</h1>
            <div className="" style={{ backgroundImage: `url("https://image.freepik.com/free-vector/travel-tourism-with-famous-world-landmarks-globe_117404-24.jpg")` }}>
                <div className="d-lg-flex justify-content-between m-4 text-center">
                    <div>
                        <i className="fas fa-map-signs fs-1"></i>
                        <h3 className="m-4 pb-4 fw-bold fs-4">Guided Tours</h3>
                    </div>
                    <div>
                        <i className="fas fa-passport fs-1"></i>
                        <h3 className="m-4 pb-4 fw-bold fs-4">Competitive Pricing</h3>
                    </div>
                    <div>
                        <i className="fas fa-calendar-check fs-1"></i>
                        <h3 className="m-4 pb-4 fw-bold fs-4">Fast Booking</h3>
                    </div>
                    <div>
                        <i className="fas fa-map-marked-alt fs-1"></i>
                        <h3 className="m-4 pb-4 fw-bold fs-4">Worldwide Coverage</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;