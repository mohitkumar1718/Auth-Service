const validateUserRequest=(req, res,next)=>{
    if(!req.body.email){
        return res.status(400).json({
            data:{},
            error:"Email is missing",
            success:false,
            message:"Email is not there please write email"
        })
    }
    if(!req.body.password){
       return res.status(400).json({
            data:{},
            error:"password is missing",
            success:false,
            message:"password is not there please enter password"
        })
    }
    next();
    
}
const validateIsAdminRequest=(req,res,next)=>{
    if(!req.body.id){
        return res.status(400).json({
            data:{},
            error:"id is missing",
            success:false,
            message:"Something went wrong"
        })
    }
    next()

}
module.exports={
    validateUserRequest,
    validateIsAdminRequest

};