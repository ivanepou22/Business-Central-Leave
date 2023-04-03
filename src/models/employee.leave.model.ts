import axios from "axios";
import { connectDB } from "../providers/connect.provider";

const employeeLeaveUrl =
  "http://lap-fin-9598:9048/BC200/ODataV4/Company('Klan%20Logistics%20Ltd')/EmployeeLeave";

export type EmployeeLeave = {
  Entry_No?: number;
  Employee_No?: string;
  Leave_Type: string;
  Requested_From_Date: string;
  Requested_To_Date: string;
  Description: string;
  Substitute_Employee: string;
  Leave_Status: string;
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
};

export class EmployeeLeaveStore {
  async index() {
    axios
      .get(`${employeeLeaveUrl}`, connectDB)
      .then((Response) => {
        return Response.data;
      })
      .catch((err) => {
        throw new Error(`Cannot get Employee Leave Applications ${err}`);
      });
  }

  async getLeaveByEntryId(entryId: number) {
    const empLeaveUrl = `${employeeLeaveUrl}('${entryId}')`;
    axios
      .get(`${empLeaveUrl}`, connectDB)
      .then((Response) => {
        return Response.data;
      })
      .catch((err) => {
        throw new Error(
          `Could not find the employee Leave Application ${entryId} Error: ${err}`
        );
      });
  }

  async deleteLeaveApplication(entryId: number) {
    const empLeaveUrl = `${employeeLeaveUrl}('${entryId}')`;
    axios
      .delete(`${empLeaveUrl}`, connectDB)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(
        `Could not delete the employee Leave Application ${entryId} Error: ${error}`
        );
      });
  }

  async updateLeaveApplication(
    entryId: number,
    leaveApplication: EmployeeLeave
  ) {
    const empLeaveUrl = `${employeeLeaveUrl}('${entryId}')`;
    axios
      .put(`${empLeaveUrl}`, leaveApplication, connectDB)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(
          `Could not update the employee Leave Application ${entryId} Error: ${error}`
          );
      });
  }
}
