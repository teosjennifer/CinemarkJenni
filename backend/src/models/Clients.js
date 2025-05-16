import{Schema, model} from "mongoose";

const ClientsSchema = new Schema ({
    name:{
type: String,
require: true
    },

    email:{
type: String,
require: true
    },

    password: {
        type:  String,
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

    DUI: {
        type: String
       
    }
    
    
}, {
    timestamps:true,
    strict: false
})

export default model ("Clients", ClientsSchema)