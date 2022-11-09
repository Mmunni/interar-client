import React from 'react';
 import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';

import img from '../../assets/login/login.webp';
 import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Signup = () => {

     const {createUser} = useContext(AuthContext);
     useTitle('signUp')
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setAuthToken();
        })
        .catch(err => console.error(err));
    }
    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-theme-color" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className='text-center'>Already have an account? <Link className='theme-color font-bold' to="/login"> Login</Link> </p>
                <SocialLogin/>
            </div>
        </div>
    </div>
    );
};

export default Signup;