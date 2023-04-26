import React from 'react'
import Table from './common/Table';

function LeaveTable({ leaveApplications, onSort, sortColumn, onDelete }) {
    const columns = [
        { path: 'Entry_No', label: 'No.', className: 'text-muted' },
        { path: 'Employee_No', label: 'Employee No' },
        { path: 'Substitute_Employee', label: 'Substitute Employee' },
        { path: 'Leave_Type', label: 'Leave Type' },
        { path: 'Description', label: 'Description' },
        { path: 'Leave_Status', label: 'Leave Status' },
        { path: 'Requested_From_Date', label: 'Requested From Date' },
        { path: 'Requested_To_Date', label: 'Requested To Date' },
        { path: 'Days_to_be_Taken', label: 'Days to Take' },
        { path: 'Leave_Days_Available', label: 'Leave Days Available' },
        { path: 'Leave_Balance', label: 'Leave Balance' },
        { path: 'Leave_Entitlement', label: 'Leave Entitlement' },
        {path: 'From_Date', label: 'From Date'},
        {path: 'To_Date', label: 'To Date'},
        {path: 'Approved_From_Date', label: 'Approved From Date'},
        {path: 'Approved_To_Date', label: 'Approved To Date'},
        {path: 'Approved_Leave_Days2', label: 'Approved Leave Days'},
        {path: 'Actual_Leave_Days', label: 'Actual Leave Days'},
        { pk: 'Entry_No' }
    ];
  return (
    <Table columns={columns} data={leaveApplications} sortColumn={sortColumn} onSort={onSort} />
  )
}

export default LeaveTable