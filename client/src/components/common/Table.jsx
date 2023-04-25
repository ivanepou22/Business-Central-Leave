import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

function Table({ columns, data, sortColumn, onSort }) {
    return (
        <table className="table">
            <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
            <TableBody data={data} columns={columns} />
        </table>
    );
}
export default Table;
