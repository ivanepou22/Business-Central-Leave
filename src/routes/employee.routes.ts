import express from 'express';
import { getEmployees } from '../handlers/employee.controller';

const employees = express.Router();

employees.get('/employees', getEmployees);

export default employees;