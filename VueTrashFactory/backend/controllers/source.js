import { getSourceTypes } from "../models/sourceTypeModel.js";

export const showSourceTypes = (req, res) => {
    getSourceTypes((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
