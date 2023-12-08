import db from "../config/database.js";

export const getSourceTypes = (result) => {
    var trashQuery = "SELECT * FROM Source;";
    db.query(trashQuery, (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
