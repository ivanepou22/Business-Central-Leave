import axios from 'axios';
import dotenv from 'dotenv';
import { connectDB } from '../providers/connect.provider';

dotenv.config();

let activityUrl: string;
if (process.env.HR_ACTIVITIES !== undefined) {
  activityUrl = process.env.HR_ACTIVITIES;
}

export type Activity = {
  Primary_Key: string;
  Active_Employees: number;
  Inactive_Employees: number;
  Employees_On_Probation: number;
  Terminated_Employees: number;
  Employees_With_Acting_Allowance: number;
  Employee_Loans: number;
  Employee_Salary_Advance: number;
  Contracts_To_Expire: number;
  Expired_Contracts: number;
  Employees_Without_Contracts: number;
  Employees_With_Contracts: number;
  Employees_with_Open_Contracts: number;
  Employees_with_Contract_Period: number;
  Pending_Leave_Applications: number;
  Employees_On_Leave: number;
  Leave_From_Date_Filter: string;
};

export class ActivityStore {
  async index(): Promise<Activity[]> {
    try {
      const response = await axios.get<Activity[]>(activityUrl, connectDB);
      return response.data;
    } catch (err) {
      throw new Error(`Cannot get Activity ${err}`);
    }
  }
}
