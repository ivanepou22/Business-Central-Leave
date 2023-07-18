import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import { getUsers, deleteUser, updateUser } from '../services/userService';
import Footer from '../components/Footer';
import Pagination from './../components/common/Pagination';
import UserTable from '../components/UserTable';
import SearchBar from '../components/common/SearchBar';
import _ from 'lodash';
import { paginate } from './../utils/paginate';
import auth from '../services/authService';
import UserModal from '../components/UserModal';

function Users({ user }) {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null);
  const [sortColumn, setSortColumn] = useState({ path: 'first_name', order: 'asc' });
  const [searchQuery, setSearchQuery] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = React.useState(false);
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [editUser, setEditUser] = React.useState(null);

  useEffect(() => {
    const currUser = auth.getCurrentUser();
    setCurrentUser(currUser);

    async function fetchUsers() {
      const { data } = await getUsers();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  const handleDelete = async (user) => {
    const originalUsers = [...users];
    try {
      await deleteUser(user.id);
      const updatedUsers = originalUsers.filter((u) => u.id !== user.id);
      setUsers(updatedUsers);
    } catch (error) {
      toast.error(error);
      setUsers(originalUsers);
    }
  };

  const handleUpdateUser = async (userId, updatedUser) => {
    // Make API call to update the user
    await updateUser(userId, updatedUser);

    setUsers(prevUsers =>
      prevUsers.map(user => {
        if (user.id === userId) {
          return { ...user, ...updatedUser };
        }
        return user;
      })
    );
  };

 const handleEdit = async (user) => {
    setEditUser(user);
    handleEditModal();
}

  //Handle Modal
  const handleModal = () => {
    setShowModal(!showModal);
  };

  //Handle Edit Modal
  const handleEditModal = () => {
    setShowEditModal(!showEditModal);
  }

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
  let filterUsers;
  currentUser?.role !== 'admin' ? filterUsers = users.filter((u) => u?.id === currentUser?.id) : filterUsers = users;

  const getPageData = () => {

    const filtered = filterUsers.filter((u) =>
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
            {
              currentUser?.role === 'admin' ?
                <div className="container-xl mb-4">
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

                          <span className="d-none d-sm-inline">
                            <Link className="btn btn-dark" onClick={handleModal}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                              New User
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> : ''
            }
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
                        onEdit={handleEdit}
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
      <UserModal show={showModal} setShowModal={setShowModal} userEdit={null} model={'create'} updateUser ={handleUpdateUser}/>
      <UserModal show={showEditModal} setShowModal={setShowEditModal} userEdit={editUser} model={'edit'} updateUser ={handleUpdateUser}/>
    </div>
  )
}

export default Users