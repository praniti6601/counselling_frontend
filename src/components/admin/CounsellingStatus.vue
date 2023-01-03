<template>
    <div>
        <div class="container">
            <div class="card mb-5" style="margin-top:70px;min-height:600px">
                <div class="card-header"><h2 style="text-align:center;letter-spacing:1px">Allotment Status</h2></div>
                <div class="card-body">
                    <div class="row">
                    <div class="col">
                        <h5 style="text-align: center; color: black">Alloted Student List</h5>
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">S.No.</th>
                              <th scope="col"> Name</th>
                              <th scope="col">Category</th>
                              <th scope="col"> Institute Name</th>
                              <th scope="col">Branch</th>
                              <th scope="col">Rank</th>
                              <th scope="col">Alloted Category</th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(cdata,i) in alloted" :key="cdata._id">
                              <th scope="row">{{ i+1 }}</th>
                              <td>{{ cdata.name }}</td>
                              <td>{{ cdata.categ }}</td>
                              <td>{{ cdata.alloted_college_name}}</td>
                              <td>{{ cdata.branch_id }}</td>
                              <td>{{ cdata.rank }}</td>
                              <td>{{ cdata.alloted_category }}</td>
                            
                            </tr>
          
                            
                          </tbody>
                        </table>


                    </div>
                    <div class="col">
                        <h5 style="text-align: center; color: black">Not Alloted Student List</h5>
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">S.No.</th>
                              <th scope="col">Name</th>
                              <th scope="col">Category</th>
                              <th scope="col">Rank</th>
                              <th scope="col">Status</th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(notallotdata,ind) in notalloted" :key="notallotdata._id">
                              <th scope="row">{{ ind+1 }}</th>
                              <td>{{ notallotdata.name }}</td>
                              <td>{{ notallotdata.categ }}</td>
                              <td>{{ notallotdata.rank }}</td>
                              <td> <span class="badge bg-danger">Not Alloted</span></td>
                            
                            </tr>
          
                            
                          </tbody>
                        </table>
                    </div>

                    </div>
                   
        </div></div>
      </div>

      
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'CounsellingStatus',
    data(){
        return{
            alloted:[],
          notalloted:[],
        }
    },
    mounted(){
this.fetch_data();
    },
    methods:{
        async fetch_data(){
            const token = localStorage.getItem('token');
      await axios.get(`api/admin/student_final_data`,{ headers: { 'Authorization': 'Bearer ' + token } 
    })
        .then((res)=>{
this.alloted=res.data.list1;
this.notalloted=res.data.list2;
        }).catch((err)=>{
            if(err.response.data.errmsg==false){
    alert("Counselling not yet done!")
}else{
    alert("Server not connected !")
}

        })
    }
    }
}
</script>