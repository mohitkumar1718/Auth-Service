require('dotenv').config();
const bcrypt=require('bcrypt')

module.exports={
    PORT:process.env.PORT,
    SALT:++process.env.SALT,
    JWT_KEY:process.env.JWT_KEY
}