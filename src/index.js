const express=require('express')
const {PORT}=require('./config/serverConfig');
const bodyParser = require('body-parser');
const ApiRoutes=require('./routes/index');
const app=express();
const userService = require('./services/userService');

const prepareAndStartServer=async()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    const UserService=new userService();

    // const token=UserService.createToken({
    //     email:'mohitkr123@gmail.com',
    //     password:'user123'
    // })
    // console.log(token);
    const t="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vaGl0a3IxMjNAZ21haWwuY29tIiwicGFzc3dvcmQiOiJ1c2VyMTIzIiwiaWF0IjoxNzE5NDE0NzMyLCJleHAiOjE3MTk0MTgzMzJ9.SG_pk19fJEzX6_w6ikxR9CBr4-w9HOkk1_Yn5N6BpAQ"
    const response=UserService.verifyToken(t)
    console.log(response)
    

    app.use('/api',ApiRoutes)
    app.listen(PORT,()=>{
        console.log(`server Started on PORT: ${PORT}`)
    })
}
prepareAndStartServer();