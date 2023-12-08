import { getRecycleProduct } from "../models/recycleProductModel.js";

export const showRecycleProduct = (req, res) => {
    getRecycleProduct((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
