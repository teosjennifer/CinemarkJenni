import express from "express";
import registerEmployeesController from "../controllers/RegisterEmployeesController.js";


const router = express.Router();

router.route("/")
.post(registerEmployeesController.registerEmployees)

router.route("/verifyCodeEmail").post(registerEmployeesController.verifyCodeEmail)



export default router;
