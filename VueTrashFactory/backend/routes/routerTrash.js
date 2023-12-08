import { showTrash, showTrashById, createTrash, updateTrash, deleteTrash, showTrashBySearch, showTrashOrderBy } from "../controllers/trash.js";
import express from "express"

const routerTrash = express.Router();

routerTrash.get('/trash', showTrash);
routerTrash.get('/trash/:id', showTrashById);
routerTrash.get('/trash/search/:text', showTrashBySearch);
routerTrash.get('/trash/order_by/:type/:desc', showTrashOrderBy);
routerTrash.post('/trash', createTrash);
routerTrash.put('/trash/:id', updateTrash);
routerTrash.delete('/trash/:id', deleteTrash);

export default routerTrash;