import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import { getLeaveApplications } from '../services/leaveApplicationService';
import Footer from '../components/Footer';
import LeaveTable from '../components/LeaveTable';
import Pagination from './../components/common/Pagination';
import SearchBar from '../components/common/SearchBar';
import _ from 'lodash';
import { paginate } from './../utils/paginate';

function LeaveApplications({ user }) {
  const [leaveApplications, setLeaveApplications] = useState([]);
  const [leaveStatus, setLeaveStatus] = useState('all');
  const [group, setGroup] = useState('all');
  const [sortColumn, setSortColumn] = useState({ path: 'Entry_No', order: 'asc' });
  const [searchQuery, setSearchQuery] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchApplications() {
      const { data } = await getLeaveApplications();
      setLeaveApplications(data.value);
    }

    fetchApplications();
  }, []);

  const handleLeaveStatus = (group, leaveStat) => {
    setLeaveStatus(leaveStat);
    setGroup(group);
  }

  const handleDelete = async (application) => {
    const originalApplications = [...leaveApplications];
    const updatedApplications = originalApplications.filter((app) => app.Entry_No !== application.Entry_No);
    setEmployees(updatedApplications);
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

    const filtered = leaveApplications.filter((e) =>
      e.Description.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const paginatedApplications = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: paginatedApplications };
  };
  const { totalCount, data: paginatedApplications } = getPageData();

  return (
    <div className="page">
      <Header />
      <div className="page-wrapper">
        <div className="container-xl">
          <div className="page-header d-print-none">
            <div className="row align-items-center">
              <div className="col">
                <h2 className="page-title">
                  Leave Applications
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-xl">
            <div className="row gx-lg-5">
              <div className="d-none d-lg-block col-lg-3">
                <ul className="nav nav-pills nav-vertical">
                  <li className="nav-item">
                    <Link to="#all-leave-applications" className="nav-link" data-bs-toggle="collapse" aria-expanded={group === 'all' ? 'true' : 'false'}>
                      All Leave Applications
                      <span className="nav-link-toggle"></span>
                    </Link>
                    <ul className={group === 'all' ? 'nav nav-pills collapse show' : 'nav nav-pills collapse'} id="menu-base">
                      <li className="nav-item">
                        <Link to="#all-leave-applications" onClick={() => handleLeaveStatus('all', 'all')} className={leaveStatus === 'all' ? 'nav-link active' : 'nav-link'}>
                          All Applications
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#all-created-leave-applications" onClick={() => handleLeaveStatus('all', 'Application')} className={leaveStatus === 'Application' ? 'nav-link active' : 'nav-link'}>
                          Created Applications
                        </Link>
                      </li>
                      {/* Application,"Pending Approval",Approved,Rejected,Taken,Cancelled */}
                      <li className="nav-item">
                        <Link to="#all-submitted-leave-applications" onClick={() => handleLeaveStatus('all', 'Pending Approval')} className={leaveStatus === 'Pending Approval' ? 'nav-link active' : 'nav-link'}>
                          Pending Applications
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#all-approved-leave-applications" onClick={() => handleLeaveStatus('all', 'Approved')} className={leaveStatus === 'Approved' ? 'nav-link active' : 'nav-link'}>
                          Approved Applications
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#all-rejected-leave-applications" onClick={() => handleLeaveStatus('all', 'Rejected')} className={leaveStatus === 'Rejected' ? 'nav-link active' : 'nav-link'}>
                          Rejected Applications
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#all-taken-leave-applications" onClick={() => handleLeaveStatus('all', 'Taken')} className={leaveStatus === 'Taken' ? 'nav-link active' : 'nav-link'}>
                          Taken Applications
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#all-cancelled-leave-applications" onClick={() => handleLeaveStatus('all', 'Cancelled')} className={leaveStatus === 'Cancelled' ? 'nav-link active' : 'nav-link'}>
                          Cancelled Applications
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="#menu-content" className="nav-link" data-bs-toggle="collapse" aria-expanded="true">
                      My Leave Applications
                      <span className="nav-link-toggle"></span>
                    </Link>
                    <ul className="nav nav-pills collapse show" id="menu-content">
                      <li className="nav-item">
                        <Link to="../docs/getting-started.html" className="nav-link active">
                          Created Applications
                        </Link>
                      </li>
                      {/* Application,"Pending Approval",Approved,Rejected,Taken,Cancelled */}
                      <li className="nav-item">
                        <Link to="../docs/download.html" className="nav-link">
                          Submitted Applications
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="../docs/browser-support.html" className="nav-link">
                          Pending Applications
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="../docs/browser-support.html" className="nav-link">
                          Approved Applications
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="../docs/browser-support.html" className="nav-link">
                          Rejected Applications
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="../docs/browser-support.html" className="nav-link">
                          Taken Applications
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="../docs/browser-support.html" className="nav-link">
                          Cancelled Applications
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9">
                <div className="card card-lg">
                  <div className="card-header">
                    <h3 className="card-title">{`${group.charAt(0).toUpperCase() + group.slice(1)} ${leaveStatus === 'all' ? '': leaveStatus} Leave Applications`}</h3>
                  </div>
                  <div className="card-body border-bottom py-3">
                    <div className="d-flex">
                      <div className="text-muted">
                        Show
                        <div className="mx-2 d-inline-block">
                          <select className="form-select" aria-label=".form-select-lg example" name="rowNumber" onChange={(e) => handleRowNumber(e.target.value)}>
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
        <Footer />
      </div>
    </div>
  )
}

export default LeaveApplications