import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
	const { signIn } = use(AuthContext);
  const navigate=useNavigate()
	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		signIn(email, password)
			.then((result) => {
				const user = result.user;
        navigate(`${location.state? location.state: "/"}`)
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage);
			});
	};
	return (
		<div className="flex justify-center min-h-screen items-center">
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
				<h2 className="text-2xl font-semibold text-center">
					Login your account
				</h2>
				<form onSubmit={handleLogin} className="card-body">
					<fieldset className="fieldset">
						<label className="label">Email</label>
						<input
							type="email"
							name="email"
							className="input"
							placeholder="Email"
						/>
						<label className="label">Password</label>
						<input
							type="password"
							name="password"
							className="input"
							placeholder="Password"
						/>
						<div>
							<a className="link link-hover">Forgot password?</a>
						</div>
						<button type="submit" className="btn btn-neutral mt-4">
							Login
						</button>
						<p>
							Don't have an account? <Link to={"/auth/register"}>Register</Link>
						</p>
					</fieldset>
				</form>
			</div>
		</div>
	);
};

export default Login;
