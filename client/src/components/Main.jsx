import React, { useEffect, useState } from 'react'
import { getEmployees } from '../services/employeeService';
import { Link } from 'react-router-dom';
import { getLeaveApplications } from '../services/leaveApplicationService';
import Footer from './Footer';

function Main() {
    const [users, setUsers] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [leaveApplications, setLeaveApplications] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await getEmployees();
            setEmployees(data.value);
            const { data: applications } = await getLeaveApplications();
            setLeaveApplications(applications.value);
        }

        fetchData();
    }, []);

    console.log(employees);
    console.log(leaveApplications);
    console.log(users);

    return (
        <div>
            <div className="page-wrapper">
                <div className="container-xl">
                    {/* Page title */}
                    <div className="page-header d-print-none text-white">
                        <div className="row align-items-center">
                            <div className="col">
                                {/* Page pre-title */}
                                <div className="page-pretitle">
                                    Overview
                                </div>
                                <h2 className="page-title">
                                    Leave Management
                                </h2>
                            </div>
                            {/* Page title actions */}
                            <div className="col-auto ms-auto d-print-none">
                                <div className="btn-list">
                                    <span className="d-none d-sm-inline">
                                        <Link to="#" className="btn btn-dark">
                                            New view
                                        </Link>
                                    </span>
                                    <Link to="#" className="btn btn-primary d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report">
                                        {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                        Create new report
                                    </Link>
                                    <Link to="#" className="btn btn-primary d-sm-none btn-icon" data-bs-toggle="modal" data-bs-target="#modal-report" aria-label="Create new report">
                                        {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-deck row-cards">
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="subheader">Sales</div>
                                            <div className="ms-auto lh-1">
                                                <div className="dropdown">
                                                    <Link className="dropdown-toggle text-muted" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</Link>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <Link className="dropdown-item active" to="#">Last 7 days</Link>
                                                        <Link className="dropdown-item" to="#">Last 30 days</Link>
                                                        <Link className="dropdown-item" to="#">Last 3 months</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h1 mb-3">75%</div>
                                        <div className="d-flex mb-2">
                                            <div>Conversion rate</div>
                                            <div className="ms-auto">
                                                <span className="text-green d-inline-flex align-items-center lh-1">
                                                    7% {/* Download SVG icon from http://tabler-icons.io/i/trending-up */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon ms-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="3 17 9 11 13 15 21 7" /><polyline points="14 7 21 7 21 14" /></svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-blue" style={{ width: '75%' }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                <span className="visually-hidden">75% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="subheader">Revenue</div>
                                            <div className="ms-auto lh-1">
                                                <div className="dropdown">
                                                    <Link className="dropdown-toggle text-muted" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</Link>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <Link className="dropdown-item active" to="#">Last 7 days</Link>
                                                        <Link className="dropdown-item" to="#">Last 30 days</Link>
                                                        <Link className="dropdown-item" to="#">Last 3 months</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline">
                                            <div className="h1 mb-0 me-2">$4,300</div>
                                            <div className="me-auto">
                                                <span className="text-green d-inline-flex align-items-center lh-1">
                                                    8% {/* Download SVG icon from http://tabler-icons.io/i/trending-up */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon ms-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="3 17 9 11 13 15 21 7" /><polyline points="14 7 21 7 21 14" /></svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="chart-revenue-bg" className="chart-sm"></div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="subheader">New clients</div>
                                            <div className="ms-auto lh-1">
                                                <div className="dropdown">
                                                    <Link className="dropdown-toggle text-muted" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</Link>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <Link className="dropdown-item active" to="#">Last 7 days</Link>
                                                        <Link className="dropdown-item" to="#">Last 30 days</Link>
                                                        <Link className="dropdown-item" to="#">Last 3 months</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline">
                                            <div className="h1 mb-3 me-2">6,782</div>
                                            <div className="me-auto">
                                                <span className="text-yellow d-inline-flex align-items-center lh-1">
                                                    0% {/* Download SVG icon from http://tabler-icons.io/i/minus */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon ms-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div id="chart-new-clients" className="chart-sm"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="subheader">Active users</div>
                                            <div className="ms-auto lh-1">
                                                <div className="dropdown">
                                                    <Link className="dropdown-toggle text-muted" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</Link>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <Link className="dropdown-item active" to="#">Last 7 days</Link>
                                                        <Link className="dropdown-item" to="#">Last 30 days</Link>
                                                        <Link className="dropdown-item" to="#">Last 3 months</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline">
                                            <div className="h1 mb-3 me-2">2,986</div>
                                            <div className="me-auto">
                                                <span className="text-green d-inline-flex align-items-center lh-1">
                                                    4% {/* Download SVG icon from http://tabler-icons.io/i/trending-up */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon ms-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="3 17 9 11 13 15 21 7" /><polyline points="14 7 21 7 21 14" /></svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div id="chart-active-users" className="chart-sm"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row row-cards">
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="card card-sm">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span className="bg-blue text-white avatar">{/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" /><path d="M12 3v3m0 12v3" /></svg>
                                                        </span>
                                                    </div>
                                                    <div className="col">
                                                        <div className="font-weight-medium">
                                                            132 Sales
                                                        </div>
                                                        <div className="text-muted">
                                                            12 waiting payments
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="card card-sm">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span className="bg-green text-white avatar">{/* Download SVG icon from http://tabler-icons.io/i/shopping-cart */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="6" cy="19" r="2" /><circle cx="17" cy="19" r="2" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                                                        </span>
                                                    </div>
                                                    <div className="col">
                                                        <div className="font-weight-medium">
                                                            78 Orders
                                                        </div>
                                                        <div className="text-muted">
                                                            32 shipped
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="card card-sm">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span className="bg-twitter text-white avatar">{/* Download SVG icon from http://tabler-icons.io/i/brand-twitter */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" /></svg>
                                                        </span>
                                                    </div>
                                                    <div className="col">
                                                        <div className="font-weight-medium">
                                                            623 Shares
                                                        </div>
                                                        <div className="text-muted">
                                                            16 today
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="card card-sm">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span className="bg-facebook text-white avatar">{/* Download SVG icon from http://tabler-icons.io/i/brand-facebook */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                                                        </span>
                                                    </div>
                                                    <div className="col">
                                                        <div className="font-weight-medium">
                                                            132 Likes
                                                        </div>
                                                        <div className="text-muted">
                                                            21 today
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row row-cards">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <p className="mb-3">Using Storage <strong>6854.45 MB </strong>of 8 GB</p>
                                                <div className="progress progress-separated mb-3">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '44%' }}></div>
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '19%' }}></div>
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '9%' }}></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-auto d-flex align-items-center pe-2">
                                                        <span className="legend me-2 bg-primary"></span>
                                                        <span>Regular</span>
                                                        <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">915MB</span>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center px-2">
                                                        <span className="legend me-2 bg-info"></span>
                                                        <span>System</span>
                                                        <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">415MB</span>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center px-2">
                                                        <span className="legend me-2 bg-success"></span>
                                                        <span>Shared</span>
                                                        <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">201MB</span>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center ps-2">
                                                        <span className="legend me-2"></span>
                                                        <span>Free</span>
                                                        <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">612MB</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Invoices</h3>
                                    </div>
                                    <div className="card-body border-bottom py-3">
                                        <div className="d-flex">
                                            <div className="text-muted">
                                                Show
                                                <div className="mx-2 d-inline-block">
                                                    <input type="text" className="form-control form-control-sm" defaultValue="8" size="3" aria-label="Invoices count" />
                                                </div>
                                                entries
                                            </div>
                                            <div className="ms-auto text-muted">
                                                Search:
                                                <div className="ms-2 d-inline-block">
                                                    <input type="text" className="form-control form-control-sm" aria-label="Search invoice" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table card-table table-vcenter text-nowrap datatable">
                                            <thead>
                                                <tr>
                                                    <th className="w-1"><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all invoices" /></th>
                                                    <th className="w-1">No.
                                                        {/* {/* Download SVG icon from http://tabler-icons.io/i/chevron-up */}
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-sm text-dark icon-thick" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="6 15 12 9 18 15" /></svg>
                                                    </th>
                                                    <th>Invoice Subject</th>
                                                    <th>Client</th>
                                                    <th>VAT No.</th>
                                                    <th>Created</th>
                                                    <th>Status</th>
                                                    <th>Price</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                                    <td><span className="text-muted">001401</span></td>
                                                    <td><Link to="invoice.html" className="text-reset" tabIndex="-1">Design Works</Link></td>
                                                    <td>
                                                        <span className="flag flag-country-us"></span>
                                                        Carlson Limited
                                                    </td>
                                                    <td>
                                                        87956621
                                                    </td>
                                                    <td>
                                                        15 Dec 2017
                                                    </td>
                                                    <td>
                                                        <span className="badge bg-success me-1"></span> Paid
                                                    </td>
                                                    <td>$887</td>
                                                    <td className="text-end">
                                                        <span className="dropdown">
                                                            <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <Link className="dropdown-item" to="#">
                                                                    Action
                                                                </Link>
                                                                <Link className="dropdown-item" to="#">
                                                                    Another action
                                                                </Link>
                                                            </div>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                                    <td><span className="text-muted">001403</span></td>
                                                    <td><Link to="invoice.html" className="text-reset" tabIndex="-1">New Dashboard</Link></td>
                                                    <td>
                                                        <span className="flag flag-country-de"></span>
                                                        Bluewolf
                                                    </td>
                                                    <td>
                                                        87952621
                                                    </td>
                                                    <td>
                                                        23 Oct 2017
                                                    </td>
                                                    <td>
                                                        <span className="badge bg-warning me-1"></span> Pending
                                                    </td>
                                                    <td>$534</td>
                                                    <td className="text-end">
                                                        <span className="dropdown">
                                                            <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <Link className="dropdown-item" to="#">
                                                                    Action
                                                                </Link>
                                                                <Link className="dropdown-item" to="#">
                                                                    Another action
                                                                </Link>
                                                            </div>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                                    <td><span className="text-muted">001404</span></td>
                                                    <td><Link to="invoice.html" className="text-reset" tabIndex="-1">Landing Page</Link></td>
                                                    <td>
                                                        <span className="flag flag-country-br"></span>
                                                        Salesforce
                                                    </td>
                                                    <td>
                                                        87953421
                                                    </td>
                                                    <td>
                                                        2 Sep 2017
                                                    </td>
                                                    <td>
                                                        <span className="badge bg-secondary me-1"></span> Due in 2 Weeks
                                                    </td>
                                                    <td>$1500</td>
                                                    <td className="text-end">
                                                        <span className="dropdown">
                                                            <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <Link className="dropdown-item" to="#">
                                                                    Action
                                                                </Link>
                                                                <Link className="dropdown-item" to="#">
                                                                    Another action
                                                                </Link>
                                                            </div>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                                    <td><span className="text-muted">001405</span></td>
                                                    <td><Link to="invoice.html" className="text-reset" tabIndex="-1">Marketing Templates</Link></td>
                                                    <td>
                                                        <span className="flag flag-country-pl"></span>
                                                        Printic
                                                    </td>
                                                    <td>
                                                        87956621
                                                    </td>
                                                    <td>
                                                        29 Jan 2018
                                                    </td>
                                                    <td>
                                                        <span className="badge bg-danger me-1"></span> Paid Today
                                                    </td>
                                                    <td>$648</td>
                                                    <td className="text-end">
                                                        <span className="dropdown">
                                                            <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <Link className="dropdown-item" to="#">
                                                                    Action
                                                                </Link>
                                                                <Link className="dropdown-item" to="#">
                                                                    Another action
                                                                </Link>
                                                            </div>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                                    <td><span className="text-muted">001406</span></td>
                                                    <td><Link to="invoice.html" className="text-reset" tabIndex="-1">Sales Presentation</Link></td>
                                                    <td>
                                                        <span className="flag flag-country-br"></span>
                                                        Tabdaq
                                                    </td>
                                                    <td>
                                                        87956621
                                                    </td>
                                                    <td>
                                                        4 Feb 2018
                                                    </td>
                                                    <td>
                                                        <span className="badge bg-secondary me-1"></span> Due in 3 Weeks
                                                    </td>
                                                    <td>$300</td>
                                                    <td className="text-end">
                                                        <span className="dropdown">
                                                            <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <Link className="dropdown-item" to="#">
                                                                    Action
                                                                </Link>
                                                                <Link className="dropdown-item" to="#">
                                                                    Another action
                                                                </Link>
                                                            </div>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="card-footer d-flex align-items-center">
                                        <p className="m-0 text-muted">Showing <span>1</span> to <span>8</span> of <span>16</span> entries</p>
                                        <ul className="pagination m-0 ms-auto">
                                            <li className="page-item disabled">
                                                <Link className="page-link" to="#" tabIndex="-1" aria-disabled="true">
                                                    {/* {/* Download SVG icon from http://tabler-icons.io/i/chevron-left */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="15 6 9 12 15 18" /></svg>
                                                    prev
                                                </Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                            <li className="page-item active"><Link className="page-link" to="#">2</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">5</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    {/* next {/* Download SVG icon from http://tabler-icons.io/i/chevron-right */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="9 6 15 12 9 18" /></svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Main