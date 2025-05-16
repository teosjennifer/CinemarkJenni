const CustomerController = {};

import CustomerModel from "../models/Customer.js";

//get - select

CustomerController.getCustomer = async (req, res) => {

    const customer = await CustomerModel.find()
    res.json (customer)
}
 
//delete

CustomerController.deleteCustomer = async (req, res) => {
await CustomerModel.findOneAndDelete(req.params.id)
res.json({message: "customer deleted"})
}

// actualizar - post

CustomerController.updateCustomer = async (req, res) =>{
const {name,email, password,telephone,direction, position,date_contratation,salary,dui} = req.body; // solicito los valores
await CustomerModel.findByIdAndUpdate(req.params.id, {
    name,
    email,
    password,
    telephone,
    direction, 
    position,
    date_contratation,
    salary,
    dui
}, {new: true});
res.json({message: "customer deleted"})
}

export default CustomerController;

