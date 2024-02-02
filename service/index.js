import express from 'express'
import postRouter from './controllers/post-controller.js'
import sequelize from './config/data-base.js'

const app = express()

app.use(express.json())

app.use('/posts', postRouter)


export default app