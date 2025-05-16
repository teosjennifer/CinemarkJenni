import{Schema, model} from "mongoose";

const CustomerSchema = new Schema ({
    name:{
type: String,
require: true
    },

    email:{
type: String,
require: true
    },

    password: {
        type: String,
        require: true,
        
    },

    telephone: {
        type: String,
        require: true,
       
    },

    direction: {
        type: String,
        require: true,
    },

    position: {
        type: String,
        require: true,
       
    },

    date_contratation: {
        type: Date,
        require: true,
       
    },
    salary: {
        type: Number
       
    },
    DUI: {
        type: String
       
    }
    
    
}, {
    timestamps:true,
    strict: false
})

export default model ("Customer", CustomerSchema)