const express=require('express')
const {PORT}=require('./config/serverConfig');
const bodyParser = require('body-parser');
const ApiRoutes=require('./routes/index');
const app=express();
const db=require('./models/index')
const {User,Role}=require('./models/index')

const prepareAndStartServer=async()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    if(process.env.DB_SYNC){
        db.sequelize.sync({alter:true});
    }

    // const u1=await User.findByPk(1);
    // const r1=await Role.findByPk(2);
    // u1.addRole(r1);
    

    app.use('/api',ApiRoutes)
    app.listen(PORT,()=>{
        console.log(`server Started on PORT: ${PORT}`)
    })
}
prepareAndStartServer();