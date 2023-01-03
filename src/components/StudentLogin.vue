<template>
    <div>
        <div class="container" style="min-height:600px">
            <div class="card text-white bg-info mb-5" style="margin-top:70px;">
                <div class="card-header"><h2 style="color:white;text-align:center;letter-spacing:1px">Student Login</h2></div>
                <div class="card-body">
        <div class="myform-card">
       
          <form class="card-form" id="form"  @submit.prevent="Student_login()">
            
             <div class="input">
              <input type="email" class="input-field" v-model="student_reg.email" id="email" required/>
              <label class="input-label">Email</label>
             </div>
                  <div class="input">
              <input type="password" class="input-field" v-model="student_reg.password"  id="pass" required/>
              <label class="input-label">Password</label>
                      <label id="err_password" style="display: none;"></label>
            </div>
                 
            <div class="action">
              <button class="action-button">Login</button>
            </div>
          </form> 
          
        </div>

        </div></div>
      </div>

      
    </div>
</template>
<script>
import axios from  'axios'
export default {
    name:'StudentLogin',
    data(){
        return{
          student_reg:{}
        }
      } ,
    methods:{
     async Student_login(){

       await axios.post(`student_api/student/login`,{
        email:this.student_reg.email,
        pass:this.student_reg.password
       })
        .then((response)=>{
          
          //password validate
        //    console.log(response.data[0]);
           //set login status and set value in localstorage for display data
           localStorage.setItem("student_status",true);
           localStorage.setItem("student_name",response.data.data[0].name);
           localStorage.setItem("token",response.data.token);
           
           //goto the dashboard
           this.$router.push('/student/')
        }).catch((err)=>{
          alert("User not found !");
          const form = document.getElementById('form');
          form.reset();
          console.log(err)
        })
       
      }
    }
}
</script>