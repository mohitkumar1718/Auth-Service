
const UserRepository=require('../repository/user-repository');

class userService{
    constructor(){
        this.userRepository= new UserRepository();
    }

    async create(data){
        try{
            const response=await this.userRepository.create(data);
            return response;  
        }catch(error){
            console.log("something went wrong in user Service");
            throw error;
        }
    }
}
module.exports=userService;