import express from 'express';
import {
  getLeaveApplications,
  getLeaveApplicationByEntryId,
  deleteLeaveApplication,
  updateLeaveApplication,
  createLeaveApp
} from '../handlers/employee.leave.controller';

const leaveApplications = express.Router();

leaveApplications.get('/leave-applications', getLeaveApplications);
leaveApplications.post('/leave-applications', createLeaveApp);
leaveApplications.get('/leave-applications/:id', getLeaveApplicationByEntryId);
leaveApplications.delete('/leave-applications/:id', deleteLeaveApplication);
leaveApplications.patch('/leave-applications/:id', updateLeaveApplication);

export default leaveApplications;
