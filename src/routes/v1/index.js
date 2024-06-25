const userController=require('../../controller/user-controller');
const express=require('express')

const router=express.Router();

router.post('/signup',userController.create)
module.exports=router;