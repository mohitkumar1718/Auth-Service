const userController=require('../../controller/user-controller');
const express=require('express')
const {validateUserRequest}=require('../../middlewares/index');

const router=express.Router();

router.post('/signUp',validateUserRequest,userController.create)
router.post('/signIn',validateUserRequest,userController.sighIn)
module.exports=router;