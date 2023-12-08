<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>Order
                    <RouterLink to="/addOrder" class="btn btn-primary float-end">Add Order</RouterLink>
                </h4>
                <div class="input-group mb-3 head_style">
                    <input type="text" class="form-control" placeholder="Enter text to search..." v-model="model.search_input">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" @click="searchByInput()">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th><a class="nav-link active" href="#" @click="orderBy('idOrder')">ID</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('Weight')">Weight</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('OrderDate')">Order Date</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('RecycleProductId')">RecycleProductId</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('OrganizationOrFullName')">Organization Name</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('Phone')">Phone</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('Priority')">Priority</a></th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody v-if="this.order.length > 0">
                    <tr v-for="(order, index) in this.order" :key="index">
                        <td>{{ order.idOrder }}</td>
                        <td>{{ order.Weight }}</td>
                        <td>{{ order.OrderDate.substring(0,10) }}</td>
                        <td>{{ order.RecycleProductId }}</td>
                        <td>{{ order.OrganizationOrFullName }}</td>
                        <td>{{ order.Phone }}</td>
                        <td>{{ order.Priority }}</td>
                        <td>
                            <button type="button" class="btn btn-danger float-end" @click="deleteOrder(order.idOrder)">Delete</button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="7">Loading...</td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </div>
</template>
  
<script>
import axios from 'axios'
import { RouterLink } from 'vue-router';
export default{
    name: "order",
    data() {
        return {
            model:{
                search_input: "",
                order_by_state: ""
            },
            order: []
        };
    },
    mounted() {
        this.getOrderList();
    },
    methods: {
        getOrderList() {
            axios.get("http://localhost:3000/order").then(res => {
                this.order = res.data;
                console.log(this.order)
            });
        },
        deleteOrder(idOrder) {
            if (confirm("Are you sure? Delete this Order?"))
                axios.delete(`http://localhost:3000/order/${idOrder}`).then(res => {
                    alert("This Order Deleted successfully")
                    this.getOrderList();
                })
        },
        searchByInput() {
            let search = this.model.search_input.trim();
            console.log(search)
            if (search != "")
                axios.get(`http://localhost:3000/order/search/${search}`).then(res => {
                    if (res.data.length)
                        this.order = res.data;
                    else alert(`No one elements like '${search}'`)
                });
        },
        orderBy(type) {
            if (this.order_by_state == type)
                axios.get(`http://localhost:3000/order/order_by/${type}/true`).then(res => {
                    console.log(`http://localhost:3000/order/order_by/${type}/false`)
                    this.order_by_state = "";
                    this.order = res.data;
                });
            else {
                this.order_by_state = type
                axios.get(`http://localhost:3000/order/order_by/${type}/false`).then(res => {
                    this.order = res.data;
                });
            }
        }
    },
    components: { RouterLink }
}

</script>