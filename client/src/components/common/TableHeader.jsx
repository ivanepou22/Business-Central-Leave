import React from 'react';

const TableHeader = ({ columns, sortColumn, onSort }) => {

  const raiseSort = path => {
    const newSortColumn = { ...sortColumn };
    if (newSortColumn.path === path) {
      newSortColumn.order = newSortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      newSortColumn.path = path;
      newSortColumn.order = 'asc';
    }

    onSort(newSortColumn);
  };

  const renderIcon = column => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  return (
    <thead className='clickable'>
      <tr>
        {columns.map((column, index) => (
          <th
            key={column.path || column.key || index}
            onClick={() => raiseSort(column.path)}
          >
            {column.label} {renderIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;