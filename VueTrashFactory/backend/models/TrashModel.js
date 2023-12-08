import db from "../config/database.js";

export const getTrash = (result) => {
    var trashQuery = "SELECT Trash.idTrash, Trash.Weight, TrashType.TypeName, Source.SourceType, State.StateType, Trash.ReceiptDate FROM Trash LEFT JOIN TrashType ON Trash.TrashTypeId = TrashType.idTrashType LEFT JOIN Source ON Trash.SourceId = Source.idSource LEFT JOIN State ON Trash.StateId = State.idState;";
    db.query(trashQuery, (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getTrashById = (id, result) => {
    db.query("SELECT * FROM Trash WHERE idTrash = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

export const getTrashBySearch = (text, result) => {
    let query = `SELECT Trash.idTrash, Trash.Weight, TrashType.TypeName, Source.SourceType, State.StateType, Trash.ReceiptDate FROM Trash LEFT JOIN TrashType ON Trash.TrashTypeId = TrashType.idTrashType LEFT JOIN Source ON Trash.SourceId = Source.idSource LEFT JOIN State ON Trash.StateId = State.idState WHERE Trash.idTrash LIKE '%${text}%' OR Trash.Weight LIKE '%${text}%' OR TrashType.TypeName LIKE '%${text}%' OR Source.SourceType LIKE '%${text}%' OR State.StateType LIKE '%${text}%' OR Trash.ReceiptDate LIKE '%${text}%';`;
    db.query(query, [text], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getTrashOrderBy = (atr, result) => {
    let query = `SELECT Trash.idTrash, Trash.Weight, TrashType.TypeName, Source.SourceType, State.StateType, Trash.ReceiptDate FROM Trash LEFT JOIN TrashType ON Trash.TrashTypeId = TrashType.idTrashType LEFT JOIN Source ON Trash.SourceId = Source.idSource LEFT JOIN State ON Trash.StateId = State.idState ORDER BY ${atr[0]} ${atr[1]=='true' ? 'DESC' : ''};`;
    db.query(query, (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const insertTrash = (data, result) => {
    db.query("INSERT INTO Trash SET ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const updateTrashById = (data, id, result) => {
    db.query("UPDATE Trash SET Weight = ?, ReceiptDate = ?, TrashTypeId = ?, SourceId = ?, StateId = ?, GarbageTruckId = ?, EmployeeId = ? WHERE idTrash = ?", [data['weight'], data['receiptDate'], data['trashTypeId'], data['sourceId'], data['stateId'], data['garbageTruckId'], data['employeeId'], id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const deleteTrashById = (id, result) => {
    db.query("DELETE FROM Trash WHERE idTrash = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}