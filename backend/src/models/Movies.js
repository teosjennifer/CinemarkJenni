import{Schema, model} from "mongoose";


const MoviesSchema = new Schema ({
    name:{
type: String,
require: true
    },

    descripction:{
type: String

    },
    director: {
        type: String,
        require: true,
        min: 0
    },
    gender: {
        type: String,
        require: true,
        min: 0
    },
    year: {
        type: Number,
        require: true,
        min: 0
    },
    duration: {
        type: Number,
        require: true,
        min: 0
    },
    image: {
        type: String,
        require: true,
        min: 0
    },
    
}, {    strict: false
})

export default model ("Movies", MoviesSchema)