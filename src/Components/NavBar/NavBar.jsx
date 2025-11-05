import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider';

const NavBar = () => {
    const {user, logOut} = use(AuthContext)
    const handleLogout = () =>{
        // console.log("user trying to logout")
        logOut()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=> {
            console.log(error)
        }) 
        
    }
    return (
        <div className='flex items-center justify-between'>
            <div className="">{user && user.email}</div>
            <div className="nav flex gap-10">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex gap-5">
                <img className='w-12 rounded-full' src={`${user? user.photoURL : userImg  }`} alt="" />
                {
                    user 
                    ? 
                    <button onClick={handleLogout} className='btn btn-primary px-10'>Logout</button> 
                    :
                    <Link to="/auth/login" className='btn btn-primary px-10'>Login</Link> 
                    
                }
                
            </div>
        </div>
    );
};

export default NavBar;