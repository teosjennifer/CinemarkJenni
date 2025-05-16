const ClientsController = {};

import ClientsModel from "../models/Clients.js";

//get - select

ClientsController.getClients = async (req, res) => {

    const Clients = await ClientsModel.find()
    res.json (Clients)
}

 
//delete

ClientsController.deleteClients = async (req, res) => {
await ClientsModel.findOneAndDelete(req.params.id)
res.json({message: "client deleted"})
}

// actualizar - post

ClientsController.updateClients = async (req, res) =>{
const {name, email, password,telephone,direction,dui} = req.body; // solicito los valores
await ClientsModel.findByIdAndUpdate(req.params.id, {
    name, 
    email, 
    password,
    telephone,
    direction,
    dui
}, {new: true});
res.json({message: "client deleted"})
}

export default ClientsController;

