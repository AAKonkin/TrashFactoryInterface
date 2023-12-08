import express from "express"
import routerTrash from "./routerTrash.js";
import routerOrder from "./routerOrder.js";
import routerEmployee from "./routerEmployee.js";
import { showTrashTypes } from "../controllers/trashType.js";
import { showSourceTypes } from "../controllers/source.js";
import { showStateTypes } from "../controllers/state.js";
import { showCustomers } from "../controllers/customer.js";
import routerGarbageTruck from "./routerGarbageTruck.js";
import { showRecycleProduct } from "../controllers/recycleProduct.js";

const router = express.Router();
router.use(routerTrash, routerOrder, routerEmployee, routerGarbageTruck);
router.get('/trashTypes', showTrashTypes);
router.get('/sourceTypes', showSourceTypes);
router.get('/stateTypes', showStateTypes);
router.get('/customers', showCustomers);
router.get('/recycle_product', showRecycleProduct);
export default router;