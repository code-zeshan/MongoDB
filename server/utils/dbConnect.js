import mongoose from "mongoose";
import config from "config";

async function dbConnect(){
    try {
        let dbUrl = "mongodb+srv://zeshancode:zeshancode@zeshancode.1u1ir.mongodb.net/Task"
        await mongoose.connect(dbUrl)
    } catch (error) {
        console.log(error);
    }
}
dbConnect()