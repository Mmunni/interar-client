import React, { useContext } from 'react';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from "react-router-dom";
import {  FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from.pathname || '/';
    
    const handelGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user)
            setAuthToken(user);
            navigate(from, { replace: true });
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            
            <p className='text-center'>
                <button onClick={handelGoogleSignIn} className='btn bg-theme-color mt-2 '><FaGoogle/> Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;