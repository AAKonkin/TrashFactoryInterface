import db from "../config/database.js";

export const getRecycleProduct = (result) => {
    var trashQuery = "SELECT * FROM RecycleProduct;";
    db.query(trashQuery, (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
