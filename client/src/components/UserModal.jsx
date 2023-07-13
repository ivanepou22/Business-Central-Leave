import React, { useEffect, useState } from 'react'
import { getEmployees } from '../services/employeeService';
import auth from '../services/authService';

function UserModal(props) {
    const { show, setShowModal } = props;
    const [employees, setEmployees] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = auth.getCurrentUser();
        setUser(currentUser);

        async function fetchEmployees() {
            const { data } = await getEmployees();
            setEmployees(data.value);
        }
        fetchEmployees();
    }, []);

    //handle close.
    const handleClose = () => setShowModal(false);

    return (
        <div className={`modal modal-blur fade events-open-modal ${show ? 'show display-block' : ''}`} id="modal-report" onClick={handleClose} tabIndex="-1" role={show ? 'dialog' : ''} aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document" onClick={e => { e.stopPropagation(); }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">New User</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">First name</label>
                                    <input type="text" className="form-control" placeholder='first name' />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Last name</label>
                                    <input type="text" className="form-control" placeholder='last name' />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="form-control" placeholder='username' />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder='Email' />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder='password' />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" placeholder='confirm password' />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Role</label>
                                    <select className="form-select">
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Employee No.</label>
                                    <select className="form-select">
                                        <option value=""></option>
                                        {
                                            employees?.map((employee) =><option value={employee.No}>{employee.Full_Name}</option>)
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a href="#" className="btn btn-danger link-secondary" data-bs-dismiss="modal" onClick={handleClose}>
                            Cancel
                        </a>
                        <a href="#" className="btn btn-primary ms-auto" data-bs-dismiss="modal">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                            Create User
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserModal