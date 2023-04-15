import React from 'react'
import { Link } from 'react-router-dom'
import portLogo from '../assets/images/logo-bg.png';
import Footer from '../components/Footer';
import '../assets/style.css'

function ResetPassword() {
  return (
    <div className="row g-0 app-auth-wrapper">
	    <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
		    <div className="d-flex flex-column align-content-end">
			    <div className="app-auth-body mx-auto">
				    <div className="app-auth-branding mb-4"><Link className="app-logo" to="#"><img className="logo-icon me-2" src={portLogo} alt="logo" /></Link></div>
					<h2 className="auth-heading auth-heading-1 text-center mb-4">Password Reset</h2>

					<div className="auth-intro mb-4 text-center">Enter your email address below. We'll email you a link to a page where you can easily create a new password.</div>

					<div className="auth-form-container text-left">

						<form className="auth-form resetpass-form">
							<div className="email mb-3">
              <label className="sr-only" htmlFor="reg-email" >Your Email</label>
								<input id="reg-email" name="reg-email" type="email" className="form-control login-email" aria-label='reg-email' placeholder="Your Email" required="required" />
							</div>
							<div className="text-center">
								<button type="submit" className="btn app-btn-primary btn-block theme-btn mx-auto">Reset Password</button>
							</div>
						</form>

						<div className="auth-option text-center pt-5"><Link className="text-link" to="/">Log in</Link> <span className="px-2">|</span> <Link className="text-link" to="/register" >Sign up</Link></div>
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

export default ResetPassword