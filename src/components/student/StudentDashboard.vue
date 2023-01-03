<template>
    <div>
        <div class="container">
            <div class="card text-white bg-info mb-5" style="margin-top:70px;min-height:600px">
                <div class="card-header"><h2 style="color:white;text-align:center;letter-spacing:1px">Student Dashboard</h2></div>
                <div class="card-body">
                
                    <h5 class="card-title mb-5" style="text-align: center;">Hello {{name}} ! Welecome to Student Dashboard !</h5>
                    <table class="table table-bordered m-auto" style="max-width:600px">
                        <thead>
                            <tr><th scope="col">Roll Number</th><th scope="col">{{student_status.rollno}}</th> </tr>
                          <tr><th scope="col">Category</th><th scope="col">{{student_status.categ}}</th> </tr>
                        <tr><th scope="col">Rank</th><th scope="col">{{student_status.rank}}</th></tr>
                        <tr><th scope="col">Marks</th><th scope="col">{{student_status.marks}}</th></tr>
                        <tr><th scope="col">Status</th>
                            <th scope="col">
                            <span class="badge bg-info" v-if="student_status.status==0">Registered</span>
                            <span class="badge bg-success" v-if="student_status.status==1">Verified</span>
                            <span class="badge bg-success" v-if="student_status.status==2">Alloted</span>
                            <span class="badge bg-danger" v-if="student_status.status==3">Not Alloted</span>
                            </th></tr>
                            <tr v-if="student_status.status==2"><th scope="col">Alloted Category</th><th scope="col">{{student_status.alloted_category }}</th></tr>
                            <tr v-if="student_status.status==2"><th scope="col">Alloted Institute</th><th scope="col">{{student_status.alloted_college_name}}</th></tr>
                            <tr v-if="student_status.status==2"><th scope="col">Alloted Branch</th><th scope="col">{{student_status.branch_id}}</th></tr>

                        </thead>
                        </table>
                       
        </div></div>
      </div>

      
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'StudentDashboard',
    data(){
return{
    name:localStorage.getItem("student_name"),
    student_status:[],
}
    },
    mounted(){
this.student_info();
    },
    methods:{
        async student_info(){
            const token = localStorage.getItem('token');
      await axios.get(`student_api/student/student_info`,{ headers: { 'Authorization': 'Bearer ' + token } 
    })
        .then((res)=>{
        
     
    //    console.log(res.data)
    this.student_status=res.data[0];
      

        }).catch((err)=>{
      console.log(err);
        })
    }
    }


}
</script>