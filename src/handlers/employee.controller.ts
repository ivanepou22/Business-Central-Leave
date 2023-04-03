import { Request, Response } from "express";
import { EmployeeStore} from "../models/employee.model";

const store = new EmployeeStore();

//Show all the employees
export const getEmployees = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const employees = await store.index();
    res.json(employees);
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};

//show employee by Employee_No.
export const getEmployeeNo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const employee = await store.getEmployeeByNo(req.params.id);
    res.json(employee);
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};
