import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getEmployees } from '../services/employeeService';
import auth from '../services/authService';

function EmployeeLeaveModal(props) {
    const { show, setShowModal } = props;
    const [employees, setEmployees] = useState([]);
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        employeeNo: '',
        leaveType: '',
        fromDate: '',
        toDate: '',
        description: '',
        substituteEmployeeNo: '',
        leaveStatus: 'Application',
        username: ''
    });

    useEffect(() => {
        const currentUser = auth.getCurrentUser();
        setUser(currentUser);

        async function fetchEmployees() {
            const { data } = await getEmployees();
            setEmployees(data.value);
        }
        fetchEmployees();
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,username: user.username,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Perform any form submission logic here
            console.log(formData)
            // Reset the form
            setFormData({
                employeeNo: '',
                leaveType: '',
                fromDate: '',
                toDate: '',
                description: '',
                substituteEmployeeNo: '',
                leaveStatus: 'Application',
                username: ''
            });
            setErrors({});
            // Redirect to user list page
            navigate('/leave-applications');
            setShowModal(false);
        }
    };

    const validateForm = (data) => {
        let errors = {};

        if (!data.employeeNo) {
            errors.employeeNo = 'Employee Number is required';
        }

        if (!data.leaveType) {
            errors.leaveType = 'Leave Type is required';
        }

        if (!data.fromDate) {
            errors.fromDate = 'Requested from Date is required';
        }

        if (!data.toDate) {
            errors.toDate = 'Requested to Date is required';
        }

        if (!data.substituteEmployeeNo) {
            errors.substituteEmployeeNo = 'Substitute Employee is required';
        } else if (data.employeeNo === data.substituteEmployeeNo) {
            errors.substituteEmployeeNo = 'Employee No and Substitute can not be the same.';
        } else if (data.substituteEmployeeNo === user.employee_no) {
            errors.substituteEmployeeNo = 'You can not select yourself as a substitute';
        }
        if (!data.description) {
            errors.description = 'Description is required';
        }
        return errors;
    };
    //handle close.
    const handleClose = () => setShowModal(false);
    const currentEmployee = employees.filter((emp) => emp.No === user.employee_no)

    return (
        <div className={`modal modal-blur fade events-open-modal ${show ? 'show display-block' : ''}`} id="modal-report" onClick={handleClose} tabIndex="-1" role={show ? 'dialog' : ''} aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document" onClick={e => { e.stopPropagation(); }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">New Leave Application</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <form className="card card-md" autoComplete="off" onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Employee No.</label>
                                        <select className="form-select" name='employeeNo' value={formData.employeeNo} onChange={handleInputChange}>
                                            <option value=""></option>
                                            {
                                                currentEmployee?.map((employee) => <option value={employee.No}>{employee.Full_Name}</option>)
                                            }
                                        </select>
                                        {errors.employeeNo && <div className="error">{errors.employeeNo}</div>}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Leave Type</label>
                                        <select className="form-select" name='leaveType' value={formData.leaveType} onChange={handleInputChange}>
                                            <option value=""></option>
                                            <option value="Annual Leave">Annual Leave</option>
                                            <option value="Sick Leave">Sick Leave</option>
                                            <option value="Maternity Leave">Maternity Leave</option>
                                            <option value="Paternity Leave">Paternity Leave</option>
                                            <option value="Study Leave">Study Leave</option>
                                            <option value="Compassionate Leave">Compassionate Leave</option>
                                            <option value="Leave Without Pay">Leave Without Pay</option>
                                        </select>
                                        {errors.leaveType && <div className="error">{errors.leaveType}</div>}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Requested From Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder='first name'
                                            name="fromDate"
                                            value={formData.fromDate}
                                            onChange={handleInputChange}
                                        />
                                        {errors.fromDate && <div className="error">{errors.fromDate}</div>}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Requested To Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder='last name'
                                            name='toDate'
                                            value={formData.toDate}
                                            onChange={handleInputChange}
                                        />
                                        {errors.toDate && <div className="error">{errors.toDate}</div>}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            placeholder='Description...'
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                        />
                                        {errors.description && <div className="error">{errors.description}</div>}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Substitute Employee</label>
                                        <select className="form-select" name='substituteEmployeeNo' value={formData.substituteEmployeeNo} onChange={handleInputChange}>
                                            <option value=""></option>
                                            {
                                                employees?.map((employee) => <option value={employee.No}>{employee.Full_Name}</option>)
                                            }
                                        </select>
                                        {errors.substituteEmployeeNo && <div className="error">{errors.substituteEmployeeNo}</div>}
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

export default EmployeeLeaveModal