import React from 'react'
import Table from './common/Table';
import authService from '../services/authService';
import { Link } from 'react-router-dom';

function LeaveTable({ leaveApplications, onSort, sortColumn, onDelete,onEdit }) {
  const columns = [
    { path: 'index', label: '#', className: 'text-muted' },
    { path: 'Employee_No', label: 'Employee No', className: 'text-muted' },
    { path: 'Employee_Name', label: 'Employee Name' },
    { path: 'Substitute_Employee', label: 'Substitute Employee' },
    { path: 'Substitute_Name', label: 'Substitute Name' },
    { path: 'Username', label: 'Username', className: 'text-muted' },
    { path: 'Leave_Type', label: 'Leave Type' },
    { path: 'Description', label: 'Description' },
    { path: 'Leave_Status', label: 'Leave Status' },
    { path: 'Requested_From_Date', label: 'Requested From Date' },
    { path: 'Requested_To_Date', label: 'Requested To Date' },
    { path: 'Days_to_be_Taken', label: 'Days to Take' },
    { path: 'Leave_Days_Available', label: 'Leave Days Available' },
    { path: 'Leave_Balance', label: 'Leave Balance' },
    { path: 'Leave_Entitlement', label: 'Leave Entitlement' },
    { path: 'From_Date', label: 'From Date' },
    { path: 'To_Date', label: 'To Date' },
    { path: 'Approved_From_Date', label: 'Approved From Date' },
    { path: 'Approved_To_Date', label: 'Approved To Date' },
    { path: 'Approved_Leave_Days2', label: 'Approved Leave Days' },
    { path: 'Actual_Leave_Days', label: 'Actual Leave Days' },
    { pk: 'Entry_No' }
  ];

  columns.push({
    key: 'Edit',
    content: leave => (
        <Link to="#" className="btn" onClick={() => onEdit(leave)}>Edit</Link>
    )
});

const user = authService.getCurrentUser();
if ((user)) {
  columns.push({
      key: 'delete',
      content: leave => (
          <Link
              to={'#'}
              onClick={() => onDelete(leave)}
              className='btn btn-danger btn-sm'
          >
              Delete
          </Link>
      )
  });
}

  return (
    leaveApplications.length !== 0 ?
      <Table columns={columns} data={leaveApplications} sortColumn={sortColumn} onSort={onSort} /> :
      <div className='table-empty text-muted'>Table is empty, try again.</div>
  )
}

export default LeaveTable