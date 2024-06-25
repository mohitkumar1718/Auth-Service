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
module.exports={
    create,
}