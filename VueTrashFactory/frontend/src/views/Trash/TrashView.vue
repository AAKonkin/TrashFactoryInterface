<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>Trash
                    <RouterLink to="/addTrash" class="btn btn-primary float-end">Add Trash</RouterLink>
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
                        <th><a class="nav-link active" href="#" @click="orderBy('idTrash')">ID</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('Weight')">Weight</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('TypeName')">Trash Type</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('StateType')">State Type</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('SourceType')">Source Type</a></th>
                        <th><a class="nav-link active" href="#" @click="orderBy('ReceiptDate')">Receipt Date</a></th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody v-if="this.trash.length > 0">
                    <tr v-for="(trash, index) in this.trash" :key="index">
                        <td>{{ trash.idTrash }}</td>
                        <td>{{ trash.Weight }}</td>
                        <td>{{ trash.TypeName }}</td>
                        <td>{{ trash.StateType }}</td>
                        <td>{{ trash.SourceType }}</td>
                        <td>{{ trash.ReceiptDate.substring(0,10) }}</td>
                        <td>
                            <button type="button" class="btn btn-danger float-end" @click="deleteTrash(trash.idTrash)">Delete</button>
                            <RouterLink :to=" {path: '/trash/'+trash.idTrash+'/edit'}" class="btn btn-success float-start">
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
    name: "trash",
    data() {
        return {
            model:{
                search_input: "",
                order_by_state: ""
            },
            trash: []
        };
    },
    mounted() {
        this.getTrashList();
    },
    methods: {
        getTrashList() {
            axios.get("http://localhost:3000/trash").then(res => {
                this.trash = res.data;
                console.log(this.trash)
            });
        },
        deleteTrash(idTrash) {
            if (confirm("Are you sure? Delete this Trash?"))
                axios.delete(`http://localhost:3000/trash/${idTrash}`).then(res => {
                    alert("This Trash Deleted successfully")
                    this.getTrashList();
                })
        },
        searchByInput() {
            let search = this.model.search_input.trim();
            console.log(search)
            if (search != "")
                axios.get(`http://localhost:3000/trash/search/${search}`).then(res => {
                    if (res.data.length)
                        this.trash = res.data;
                    else alert(`No one elements like '${search}'`)
                });
        },
        orderBy(type) {
            if (this.order_by_state == type)
                axios.get(`http://localhost:3000/trash/order_by/${type}/true`).then(res => {
                    console.log(`http://localhost:3000/trash/order_by/${type}/false`)
                    this.order_by_state = "";
                    this.trash = res.data;
                });
            else {
                this.order_by_state = type
                axios.get(`http://localhost:3000/trash/order_by/${type}/false`).then(res => {
                    this.trash = res.data;
                });
            }
        }
    },
    components: { RouterLink }
}

</script>