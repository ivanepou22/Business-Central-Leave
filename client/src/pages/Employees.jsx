import React, { useEffect, useState } from 'react'
import { getEmployees } from '../services/employeeService';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pagination from './../components/common/Pagination';
import EmployeeTable from '../components/EmployeeTable';
import SearchBar from '../components/common/SearchBar';
import _ from 'lodash';
import { paginate } from './../utils/paginate';

function Employees({ user }) {
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

  return (
    <div>
      <div className="page">
        <Header />
        <div className="page-wrapper">
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