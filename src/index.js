const express=require('express')
const {PORT}=require('./config/serverConfig');
const bodyParser = require('body-parser');
const ApiRoutes=require('./routes/index');
const app=express();
const userRepository=require('./repository/user-repository');

const prepareAndStartServer=async()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    const User= new userRepository()
    const response= await User.get(3);
    console.log(response)

    app.use('/api',ApiRoutes)
    app.listen(PORT,()=>{
        console.log(`server Started on PORT: ${PORT}`)
    })
}
prepareAndStartServer();