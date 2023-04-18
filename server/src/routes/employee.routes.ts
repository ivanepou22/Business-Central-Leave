import express from 'express';
import { getEmployees, getEmployeeNo } from '../handlers/employee.controller';
import { verifyJWTToken } from '../middleware/jwt.middleware';

const employees = express.Router();

employees.get('/employees', getEmployees);
employees.get('/employees/:id', getEmployeeNo);

export default employees;
