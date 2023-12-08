import { createRouter, createWebHistory } from 'vue-router'
import TrashView from '../views/Trash/TrashView.vue'
import AddTrashView from '../views/Trash/AddTrashView.vue'
import EditTrashView from '../views/Trash/EditTrashView.vue'

import EmployeeView from '../views/Employee/EmployeeView.vue'
import AddEmployeeView from '../views/Employee/AddEmployeeView.vue'
import EditEmployeeView from '../views/Employee/EditEmployeeView.vue'

import GarbageTruckView from '../views/GarbageTruck/GarbageTruckView.vue'
import AddGarbageTruckView from '../views/GarbageTruck/AddGarbageTruckView.vue'
import EditGarbageTruckView from '../views/GarbageTruck/EditGarbageTruckView.vue'

import OrderView from '../views/Orders/OrderView.vue'
import AddOrderView from '../views/Orders/AddOrderView.vue'
import EditOrderView from '../views/Orders/EditOrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'trash',
      component: TrashView
    },
    {
      path: '/addTrash',
      name: 'addTrash',
      component: AddTrashView
    },
    {
      path: '/trash/:id/edit',
      name: 'editTrash',
      component: EditTrashView
    },
    {
      path: '/employee',
      name: 'employee',
      component: EmployeeView
    },
    {
      path: '/addEmployee',
      name: 'addEmployee',
      component: AddEmployeeView
    },
    {
      path: '/employee/:id/edit',
      name: 'editEmployee',
      component: EditEmployeeView
    },
    {
      path: '/garbage_truck',
      name: 'garbage_truck',
      component: GarbageTruckView
    },
    {
      path: '/addGarbageTruck',
      name: 'addGarbageTruck',
      component: AddGarbageTruckView
    },
    {
      path: '/garbage_truck/:id/edit',
      name: 'editGarbageTruck',
      component: EditGarbageTruckView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrderView
    },
    {
      path: '/addOrder',
      name: 'addOrder',
      component: AddOrderView
    },
    {
      path: '/orders/:id/edit',
      name: 'editOrder',
      component: EditOrderView
    }
  ]
})

export default router
