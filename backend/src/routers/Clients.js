import express from "express";
import ClientsController from "../controllers/ClientsController.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.get(ClientsController.getClients) //mostrar
.post(ClientsController.createClients) //agregar

router.route("/:id")

.put(ClientsController.updateClients) //actualizar
.delete(ClientsController.deleteClients) //borrar

export default router;

