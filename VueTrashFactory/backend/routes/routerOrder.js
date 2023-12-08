import { showOrder, showOrderById, createOrder, updateOrder, deleteOrder, showOrderBySearch, showOrdersOrderBy } from "../controllers/order.js";
import express from "express"

const routerOrder = express.Router();

routerOrder.get('/order', showOrder);
routerOrder.get('/order/:id', showOrderById);
routerOrder.get('/order/search/:text', showOrderBySearch);
routerOrder.get('/order/order_by/:type/:desc', showOrdersOrderBy);
routerOrder.post('/order', createOrder);
routerOrder.put('/order/:id', updateOrder);
routerOrder.delete('/order/:id', deleteOrder);

export default routerOrder;