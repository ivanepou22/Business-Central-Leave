import express from 'express';
import {
  getUsers,
  getUserById,
  getUserByUsername,
  deleteUser,
  updateUser,
  createUser,
  authenticate
} from '../handlers/user.controller';
import { verifyJWTToken } from '../middleware/jwt.middleware';

const users = express.Router();

users.get('/users', getUsers);
users.get('/users/:id', getUserById);
users.get('/users/username/:username', getUserByUsername);
users.delete('/users/:id', deleteUser);
users.patch('/users/:id', updateUser);
users.post('/users', createUser);
users.post('/users/login', authenticate);

export default users;
