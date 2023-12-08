import db from "../config/database.js";

export const getGarbageTruck = (result) => {
    var trashQuery = "SELECT GarbageTruck.idGarbageTruck, GarbageTruck.CarLicensePlate, GarbageTruck.TruckBrand, GarbageTruck.TruckModel, Employee.FirstName, Employee.LastName FROM GarbageTruck LEFT JOIN Employee ON GarbageTruck.EmployeeId = Employee.idEmployee;";
    db.query(trashQuery, (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getGarbageTruckById = (id, result) => {
    db.query("SELECT * FROM GarbageTruck WHERE idGarbageTruck = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

export const getGarbageTruckBySearch = (text, result) => {
    let query = `SELECT GarbageTruck.idGarbageTruck, GarbageTruck.CarLicensePlate, GarbageTruck.TruckBrand, GarbageTruck.TruckModel, Employee.FirstName, Employee.LastName FROM GarbageTruck LEFT JOIN Employee ON GarbageTruck.EmployeeId = Employee.idEmployee WHERE GarbageTruck.idGarbageTruck LIKE '%${text}%' OR GarbageTruck.CarLicensePlate LIKE '%${text}%' OR GarbageTruck.TruckBrand LIKE '%${text}%' OR GarbageTruck.TruckModel LIKE '%${text}%' OR Employee.FirstName LIKE '%${text}%' OR Employee.LastName LIKE '%${text}%';`;
    db.query(query, [text], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getGarbageTruckOrderBy = (atr, result) => {
    let query = `SELECT GarbageTruck.idGarbageTruck, GarbageTruck.CarLicensePlate, GarbageTruck.TruckBrand, GarbageTruck.TruckModel, Employee.FirstName, Employee.LastName FROM GarbageTruck LEFT JOIN Employee ON GarbageTruck.EmployeeId = Employee.idEmployee ORDER BY ${atr[0]} ${atr[1]=='true' ? 'DESC' : ''};`;
    db.query(query, (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const insertGarbageTruck = (data, result) => {
    db.query("INSERT INTO GarbageTruck SET ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const updateGarbageTruckById = (data, id, result) => {
    db.query("UPDATE GarbageTruck SET CarLicensePlate = ?, TruckBrand = ?, TruckModel = ?, EmployeeId = ? WHERE idGarbageTruck = ?;", [data.CarLicensePlate, data.TruckBrand, data.TruckModel, data.EmployeeId, id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const deleteGarbageTruckById = (id, result) => {
    db.query("DELETE FROM GarbageTruck WHERE idGarbageTruck = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}