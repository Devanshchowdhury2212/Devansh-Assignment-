import express from "express"
import cors from "cors"

const app = express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))


// Routes 
import statsRouter from './src/stats.route.js'
import deviationRouter from './src/deviation.route.js'

app.use("/start",(req,res)=>{
    res.status(200).json("Hello World")
})

app.use("/stats",statsRouter)
app.use("/deviation",deviationRouter)


export {app};

