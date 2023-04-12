import express from 'express';
import employees from './employee.routes';
import users from './user.routes';
import leaveApplications from './employee.leave.routes';

const routes = express.Router();

routes.use(employees);
routes.use(users);
routes.use(leaveApplications);

export default routes;