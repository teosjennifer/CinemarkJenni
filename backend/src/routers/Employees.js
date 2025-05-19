import express from "express";
import EmployeesController from "../controllers/EmployeesController.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.get(EmployeesController.getEmployees) //mostrar
.post(EmployeesController.createEmployees) //agregar

router.route("/:id")

.put(EmployeesController.updateEmployees) //actualizar
.delete(EmployeesController.deleteEmployees) //borrar

export default router;

