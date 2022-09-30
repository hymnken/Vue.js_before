import express from 'express'
import userRouter from './router/user_router'
const app = express()


app.use('/api', userRouter)
app.listen(80, () => {
    console.log('server success');
})