//array de metodos
const MoviesController = {};


import MoviesModel from "../models/Movies.js";

//get - select

MoviesController.getMovies = async (req, res) => {

    const Movies = await MoviesModel.find()
    res.json (Movies)
}

//post - agregar

MoviesController.createMovies = async (req, res) => {
    const {name, descripction,director,gender,year,duration,image } = req.body; //req.body = lo que le pedimos al frontend
    const  newMovies = new MoviesModel({name, descripction,director,gender,year,duration,image });
    await newMovies.save()
    res.json({message: "Movie saved"})
}
 
//delete

MoviesController.deleteMovies = async (req, res) => {
await MoviesModel.findOneAndDelete(req.params.id)
res.json({message: "Movie deleted"})
}

// actualizar - post
MoviesController.updatesMovies = async (req, res) =>{
const {name, descripction,director,gender,year,duration,image } = req.body; // solicito los valores
await MoviesModel.findByIdAndUpdate(req.params.id, {
    name,
    descripction,
    director,
    gender,
    year,
    duration,
    image 
}, {new: true});
res.json({message: "Movie deleted"})
}

export default MoviesController;
