import express from 'express';
import { getEmployees,getEmployeeNo } from '../handlers/employee.controller';

const employees = express.Router();

employees.get('/employees', getEmployees);
employees.get('/employees/:id', getEmployeeNo);

export default employees;