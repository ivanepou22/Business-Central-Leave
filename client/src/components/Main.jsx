import React, { useEffect, useState } from 'react'
import { getEmployees } from '../services/employeeService';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import _ from 'lodash';
import { paginate } from '../utils/paginate';
import auth from '../services/authService';
import { getLeaveApplications } from '../services/leaveApplicationService';
import Footer from './Footer';
import { getUsers } from '../services/userService';
import SearchBar from './common/SearchBar';
import LeaveTable from './LeaveTable';
import Pagination from './common/Pagination';
import UserModal from './UserModal';

function Main() {
    const [users, setUsers] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [leaveApplications, setLeaveApplications] = useState([]);
    const [sortColumn, setSortColumn] = useState({ path: 'Entry_No', order: 'asc' });
    const [searchQuery, setSearchQuery] = useState('');
    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = React.useState(false);

    useEffect(() => {
        async function fetchData() {
            const { data } = await getEmployees();
            setEmployees(data.value);
            const { data: applications } = await getLeaveApplications();
            setLeaveApplications(applications.value);
            const { data: ourUsers } = await getUsers();
            setUsers(ourUsers);
        }

        fetchData();
    }, []);

    //Handle Modal
    const handleModal = () => {
        setShowModal(!showModal);
      };

    const user = auth.getCurrentUser();
    if (!user) return <Navigate to={'/'} />

    //leave applications without history
    const leaveAppWHistory = leaveApplications.filter((app) => (app.Leave_Status != 'Closed'));
    console.log(leaveAppWHistory);
    //filter to the user
    const myLeaveApplications = leaveAppWHistory.filter((app) => (app.Employee_No === user.employee_no))

    const myCreatedApplications = myLeaveApplications.filter((app) => app.Leave_Status === 'Application')?.length;
    const myPendingApplications = myLeaveApplications.filter((app) => app.Leave_Status === 'Pending Approval')?.length;
    const myApprovedApplications = myLeaveApplications.filter((app) => app.Leave_Status === 'Approved')?.length;
    const myRejectedCancelledApplications = myLeaveApplications.filter((app) => (app.Leave_Status === 'Rejected') || (app.Leave_Status === 'Cancelled')).length;
    const myTaken = myLeaveApplications.filter((app) => (app.Leave_Status === 'History')).length;

    const total = (myCreatedApplications + myPendingApplications + myApprovedApplications + myRejectedCancelledApplications + myTaken)

    const myCreatedApplicationsPercent = (myCreatedApplications / total) * 100;
    const myPendingApplicationsPercent = (myPendingApplications / total) * 100;
    const myApprovedApplicationsPercent = (myApprovedApplications / total) * 100;
    const myRejectedCancelledApplicationsPercent = (myRejectedCancelledApplications / total) * 100;

    const handleDelete = async (application) => {
        const originalApplications = [...myLeaveApplications];
        const updatedApplications = originalApplications.filter((app) => app.Entry_No !== application.Entry_No);
        setLeaveApplications(updatedApplications);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSort = (sortColumn) => {
        setSortColumn(sortColumn);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    const handleRowNumber = (value) => {
        const pageSize = parseInt(value);
        setPageSize(pageSize);
    };

    const getPageData = () => {

        const filtered = myLeaveApplications.filter((e) =>
            e.Description.toLowerCase().startsWith(searchQuery.toLowerCase()));

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const paginatedApplications = paginate(sorted, currentPage, pageSize);
        return { totalCount: filtered.length, data: paginatedApplications };
    };

    const { totalCount, data: paginatedApplications } = getPageData();

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
                            </div>
                            {/* Page title actions */}
                            <div className="col-auto ms-auto d-print-none">
                                <div className="btn-list">
                                    {
                                        user?.role === 'admin' ?
                                            <span className="d-none d-sm-inline">
                                                <Link className="btn btn-dark" onClick={handleModal}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                                    New User
                                                </Link>
                                            </span> : ''
                                    }
                                    <Link to="#" className="btn btn-dark d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report">
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
                            {
                                user?.role === 'admin' ? (
                                    <>
                                        <div className="col-sm-6 col-lg-4">
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
                                        <div className="col-sm-6 col-lg-4">
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
                                        <div className="col-sm-6 col-lg-4">
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
                                    </>
                                ) : ''
                            }

                            <div className="col-lg-12">
                                <div className="row row-cards">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <p className="mb-3">My Leave Applications:  <strong>{myLeaveApplications?.length.toFixed(2)} Applications </strong></p>
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
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-folder-plus" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                <path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5"></path>
                                                                <path d="M16 19h6"></path>
                                                                <path d="M19 16v6"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div className="col">
                                                        <div className="font-weight-medium">
                                                            Not Submitted
                                                        </div>
                                                        <div className="text-muted">
                                                            {myCreatedApplications?.toFixed(2)} Apps
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-2">
                                        <div className="card card-sm">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span className="bg-green text-white avatar">{/* Download SVG icon from http://tabler-icons.io/i/shopping-cart */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-certificate" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                                                <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path>
                                                                <path d="M6 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                                                <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div className="col">
                                                        <div className="font-weight-medium">
                                                            Approved
                                                        </div>
                                                        <div className="text-muted">
                                                            {myApprovedApplications?.toFixed(2)} Apps
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-2">
                                        <div className="card card-sm">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span className="bg-twitter text-white avatar">{/* Download SVG icon from http://tabler-icons.io/i/brand-twitter */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid-pattern" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                                                <path d="M10 8v8"></path>
                                                                <path d="M14 8v8"></path>
                                                                <path d="M8 10h8"></path>
                                                                <path d="M8 14h8"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div className="col">
                                                        <div className="font-weight-medium">
                                                            Pending
                                                        </div>
                                                        <div className="text-muted">
                                                            {myPendingApplications?.toFixed(2)} Apps.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-2">
                                        <div className="card card-sm">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span className="bg-facebook text-white avatar">{/* Download SVG icon from http://tabler-icons.io/i/brand-facebook */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-float-left" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                <path d="M4 5m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                                                                <path d="M14 7l6 0"></path>
                                                                <path d="M14 11l6 0"></path>
                                                                <path d="M4 15l16 0"></path>
                                                                <path d="M4 19l16 0"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div className="col">
                                                        <div className="font-weight-medium">
                                                            Taken
                                                        </div>
                                                        <div className="text-muted">
                                                            {myTaken?.toFixed(2)} Apps
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
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid-pattern" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                                                <path d="M10 8v8"></path>
                                                                <path d="M14 8v8"></path>
                                                                <path d="M8 10h8"></path>
                                                                <path d="M8 14h8"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div className="col">
                                                        <div className="font-weight-medium">
                                                            Cancelled/Rejected
                                                        </div>
                                                        <div className="text-muted">
                                                            {myRejectedCancelledApplications?.toFixed(2)} Apps.
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
                                                <p className="mb-3">My Leave Applications:  <strong>{myLeaveApplications?.length.toFixed(2)} Applications </strong></p>
                                                <div className="progress progress-separated mb-3">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${myCreatedApplicationsPercent}%` }}></div>
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: `${myPendingApplicationsPercent}%` }}></div>
                                                    <div className="progress-bar bg-red" role="progressbar" style={{ width: `${myRejectedCancelledApplicationsPercent}%` }}></div>
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: `${myApprovedApplicationsPercent}%` }}></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-auto d-flex align-items-center pe-2">
                                                        <span className="legend me-2 bg-primary"></span>
                                                        <span>Created</span>
                                                        <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">{`${myCreatedApplications.toFixed(2)} Apps`}</span>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center px-2">
                                                        <span className="legend me-2 bg-info"></span>
                                                        <span>Pending Approval</span>
                                                        <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">{`${myPendingApplications.toFixed(2)} Apps`}</span>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center px-2">
                                                        <span className="legend me-2 bg-red"></span>
                                                        <span>Cancelled/Rejected</span>
                                                        <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">{`${myRejectedCancelledApplications.toFixed(2)} Apps`}</span>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center px-2">
                                                        <span className="legend me-2 bg-success"></span>
                                                        <span>Approved</span>
                                                        <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">{`${myApprovedApplications.toFixed(2)} Apps`}</span>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center ps-2">
                                                        <span className="legend me-2"></span>
                                                        <span>Taken</span>
                                                        <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">{`${myTaken.toFixed(2)} Apps`}</span>
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
                                        <h3 className="card-title">Leave Application List</h3>
                                    </div>
                                    <div className="card-body border-bottom py-3">
                                        <div className="d-flex">
                                            <div className="text-muted">
                                                Show
                                                <div className="mx-2 d-inline-block">
                                                    <select className="form-select" aria-label=".form-select-lg example" name="rowNumber" onChange={(e) => handleRowNumber(e.target.value)}>
                                                        <option value="5">5</option>
                                                        <option value="10">10</option>
                                                        <option value="15">15</option>
                                                        <option value="20">20</option>
                                                        <option value="25">25</option>
                                                        <option value="30">30</option>
                                                        <option value="35">35</option>
                                                        <option value="40">40</option>
                                                        <option value="45">45</option>
                                                        <option value="50">50</option>
                                                    </select>
                                                </div>
                                                entries
                                            </div>
                                            <SearchBar
                                                value={searchQuery}
                                                type='text'
                                                label={'Search'}
                                                name={'searchQuery'}
                                                onChange={(e) => handleSearch(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <LeaveTable
                                            leaveApplications={paginatedApplications}
                                            onDelete={handleDelete}
                                            onSort={handleSort}
                                            sortColumn={sortColumn}
                                            user={user}
                                        />
                                    </div>
                                    <Pagination
                                        itemsCount={totalCount}
                                        pageSize={pageSize}
                                        onPageChange={handlePageChange}
                                        currentPage={currentPage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <UserModal show={showModal} setShowModal={setShowModal}/>
                <Footer />
            </div>
        </div>
    )
}

export default Main