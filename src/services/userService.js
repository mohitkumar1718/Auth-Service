
const { JWT_KEY } = require('../config/serverConfig');
const UserRepository=require('../repository/user-repository');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

    createToken(user){ 
        try{
            var token=jwt.sign(user,JWT_KEY,{ expiresIn: '1h' })
            return token;
        }catch(error){
            console.log("something went wrong in createToken in userService", error)
            throw error
        }
    }
    verifyToken(token){        
        try{
            const response=jwt.verify(token,JWT_KEY)
            return response;
        }catch(error){
            console.log("something went wrong in verifyToken in userService", error)
            throw error
        }
    }

    checkPassword(userPlanePassword,encrytPassword){
        try{
            return bcrypt.compareSync(userPlanePassword,encrytPassword)
        }catch(error){
            console.log("something went wrong in verifyToken in userService", error)
            throw error
        }
    }

    
}
module.exports=userService;