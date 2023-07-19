import { Request, Response } from 'express';
import { ActivityStore } from '../models/hr.activities.model';

const store = new ActivityStore();

export const getHrActivities = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const hrActivities = await store.index();
    res.json(hrActivities);
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};
