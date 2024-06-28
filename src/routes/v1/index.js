const userController=require('../../controller/user-controller');
const express=require('express')
const {validateUserRequest}=require('../../middlewares/index');

const router=express.Router();

router.post('/signUp',validateUserRequest.validateUserRequest,userController.create)
router.post('/signIn',validateUserRequest.validateUserRequest,userController.sighIn)
router.get('/isAuthenticated',userController.isAuthenticated)
router.get('/isAdmin',validateUserRequest.validateIsAdminRequest,userController.isAdmin)
module.exports=router;