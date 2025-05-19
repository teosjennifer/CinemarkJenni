const EmployeesController = {};

import EmployeesModel from "../models/Employees.js";

//get - select

EmployeesController.getEmployees = async (req, res) => {

    const employees = await EmployeesModel.find()
    res.json (employees)
}

//create - post

EmployeesController.createEmployees = async (req, res) => {
    const {name, email, password, telephone, direction, position, date_contratation, salary, dui} = req.body;
    const newEmployee = new EmployeesModel({
        name,
        email,
        password,
        telephone,
        direction,
        position,
        date_contratation,
        salary,
        dui
    });
    
    await newEmployee.save();
    res.json({message: "employee created successfully"});
}
 
//delete

EmployeesController.deleteEmployees = async (req, res) => {
await EmployeesModel.findOneAndDelete(req.params.id)
res.json({message: "employee deleted"})
}

// actualizar - post

EmployeesController.updateEmployees = async (req, res) =>{
const {name,email, password,telephone,direction, position,date_contratation,salary,dui} = req.body; // solicito los valores
await EmployeesModel.findByIdAndUpdate(req.params.id, {
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
res.json({message: "employee updated"})
}

export default EmployeesController;

