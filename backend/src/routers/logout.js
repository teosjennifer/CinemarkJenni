import express from "express";
import logout from "../controllers/logaoutcontroller.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.post(logout.logout) //agregar

export default router;