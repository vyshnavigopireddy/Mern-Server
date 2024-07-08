//routes/users.js
/*const express= require('express')
const router = express.Router()
const User = require('../model/userSchema');

//REST API POST METHOD TO HANDLE POST REQUEST
router.post('/',(req,res)=>{
    try{
    const {_id,name,email,password}=req.body;
    const userQuery = new User({_id,name,email,password});
   // we can save it to the database
    userQuery.save()
    res.status(201).send({message:"User Created"});
    }catch(err){
        res.status(500).send({message:err})
    }
})

router.get('/',async(req,res)=>{
    try{
        const data=await User.find();
        res.status(200).send(data);
    }catch(err){
        res.status(500).send({message:err})
    }
})
//PUT the data (update the data)
router.put('/:id', async (req, res) => {
    try {
        const { password } = req.body;
        const userId = req.params.id;
         const updatedUser = await
          User.findByIdAndUpdate(userId, {password: password }, { new: true });
          //use findByIdAndUpdate instead of UpdateOne
        if (!updatedUser) {
            return res.status(404).send({ message: "User not found" }); }
        res.status(200).send({ message: "Password updated successfully", updatedUser });
    } catch (err) {
        res.status(500).send(err);
} });
module.exports=router;*/


const express= require('express')
const router = express.Router()
const User = require('../model/userSchema');

//REST API POST METHOD TO HANDLE POST REQUEST
router.post('/',(req,res)=>{
    try{
    const {_id,name,email,password}=req.body;
    const userQuery = new User({_id,name,email,password});
   // we can save it to the database
    userQuery.save()
    res.status(201).send({message:"User Created"});
    }catch(err){
        res.status(500).send({message:err})
    }
})

router.get('/',async(req,res)=>{
    try{
        const data=await User.find();
        res.status(200).send(data);
    }catch(err){
        res.status(500).send({message:err})
    }
})
//PUT the data (update the data)
/*router.delete('/:id', async (req, res) => {
    try {
        
        const userId = req.params.id;
         const deletedUser = await
          User.findByIdAndDelete(userId);
          //use findByIdAndUpdate instead of UpdateOne
        if (!deletedUser) {
            return res.status(404).send({ message: "id not exist" }); }
        res.status(200).send({ message: "user deleted", deletedUser });
    } catch (err) {
        res.status(500).send({message:err});
} });
module.exports=router;*/
router.delete('/:id',async (req,res)=>{
    try{
        const userId = req.params.id;
        const deletedUser = await User.deleteOne({_id:userId});
        if(deletedUser.nModified===0){
            return res.status(404).send({message:"Id does'nt exist"})
        }
        res.status(200).send({message:"user deleted",deletedUser});
    }catch(err){
        res.status(500).send({message:err})
    }
})

module.exports=router;

