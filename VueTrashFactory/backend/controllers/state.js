import { getStateTypes } from "../models/stateTypeModel.js";

export const showStateTypes = (req, res) => {
    getStateTypes((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
