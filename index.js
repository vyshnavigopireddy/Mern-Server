//this binding
/*const events={
    name:'Birthaday Party',
    guests:['Ram','Raju'],
    printGuest(){
        console.log('Guest List for'+this.name)
        this.guests.forEach((guest)=>{
            console.log(guest+' is attending'+this.name)
        })
    }
}
events.printGuest()

const http = require('http')
http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'})
    response.end('Server is Live');
}).listen(8000,()=>{console.log("server Live")})


const http = require('http');
const superagent = require('superagent');
(async () => {
    const data = {
        username: 'raju',
        password: '1234',
        userid: 1011
    };
    try {
        const { body } = await superagent
            .post('https://jsonplaceholder.typicode.com/posts')
            .send(data);
        console.log(body);
    } catch (err) {
        console.error('Error occurred:', err.message || err);
    }
})();


//axios
const axios = require('axios')
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((res)=>console.log(res.data)).catch((err)=>
    console.log(err.message || err))


const http = require('http');
const { StringDecoder } = require('string_decoder');
const url = require('url');

// Create the server
const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    const path = parsedUrl.pathname;
    const method = request.method.toLowerCase();
    const decoder = new StringDecoder('utf-8');
    let buffer = '';

    request.on('data', (chunk) => {
        buffer += decoder.write(chunk);
    });

    request.on('end', () => {
        buffer += decoder.end();

        if (method === 'post' && path === '/user') {
            const data = JSON.parse(buffer);
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "User data received", data }));
        } else {
            response.writeHead(404, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "Not Found" }));
        }
    });
});

// Start the server
server.listen(8000, () => {
    console.log('Server is running on port 8000');

    // Make the axios POST request
    const axios = require('axios');
    const data = {
        username: 'abhi',
        password: '1234',
        userid: 1001
    };

    axios.post('http://localhost:8000/user', data)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Error: ' + (err.message || err));
        });
});
const express=require('express')
const app=express()
const port=3001
app.use(express.json())
const LocalDB={
    item:"Mobile Phone",
    price:12345,
    model:"xs",
    color:'black"'
}
app.get('/product',(req,res)=>{
    res.json(LocalDB)
})
app.post('/product',(req,res)=>{
    
    const data=req.body;
    res.json({
        message:"Post data Received",
        itemData:data
    })
    })
    app.head('/product',(req,res)=>{
        const data=req.body;
        res.json({
            message:" head Data is Updata",
            itemData:data
        })
    })
    app.options('/product',(req,res)=>{
        res.json({
            message:"Option in this method",
            allocateMethods:"GET,PATCH,PUT,DELETE,OPTIONS,POST"
        })
    })
    app.listen(port,()=>{
    console.log(`Server is live on port ${port}`)
});
const express=require('express');
const { head } = require('superagent');
const app=express()
const port=3001;
app.use(express.json())
app.use('/abc',(req,res,next)=>{
   if( req.method === 'GET'){
    res.send("get methid is initated")
   }
   else if(req.method === 'POST'){
    res.send(res.json({
        message:"post iniated",
        data:res.body
    }
    ))
   }
   else{
       res.send("invalid method")
   }
})
app.listen(port,()=>{
    console.log(`Server is live on port ${port}`7)
})
const express=require('express')
const app=express()
const port=3001
app.use(express.json())
app.use("/",(req,res,next)=>{
    console.log("middleware is initinated")
    setTimeout(()=>{
        next();
    },60000)
    
},
(req,res,next)=>{
    res.send(`
        <div><h1>welcome</h1></div>
        `)
})
app.listen(port,()=>{
    console.log(`Server is live on port ${port}`)
})


const express=require('express');
const app=express();

const port=3001
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const reqfunction=(req,res,next)=>{//1st
    console.log(`recieved a ${req.method},request to api ${req.url}`);
    next();
}
//route handler to pass parameters
const formDataFun=(req,res,next)=>{
    const {name ,pass}=req.body;
    console.log(req.body);
    req.name=name
    req.pass=pass
    next();
}
const userShow=(req,res)=>{
   
    res.send(`<h1>Name ${req.name} ,Pass ${req.pass}</h1>`);
}
app.get('/login',reqfunction,(req,res)=>{
    res.send(
        `<form method="post" action="/login-auth">
            <input type="text" name="name" required/>
            <input type="password" name="pass" required/>
            <button type="submit"> submit</button>
        </form>`
    )
})
app.post('/login-auth',reqfunction,formDataFun,userShow)
app.listen(port,()=>{
    console.log(`Server is live on port ${port}`)
   
});

const express=require('express')
const app=express()
const port=3001
const router=express.Router();
const homeApi=require('./routes/home.js')
const loginApi=require('./routes/login.js')

app.use(express.json())
app.use('/',homeApi);
app.use('/',loginApi);
app.use(express.urlencoded({extended:true}))
app.listen(port,()=>{
    console.log(`Server is live on port ${port}`);
});

const express=require('express')
const session=require('express-session')
const app=express();
const port=3001;
app.use(express.json());
app.use(session({
    secret:'itsecret',
    resave:false,
    saveUninitialized: true,
}))
app.get('/login',(req,res)=>{
    req.session.sessionData={name:'raju',userid:1201,email:'raju@gmail.com'};
    res.send(`<h1>you Logged in </h1><a href="/profile">Profile</a>`)
})
app.get('/profile',(req,res)=>{
    const data=req.session.sessionData || 'No session found'
    res.send(`<h1>Welcome ${data.name}</h1><p>Email is : ${data.email}</p>`);
})
app.get('/logout',(req,res))
app.listen(port,()=>
console.log(`server live on port ${port}`));

const express=require('express')
const app=express();
const port=3001;
app.use(express.json());
app.get('/',(req,res)=>{
    try{
    throw new Error('Server Died');
}catch(err){
    res.status(500).send(`<h1>Error occured</h1><p>${err.message}</p>`);
}
})
app.listen(port,()=>
    console.log(`server live on port ${port}`));*/

