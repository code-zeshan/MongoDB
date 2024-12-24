import express from "express"
import userModel from "../../models/Users/Users.js"
import bcrypt from "bcrypt"

const router = express.Router();

// get All Users

router.get("/getallUsers",async(req,res)=>{
    try {
      console.log("GET ALL USERS!"); 
      let allUsers = await userModel.find({})
      res.status(200).json({msg:allUsers})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

//get one

router.get("/getone/:id",async (req,res)=>{
    try {
      console.log("GET One User!"); 
      let userId = req.params.id;
      let getOneData = await userModel.find({firstname:userId})
      res.status(200).json({msg:getOneData})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

//Add User

router.post("/register",async(req,res)=>{
    try {
        let userData = req.body;

        let {firstName, lastName, age, email, password}= req.body;

        let hashPassword = await bcrypt.hash(password,10)

        userData.password = hashPassword;

        console.log(userData);
        await userModel.create(userData) 
        res.status(201).json({msg: "User Added Successfully!"})

      console.log("Add One User!"); 
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

// Update

router.put("/update/:id",async(req,res)=>{
    try {
        console.log("Hello");
        let userName = req.params.id;
        let userData = req.body;
        console.log("Update User!"); 
        await userModel.updateOne({_id:userName},{$set:userData})
        res.status(201).json({msg:"User Updated Successfully!"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

// Delete One

router.delete("/deleteone/:id",async(req,res)=>{
    try {
        let userId = req.params.id;
        await userModel.deleteOne({_id:userId})
        res.status(201).json({msg:"User Deleted Successfully!"})
      console.log("Delete User!"); 
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

// Delete Many

router.delete("/deleteall",async(req,res)=>{
    try {
        await userModel.deleteMany()
        res.status(201).json({msg:"All Objects Deleted Successfully!"})

      console.log("Delete All User!"); 
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

export default router;
