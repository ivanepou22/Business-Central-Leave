import React from 'react'
import Table from './common/Table';

function EmployeeTable({ employees, onSort, sortColumn, onDelete }) {
    const columns = [
        { path: 'No', label: 'Number', className: 'text-muted' },
        { path: 'Full_Name', label: 'Name' },
        { path: 'Gender', label: 'Gender' },
        { path: 'Job_Title', label: 'Title' },
        { path: 'Status', label: 'Status' },
        { path: 'Annual_Leave_Days_Available', label: 'Annual Leave Days' },
        { path: 'Maternity_Leave_Days_Available', label: 'Maternity Leave Days' },
        { path: 'Paternity_Leave_Days_Available', label: 'Paternity Leave Days' },
        { path: 'Sick_Days_Available', label: 'Sick Days' },
        { path: 'Study_Leave_Days_Available', label: 'Study Leave Days' },
        { path: 'Compasionate_Leave_Days_Available', label: 'Compassionate Leave Days' },
        { path: 'Leave_Without_Pay_Days_Available', label: 'Leave Without Pay Days' },
        { pk: 'No' }
    ];

    return (
        <Table columns={columns} data={employees} sortColumn={sortColumn} onSort={onSort} />
    )
}

export default EmployeeTable