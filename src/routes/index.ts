import express from 'express';
import employees from './employee.routes';

const routes = express.Router();

routes.use(employees);

export default routes;