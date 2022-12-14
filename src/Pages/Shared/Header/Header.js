import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.svg';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import './Header.css';
const Header = () => {

  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
        .then()
        .catch();
}

const menuItems = <>
    <li className='font-semibold text-white nav-menu'><Link to='/'>Home</Link></li>
    <li className='font-semibold text-white nav-menu'><Link to='/services'>Services</Link></li>
    <li className='font-semibold text-white nav-menu'><Link to='/blog'>Blog</Link></li>
    {
        user?.email ?
            <>
                <li className='font-semibold text-white nav-menu'><Link to='/addservices'>Add Services</Link></li>
                <li className='font-semibold text-white nav-menu'><Link to='/review'>My Review</Link></li>
                <li className='font-semibold'>
                    <button onClick={ handleLogOut } className='btn-ghost text-white nav-menu'>Sign Out</button>
                </li>
                
            </>
            :
            <li className='font-semibold nav-menu text-white'><Link to='/login'>Login</Link></li>
    }
</>
    return (
        <div className="navbar h-28 px-5 py-3 bg-secondary-color">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn bg-theme-color mr-3 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary-color rounded-box w-52">
            {menuItems}
            </ul>
          </div>
          <Link to='/' className="w-40">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
           {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn  bg-theme-color">Contact</button>
        </div>
      </div>
    );
};

export default Header;