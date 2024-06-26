const express=require('express')
const {PORT}=require('./config/serverConfig');
const bodyParser = require('body-parser');
const ApiRoutes=require('./routes/index');
const app=express();

const prepareAndStartServer=async()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
   

    app.use('/api',ApiRoutes)
    app.listen(PORT,()=>{
        console.log(`server Started on PORT: ${PORT}`)
    })
}
prepareAndStartServer();