<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>Edit Employee</h4>
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
                    <button type="button" class="btn btn-primary" @click="updateEmployee">Update</button>
                </div>
            </div>
        </div>
    </div>
  </template>
  
<script>
import axios from 'axios'

export default{
    name: "editEmployee",
    data() {
        return{
            idEmployee: 0,
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
    mounted() {
        this.getEmployeeData(this.$route.params.id);
        this.idEmployee = this.$route.params.id;
    },
    methods: {
        updateEmployee(){
            console.log(this.model.employee)
            axios.put(`http://localhost:3000/employee/${this.idEmployee}`, this.model.employee).then(res => {
                alert("Successfully Updated");
                location.href = "/employee";
            });
        },
        getEmployeeData(idEmployee){
            axios.get(`http://localhost:3000/employee/${idEmployee}`).then(res => {
                console.log(res.data);
                this.model.employee.firstname = res.data['FirstName'];
                this.model.employee.lastname = res.data['LastName'];
                this.model.employee.surname = res.data['Surname'];
                this.model.employee.employementDate = res.data['EmployementDate'].substring(0,10);
            });
        }
    }
}

</script>