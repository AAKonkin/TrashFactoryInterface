import { createGarbageTruck, deleteGarbageTruck, showGarbageTruck, showGarbageTruckById, showGarbageTruckBySearch, showGarbageTruckOrderBy, updateGarbageTruck } from "../controllers/garbageTruck.js";
import express from "express"

const routerGarbageTruck = express.Router();

routerGarbageTruck.get('/garbageTruck', showGarbageTruck);
routerGarbageTruck.get('/garbageTruck/:id', showGarbageTruckById);
routerGarbageTruck.get('/garbageTruck/search/:text', showGarbageTruckBySearch);
routerGarbageTruck.get('/garbageTruck/order_by/:type/:desc', showGarbageTruckOrderBy);
routerGarbageTruck.post('/garbageTruck', createGarbageTruck);
routerGarbageTruck.put('/garbageTruck/:id', updateGarbageTruck);
routerGarbageTruck.delete('/garbageTruck/:id', deleteGarbageTruck);

export default routerGarbageTruck;