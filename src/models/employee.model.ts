import axios from "axios";
import { connectDB } from "../providers/connect.provider";

const employeeUrl =
  "http://lap-fin-9598:9048/BC200/ODataV4/Company('Klan%20Logistics%20Ltd')/Employees";

export class EmployeeStore {
  async index() {
    // Make the API request
    axios
      .get(`${employeeUrl}`, connectDB)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw new Error(`Cannot get Employees ${err}`);
      });
  }

  async getEmployeeByNo(employeeNumber: string) {
    const empUrl = `${employeeUrl}('${employeeNumber}')`;
    axios
      .get(`${empUrl}`, connectDB)
      .then((Response) => {
        return Response.data;
      })
      .catch((err) => {
        throw new Error(
          `Could not find the employee ${employeeNumber} Error: ${err}`
        );
      });
  }
}
