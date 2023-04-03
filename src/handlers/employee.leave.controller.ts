import { Request, Response } from "express";
import { EmployeeLeaveStore } from "../models/employee.leave.model";

const store = new EmployeeLeaveStore();
//Show all the employee Leave Applications
export const getLeaveApplications = async (
    _req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const leaveApplications = await store.index();
      res.json(leaveApplications);
    } catch (error) {
      res.status(400);
      res.json(error);
    }
  };

  //show employee Application by Entry No.
  export const getLeaveApplicationByEntryId = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const leaveApplication = await store.getLeaveByEntryId(req.params.id as unknown as number);
      res.json(leaveApplication);
    } catch (error) {
      res.status(400);
      res.json(error);
    }
  };

  //delete employee Application by Entry No.
  export const deleteLeaveApplication = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const leaveApplication = await store.deleteLeaveApplication(req.params.id as unknown as number);
      res.json(leaveApplication);
    } catch (error) {
      res.status(400);
      res.json(error);
    }
  };