import { getOrder, getOrderById, insertOrder, updateOrderById, deleteOrderById, getOrderBySearch, getOrdersOrderBy } from "../models/orderModel.js";

export const showOrder = (req, res) => {
    getOrder((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showOrderById = (req, res) => {
    getOrderById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showOrderBySearch = (req, res) => {
    getOrderBySearch(req.params.text, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showOrdersOrderBy = (req, res) => {
    getOrdersOrderBy([req.params.type, req.params.desc], (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const createOrder = (req, res) => {
    const data = req.body;
    insertOrder(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const updateOrder = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateOrderById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const deleteOrder = (req, res) => {
    const id = req.params.id;
    deleteOrderById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}