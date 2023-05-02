import React from 'react'
import { Link } from 'react-router-dom';
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

    columns.push({
        key: 'Edit',
        content: user => (
            <Link to="#" className="btn">Edit</Link>
        )
    });

    const user = authService.getCurrentUser();
    if (user && user.role === 'admin') {
        columns.push({
            key: 'delete',
            content: user => (
                <Link
                    to={'#'}
                    onClick={() => onDelete(user)}
                    className='btn btn-danger btn-sm'
                >
                    Delete
                </Link>
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