import db from "../config/database.js";

export const getEmployee = (result) => {
    db.query("SELECT * FROM Employee", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getEmployeeById = (id, result) => {
    db.query("SELECT * FROM Employee WHERE idEmployee = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

export const getEmployeeBySearch = (text, result) => {
    let query = `SELECT idEmployee, FirstName, LastName, Surname, EmployementDate FROM Employee WHERE idEmployee LIKE '%${text}%' OR FirstName LIKE '%${text}%' OR LastName LIKE '%${text}%' OR Surname LIKE '%${text}%' OR EmployementDate LIKE '%${text}%';`;
    db.query(query, [text], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getEmployeeOrderBy = (atr, result) => {
    let query = `SELECT idEmployee, FirstName, LastName, Surname, EmployementDate FROM Employee ORDER BY ${atr[0]} ${atr[1]=='true' ? 'DESC' : ''};`;
    db.query(query, (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const insertEmployee = (data, result) => {
    db.query("INSERT INTO Employee SET ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const updateEmployeeById = (data, id, result) => {
    db.query("UPDATE Employee SET FirstName = ?, LastName = ?, Surname = ?, EmployementDate = ? WHERE idEmployee = ?", [data.firstname, data.lastname, data.surname, data.employementDate, id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const deleteEmployeeById = (id, result) => {
    db.query("DELETE FROM Employee WHERE idEmployee = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}