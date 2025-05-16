import clientsModel from "../models/Clients.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import nodemailer from "nodemailer"
import crypto from "crypto"
import {config} from "../config.js"


const registerClientscontroller = {}
registerClientscontroller.registerClients = async (req, res) => {
    const {name, email, password, telephone, direction, dui } = req.body; //req.body = lo que le pedimos al frontend
    try{
const existClients = await clientsModel.findOne({email})

if (existClients){
return res.json ({message:"Client already exist"})
}

    const passwordHash = await bcryptjs.hash(password, 10)

    const  newclients = new clientsModel({  name, email, password:passwordHash, telephone, direction, dui });
    await newclients.save()
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
   
  res.json ({message: "Client registered, pls verify ur email"})

    }catch(error){
        res.json ({message: "error" + error})

    }
}


registerClientscontroller.verifyCodeEmail = async (req, res) => {
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

const clients = await cutomersModel.findOne({email})
if (!clients){
return res.json({message:"client not found"})
}

clients.isVerfied = true,
await clients.save()

res.clearCookie("verificationCode")
res.json({message: "email verify succesfull"})

    }catch(error){
res.json({message: "error"+ error})
    }
}

export default registerClientscontroller