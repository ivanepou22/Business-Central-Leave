import React, {useState} from 'react';
import { Link } from "react-router-dom";
import portLogo from '../assets/images/logo-bg.png';
import '../assets/style.css';
import auth from '../services/authService';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // perform login here with username and password
        try {
            await auth.login(username, password);
            setUser(auth.getCurrentUser());
        } catch (ex) {
            toast.error(ex);
        }
    }

    if (user) return <Navigate to="/home" />; // If user is logged in, redirect to home page

    return (
            <div className="page page-center">
                <div className="container-tight py-1">
                    <div className="text-center mb-1">
                        <Link to="." className="navbar-brand navbar-brand-autodark">
                            <img src={portLogo} height="36" alt="" />
                        </Link>
                    </div>
                    <form className="card card-md" onSubmit={handleSubmit} autoComplete="off">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Login to your account</h2>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-control" name='username' value={username} onChange={handleUsernameChange} placeholder="Enter username" autoComplete="off"/>
                            </div>
                            <div className="mb-2">
                                <label className="form-label">
                                    Password
                                    <span className="form-label-description">
                                        <Link to="/forgot-password">I forgot password</Link>
                                    </span>
                                </label>
                                <div className="input-group input-group-flat">
                                    <input type="password" className="form-control" name='password' value={password} onChange={handlePasswordChange} placeholder="Password" autoComplete="off" />
                                    <span className="input-group-text">
                                        <Link to="#" className="link-secondary" title="Show password" data-bs-toggle="tooltip">
                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/eye --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="2" /><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" /></svg>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <span className="form-check-label">Remember me on this device</span>
                                </label>
                            </div>
                            <div className="form-footer">
                                <button type="submit" className="btn btn-primary w-100">Sign in</button>
                            </div>
                        </div>
                        <div className="hr-text">or</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col"><Link to="#" className="btn btn-white w-100">
                                    {/* <!-- Download SVG icon from http://tabler-icons.io/i/brand-github --> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-github" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                                    Login with Github
                                </Link></div>
                                <div className="col"><Link to="#" className="btn btn-white w-100">
                                    {/* <!-- Download SVG icon from http://tabler-icons.io/i/brand-twitter --> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-twitter" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" /></svg>
                                    Login with Twitter
                                </Link></div>
                            </div>
                        </div>
                    </form>
                    <div className="text-center text-muted mt-3">
                        Don't have account yet? <Link to="/register" tabIndex="-1">Sign up</Link>
                    </div>
                </div>
            </div>
    )
}

export default Login