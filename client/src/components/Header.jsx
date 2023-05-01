import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import portLogo from '../assets/images/logo-bg.png';
import auth from '../services/authService';

function Header() {
    const [user, setUser] = useState(null);
    const [profileDrop, setProfileDrop] = useState(false);
    const [notificationDrop, setNotificationDrop] = useState(false);
    const [navMenuActive, setNavMenuActive] = useState('home');

    useEffect(() => {
        const currentUser = auth.getCurrentUser();
        setUser(currentUser);
    }, []);


    return (
        <div>
            <header className="navbar navbar-expand-md navbar-dark d-print-none">
                <div className="container-xl">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                        <Link to=".">
                            <img src={portLogo} width="110" height="32" alt="Tabler" className="navbar-brand-image" />
                        </Link>
                    </h1>
                    <div className="navbar-nav flex-row order-md-last">
                        <div className="d-none d-md-flex">
                            <Link to="?theme=dark" className="nav-link px-0 hide-theme-dark" title="Enable dark mode" data-bs-toggle="tooltip" data-bs-placement="bottom">
                                {/* <!-- Download SVG icon from http://tabler-icons.io/i/moon --> */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>
                            </Link>
                            <Link to="?theme=light" className="nav-link px-0 hide-theme-light" title="Enable light mode" data-bs-toggle="tooltip" data-bs-placement="bottom">
                                {/* <!-- Download SVG icon from http://tabler-icons.io/i/sun --> */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="4" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>
                            </Link>
                            <div className="nav-item dropdown d-none d-md-flex me-3">
                                <Link to="#" onClick={() => setNotificationDrop(!notificationDrop)} className={`nav-link px-0 ${notificationDrop ? ' show' : ''}`} data-bs-toggle="dropdown" tabIndex="-1" aria-label="Show notifications">
                                    {/* <!-- Download SVG icon from http://tabler-icons.io/i/bell --> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
                                    <span className="badge bg-red"></span>
                                </Link>
                                <div onClick={() => setNotificationDrop(false)} className={`dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card${notificationDrop ? ' show' : ''}`} data-bs-popper="none">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Last updates</h3>
                                        </div>
                                        <div className="list-group list-group-flush list-group-hoverable">
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto"><span className="status-dot status-dot-animated bg-red d-block"></span></div>
                                                    <div className="col text-truncate">
                                                        <Link to="#" className="text-body d-block">Example 1</Link>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            Change deprecated html tags to text decoration classes (#29604)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <Link to="#" className="list-group-item-actions">
                                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/star --> */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto"><span className="status-dot d-block"></span></div>
                                                    <div className="col text-truncate">
                                                        <Link to="#" className="text-body d-block">Example 2</Link>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            justify-content:between ⇒ justify-content:space-between (#29734)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <Link to="#" className="list-group-item-actions show">
                                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/star --> */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-yellow" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto"><span className="status-dot d-block"></span></div>
                                                    <div className="col text-truncate">
                                                        <Link to="#" className="text-body d-block">Example 3</Link>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            Update change-version.js (#29736)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <Link to="#" className="list-group-item-actions">
                                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/star --> */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto"><span className="status-dot status-dot-animated bg-green d-block"></span></div>
                                                    <div className="col text-truncate">
                                                        <Link to="#" className="text-body d-block">Example 4</Link>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            Regenerate package-lock.json (#29730)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <Link to="#" className="list-group-item-actions">
                                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/star --> */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="#" onClick={() => setProfileDrop(!profileDrop)} className={`nav-link d-flex lh-1 text-reset p-0${profileDrop ? ' show' : ''}`} data-bs-toggle="dropdown" aria-label="Open user menu">
                                <span className="avatar avatar-sm text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                    </svg>
                                </span>
                            </Link>
                            <div onClick={() => setProfileDrop(false)} className={`dropdown-menu dropdown-menu-end dropdown-menu-arrow${profileDrop ? ' show' : ''}`} data-bs-popper="none">
                                <Link to="#" className="dropdown-item">
                                    <div className="d-none d-xl-block ps-2">
                                        <div>{`${user?.first_name?.charAt(0).toUpperCase() + user?.first_name.slice(1)} ${user?.last_name.charAt(0).toUpperCase() + user?.last_name.slice(1)}`}</div>
                                        <div className="mt-1 small text-muted">{user?.email}</div>
                                    </div>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to="#" className="dropdown-item">Profile & account</Link>
                                <Link to="#" className="dropdown-item">Settings</Link>
                                <Link to="/logout" className="dropdown-item">Logout</Link>
                            </div>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home" >
                                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/home --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="5 12 3 12 12 3 21 12 19 12" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                                        </span>
                                        <span className="nav-link-title">
                                            Home
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/users" >
                                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/checkbox --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                                            </svg>
                                        </span>
                                        <span className="nav-link-title">
                                            Users
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/employees" >
                                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/checkbox --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                                <path d="M6 21v-2a4 4 0 0 1 4 -4h1.5"></path>
                                                <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                                <path d="M20.2 20.2l1.8 1.8"></path>
                                            </svg>
                                        </span>
                                        <span className="nav-link-title">
                                            Employees
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={'nav-link'} to="/leave-applications">
                                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list-details" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M13 5h8"></path>
                                                <path d="M13 9h5"></path>
                                                <path d="M13 15h8"></path>
                                                <path d="M13 19h5"></path>
                                                <path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                                                <path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                                            </svg>
                                        </span>
                                        <span className="nav-link-title">
                                            Leave Applications
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!--//app-header--> */}
        </div>
    )
}

export default Header