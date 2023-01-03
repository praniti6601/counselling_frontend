<template>
    <div>
        <div class="container">
            <div class="card text-white bg-info mb-5" style="margin-top:70px;min-height:600px">
                <div class="card-header"><h2 style="color:white;text-align:center;letter-spacing:1px">Admin Dashboard</h2></div>
                <div class="card-body">
                    <h5 class="card-title">{{collegename}}</h5>
                    <table class="table table-bordered m-auto" style="max-width:600px">
                        <thead>
                          <tr>
                            <th scope="col">Total Registered Student</th><th scope="col">{{total_student}}</th> </tr>
                        <tr><th scope="col">Verified Students</th><th scope="col">{{verified}}</th>
                            
                          </tr><tr><th scope="col">Total Alloted Students</th><th scope="col">{{alloted}}</th>
                            
                          </tr>
                        </thead>
                        </table>
        </div></div>
      </div>

      
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'AdminDashboard',
    data(){
        return{
            total_student:0,
            verified:0,
            alloted:0,
            collegename:localStorage.getItem('college_name'),
        }
    },
    mounted(){
this.student_count();
    },
    methods:{
        async student_count(){
            const token = localStorage.getItem('token');
      await axios.get(`api/admin/student_count`,{ headers: { 'Authorization': 'Bearer ' + token } 
    })
        .then((res)=>{
        
         //college list store 
    //    console.log(res.data)
      this.total_student=res.data.reg_student;
      this.verified=res.data.verify;
      this.alloted=res.data.allotment;
        }).catch((err)=>{
      console.log(err);
        })
    }
    }
}
</script>