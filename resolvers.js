//resolvers.js 
//to pre process the queries 
//query -> to retrive the data (Exactly WHat data we want)
//mutation -> to update the data
/*const User = require('./model/userSchema');//parent
const resolvers ={
    Query:{
        getUser: async(_,{id})=>{return await User.findById(id);},
        getUsers: async()=>{return await User.find();},
        searchUsers: async(_,{name})=>{return await User.find(
            {name:new RegExp(name,'i')})
        },
        getLimitedUsers:async (_,{limit,offset})=>{
            return await User.find().skip(offset).limit(limit);
        }
    },
    Mutation:{
        createUser: async(_,{input})=>{
            const newUser=new User(input);
            return await newUser.save();
        },
        changePass:async(_,{id,password})=>{
            return await User.findByIdAndUpdate(id,{password:password});
        },
        updateUser: async(_,{id,input})=>{
            return await User.findByIdAndUpdate(id,input);
        },
        deleteUser:async(_,{id})=>{
            return await User.findByIdAndDelete(id);
        }
    },
    User:{
        name:(parent)=> parent.name || '',
        email:(parent)=> parent.email || '',
    },
};module.exports=resolvers;//export resolvers*/


const User = require('./model/userSchema');//parent
const resolvers ={
    Query:{
        getUsers: async(_,{id})=>{return await User.findById(id);}
    
    },
    Mutation:{
        createUser: async(_,{input})=>{
            try{
            const{name,email,password}=input;
            if(!name || !email || !password){
                throw new Error('Enter all the fields')
            }
            const newUser=new User({name,email,password});
            return await newUser.save();
        }catch(err){throw Error(err);}
    },
    changePass:async(_,id,password)=>{
        try{
            const user=await User.findByIdAndUpdate(id,{password:password},{new:true});
            if(!userNew){
                throw new Error('User not found')
            }
            return UserNew;
            }catch(err){throw Error(err)}
        },
    },
    User:{
        email:(parent)=>parent.email || '',
        name:(parent)=>parent.name || '',
        password:(parent)=>parent.password || '',
    }
   }
   module.exports=resolvers;
