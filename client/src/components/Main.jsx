import React, { useEffect, useState } from 'react'
import { getEmployees } from '../services/employeeService';
import { Link } from 'react-router-dom';
import { getLeaveApplications } from '../services/leaveApplicationService';
import Footer from './Footer';
import { getUsers } from '../services/userService';

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
            const {data: ourUsers} = await getUsers();
            setUsers(ourUsers.value);
        }

        fetchData();
    }, []);
    console.log(users)
    //leave applications without history
    const leaveAppWHistory = leaveApplications.filter((app) => app.Leave_Status != 'History');
    console.log(employees);
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
                                    Employee Leave Management
                                </h2>
                            </div>
                            {/* Page title actions */}
                            <div className="col-auto ms-auto d-print-none">
                                <div className="btn-list">
                                    <span className="d-none d-sm-inline">
                                        <Link to="#" className="btn btn-dark">

                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                            New User
                                        </Link>
                                    </span>
                                    <Link to="#" className="btn btn-primary d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report">
                                        {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                        New Leave Application
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
                                            <div className="subheader">Users</div>
                                        </div>
                                        <div className="h1 mb-3">{users?.length.toFixed(2)}</div>
                                        <div className="d-flex mb-2">
                                            <div>Users</div>
                                        </div>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-green" style={{ width: '100%' }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                <span className="visually-hidden">{users?.length.toFixed(2)} Users</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="subheader">Employees</div>
                                        </div>
                                        <div className="h1 mb-3">{employees?.length.toFixed(2)}</div>
                                        <div className="d-flex mb-2">
                                            <div>Employees</div>
                                        </div>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-blue" style={{ width: '100%' }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                <span className="visually-hidden">{employees?.length.toFixed(2)} Employees</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="subheader">All Leave Applications</div>
                                        </div>
                                        <div className="h1 mb-3">{leaveAppWHistory?.length.toFixed(2)}</div>
                                        <div className="d-flex mb-2">
                                            <div>Leave Applications</div>
                                        </div>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-orange" style={{ width: '100%' }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                <span className="visually-hidden">{leaveAppWHistory?.length.toFixed(2)} Leave Applications</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="subheader">My Leave Applications</div>
                                        </div>
                                        <div className="h1 mb-3">{leaveAppWHistory?.length.toFixed(2)}</div>
                                        <div className="d-flex mb-2">
                                            <div>My Leave Applications</div>
                                        </div>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-cyan" style={{ width: '100%' }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                <span className="visually-hidden">My Leave Applications</span>
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
                                                <p className="mb-3">My Leave Applications:  <strong>{leaveAppWHistory?.length.toFixed(2)} Applications </strong></p>
                                            </div>
                                        </div>
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
                                                <p className="mb-3">Leave Applications:  <strong>{leaveAppWHistory?.length.toFixed(2)} Applications </strong></p>
                                                <div className="progress progress-separated mb-3">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '34%' }}></div>
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '20%' }}></div>
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '18%' }}></div>
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '9%' }}></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-auto d-flex align-items-center pe-2">
                                                        <span className="legend me-2 bg-primary"></span>
                                                        <span>Created</span>
                                                        <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">915MB</span>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center px-2">
                                                        <span className="legend me-2 bg-info"></span>
                                                        <span>Pending Approval</span>
                                                        <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">415MB</span>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center px-2">
                                                        <span className="legend me-2 bg-warning"></span>
                                                        <span>Cancelled/Rejected</span>
                                                        <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">201MB</span>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center px-2">
                                                        <span className="legend me-2 bg-success"></span>
                                                        <span>Approved</span>
                                                        <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">201MB</span>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center ps-2">
                                                        <span className="legend me-2"></span>
                                                        <span>Taken</span>
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
                                        <h3 className="card-title">Employee List</h3>
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
                                                    <th className="w-1">No.</th>
                                                    <th>Name</th>
                                                    <th>Gender</th>
                                                    <th>Title</th>
                                                    <th>Status</th>
                                                    <th>Annual_Leave</th>
                                                    <th>Maternity_Leave</th>
                                                    <th>Paternity_Leave</th>
                                                    <th>Sick_Leave</th>
                                                    <th>Study_Leave</th>
                                                    <th>Compassionate_Leave</th>
                                                    <th>Leave_Without_Pay</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    employees?.map((employee) => (
                                                        <tr key={employee.No}>
                                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" onClick={() => console.log(employee)}/></td>
                                                            <td><span className="text-muted">{employee.No}</span></td>
                                                            <td><Link to="#" className="text-reset" tabIndex="-1">{employee.Full_Name}</Link></td>
                                                            <td>
                                                                {employee.Gender}
                                                            </td>
                                                            <td>
                                                                {employee.Job_Title}
                                                            </td>
                                                            <td>
                                                                {employee.Status}
                                                            </td>
                                                            <td>
                                                                {employee.Annual_Leave_Days_Available}
                                                            </td>
                                                            <td>
                                                                {employee.Maternity_Leave_Days_Available}
                                                            </td>
                                                            <td>
                                                                {employee.Paternity_Leave_Days_Available}
                                                            </td>
                                                            <td>
                                                                {employee.Sick_Days_Available}
                                                            </td>
                                                            <td>
                                                                {employee.Study_Leave_Days_Available}
                                                            </td>
                                                            <td>
                                                                {employee.Compasionate_Leave_Days_Available}
                                                            </td>
                                                            <td>
                                                                {employee.Leave_Without_Pay_Days_Available}
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
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