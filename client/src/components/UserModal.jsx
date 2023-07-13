import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getEmployees } from '../services/employeeService';
import { createUser } from '../services/userService';
import auth from '../services/authService';

function UserModal(props) {
    const { show, setShowModal } = props;
    const [employees, setEmployees] = useState([]);
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = auth.getCurrentUser();
        setUser(currentUser);

        async function fetchEmployees() {
            const { data } = await getEmployees();
            setEmployees(data.value);
        }
        fetchEmployees();
    }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'user',
        employeeNo: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Perform any form submission logic here
            createUser({
                first_name: formData.firstName,
                last_name: formData.lastName,
                username: formData.username,
                email: formData.email,
                role: formData.role,
                password: formData.password,
                employee_no: formData.employeeNo
            })
            // Reset the form
            setFormData({
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                role: 'user',
                employeeNo: '',
            });
            setErrors({});
            // Redirect to user list page
            navigate('/users');
            setShowModal(false);
        }
    };

    const validateForm = (data) => {
        let errors = {};

        if (!data.firstName) {
            errors.firstName = 'First name is required';
        }

        if (!data.lastName) {
            errors.lastName = 'Last name is required';
        }

        if (!data.username) {
            errors.username = 'Username is required';
        }

        if (!data.email) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(data.email)) {
            errors.email = 'Invalid email address';
        }

        if (!data.password) {
            errors.password = 'Password is required';
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = 'Confirm Password is required';
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = 'Passwords do not match';
        }
        if (!data.employeeNo) {
            errors.employeeNo = 'Employee Number is required';
        }
        return errors;
    };

    const isValidEmail = (email) => {
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

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
                    <form className="card card-md" autoComplete="off" onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">First name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='first name'
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                        />
                                        {errors.firstName && <div className="error">{errors.firstName}</div>}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Last name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='last name'
                                            name='lastName'
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                        />
                                        {errors.lastName && <div className="error">{errors.lastName}</div>}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='username'
                                            name='username'
                                            value={formData.username}
                                            onChange={handleInputChange}
                                        />
                                        {errors.username && <div className="error">{errors.username}</div>}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder='Email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                        {errors.email && <div className="error">{errors.email}</div>}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder='password'
                                            name='password'
                                            value={formData.password}
                                            onChange={handleInputChange}
                                        />
                                        {errors.password && <div className="error">{errors.password}</div>}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Confirm Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder='confirm password'
                                            name='confirmPassword'
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                        />
                                        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Role</label>
                                        <select className="form-select" name='role' value={formData.role} onChange={handleInputChange}>
                                            <option value="user">User</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Employee No.</label>
                                        <select className="form-select" name='employeeNo' value={formData.employeeNo} onChange={handleInputChange}>
                                            <option value=""></option>
                                            {
                                                employees?.map((employee) => <option value={employee.No}>{employee.Full_Name}</option>)
                                            }
                                        </select>
                                        {errors.employeeNo && <div className="error">{errors.employeeNo}</div>}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <a href="#" className="btn btn-danger link-secondary" data-bs-dismiss="modal" onClick={handleClose}>
                                Cancel
                            </a>
                            <button type='submit' className="btn btn-primary ms-auto" data-bs-dismiss="modal">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                Create User
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserModal