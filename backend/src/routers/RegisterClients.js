import express from "express";
import registerClientscontroller from "../controllers/RegisterClientController.js";


const router = express.Router();

router.route("/")
.post(registerClientscontroller.registerClients)

router.route("/verifyCodeEmail").post(registerClientscontroller.verifyCodeEmail)



export default router;
