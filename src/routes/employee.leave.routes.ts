import express from "express";
import {
  getLeaveApplications,
  getLeaveApplicationByEntryId,
  deleteLeaveApplication,
} from "../handlers/employee.leave.controller";

const leaveApplications = express.Router();

leaveApplications.get("/leave-applications", getLeaveApplications);
leaveApplications.get("/leave-applications/:id", getLeaveApplicationByEntryId);
leaveApplications.delete("/leave-applications/:id", deleteLeaveApplication);

export default leaveApplications;
