import React from 'react'
import authService from '../services/authService';
import Table from './common/Table';

function UserTable({ users, onSort, sortColumn, onDelete }) {
    const columns = [
        { path: 'id', label: 'No.' },
        { path: 'first_name', label: 'FName' },
        { path: 'last_name', label: 'LName' },
        { path: 'username', label: 'Username' },
        { path: 'email', label: 'Email' },
        { path: 'employee_no', label: 'Employee No.' },
        { path: 'role', label: 'Label' },
        { pk: 'id' }
    ];

    const user = authService.getCurrentUser();
    if (user && user.role === 'admin') {
        columns.push({
            key: 'delete',
            content: user => (
                <button
                    onClick={() => onDelete(user)}
                    className='btn btn-danger btn-sm'
                >
                    Delete
                </button>
            )
        });
    }

    return (
        users.length !== 0 ?
            <Table columns={columns} data={users} sortColumn={sortColumn} onSort={onSort} /> :
            <div className='table-empty text-muted'>Table is empty, try again.</div>
    )
}

export default UserTable