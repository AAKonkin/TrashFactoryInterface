import db from "../config/database.js";

export const getStateTypes = (result) => {
    var trashQuery = "SELECT * FROM State;";
    db.query(trashQuery, (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
