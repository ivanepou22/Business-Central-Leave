import dotenv from 'dotenv';

dotenv.config();
const password = process.env.BC_PASSWORD;
const username = process.env.BC_USERNAME;
// Encode your username and password as a Base64 string
const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');

// Set up the API request headers
export const connectDB = {
  headers: {
    Authorization: `Basic ${base64Credentials}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};