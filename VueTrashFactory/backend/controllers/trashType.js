import { getTrashTypes } from "../models/trashTypeModel.js";

export const showTrashTypes = (req, res) => {
    getTrashTypes((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
