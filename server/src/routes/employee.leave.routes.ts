import express from 'express';
import {
  getLeaveApplications,
  getLeaveApplicationByEntryId,
  deleteLeaveApplication,
  updateLeaveApplication,
  submitLeaveApplication,
  approveLeaveApplication,
  cancelLeaveApplication,
  rejectLeaveApplication,
  commitLeaveApplication,
  createLeaveApp
} from '../handlers/employee.leave.controller';
import { verifyJWTToken } from '../middleware/jwt.middleware';

const leaveApplications = express.Router();

leaveApplications.get('/leave-applications', getLeaveApplications);
leaveApplications.post('/leave-applications', createLeaveApp);
leaveApplications.get('/leave-applications/:id', getLeaveApplicationByEntryId);
leaveApplications.delete('/leave-applications/:id', deleteLeaveApplication);
leaveApplications.patch('/leave-applications/:id', updateLeaveApplication);
leaveApplications.post(
  '/leave-applications/approve/:id',
  approveLeaveApplication
);
leaveApplications.post(
  '/leave-applications/submit/:id',
  submitLeaveApplication
);
leaveApplications.post(
  '/leave-applications/reject/:id',
  rejectLeaveApplication
);
leaveApplications.post(
  '/leave-applications/cancel/:id',
  cancelLeaveApplication
);
leaveApplications.post(
  '/leave-applications/commit/:id',
  commitLeaveApplication
);

export default leaveApplications;
