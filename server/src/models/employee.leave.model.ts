import axios from 'axios';
import { connectDB } from '../providers/connect.provider';
import dotenv from 'dotenv';
import { match } from 'assert';

dotenv.config();

let employeeLeaveUrl: string;
if (process.env.LEAVE_APPLICATION_URL !== undefined)
  employeeLeaveUrl = process.env.LEAVE_APPLICATION_URL;

export type EmployeeLeave = {
  '@odata.etag'?: string; // accessing the value of '@odata.etag'
  Entry_No?: number;
  Employee_No?: string;
  Leave_Type?: string;
  Requested_From_Date?: string;
  Requested_To_Date?: string;
  Description?: string;
  Substitute_Employee?: string;
  Leave_Status?: string;
  Days_to_be_Taken?: number;
  Leave_Entitlement?: number;
  Leave_Days_Available?: number;
  Leave_Balance?: number;
  Approved_From_Date?: string;
  Approved_To_Date?: string;
  Approved_Leave_Days2?: number;
  From_Date?: string;
  To_Date?: string;
  Actual_Leave_Days?: number;
  Username?: string;
};

export class EmployeeLeaveStore {
  async index(): Promise<EmployeeLeave[]> {
    try {
      const response = await axios.get<EmployeeLeave[]>(
        employeeLeaveUrl,
        connectDB
      );
      return response.data;
    } catch (error) {
      throw new Error(`Cannot get Employee Leave Applications ${error}`);
    }
  }

  async getLeaveByEntryId(entryId: number): Promise<EmployeeLeave> {
    const empLeaveUrl = `${employeeLeaveUrl}(${entryId})`;
    try {
      const response = await axios.get<EmployeeLeave>(empLeaveUrl, connectDB);
      return response.data;
    } catch (err) {
      throw new Error(
        `Could not find the employee Leave Application ${entryId} Error: ${err}`
      );
    }
  }

  async deleteLeaveApplication(entryId: number): Promise<EmployeeLeave> {
    const empLeaveUrl = `${employeeLeaveUrl}(${entryId})`;
    try {
      const response = await axios.delete<EmployeeLeave>(
        empLeaveUrl,
        connectDB
      );
      return response.data;
    } catch (err) {
      throw new Error(
        `Could not delete the employee Leave Application ${entryId} Error: ${err}`
      );
    }
  }

  async updateLeaveApplication(
    entryId: number,
    leaveApplication: EmployeeLeave,
    oDataToken: string
  ): Promise<EmployeeLeave> {
    const empLeaveUrl = `${employeeLeaveUrl}(${entryId})`;
    try {
      const response = await axios.patch<EmployeeLeave>(
        empLeaveUrl,
        leaveApplication,
        {
          ...connectDB,
          headers: {
            ...connectDB.headers,
            'If-Match': oDataToken
          }
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(
        `Could not update the employee Leave Application ${entryId} Error: ${error}`
      );
    }
  }

  async createLeaveApplication(
    newLeaveApplication: EmployeeLeave
  ): Promise<EmployeeLeave> {
    try {
      const response = await axios.post<EmployeeLeave>(
        employeeLeaveUrl,
        newLeaveApplication,
        connectDB
      );
      return response.data;
    } catch (error) {
      throw new Error(
        `Could not create the employee Leave Application Error: ${error}`
      );
    }
  }
}
