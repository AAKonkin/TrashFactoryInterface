import { deleteGarbageTruckById, getGarbageTruck, getGarbageTruckById, getGarbageTruckBySearch, getGarbageTruckOrderBy, insertGarbageTruck, updateGarbageTruckById } from "../models/garbageTruckModel.js";

export const showGarbageTruck = (req, res) => {
    getGarbageTruck((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showGarbageTruckById = (req, res) => {
    getGarbageTruckById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showGarbageTruckBySearch = (req, res) => {
    getGarbageTruckBySearch(req.params.text, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showGarbageTruckOrderBy = (req, res) => {
    getGarbageTruckOrderBy([req.params.type, req.params.desc], (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const createGarbageTruck = (req, res) => {
    const data = req.body;
    insertGarbageTruck(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const updateGarbageTruck = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateGarbageTruckById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const deleteGarbageTruck = (req, res) => {
    const id = req.params.id;
    deleteGarbageTruckById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}