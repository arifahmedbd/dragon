import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
	const { createUser,setUser } = use(AuthContext);
	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
                setUser(user)
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
                alert(errorMessage)
			});
	};
	return (
		<form
			onSubmit={handleRegister}
			className="flex justify-center min-h-screen items-center"
		>
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
				<h2 className="text-2xl font-semibold text-center">
					Register your account
				</h2>
				<div className="card-body">
					<fieldset className="fieldset">
						<label className="label">Email</label>
						<input
							name="email"
							type="email"
							className="input"
							placeholder="Email"
						/>
						<label className="label">Password</label>
						<input
							name="password"
							type="password"
							className="input"
							placeholder="Password"
						/>
						<div>
							<a className="link link-hover">Forgot password?</a>
						</div>
						<button type="submit" className="btn btn-neutral mt-4">
							Register
						</button>
						<p>
							Already have an account? <Link to={"/auth/login"}>Login</Link>
						</p>
					</fieldset>
				</div>
			</div>
		</form>
	);
};

export default Register;
