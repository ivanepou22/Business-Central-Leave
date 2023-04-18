import React, { useEffect, useState } from 'react'
import { getEmployees } from '../services/employeeService';
import Header from '../components/Header';

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      const { data} = await getEmployees();
      setEmployees(data.value);
    }
    fetchEmployees();
  }, [])
  return (
    <div>
      <Header />
    </div>
  )
}

export default Employees