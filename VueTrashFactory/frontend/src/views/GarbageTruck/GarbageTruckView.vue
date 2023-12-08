<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>Garbage Truck
                    <RouterLink to="/addTrash" class="btn btn-primary float-end">Add Garbage Truck</RouterLink>
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
                        <th><a class="nav-link active" href="#" @click="orderBy('idGarbageTruck')">ID</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('CarLicensePlate')">Car License Plate</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('TruckBrand')">Truck Brand</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('TruckModel')">Truck Model</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('EmployeeId')">Employee (Driver)</a></th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody v-if="this.garbage_truck.length > 0">
                    <tr v-for="(garbage_truck, index) in this.garbage_truck" :key="index">
                        <td>{{ garbage_truck.idGarbageTruck }}</td>
                        <td>{{ garbage_truck.CarLicensePlate }}</td>
                        <td>{{ garbage_truck.TruckBrand }}</td>
                        <td>{{ garbage_truck.TruckModel }}</td>
                        <td>{{ garbage_truck.FirstName + " " + garbage_truck.LastName}}</td>
                        <td>
                            <button type="button" class="btn btn-danger float-end" @click="deleteGarbageTruck(garbage_truck.idGarbageTruck)">Delete</button>
                            <RouterLink :to=" {path: '/garbage_truck/'+garbage_truck.idGarbageTruck+'/edit'}" class="btn btn-success float-start">
                                Edit
                            </RouterLink>
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
    name: "garbageTruck",
    data() {
        return {
            model:{
                search_input: "",
                order_by_state: ""
            },
            garbage_truck: []
        };
    },
    mounted() {
        this.getGarbageTruckList();
    },
    methods: {
        getGarbageTruckList() {
            axios.get("http://localhost:3000/garbageTruck").then(res => {
                this.garbage_truck = res.data;
                console.log(this.garbage_truck)
            });
        },
        deleteGarbageTruck(idTrash) {
            if (confirm("Are you sure? Delete this Garbage Truck?"))
                axios.delete(`http://localhost:3000/garbageTruck/${idTrash}`).then(res => {
                    alert("This Garbage Truck Deleted successfully")
                    this.getGarbageTruckList();
                })
        },
        searchByInput() {
            let search = this.model.search_input.trim();
            console.log(search)
            if (search != "")
                axios.get(`http://localhost:3000/garbageTruck/search/${search}`).then(res => {
                    if (res.data.length)
                        this.garbage_truck = res.data;
                    else alert(`No one elements like '${search}'`)
                });
        },
        orderBy(type) {
            if (this.order_by_state == type)
                axios.get(`http://localhost:3000/garbageTruck/order_by/${type}/true`).then(res => {
                    console.log(`http://localhost:3000/garbageTruck/order_by/${type}/false`)
                    this.order_by_state = "";
                    this.garbage_truck = res.data;
                });
            else {
                this.order_by_state = type
                axios.get(`http://localhost:3000/garbageTruck/order_by/${type}/false`).then(res => {
                    this.garbage_truck = res.data;
                });
            }
        }
    },
    components: { RouterLink }
}

</script>