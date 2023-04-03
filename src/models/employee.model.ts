import axios from "axios";
import { connectDB } from "../providers/connect.provider";

const employeeUrl =
  "http://lap-fin-9598:9048/BC200/ODataV4/Company('Klan%20Logistics%20Ltd')/Employees";

export type Employee = {
  No: string;
  First_Name: string;
  Middle_Name: string;
  Last_Name: string;
  Full_Name: string;
  Job_Title: string;
  Initials: string;
  Search_Name: string;
  Gender: string;
  Phone_No_2: string;
  Company_E_Mail: string;
  Last_Date_Modified: string;
  Privacy_Blocked: boolean;
  Address: string;
  Address_2: string;
  City: string;
  Village: string;
  District: string;
  County: string;
  Post_Code: string;
  Country_Region_Code: string;
  ShowMap: string;
  Mobile_Phone_No: string;
  Pager: string;
  Extension: string;
  E_Mail: string;
  Alt_Address_Code: string;
  Alt_Address_Start_Date: string;
  Alt_Address_End_Date: string;
  Employment_Date: string;
  Contract_Type: string;
  Contract_Renewal_Start_Date: string;
  Contract_Renl_Formula: string;
  Employment_End_Date: string;
  Status: string;
  Status_1: string;
  Inactive_Date: string;
  Cause_of_Inactivity_Code: string;
  Termination_Date: string;
  Separation_Reason: string;
  Separation_Description: string;
  No_Days_Remaining: number;
  Probation_Date_Formula: string;
  Probation_End_Date: string;
  Probation_Status: string;
  Inactive_From_Date: string;
  Inactive_To_Date: string;
  Grounds_for_Term_Code: string;
  Emplymt_Contract_Code: string;
  Statistics_Group_Code: string;
  Resource_No: string;
  User_ID: string;
  Salespers_Purch_Code: string;
  Annual_Leave_Days_B_F: number;
  Annual_Leave_Days_Current: number;
  Annual_Leave_Days_Taken: number;
  Annual_Leave_Days_Available: number;
  Maternity_Leave_Days: number;
  Maternity_Leave_Days_Taken: number;
  Maternity_Leave_Days_Available: number;
  Paternity_Leave_Days: number;
  Paternity_Leave_Days_Taken: number;
  Paternity_Leave_Days_Available: number;
  Leave_Without_Pay_Days: number;
  Leave_Without_Pay_Days_Taken: number;
  Leave_Without_Pay_Days_Available: number;
  Sick_Days: number;
  Sick_Days_Taken: number;
  Sick_Days_Available: number;
  Study_Leave_Days: number;
  Study_Leave_Days_Taken: number;
  Study_Leave_Days_Available: number;
  Compassionate_Leave_Days: number;
  Compassionate_Leave_Days_Taken: number;
  Compasionate_Leave_Days_Available: number;
  Birth_Date: string;
  Social_Security_No: string;
  National_ID_No_NIN: string;
};

export class EmployeeStore {
  async index() {
    // Make the API request
    axios
      .get(
        `${employeeUrl}`,
        connectDB
      )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw new Error(`Cannot get Employees ${err}`);
      });
  }
}