/*index.js
const express = require('express')
 const mongoose = require('mongoose') //npm i mongoose mongodb
 const UserApi = require('./routes/users')
 const app = express()
 const port = 3001;

 app.use(express.json())
 const url='mongodb+srv://vyshnavisrinivas661:t4qEDRQzlRfMkRYf@cluster0.urnvi7t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
 //connecting my express app to my mongodb server
 mongoose.connect(url).then(()=>{
    console.log('MongDB connected')})
 .catch((err)=>console.log(err));
//route to handle /users api endpoint
app.use('/users',UserApi)
//ApiEndPoint, router

 app.listen(port,()=>{console.log('server live')});

 const express=require('express')
const mongoose = require('mongoose')
const AuthorAPi = require('./routes/authors')
const BookApi = require('./routes/books')
const port = 3001
const app = express()
app.use(express.json())
const url ='mongodb+srv://vyshnavisrinivas661:t4qEDRQzlRfMkRYf@cluster0.urnvi7t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(url).then(()=>{console.log('MongoDB connected')})
.catch((err)=>{console.log(err)})
//router API's
app.use('/author',AuthorAPi);
app.use('/books',BookApi);
app.listen(port,()=>{console.log(`Server live at ${port}`)})

const express=require('express')
const mongoose = require('mongoose')
const {ApolloServer,gql} = require('apollo-server-express')
const typeDefs = require('./schema');
const resolvers=require('./resolvers');

const app = express()
const port = 3001
const url='mongodb+srv://vyshnavisrinivas661:t4qEDRQzlRfMkRYf@cluster0.urnvi7t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
app.use(express.json())
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('MongoDB connected')})
.catch((err)=>{console.log(err)});
//start my apollo-express-server
const server=new ApolloServer({typeDefs,resolvers});
app.get('/users/search/:name',async(req,res)=>{
    try{
        const name=req.params.name;
        const {data,error}=await server.executeOperation({
            query:gql`query{
            searchUsers(name:${name}){id name email}}`
        });
        if(error){
            
            return res.status(500).send({error})
        }res.status(201).send(data);
    }
        catch(err){
            res.status(500).send(`<h1>Error occured</h1><p>${err.message}</p>`);
        }
        })
        app.post('/users',async(req,res)=>{
            const{name,email,password}=req.body;
            try{
                const{data,error}=await server.executeOperation({
                    query:gql`mutation{
                    createUser(input:{name:${name},email:${email},password:${password}}}{
                    name 
                    email
                    })}`
                })
            }
        )
async function startServer(){
    await server.start();
    server.applyMiddleware({app});//run express code
    app.listen(port,()=>{console.log(`Server live at ${port}`);
})
}'mongodb+srv://vyshnavisrinivas661:t4qEDRQzlRfMkRYf@cluster0.urnvi7t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
startServer();*/


//ECOMERCE
const express=require('express')
const mongoose = require('mongoose')
const {ApolloServer,gql} = require('apollo-server-express')
const typeDefs=require('./schema');
const resolvers=require('./resolvers');
const userApiFromRouter=require('./routes/userRoutes')
const app=express()
const port=3001;
const url='mongodb+srv://vyshnavisrinivas661:t4qEDRQzlRfMkRYf@cluster0.urnvi7t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
app.use(express.json())
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)});


const server=new ApolloServer({typeDefs,resolvers})
app.use('/users',userApiFromRouter);
async function StartServer(){
}
function Testing(){
    return 0;
}
Testing();
StartServer();