// index.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRouter from './controllers/post-controller.js';
// import sequelize from './config/data-base.js'; // You might want to use this somewhere in your code.

const app = express();

app.use(bodyParser.json());
// Enable CORS for all routes
app.use(cors());

// Define your routes
app.use("/posts", postRouter);


export default app