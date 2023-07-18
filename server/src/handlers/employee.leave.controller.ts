import { Request, Response } from 'express';
import {
  EmployeeLeaveStore,
  EmployeeLeave
} from '../models/employee.leave.model';

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
    const leaveApplication = await store.getLeaveByEntryId(
      req.params.id as unknown as number
    );
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
    const leaveApplication = await store.deleteLeaveApplication(
      req.params.id as unknown as number
    );
    res.json(leaveApplication);
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};

export const updateLeaveApplication = async (req: Request, res: Response) => {
  const entryId = parseInt(req.params.id);
  const leaveApplication: EmployeeLeave = req.body;

  //get the leave application with the entry id
  const leaveApp = await store.getLeaveByEntryId(
    req.params.id as unknown as number
  );
  //get the oData Token
  const etag = leaveApp['@odata.etag']; // accessing the value of '@odata.etag'

  try {
    const updatedLeaveApplication = await store.updateLeaveApplication(
      entryId,
      leaveApplication,
      etag as unknown as string
    );
    res.status(200).json(updatedLeaveApplication);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createLeaveApp = async (req: Request, res: Response) => {
  const leaveApplication: EmployeeLeave = req.body;
  try {
    const newLeaveApp = await store.createLeaveApplication(leaveApplication);
    res.status(200).json(newLeaveApp);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const submitLeaveApplication = async (req: Request, res: Response) => {
  const entryId = parseInt(req.params.id);
  const leaveApplication: EmployeeLeave = req.body;

  //get the leave application with the entry id
  const leaveApp = await store.getLeaveByEntryId(
    req.params.id as unknown as number
  );
  //get the oData Token
  const etag = leaveApp['@odata.etag']; // accessing the value of '@odata.etag'

  try {
    const updatedLeaveApplication = await store.submitLeaveApplication(
      entryId,
      leaveApplication,
      etag as unknown as string
    );
    res.status(200).json(updatedLeaveApplication);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const approveLeaveApplication = async (req: Request, res: Response) => {
  const entryId = parseInt(req.params.id);
  const leaveApplication: EmployeeLeave = req.body;

  //get the leave application with the entry id
  const leaveApp = await store.getLeaveByEntryId(
    req.params.id as unknown as number
  );
  //get the oData Token
  const etag = leaveApp['@odata.etag']; // accessing the value of '@odata.etag'

  try {
    const updatedLeaveApplication = await store.approveLeaveApplication(
      entryId,
      leaveApplication,
      etag as unknown as string
    );
    res.status(200).json(updatedLeaveApplication);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const cancelLeaveApplication = async (req: Request, res: Response) => {
  const entryId = parseInt(req.params.id);
  const leaveApplication: EmployeeLeave = req.body;

  //get the leave application with the entry id
  const leaveApp = await store.getLeaveByEntryId(
    req.params.id as unknown as number
  );
  //get the oData Token
  const etag = leaveApp['@odata.etag']; // accessing the value of '@odata.etag'

  try {
    const updatedLeaveApplication = await store.cancelLeaveApplication(
      entryId,
      leaveApplication,
      etag as unknown as string
    );
    res.status(200).json(updatedLeaveApplication);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const rejectLeaveApplication = async (req: Request, res: Response) => {
  const entryId = parseInt(req.params.id);
  const leaveApplication: EmployeeLeave = req.body;

  //get the leave application with the entry id
  const leaveApp = await store.getLeaveByEntryId(
    req.params.id as unknown as number
  );
  //get the oData Token
  const etag = leaveApp['@odata.etag']; // accessing the value of '@odata.etag'

  try {
    const updatedLeaveApplication = await store.rejectLeaveApplication(
      entryId,
      leaveApplication,
      etag as unknown as string
    );
    res.status(200).json(updatedLeaveApplication);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const commitLeaveApplication = async (req: Request, res: Response) => {
  const entryId = parseInt(req.params.id);
  const leaveApplication: EmployeeLeave = req.body;

  //get the leave application with the entry id
  const leaveApp = await store.getLeaveByEntryId(
    req.params.id as unknown as number
  );
  //get the oData Token
  const etag = leaveApp['@odata.etag']; // accessing the value of '@odata.etag'

  try {
    const updatedLeaveApplication = await store.commitLeaveApplication(
      entryId,
      leaveApplication,
      etag as unknown as string
    );
    res.status(200).json(updatedLeaveApplication);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
