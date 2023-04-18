import React, { useEffect, useState } from 'react'
import { getEmployees } from '../services/employeeService';

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const {data: employees} =  getEmployees();
    setEmployees(employees);
  }, [])
  console.log(employees);
  return (
    <div>Employees</div>
  )
}

export default Employees