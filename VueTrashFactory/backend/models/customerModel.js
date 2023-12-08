import db from "../config/database.js";

export const getCustomers = (result) => {
    var trashQuery = "SELECT * FROM Customer;";
    db.query(trashQuery, (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
