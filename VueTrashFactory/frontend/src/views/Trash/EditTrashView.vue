<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>Edit Trash</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Weight</label>
                    <input type="float" class="form-control" v-model="model.trash.weight">
                </div>
                <div class="mb-3">
                    <label for="">Receipt Date</label>
                    <input type="date" class="form-control" v-model="model.trash.receiptDate">
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Trash Type</label>
                    <select class="form-select" id="inputGroupSelect01" v-model="model.trash.trashTypeId">
                        <option v-for="(trashType, index) in this.trashTypes" :key="index" :value="trashType.idTrashType">
                            {{trashType.TypeName}}
                        </option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect02">Source Type</label>
                    <select class="form-select" id="inputGroupSelect02" v-model="model.trash.sourceId">
                        <option v-for="(sourceType, index) in this.sourceTypes" :key="index" :value="sourceType.idSource">
                            {{sourceType.SourceType}}
                        </option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect03">State Type</label>
                    <select class="form-select" id="inputGroupSelect03" v-model="model.trash.stateId">
                        <option v-for="(stateType, index) in this.stateTypes" :key="index" :value="stateType.idState">
                            {{stateType.StateType}}
                        </option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect04">Garbage Truck ID</label>
                    <select class="form-select" id="inputGroupSelect04" v-model="model.trash.garbageTruckId">
                        <option v-for="(garbageTruck, index) in this.garbageTrucks" :key="index" :value="garbageTruck.idGarbageTruck">
                            {{garbageTruck.CarLicensePlate}}
                        </option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect05">Employee</label>
                    <select class="form-select" id="inputGroupSelect05" v-model="model.trash.employeeId">
                        <option v-for="(employee, index) in this.employees" :key="index" :value="employee.idEmployee">
                            {{employee.FirstName}} {{employee.LastName}} {{employee.Surname}}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                    <button type="button" class="btn btn-success" @click="updateTrash">Update</button>
                </div>
            </div>
        </div>
    </div>
  </template>
  
<script>
import axios from 'axios'

export default{
    name: "editTrash",
    data() {
        return{
            idTrash: 0,
            model: {
                trash: {
                    weight: 0.0,
                    receiptDate: "",
                    trashTypeId: 0,
                    sourceId: 0,
                    stateId: 0,
                    garbageTruckId: 0,
                    employeeId: 0
                }
            },
            trashTypes: [],
            sourceTypes: [],
            stateTypes: [],
            garbageTrucks: [],
            employees: []
        }
    },
    mounted() {
        this.getTrashTypes();
        this.getSourceTypes();
        this.getStateTypes();
        this.getGarbageTrucks();
        this.getEmployees();
        this.getTrashData(this.$route.params.id);
        this.idTrash = this.$route.params.id;
    },
    methods: {
        getTrashTypes(){
            axios.get("http://localhost:3000/trashTypes").then(res => {
                this.trashTypes = res.data;
            });
        },
        getSourceTypes(){
            axios.get("http://localhost:3000/sourceTypes").then(res => {
                this.sourceTypes = res.data;
            });
        },
        getStateTypes(){
            axios.get("http://localhost:3000/stateTypes").then(res => {
                this.stateTypes = res.data;
            });
        },
        getGarbageTrucks(){
            axios.get("http://localhost:3000/garbageTruck").then(res => {
                this.garbageTrucks = res.data;
            });
        },
        getEmployees(){
            axios.get("http://localhost:3000/employee").then(res => {
                this.employees = res.data;
            });
        },
        updateTrash(){
            console.log(this.model.trash)
            this.model.trash.weight = parseFloat(this.model.trash.weight)
            axios.put(`http://localhost:3000/trash/${this.idTrash}`, this.model.trash).then(res => {
                alert("Successfully Updated");
                location.href = "/";
            });
        },
        getTrashData(idTrash){
            axios.get(`http://localhost:3000/trash/${idTrash}`).then(res => {
                console.log(res.data);
                this.model.trash.weight = res.data['Weight'];
                this.model.trash.receiptDate = res.data['ReceiptDate'].substring(0,10);
                this.model.trash.trashTypeId = res.data['TrashTypeId'];
                this.model.trash.sourceId = res.data['SourceId'];
                this.model.trash.stateId = res.data['StateId'];
                this.model.trash.garbageTruckId = res.data['GarbageTruckId'];
                this.model.trash.employeeId = res.data['EmployeeId'];
            });
        }
    }
}

</script>