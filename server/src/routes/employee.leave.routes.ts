import express from 'express';
import {
  getLeaveApplications,
  getLeaveApplicationByEntryId,
  deleteLeaveApplication,
  updateLeaveApplication,
  createLeaveApp
} from '../handlers/employee.leave.controller';
import { verifyJWTToken } from '../middleware/jwt.middleware';

const leaveApplications = express.Router();

leaveApplications.get(
  '/leave-applications',
  verifyJWTToken,
  getLeaveApplications
);
leaveApplications.post('/leave-applications', verifyJWTToken, createLeaveApp);
leaveApplications.get(
  '/leave-applications/:id',
  verifyJWTToken,
  getLeaveApplicationByEntryId
);
leaveApplications.delete(
  '/leave-applications/:id',
  verifyJWTToken,
  deleteLeaveApplication
);
leaveApplications.patch(
  '/leave-applications/:id',
  verifyJWTToken,
  updateLeaveApplication
);

export default leaveApplications;
