import express from 'express';
import { getHrActivities } from '../handlers/hr.activity.controller';
import { verifyJWTToken } from '../middleware/jwt.middleware';

const hrRouter = express.Router();
hrRouter.get('/hr-activities', getHrActivities);
export default hrRouter;
