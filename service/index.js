import bodyParser from 'body-parser';
import express from 'express'
import postRouter from './controllers/post-controller.js'
import sequelize from './config/data-base.js'
import './config/data-base.js'
import './models/post-modal.js'
import Postphp from './models/post-modal.js';

const app = express();
app.use(bodyParser.json());

app.use("/posts", postRouter);


const firstPost = await  Postphp.create({
    id: 1,
    title: "First in the list",
    description:"This is my first blog post"
});

export default app
