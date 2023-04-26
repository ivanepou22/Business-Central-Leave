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

  return (
    <tbody>
      {data.map(item => (
        <tr key={item[`${trId}`]}>
          {columns.map(column => (
            <td key={createKey(item, column)} className={column.className} >
              {renderCell(item, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;