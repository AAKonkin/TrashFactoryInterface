<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>Employee
                    <RouterLink to="/addEmployee" class="btn btn-primary float-end">Add Employee</RouterLink>
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
                        <th><a class="nav-link active" href="#" @click="orderBy('idEmployee')">ID</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('FirstName')">Firstname</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('LastName')">Lastname</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('Surname')">Surname</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('EmployementDate')">Employement Date</a></th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody v-if="this.employee.length > 0">
                    <tr v-for="(employee, index) in this.employee" :key="index">
                        <td>{{ employee.idEmployee }}</td>
                        <td>{{ employee.FirstName }}</td>
                        <td>{{ employee.LastName }}</td>
                        <td>{{ employee.Surname }}</td>
                        <td>{{ employee.EmployementDate.substring(0,10) }}</td>
                        <td>
                            <button type="button" class="btn btn-danger float-end" @click="deleteTrash(employee.idEmployee)">Delete</button>
                            <RouterLink :to=" {path: '/employee/'+employee.idEmployee+'/edit'}" class="btn btn-success float-start">
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
    name: "employee",
    data() {
        return {
            model:{
                search_input: "",
                order_by_state: ""
            },
            employee: []
        };
    },
    mounted() {
        this.getEmployeeList();
    },
    methods: {
        getEmployeeList() {
            axios.get("http://localhost:3000/employee").then(res => {
                this.employee = res.data;
                console.log(this.employee)
            });
        },
        deleteTrash(idEmployee) {
            if (confirm("Are you sure? Delete this Employee?"))
                axios.delete(`http://localhost:3000/employee/${idEmployee}`).then(res => {
                    alert("This Employee Deleted successfully")
                    this.getEmployeeList();
                })
        },
        searchByInput() {
            let search = this.model.search_input.trim();
            console.log(search)
            if (search != "")
                axios.get(`http://localhost:3000/employee/search/${search}`).then(res => {
                    if (res.data.length)
                        this.employee = res.data;
                    else alert(`No one elements like '${search}'`)
                });
        },
        orderBy(type) {
            if (this.order_by_state == type)
                axios.get(`http://localhost:3000/employee/order_by/${type}/true`).then(res => {
                    console.log(`http://localhost:3000/employee/order_by/${type}/false`)
                    this.order_by_state = "";
                    this.employee = res.data;
                });
            else {
                this.order_by_state = type
                axios.get(`http://localhost:3000/employee/order_by/${type}/false`).then(res => {
                    this.employee = res.data;
                });
            }
        }
    },
    components: { RouterLink }
}

</script>