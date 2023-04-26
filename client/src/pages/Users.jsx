import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getUsers } from '../services/userService';
import Footer from '../components/Footer';
import Pagination from './../components/common/Pagination';
import UserTable from '../components/UserTable';
import SearchBar from '../components/common/SearchBar';
import _ from 'lodash';
import { paginate } from './../utils/paginate';

function Users({ user }) {
  const [users, setUsers] = useState([])
  const [sortColumn, setSortColumn] = useState({ path: 'first_name', order: 'asc' });
  const [searchQuery, setSearchQuery] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  //write a function to retrieve users?
  useEffect(() => {
    async function fetchUsers() {
      const { data } = await getUsers();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  const handleDelete = async (user) => {
    const originalUsers = [...users];
    const updatedUsers = originalUsers.filter((u) => u.id !== user.id);
    setUsers(updatedUsers);
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

    const filtered = users.filter((u) =>
      u.first_name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const paginateUsers = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: paginateUsers };
  };
  const { totalCount, data: paginateUsers } = getPageData();

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
                      <h3 className="card-title">Users</h3>
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
                      <UserTable
                        users={paginateUsers}
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

export default Users