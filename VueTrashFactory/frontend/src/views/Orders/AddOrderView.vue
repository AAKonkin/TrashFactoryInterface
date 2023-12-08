<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>Add Employee</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Weight</label>
                    <input type="float" class="form-control" v-model="model.order.weight">
                </div>
                <div class="mb-3">
                    <label for="">Order Date</label>
                    <input type="date" class="form-control" v-model="model.order.orderDate">
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect03">RecycleProductId</label>
                    <select class="form-select" id="inputGroupSelect03" v-model="model.order.recycleProductId">
                        <option v-for="(recycleProduct, index) in this.recycleProduct" :key="index" :value="recycleProduct.idRecycleProduct">
                            {{recycleProduct.idRecycleProduct}}
                        </option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect03">Customer</label>
                    <select class="form-select" id="inputGroupSelect03" v-model="model.order.customerId">
                        <option v-for="(customer, index) in this.customer" :key="index" :value="customer.idCustomer">
                            {{customer.OrganizationOrFullName}}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                    <button type="button" class="btn btn-primary" @click="addOrder">Save</button>
                </div>
            </div>
        </div>
    </div>
  </template>
  
<script>
import axios from 'axios'

export default{
    name: "addEmployee",
    data() {
        return{
            model: {
                order: {
                    weight: "",
                    orderDate: "",
                    recycleProductId: "",
                    customerId: ""
                }
            },
            customer: [],
            recycleProduct: []
        }
    },
    mounted(){
        this.getCustomers();
        this.getRecycleProductId();
    },
    methods: {
        getCustomers(){
            axios.get("http://localhost:3000/customers").then(res => {
                this.customer = res.data;
            });
        },
        getRecycleProductId(){
            axios.get("http://localhost:3000/recycle_product").then(res => {
                this.recycleProduct = res.data;
            });
        },
        addOrder(){
            console.log(this.model.order)
            axios.post("http://localhost:3000/order", this.model.order).then(res => {
                alert("Successfully Added")
                location.href = "/orders";
            });
        }
    }
}

</script>