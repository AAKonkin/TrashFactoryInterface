import { showEmployee, showEmployeeById, createEmployee, updateEmployee, deleteEmployee, showEmployeeBySearch, showEmployeeOrderBy } from "../controllers/employee.js";
import express from "express"

const routerEmployee = express.Router();

routerEmployee.get('/employee', showEmployee);
routerEmployee.get('/employee/:id', showEmployeeById);
routerEmployee.get('/employee/search/:text', showEmployeeBySearch);
routerEmployee.get('/employee/order_by/:type/:desc', showEmployeeOrderBy);
routerEmployee.post('/employee', createEmployee);
routerEmployee.put('/employee/:id', updateEmployee);
routerEmployee.delete('/employee/:id', deleteEmployee);

export default routerEmployee;