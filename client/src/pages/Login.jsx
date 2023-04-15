import React from 'react';
import { Link } from "react-router-dom";
import portLogo from '../assets/images/logo-bg.png';
import '../assets/login.css';
import Footer from '../components/Footer';

function Login() {
    return (
        <div>
            <div className="row g-0 app-auth-wrapper">
                <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
                    <div className="d-flex flex-column align-content-end">
                        <div className="app-auth-body mx-auto">
                            <div className="app-auth-branding mb-4" >
                                <Link className="app-logo" to="#">
                                    <img className="logo-icon me-2" src={portLogo} alt="logo" />
                                </Link>
                            </div>
                            <h2 className="auth-heading text-center mb-5 login-title">Log in to Portal</h2>
                            <div className="auth-form-container text-start">
                                <form className="auth-form login-form">
                                    <div className="email mb-3">
                                        <label className="sr-only" htmlFor="signin-email">Email</label>
                                        <input id="signin-email" name="signin-email" type="email" className="form-control signin-email" placeholder="Email address" required="required" />
                                    </div>
                                    <div className="password mb-3">
                                        <label className="sr-only" htmlFor="signin-password">Password</label>
                                        <input id="signin-password" name="signin-password" type="password" className="form-control signin-password" placeholder="Password" required="required" />
                                        <div className="extra mt-3 row justify-content-between">
                                            <div className="col-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="RememberPassword" />
                                                    <label className="form-check-label" htmlFor="RememberPassword">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="forgot-password text-end">
                                                    <Link to="/reset-password">Forgot password?</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto">Log In</button>
                                    </div>
                                </form>

                                <div className="auth-option text-center pt-5">No Account? Sign up <Link className="text-link" to="/register" >here</Link>.</div>
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
        </div>
    )
}

export default Login