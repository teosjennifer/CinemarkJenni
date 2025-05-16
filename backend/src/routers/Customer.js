import express from "express";
import CustomerController from "../controllers/CustomerController.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.get(CustomerController.getCustomer) //mostrar
.post(CustomerController.createCustomer) //agregar

router.route("/:id")

.put(CustomerController.updateCustomer) //actualizar
.delete(CustomerController.deleteCustomer) //borrar

export default router;

