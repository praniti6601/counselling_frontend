<template>
    <div>
        <div class="container" style="min-height:600px">
            <div class="card text-white bg-info mb-5" style="margin-top:70px;">
                <div class="card-header"><h2 style="color:white;text-align:center;letter-spacing:1px">Admin Login</h2></div>
                <div class="card-body">
        <div class="myform-card">
       
          <form class="card-form" id="form"  @submit.prevent="Admin_login()">
            
                  <div class="input">
              <input type="email" class="input-field" v-model="admin_reg_data.email" id="email" required/>
              <label class="input-label">Email</label>
                      <label id="err_email" style="display: none;"></label>
            </div>
                  <div class="input">
              <input type="password" class="input-field" v-model="admin_reg_data.password"  id="pass" required/>
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
    name:'AdminLogin',
    data(){
        return{
          admin_reg_data:{}
        }
      } ,
    methods:{
     async Admin_login(){

       await axios.post(`api/admin/login`,{
        email:this.admin_reg_data.email,
        pass:this.admin_reg_data.password
       })
        .then((response)=>{
          
         
        //    console.log(response.data);
           //set login status and set value in localstorage for display data
           localStorage.setItem("admin_status",true);
           localStorage.setItem("college_name",response.data.data[0].ins_name);
           //login token
           localStorage.setItem("token",response.data.token);
           
           //goto the dashboard
           this.$router.push('/admin/')
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