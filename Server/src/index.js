import dotenv from 'dotenv';
dotenv.config({ path: './.env', debug: false });


import connectDB from './db/index.js';

connectDB();
