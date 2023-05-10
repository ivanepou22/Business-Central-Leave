import React, { useState } from 'react'
import { Link } from "react-router-dom";
import portLogo from '../assets/images/logo-bg.png';

function Register() {
	const [viewPassword, setViewPassword] = useState(false);
	const [viewConPassword, setViewConPassword] = useState(false);

	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		username: '',
		password: '',
		confirm_password: '',
		agree_terms: false,
	});

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
	};

	return (
		<div className="page page-center">
			<div className="container-tight py-2">
				<div className="text-center mb-2">
					<Link to="#" className="navbar-brand navbar-brand-autodark">
						<img src={portLogo} height="36" alt="" />
					</Link>
				</div>
				<form className="card card-md" onSubmit={handleSubmit}>
					<div className="card-body">
						<h2 className="card-title text-center mb-4">Create new account</h2>
						<div className="mb-3">
							<label className="form-label">First Name</label>
							<input type="text" className="form-control" name='first_name' value={formData.first_name} onChange={handleChange} placeholder="Enter first name" autoComplete="off" />
						</div>
						<div className="mb-3">
							<label className="form-label">Last Name</label>
							<input type="text" className="form-control" name='last_name' value={formData.last_name} onChange={handleChange} placeholder="Enter last name" autoComplete="off" />
						</div>
						<div className="mb-3">
							<label className="form-label">Email address</label>
							<input type="email" className="form-control" name='email' value={formData.email} onChange={handleChange} placeholder="Enter email" autoComplete="off" />
						</div>
						<div className="mb-3">
							<label className="form-label">Username</label>
							<input type="text" className="form-control" name='username' value={formData.username} onChange={handleChange} placeholder="Enter username" autoComplete="off" />
						</div>
						<div className="mb-3">
							<label className="form-label">Password</label>
							<div className="input-group input-group-flat">
								<input type={viewPassword ? 'text' : 'password'} className="form-control" name='password' value={formData.password} onChange={handleChange} placeholder="Password" autoComplete="off" />
								<span className="input-group-text">
									<Link to="#" className="link-secondary" title="Show password" data-bs-toggle="tooltip" onClick={() => setViewPassword(!viewPassword)} >
										<svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="2" /><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" /></svg>
									</Link>
								</span>
							</div>
						</div>
						<div className="mb-3">
							<label className="form-label">Confirm Password</label>
							<div className="input-group input-group-flat">
								<input type={viewConPassword ? 'text' : 'password'} className="form-control" name='confirm_password' value={formData.confirm_password} onChange={handleChange} placeholder="Confirm Password" autoComplete="off" />
								<span className="input-group-text">
									<Link to="#" className="link-secondary" title="Show password" data-bs-toggle="tooltip" onClick={() => setViewConPassword(!viewConPassword)} >
										<svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="2" /><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" /></svg>
									</Link>
								</span>
							</div>
						</div>
						<div className="mb-3">
							<label className="form-check">
								<input type="checkbox" name='agree_terms' className="form-check-input" onChange={handleChange} />
								<span className="form-check-label">Agree the <a to="#" tabIndex="-1">terms and policy</a>.</span>
							</label>
						</div>
						<div className="form-footer">
							<button type="submit" disabled={formData.agree_terms ? false: true} className="btn btn-primary w-100">Create new account</button>
						</div>
					</div>
				</form>
				<div className="text-center text-muted mt-3">
					Already have account? <Link to="/" tabIndex="-1">Sign in</Link>
				</div>
			</div>
		</div>
	)
}

export default Register