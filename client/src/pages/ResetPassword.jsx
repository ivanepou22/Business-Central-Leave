import React from 'react'
import { Link } from 'react-router-dom'
import portLogo from '../assets/images/logo-bg.png';
import '../assets/style.css'

function ResetPassword() {
	return (
		<div className="page page-center">
			<div className="container-tight py-2">
				<div className="text-center mb-2">
					<Link to="." className="navbar-brand navbar-brand-autodark">
						<img src={portLogo} height="36" alt="" />
					</Link>
				</div>
				<form className="card card-md" action="." method="get">
					<div className="card-body">
						<h2 className="card-title text-center mb-4">Forgot password</h2>
						<p className="text-muted mb-4">Enter your email address and your password will be reset and emailed to you.</p>
						<div className="mb-3">
							<label className="form-label">Email address</label>
							<input type="email" className="form-control" placeholder="Enter email" />
						</div>
						<div className="form-footer">
							<Link to="#" className="btn btn-primary w-100">
								{/* <!-- Download SVG icon from http://tabler-icons.io/i/mail --> */}
								<svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></svg>
								Send me new password
							</Link>
						</div>
					</div>
				</form>
				<div className="text-center text-muted mt-3">
					Forget it, <Link to="/">send me back</Link> to the sign in screen.
				</div>
			</div>
		</div>
	)
}

export default ResetPassword