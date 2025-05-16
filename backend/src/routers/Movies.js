import express from "express";
import MoviesController from "../controllers/MoviesController.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.get(MoviesController.getMovies) //mostrar
.post(MoviesController.createMovies) //agregar

router.route("/:id")

.put(MoviesController.updatesMovies) //actualizar
.delete(MoviesController.deleteMovies) //borrar

export default router;