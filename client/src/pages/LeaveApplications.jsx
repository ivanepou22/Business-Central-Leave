import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getLeaveApplications } from '../services/leaveApplicationService';

function LeaveApplications() {
  const [leaveApplications, setLeaveApplications] = useState([]);

  useEffect(() =>  {
    async function fetchApplications(){
      const {data} = await getLeaveApplications();
      setLeaveApplications(data.value);
    }

    fetchApplications();
  }, []);

  return (
    <div>
      <Header />
    </div>
  )
}

export default LeaveApplications