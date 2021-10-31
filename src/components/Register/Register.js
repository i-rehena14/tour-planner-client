import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div style={{ backgroundImage: `url("https://image.freepik.com/free-vector/topographic-contour-lines-map-seamless-pattern_1284-52862.jpg")`, height: '600px', width: '1300px' }}>
            <div className="d-flex justify-content-between">
                <div className="text-center">
                    <h3 className="text-center">Please Register</h3>
                    <button onClick={handleGoogleLogin} className="btn btn-danger"><i className="p-2 fs-1 fw-bold fab fa-google"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Register;