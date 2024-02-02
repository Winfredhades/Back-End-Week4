import express from 'express'
import userRouter from './controllers/user-controller.js'

const app = express()

app.use(express.json())

app.use('/user/get', userRouter)


export default app