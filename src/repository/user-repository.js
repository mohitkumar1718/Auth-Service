const {User}=require('../models/index');

class userRepository{

    async create(data){
        try{
            const response=await User.create(data);
            return response;
        }catch(error){
            console.log("something went wrong in user repository");
            throw error;
        }
    }

    async destroy(userId){
        try{
            const response=await User.destroy({
                where:{
                    id:userId
                }
            });
            return response;
        }catch(error){
            console.log("something went wrong in user repository");
            throw error;
        }
    }
    async get(id){
        try{
            const response=await User.findByPk(id,{
                attributes:['email','id']
            });
            return response;
        }catch(error){
            console.log("something went wrong in user repository");
            throw error;
        }
    }
}
module.exports=userRepository;