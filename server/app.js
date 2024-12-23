import express from "express";
import config from "config";
import userRouter from "./controllers/users/index.js"

const app = express()
const PORT = 5000

app.use(express.json())


import "./utils/dbConnect.js"

app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg:"hello world"})
    } catch (error) {
        res.status(500).json({msg:error})
        console.log(error);
    }
})

app.use("/api/users",userRouter)


app.listen(PORT,()=>{
    console.log(`the server is up and running ${PORT}`);
})
