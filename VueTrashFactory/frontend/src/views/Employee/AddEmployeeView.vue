<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>Add Employee</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Firstname</label>
                    <input type="float" class="form-control" v-model="model.employee.firstname">
                </div>
                <div class="mb-3">
                    <label for="">Lastname</label>
                    <input type="float" class="form-control" v-model="model.employee.lastname">
                </div>
                <div class="mb-3">
                    <label for="">Surname</label>
                    <input type="float" class="form-control" v-model="model.employee.surname">
                </div>
                <div class="mb-3">
                    <label for="">Employement Date</label>
                    <input type="date" class="form-control" v-model="model.employee.employementDate">
                </div>
                <div class="mb-3">
                    <button type="button" class="btn btn-primary" @click="saveEmployee">Save</button>
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
                employee: {
                    firstname: "",
                    lastname: "",
                    surname: "",
                    employementDate: "",
                }
            }
        }
    },
    methods: {
        saveEmployee(){
            console.log(this.model.employee)
            axios.post("http://localhost:3000/employee", this.model.employee).then(res => {
                alert("Successfully Added")
                location.href = "/employee";
            });
        }
    }
}

</script>