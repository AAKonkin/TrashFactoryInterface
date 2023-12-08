import { getEmployee, getEmployeeById, insertEmployee, updateEmployeeById, deleteEmployeeById, getEmployeeBySearch, getEmployeeOrderBy } from "../models/employeeModel.js";

export const showEmployee = (req, res) => {
    getEmployee((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showEmployeeById = (req, res) => {
    getEmployeeById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showEmployeeBySearch = (req, res) => {
    getEmployeeBySearch(req.params.text, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showEmployeeOrderBy = (req, res) => {
    getEmployeeOrderBy([req.params.type, req.params.desc], (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const createEmployee = (req, res) => {
    const data = req.body;
    insertEmployee(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const updateEmployee = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateEmployeeById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const deleteEmployee = (req, res) => {
    const id = req.params.id;
    deleteEmployeeById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}