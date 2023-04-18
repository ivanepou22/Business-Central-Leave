import React from 'react'
import portLogo from '../assets/images/M-Logo-1-01.png';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <div>
            <div id="app-sidepanel" className="app-sidepanel">
                <div id="sidepanel-drop" className="sidepanel-drop"></div>
                <div className="sidepanel-inner d-flex flex-column">
                    <Link to="#" id="sidepanel-close" className="sidepanel-close d-xl-none"
                    >&times;</Link>
                    <div className="app-branding">
                        <Link className="app-logo" to="/home">
                            <img
                                className="logo-icon logo-icon-1 me-2"
                                src={portLogo}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    {/* <!--//app-branding--> */}

                    <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
                        <ul className="app-menu list-unstyled accordion" id="menu-accordion">
                            <li className="nav-item mt-2">
                                {/* <!--//Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
                                <Link className="nav-link active" to="#">
                                    <span className="nav-icon">
                                        <svg
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 16 16"
                                            className="bi bi-house-door"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                                            />
                                        </svg>
                                    </span>
                                    <span className="nav-link-text">Overview</span> </Link>
                                {/* <!--//nav-link--> */}
                            </li>
                            {/* <!--//nav-item--> */}
                            <li className="nav-item">
                                {/* <!--//Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
                                <Link className="nav-link" to="/employees">
                                    <span className="nav-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1.6em" height="1.6em"><circle cx="35" cy="11" r="4.5" fill="none" stroke="#000" stroke-width="3" /><circle cx="21.5" cy="11.5" r="4" fill="none" stroke="#000" stroke-width="3" /><circle cx="10.5" cy="12.5" r="3" fill="none" stroke="#000" stroke-width="3" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5.5,27l0,6.5c0,1.1,0.9,2,2,2h1.9" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11.5,21.6c-0.4-0.1-0.9-0.1-1.4-0.1c-2.6,0.2-4.6,2.5-4.6,5.2" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M24.1,22c-1.1-0.4-2.2-0.6-3.5-0.5c-3.6,0.4-6.1,3.6-6.1,7.2l0,7.8c0,1.1,0.9,2,2,2h5.4" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M42.5,29.3v10.2c0,1.1-0.9,2-2,2h-11c-1.1,0-2-0.9-2-2v-3" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M27.5,30.8V29c0-4.2,3.5-7.6,7.7-7.5c1.9,0.1,3.7,0.9,5,2.2" /></svg>
                                    </span>
                                    <span className="nav-link-text">Employees</span> </Link>
                                {/* <!--//nav-link--> */}
                            </li>
                            {/* <!--//nav-item--> */}
                            <li className="nav-item">
                                {/* <!--//Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
                                <Link className="nav-link" to="/leave-applications">
                                    <span className="nav-icon">
                                        <svg
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 16 16"
                                            className="bi bi-card-list"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
                                            />
                                            <circle cx="3.5" cy="5.5" r=".5" />
                                            <circle cx="3.5" cy="8" r=".5" />
                                            <circle cx="3.5" cy="10.5" r=".5" />
                                        </svg>
                                    </span>
                                    <span className="nav-link-text">Applications</span> </Link>
                                {/* <!--//nav-link--> */}
                            </li>
                            <li className="nav-item">
                                {/* <!--//Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
                                <Link className="nav-link" to="/users">
                                    <span className="nav-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="1.6em" height="1.6em"><path d="M 37 0 C 32.59375 0 29 3.59375 29 8 C 29 12.40625 32.59375 16 37 16 C 41.40625 16 45 12.40625 45 8 C 45 3.59375 41.40625 0 37 0 Z M 21.5 1 C 17.921875 1 15 3.921875 15 7.5 C 15 11.078125 17.921875 14 21.5 14 C 25.078125 14 28 11.078125 28 7.5 C 28 3.921875 25.078125 1 21.5 1 Z M 37 2 C 40.324219 2 43 4.675781 43 8 C 43 11.324219 40.324219 14 37 14 C 33.675781 14 31 11.324219 31 8 C 31 4.675781 33.675781 2 37 2 Z M 9 3 C 6.25 3 4 5.25 4 8 C 4 10.75 6.25 13 9 13 C 11.75 13 14 10.75 14 8 C 14 5.25 11.75 3 9 3 Z M 21.5 3 C 23.996094 3 26 5.003906 26 7.5 C 26 9.996094 23.996094 12 21.5 12 C 19.003906 12 17 9.996094 17 7.5 C 17 5.003906 19.003906 3 21.5 3 Z M 9 5 C 10.667969 5 12 6.332031 12 8 C 12 9.667969 10.667969 11 9 11 C 7.332031 11 6 9.667969 6 8 C 6 6.332031 7.332031 5 9 5 Z M 9 15 C 5.15625 15 2 18.15625 2 22 L 2 34 C 2 34.550781 2.449219 35 3 35 L 13 35 L 13 40 C 13 40.550781 13.449219 41 14 41 L 24 41 L 24 49 C 24 49.550781 24.449219 50 25 50 L 47 50 C 47.550781 50 48 49.550781 48 49 L 48 31 C 48 24.363281 42.636719 19 36 19 C 33.4375 19 31.179688 19.914063 29.253906 21.269531 C 27.964844 18.183594 25 16 21.5 16 C 18.945313 16 16.738281 17.132813 15.1875 18.851563 C 14.023438 16.570313 11.6875 15 9 15 Z M 9 17 C 11.417969 17 13.503906 18.757813 13.917969 21.078125 C 13.988281 21.492188 14.316406 21.816406 14.734375 21.886719 C 15.148438 21.957031 15.5625 21.761719 15.769531 21.390625 C 16.910156 19.378906 18.96875 18 21.5 18 C 24.542969 18 27.136719 20.082031 27.828125 22.9375 C 27.910156 23.277344 28.167969 23.550781 28.503906 23.65625 C 28.839844 23.757813 29.203125 23.679688 29.46875 23.445313 C 31.1875 21.90625 33.4375 21 36 21 C 41.566406 21 46 25.433594 46 31 L 46 48 L 26 48 L 26 40 C 26 39.449219 25.550781 39 25 39 L 15 39 L 15 34 C 15 33.449219 14.550781 33 14 33 L 4 33 L 4 22 C 4 19.246094 6.246094 17 9 17 Z" /></svg>
                                    </span>
                                    <span className="nav-link-text">Users</span> </Link>
                                {/* <!--//nav-link--> */}
                            </li>
                            {/* <!--//nav-item--> */}
                        </ul>
                        {/* <!--//app-menu--> */}
                    </nav>
                    {/* <!--//app-nav--> */}
                    <div className="app-sidepanel-footer">
                        <nav className="app-nav app-nav-footer">
                            <ul className="app-menu footer-menu list-unstyled">
                                <li className="nav-item">
                                    {/* <!--//Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
                                    <Link className="nav-link" to="#">
                                        <span className="nav-icon">
                                            <svg
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 16 16"
                                                className="bi bi-gear"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
                                                />
                                            </svg>
                                        </span>
                                        <span className="nav-link-text">Settings</span> </Link>
                                    {/* ><!--//nav-link--> */}
                                </li>
                                {/* <!--//nav-item--> */}
                            </ul>
                            {/* <!--//footer-menu--> */}
                        </nav>
                    </div>
                    {/* <!--//app-sidepanel-footer--> */}
                </div>
                {/* <!--//sidepanel-inner--> */}
            </div>
        </div>
    )
}

export default SideBar