
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
    async signIn(data){
        try{
            const user= await this.userRepository.getByEmail(data.email);
            const matchPassword=this.checkPassword(data.password,user.password);
            // if password not matched
            if(!matchPassword){
                console.log("Password not matched")
                throw {error:" wrong password ,password is not matched"}
            }
            // if password is matched generate token
            const token=this.createToken({email:user.email, id:user.id})
            return token
        }catch(error){
            console.log(error);
            throw error
        }
    }
    async isAuthenticated(token){
        try{
            const response= this.verifyToken(token);
            if(!response){
                throw {error:"token is not valid"}
            }
            const user=await this.userRepository.get(response.id)
            if(!user){  
                throw {error:"no user is present with the corresponding token"}
            }
            return user.id
            
        }catch(error){
            console.log(error);
            throw error
        }
    }

    createToken(user){ 
        try{
            var token=jwt.sign(user,JWT_KEY,{ expiresIn: '11h' })
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

    checkPassword(PlanePassword,encrytPassword){
        try{
            return bcrypt.compareSync(PlanePassword,encrytPassword)
        }catch(error){
            console.log("something went wrong in verifyToken in userService", error)
            throw error
        }
    }

    
}
module.exports=userService;