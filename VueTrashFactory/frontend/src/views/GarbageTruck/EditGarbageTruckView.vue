<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>Edit Garbage Truck</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Car License Plate</label>
                    <input type="text" class="form-control" v-model="model.garbageTruck.CarLicensePlate">
                </div>
                <div class="mb-3">
                    <label for="">Truck Brand</label>
                    <input type="text" class="form-control" v-model="model.garbageTruck.TruckBrand">
                </div>
                <div class="mb-3">
                    <label for="">Truck Model</label>
                    <input type="text" class="form-control" v-model="model.garbageTruck.TruckModel">
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Driver</label>
                    <select class="form-select" id="inputGroupSelect01" v-model="model.garbageTruck.EmployeeId">
                        <option v-for="(employee, index) in this.employee" :key="index" :value="model.garbageTruck.EmployeeId">
                            {{employee.FirstName+" "+employee.LastName+" "+employee.Surname}}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                    <button type="button" class="btn btn-success" @click="updateGarbageTruck">Update</button>
                </div>
            </div>
        </div>
    </div>
  </template>
  
<script>
import axios from 'axios'

export default{
    name: "editGarbageTruck",
    data() {
        return{
            idGarbageTruck: 0,
            model: {
                garbageTruck: {
                    CarLicensePlate: "",
                    TruckBrand: "",
                    TruckModel: "",
                    EmployeeId: 0
                }
            },
            employee: []
        }
    },
    mounted() {
        this.getEmployees();
        this.getGarbageTruckData(this.$route.params.id);
        this.idGarbageTruck = this.$route.params.id;
    },
    methods: {
        getEmployees(){
            axios.get("http://localhost:3000/employee").then(res => {
                this.employee = res.data;
            });
        },
        updateGarbageTruck(){
            axios.put(`http://localhost:3000/garbageTruck/${this.idGarbageTruck}`, this.model.garbageTruck).then(res => {
                alert("Successfully Updated");
                location.href = "/garbage_truck";
            });
        },
        getGarbageTruckData(idGarbageTruck){
            axios.get(`http://localhost:3000/garbageTruck/${idGarbageTruck}`).then(res => {
                console.log(res.data);
                this.model.garbageTruck.CarLicensePlate = res.data['CarLicensePlate'];
                this.model.garbageTruck.TruckBrand = res.data['TruckBrand'];
                this.model.garbageTruck.TruckModel = res.data['TruckModel'];
                this.model.garbageTruck.EmployeeId = res.data['EmployeeId'];
            });
        }
    }
}

</script>