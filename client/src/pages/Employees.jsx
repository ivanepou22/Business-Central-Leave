import React, { useEffect, useState } from 'react'
import { getEmployees } from '../services/employeeService';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pagination from './../components/common/Pagination';
import EmployeeTable from '../components/EmployeeTable';
import SearchBar from '../components/common/SearchBar';
import _ from 'lodash';
import { paginate } from './../utils/paginate';

function Employees({user}) {
  const [employees, setEmployees] = useState([]);
  const [sortColumn, setSortColumn] = useState({ path: 'Full_Name', order: 'asc' });
  const [searchQuery, setSearchQuery] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchEmployees() {
      const { data } = await getEmployees();
      setEmployees(data.value);
    }
    fetchEmployees();
  }, []);


  const handleDelete = async (employee) => {
    const originalEmployees = [...employees];
    const updatedEmployees = originalEmployees.filter((e) => e.No !== employee.No);
    setEmployees(updatedEmployees);
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

    const filtered = employees.filter((e) =>
      e.Full_Name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const paginatedEmployees = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: paginatedEmployees };
  };
  const { totalCount, data: paginatedEmployees } = getPageData();
  console.log(paginatedEmployees);

  return (
    <div>
      <div className="page">
      <Header />
        <div className="page-wrapper">
          <div className="container-xl">
            <div className="page-header d-print-none">
              <div className="row align-items-center">
                <div className="col">
                  <h2 className="page-title">
                    Employees
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="page-body">
            <div className="container-xl">
              <div className="row row-cards">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Employees</h3>
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
                      <EmployeeTable
                         employees={paginatedEmployees}
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
    </div>
  )
}

export default Employees