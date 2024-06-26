const userController=require('../../controller/user-controller');
const express=require('express')

const router=express.Router();

router.post('/signUp',userController.create)
router.post('/signIn',userController.sighIn)
module.exports=router;