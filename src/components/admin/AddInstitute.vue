<template>
    <div>
        <div class="container">
            <div class="card mb-5"  style="margin-top:70px;min-height:600px">
                <h5 class="card-header">Add Institute</h5>
                <div class="card-body">
                    <form class="card-form" id="form"  @submit.prevent="Add_institute()">
                  <table class="table table-bordered m-auto" style="max-width:600px">
                    <thead>
                      <tr>
                        <th scope="col">Institute Name</th>
                        <th scope="col"><input type="text" v-model="add_data.name" class="form-control" required></th></tr>
                        <tr><th scope="col">Branch</th>
                        <th scope="col"><select id="inputState" class="form-control"  v-model="add_data.branch" >
                            <option value="1">Choose Branch</option>
                            <option value="CSE">CSE</option>
                            <option value="ECE">ECE</option>
                            <option value="ME">ME</option>
                            <option value="AE">AE</option>
                          </select></th></tr>
                          <tr><th colspan="2"  class="text-center">Seat Matrix </th></tr>
                          <tr><th colspan="2"> 
                            <div class="row">
                                <div class="col-sm">
                                    <label for="gen">General</label>
                                    <input type="number" class="form-control" id="gen" style="max-width:95px;"  v-model="add_data.seatmatrix.GEN" >
                                </div>
                                <div class="col-sm">
                                    <label for="obc">OBC</label>
                                    <input type="number" class="form-control" id="obc" style="max-width:95px;" v-model="add_data.seatmatrix.OBC" >
                                </div>
                                <div class="col-sm">
                                    <label for="SC">SC</label>
                                    <input type="number" class="form-control" id="SC" style="max-width:95px;" v-model="add_data.seatmatrix.SC" >
                                </div>

                               <div class="col-sm">
                                    <label for="ST">ST</label>
                                    <input type="number" class="form-control" id="ST" style="max-width:95px;" v-model="add_data.seatmatrix.ST" >
                                </div>
                              </div>
                             </th></tr>
                             <tr><th colspan="2"  class="text-center"><button  class="btn btn-primary">Add Institute</button></th></tr>
                    </thead>
                    </table>
                </form>
                </div>
              </div>


      </div>

      
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'AdminDashboard',
    data(){
        return{
           ins_name:'',
           add_data:{branch:1,seatmatrix:{}},

        }
    },
  
    methods:{
       async Add_institute(){
            const token = localStorage.getItem('token');
      await axios.post(`api/admin/add_ins`,this.add_data,{ headers: { 'Authorization': 'Bearer ' + token } 
    })
        .then((res)=>{    
    //    console.log(res.data.status)
        if(res.data.status){
            alert("Institute Added Successfully!");
          const form = document.getElementById('form');
          form.reset();
          this.add_data={branch:1,seatmatrix:{}};

                    }
      

        }).catch((err)=>{
      console.log(err);
        })
        }
    }
}
</script>