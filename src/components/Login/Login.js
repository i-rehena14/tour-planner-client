import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
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
        <div style={{ backgroundImage: `url("https://image.freepik.com/free-vector/topographic-contour-lines-map-seamless-pattern_1284-52862.jpg")`, height: '600px' }}>
            <div className="">
                <div className="text-center">
                    <h3 className="text-center text-info p-4 fw-bold fs-1">Please login</h3>
                    <button onClick={handleGoogleLogin} className="btn btn-danger">
                        <div className="d-flex">
                            <i className="p-2 fs-1 fw-bold fab fa-google"></i><h3 className="pt-2">- Google Sign-In</h3>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;