import clientsModel from "../models/Clients.js";
import employeesModel from "../models/Employees.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import {config} from "../config.js"

const logincontroller = {};

//post - agregar
          
logincontroller.login = async (req, res) => {
    const {email, password} = req.body; //req.body = lo que le pedimos al frontend

try {
let userFound;
let userType;

if(email === config.admin.ADMIN_USERNAME && password === config.admin.ADMIN_PASSWORD){
     userType = "admin"
userFound = {_id:"admin"}

   

}else {
userFound = await employeesModel.findOne({email})
    userType = "employee"

    if (!userFound){
        userFound = await clientsModel.findOne({email})
        userType = "client"
    
    }
}

if(!userFound){
    return res.json ({message: "User not found "})
}


if(userType !== "admin"){
    const isMatch = await bcryptjs.compare(password, userFound.password)
    console.log("contra que escriben " + password + " contra que esta en la bd"+userFound.password)
    if (!isMatch){
        res.json({message: "invalid password"})
    }
}

jsonwebtoken.sign (
    {id: userFound._id, userType},

    config.jwt.secret,

{expiresIn:config.jwt.expiresIn},

(error, token)=> {
    if(error) console.log ("error" + error)
        res.cookie("authToken", token)
    res.json({message: "login successful    "})

}


)

}catch(error){
    console.log("error"+error)


}
}

 export default logincontroller; 