import cutomersModel from "../models/Customer.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import nodemailer from "nodemailer"
import crypto from "crypto"
import {config} from "../config.js"


const registerCustomerController = {}
registerCustomerController.registerCustomer = async (req, res) => {
    const {name, email, password, telephone, direction, dui } = req.body; //req.body = lo que le pedimos al frontend
    try{
const existCustomer = await custonerModel.findOne({email})

if (existCustomer){
return res.json ({message:"Customer already exist"})
}

    const passwordHash = await bcryptjs.hash(password, 10)

    const  newcustomer = new customerModel({  name, email, password:passwordHash, telephone, direction, dui });
    await newcustomer.save()
const verificationCode = crypto.randomBytes(3).toString("hex")
const expiresAt = Date.now() + 2 * 60 * 60 * 1000;

const tokenCode = jsonwebtoken.sign({

email,verificationCode, expiresAt},

    config.jwt.secret,
    {expiresIn:config.jwt.expiresIn},

(error, token) => {
    if (error) console.log ("error"+error);
    res.cookie("verificationCode", token,{maxAge:2 * 60 * 60 * 1000})
})

     //enviar correo
     const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: config.email.useremail,
            pass: config.email.userpassword
        }
     })


     const mailOptions = {
        from: config.email.useremail,
        to: email,
        subject: "Verificacion de correo",
        text:` Para verificar tu cuenta, utliza este codigo ${verificationCode}\n Este codigo expira en dos horas\n `
    }


  transporter.sendMail(mailOptions,(error, info)=>{

if (error) console.log("error aqui", error)
    res.json ({message: "Email sent"})
  })
   
  res.json ({message: "Customer registered, pls verify ur email"})

    }catch(error){
        res.json ({message: "error" + error})

    }
}


registerCustomerController.verifyCodeEmail = async (req, res) => {
    const {verificationCode} = req.body;
    const token = req.cookie.verificationCode;

    if (!token){

        return res.json ({message: "register ur account before"})

    }

    try {
const decoded = jsonwebtoken.verify(token, config.jwt.secret)
const {email, verificationCode: storedCode} = decoded

if (verificationCode !== storedCode){
    return res.json ({message: "invalid verfication code"})
}

const Customer = await cutomersModel.findOne({email})
if (!Customer){
return res.json({message:"customer not found"})
}

Customer.isVerfied = true,
await Customer.save()

res.clearCookie("verificationCode")
res.json({message: "email verify succesfull"})

    }catch(error){
res.json({message: "error"+ error})
    }
}

export default registerCustomerController