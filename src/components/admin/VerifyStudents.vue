<template>
    <div>
        <div class="container">
            <div class="card mb-5"  style="margin-top:70px;min-height:600px">
                <h5 class="card-header">Verify Students</h5>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Rank</th>
                            <th scope="col">Name</th>
                            <th scope="col">Roll No</th>
                            <th scope="col">Mark</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(student ,i) in notverified_student" :key="student._id">
                            <th scope="row">{{i+1}}</th>
                            <td>{{student.rank}}</td>
                            <td>{{student.name}}</td>
                            <td>{{student.rollno}}</td>
                            <td>{{student.marks}}</td>
                            <td><button @click="verify(student._id)" class="btn btn-primary">Verify</button></td>
                          </tr>
                        
                        </tbody>
                      </table>
                </div>
              </div>


      </div>

      
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'VerifyStudents',
    data(){
        return{
            notverified_student:[],
        }
    },
  
    mounted(){
this.notverified();
    },
    methods:{
        async notverified(){
            const token = localStorage.getItem('token');
      await axios.get(`api/admin/notallot_student`,{ headers: { 'Authorization': 'Bearer ' + token } 
    })
        .then((res)=>{
        
         //college list store 
    //    console.log(res.data)
      this.notverified_student=res.data;

        }).catch((err)=>{
      console.log(err);
        })
    },
    async verify(studentid){
        const token = localStorage.getItem('token');
        await axios.put(`api/admin/update_status/${studentid}`,{status:1},
        { headers: { 'Authorization': 'Bearer ' + token } 
    })
        .then((res)=>{
        
         //college list store 
    //    console.log(res.data)
    if(res.data.query_status)
    {
        alert("student successfully verified !");
        this.notverified();
    }
     

        }).catch((err)=>{
      console.log(err);
        })
    }
    }
}
</script>