const UserService=require('../services/userService');
const userService=new UserService();

const create=async(req,res)=>{
    try{
        const response=await userService.create({
            email:req.body.email,
            password:req.body.password
        });
        return res.status(201).json({
            data:response,
            success:true,
            err:{},
            message:"successfully created a new user"
        })

    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            err:{error},
            message:"not able to create a new user"
        })

    }

}
const sighIn=async(req,res)=>{
    try{
        const response= await userService.signIn(req.body);
        return res.status(200).json({
            data:response,
            err:{},
            success:true,
            message:"successfully sign in "
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            err:error,
            success:false,
            message:"not able to sign in "
        })
    }
}
const isAuthenticated=async(req,res)=>{
    try{
        const token= req.headers['x-access-token'];
        const response=await userService.isAuthenticated(token);
        return res.status(200).json({
            data:response,
            err:{},
            success:true,
            message:"user is authenticated and token is valid "
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            err:error,
            success:false,
            message:"token is not valid"
        })
    }
}


module.exports={
    create,
    sighIn,
    isAuthenticated,
}