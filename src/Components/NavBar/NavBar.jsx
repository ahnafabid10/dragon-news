import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider';

const NavBar = () => {
    const {user} = use(AuthContext)
    return (
        <div className='flex items-center justify-between'>
            <div className="">{user && user.email}</div>
            <div className="nav flex gap-10">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex gap-5">
                <img src={userImg} alt="" />
                <Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>
            </div>
        </div>
    );
};

export default NavBar;