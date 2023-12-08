import { getTrash, getTrashById, insertTrash, updateTrashById, deleteTrashById, getTrashBySearch, getTrashOrderBy } from "../models/TrashModel.js";

export const showTrash = (req, res) => {
    getTrash((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showTrashById = (req, res) => {
    getTrashById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showTrashBySearch = (req, res) => {
    getTrashBySearch(req.params.text, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showTrashOrderBy = (req, res) => {
    getTrashOrderBy([req.params.type, req.params.desc], (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const createTrash = (req, res) => {
    const data = req.body;
    insertTrash(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const updateTrash = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateTrashById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const deleteTrash = (req, res) => {
    const id = req.params.id;
    deleteTrashById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}