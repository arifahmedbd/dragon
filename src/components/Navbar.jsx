import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const handleLogout = () => {
		console.log("logout");
		logOut()
			.then(() => {
				alert("successfully loggedout");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="flex justify-between p-4 items-center text-accent">
			<div>
				{user ? (
					<span>Welcome, {user.displayName || user.email}</span>
				) : (
					<span>Not logged in</span>
				)}
			</div>

			<div className="nav flex gap-3">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/career">Career</NavLink>
			</div>

			<div className="login-btn flex gap-3 items-center">
				<img src={userIcon} alt="User Icon" className="w-8 h-8" />

				{user ? (
					<button onClick={handleLogout} className="btn btn-primary px-10">
						Logout
					</button>
				) : (
					<Link to="/auth/login" className="btn btn-primary px-10">
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
