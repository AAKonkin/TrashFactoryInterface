import db from "../config/database.js";

export const getTrashTypes = (result) => {
    var trashQuery = "SELECT * FROM TrashType;";
    db.query(trashQuery, (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
