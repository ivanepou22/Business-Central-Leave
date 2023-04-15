import React from 'react'
import { Link } from "react-router-dom";
import portLogo from '../assets/images/logo-bg.png';
import Footer from '../components/Footer';

function Register() {
  return (
    <div className="row g-0 app-auth-wrapper">
	    <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
		    <div className="d-flex flex-column align-content-end">
			    <div className="app-auth-body mx-auto">
				    <div className="app-auth-branding mb-4"><Link className="app-logo" to="#"><img className="logo-icon me-2" src={portLogo} alt="logo" /></Link></div>
					<h2 className="auth-heading auth-heading-1 text-center mb-4">Register to Portal</h2>

					<div className="auth-form-container text-start mx-auto">
						<form className="auth-form auth-signup-form">
							<div className="email mb-3">
								<label className="sr-only" htmlFor="signup-email">Your Name</label>
								<input id="signup-name" name="signup-name" type="text" className="form-control signup-name" placeholder="Full name" required="required" />
							</div>
							<div className="email mb-3">
								<label className="sr-only" htmlFor="signup-email">Your Email</label>
								<input id="signup-email" name="signup-email" type="email" className="form-control signup-email" placeholder="Email" required="required" />
							</div>
							<div className="password mb-3">
								<label className="sr-only" htmlFor="signup-password">Password</label>
								<input id="signup-password" name="signup-password" type="password" className="form-control signup-password" placeholder="Create a password" required="required" />
							</div>
							<div className="extra mb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="RememberPassword" />
									<label className="form-check-label" htmlFor="RememberPassword">
									I agree to Portal's <Link to="#" className="app-link">Terms of Service</Link> and <Link to="#" className="app-link">Privacy Policy</Link>.
									</label>
								</div>
							</div>

							<div className="text-center">
								<button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto">Register</button>
							</div>
						</form>

						<div className="auth-option text-center pt-5">Already have an account? <Link className="text-link" to="/" >Log in</Link></div>
					</div>



			    </div>

			    {/* Footer */}
                <Footer />
		    </div>
	    </div>
	    <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
		    <div className="auth-background-holder">
		    </div>
		    <div className="auth-background-mask"></div>
		    <div className="auth-background-overlay p-3 p-lg-5">
			    <div className="d-flex flex-column align-content-end h-100">
				    <div className="h-100"></div>
				</div>
		    </div>
	    </div>
    </div>
  )
}

export default Register