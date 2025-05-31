import React from 'react';
import { Link, NavLink } from 'react-router';
import user from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between p-4 items-center text-accent'>
            <div className=""></div>
            <div className="nav flex gap-3">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">career</NavLink>
            </div>
            <div className="login-btn flex gap-3">
                <img src={user} alt="" />
                <Link to={"/auth/login"} className='btn btn-primary px-10'>Login</Link></div>
        </div>
    );
};

export default Navbar;