const express=require('express')
const router=express.Router()
const typeDefs=require('../schema');
const resolvers=require('../resolvers');
const {ApolloServer,gql}=require('apollo-server-express');
const server=new ApolloServer({typeDefs,resolvers})
router.post('/register',async(req,res)=>{
    const {name,email,password}=req.body;
    try{
          const {name,email,password}=req.body;
          const{data,error}=await server.executeOperation({
            query:gql`
           
            mutation{
            createUser(input:{name:"${name}",email:"${email}",password:"${password}"}){
            id
            name 
            email 
            password
          }
            }`
          });
          if(error){res.status(500).send({message:error})}
          res.status(201).send(data);
    }catch(err){
        res.status(500).send({message:err});
    }
})
module.exports=router;