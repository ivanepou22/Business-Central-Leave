import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getEmployees } from '../services/employeeService';
import auth from '../services/authService';
import { toast } from 'react-toastify';

function EmployeeLeaveModal(props) {
    const { show, setShowModal, leaveEdit, model, handleUpdateStatus, updateLeave, createLeave } = props;
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
        if (leaveEdit && model === 'edit') {
            setFormData({
                employeeNo: leaveEdit?.employee_no,
                leaveType: leaveEdit?.Leave_Type,
                fromDate: leaveEdit?.Requested_From_Date,
                toDate: leaveEdit?.Requested_To_Date,
                description: leaveEdit?.Description,
                substituteEmployeeNo: leaveEdit?.Substitute_Employee,
                leaveStatus: leaveEdit?.Leave_Status,
                username: leaveEdit?.Username
            })
        } else {
            setFormData({
                employeeNo: user?.employee_no || '',
                leaveType: '',
                fromDate: '',
                toDate: '',
                description: '',
                substituteEmployeeNo: '',
                leaveStatus: 'Application',
                username: ''
            })
        }
    }, [leaveEdit, model])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData, username: user.username,
            [name]: value,
        }));
    };

    const submitApplication = async () => {
        if (leaveEdit.Leave_Status === 'Application' || leaveEdit.Leave_Status === 'Cancelled') {
            await handleUpdateStatus(leaveEdit.Entry_No, leaveEdit, 'submit');
            handleClose();
        } else {
            toast.error('This application is already submitted');
        }
    }

    const cancelApplication = async () => {
        if (leaveEdit.Leave_Status !== 'Application' && leaveEdit.Leave_Status !== 'History') {
            await handleUpdateStatus(leaveEdit.Entry_No, leaveEdit, 'cancel');
            handleClose()
        } else {
            toast.error('You cannot cancel Leave with the status Application');
        }
    }

    const approveApplication = async () => {
        if (leaveEdit.Leave_Status === 'Pending Approval') {
            await handleUpdateStatus(leaveEdit.Entry_No, leaveEdit, 'approve');
            handleClose()
        } else {
            toast.error("You can only approve leave with Status 'Pending Approval'");
        }
    }

    const rejectApplication = async () => {
        if (leaveEdit.Leave_Status === 'Pending Approval') {
            await handleUpdateStatus(leaveEdit.Entry_No, leaveEdit, 'reject');
            handleClose()
        } else {
            toast.error("You can only Reject leave with Status 'Pending Approval'");
        }
    }

    const commitApplication = async () => {
        if (leaveEdit.Leave_Status === 'Approved') {
            await handleUpdateStatus(leaveEdit.Entry_No, leaveEdit, 'commit');
            handleClose();
        } else {
            toast.error("You can only Commit leave with Status 'Approved'");
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Perform any form submission logic
            if (model === 'edit') {
                await updateLeave(leaveEdit.Entry_No, {
                    Leave_Type: formData.leaveType,
                    Requested_From_Date: formData.fromDate,
                    Requested_To_Date: formData.toDate,
                    Description: formData.description,
                    Leave_Status: leaveEdit.Leave_Status,
                    Substitute_Employee: formData.substituteEmployeeNo,
                    Username: formData.username
                })
            } else {
                await createLeave({
                    Employee_No: formData.employeeNo,
                    Leave_Type: formData.leaveType,
                    Requested_From_Date: formData.fromDate,
                    Requested_To_Date: formData.toDate,
                    Description: formData.description,
                    Leave_Status: formData.leaveStatus,
                    Substitute_Employee: formData.substituteEmployeeNo,
                    Username: formData.username
                })
            }
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

        if (model !== 'edit') {
            if (!data.employeeNo) {
                errors.employeeNo = 'Employee Number is required';
            }
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
                        <h5 className="modal-title">{model === 'edit' ? 'Edit Application' : 'New Application'}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    {
                        model === 'edit' ? (
                            <div className="leave-actions">
                                {
                                    leaveEdit?.Leave_Status === 'Application' || leaveEdit?.Leave_Status === 'Cancelled' ? (<div>
                                        <button type="submit" className='btn btn-primary' onClick={submitApplication}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-autofit-up" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M12 4h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8"></path>
                                                <path d="M18 20v-17"></path>
                                                <path d="M15 6l3 -3l3 3"></path>
                                            </svg>
                                            Submit
                                        </button>
                                    </div>) : ''
                                }
                                {
                                    (leaveEdit?.Leave_Status === 'Application' || leaveEdit?.Leave_Status === 'Cancelled' || leaveEdit?.Leave_Status === 'History' || leaveEdit?.Leave_Status === 'Closed') ? '' : (
                                        <div>
                                            <button type="submit" className='btn btn-danger' onClick={cancelApplication}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-rounded-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <path d="M10 10l4 4m0 -4l-4 4"></path>
                                                    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
                                                </svg>
                                                Cancel
                                            </button>
                                        </div>
                                    )
                                }

                                {
                                    (leaveEdit?.Leave_Status === 'Pending Approval' && user?.role === 'admin') ? (
                                        <>
                                            <div>
                                                <button type="submit" className='btn btn-success' onClick={approveApplication}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-rounded-check" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M9 12l2 2l4 -4"></path>
                                                        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
                                                    </svg>
                                                    Approve
                                                </button>
                                            </div>
                                            <div>
                                                <button type="submit" className='btn btn-warning' onClick={rejectApplication}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-letter-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                                        <path d="M10 8l4 8"></path>
                                                        <path d="M10 16l4 -8"></path>
                                                    </svg>
                                                    Reject
                                                </button>
                                            </div>
                                        </>
                                    ) : ''
                                }
                                {
                                    (leaveEdit?.Leave_Status === 'Approved' && user?.role === 'admin') ? (<div>
                                        <button type="submit" className='btn btn-success' onClick={commitApplication}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-rounded-check" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M9 12l2 2l4 -4"></path>
                                                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
                                            </svg>
                                            Commit
                                        </button>
                                    </div>) : ''
                                }
                            </div>) : ('')
                    }
                    <form className="card card-md" autoComplete="off" onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Employee No.</label>
                                        <select className="form-select" name='employeeNo' value={formData.employeeNo} onChange={handleInputChange}>
                                            <option value=""></option>
                                            {
                                                currentEmployee?.map((employee, index) => <option key={index} value={employee.No}>{employee.Full_Name}</option>)
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
                                                employees?.map((employee, index) => <option key={index} value={employee.No}>{employee.Full_Name}</option>)
                                            }
                                        </select>
                                        {errors.substituteEmployeeNo && <div className="error">{errors.substituteEmployeeNo}</div>}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Leave Status</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='last name'
                                            name='leaveStatus'
                                            value={formData.leaveStatus}
                                            onChange={handleInputChange}
                                        />
                                        {errors.toDate && <div className="error">{errors.leaveStatus}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a href="#" className="btn btn-danger link-secondary" data-bs-dismiss="modal" onClick={handleClose}>
                                Close
                            </a>
                            <button type='submit' className="btn btn-primary ms-auto" data-bs-dismiss="modal">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                {model === 'edit' ? 'Edit Application' : 'Create Application'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployeeLeaveModal