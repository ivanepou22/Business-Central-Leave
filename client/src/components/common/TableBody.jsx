import React from 'react';
import _ from 'lodash';

const TableBody = ({ data, columns }) => {
  let trId;
  // render cell
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  // create key function
  const createKey = (item, column) => {
    const id = column.pk;
    return item[`${id}`] + (column.path || column.key);
  };

  for (const column of columns) {
    if (column.pk) {
      trId = column.pk;
    }
  }

  const getRowClass = (item) => {
    if (item['Leave_Status'] === 'Approved') {
      return 'bg-approved';
    } else if (item['Leave_Status'] === 'Pending Approval') {
      return 'bg-pending';
    } else if (item['Leave_Status'] === 'Cancelled' || item['Leave_Status'] === 'Rejected') {
      return 'bg-cancelled';
    } else if (item['Leave_Status'] === 'History' || item['Leave_Status'] === 'Taken') {
      return 'bg-history';
    } else if (item['Leave_Status'] === 'Application') {
      return 'bg-application';
    }
    return '';
  };

  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={item[`${trId}`]} className={getRowClass(item)}>
          {columns.map(column => (
            <td key={createKey(item, column)} className={column.className} >
              {renderCell(Object.assign({}, item, { index: index + 1 }), column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;