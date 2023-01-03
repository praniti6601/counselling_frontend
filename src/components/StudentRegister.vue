<template>
    <div>
      <div class="container" style="min-height:600px">
        <div class="card text-white bg-info mb-5" style="margin-top:70px;">
            <div class="card-header"><h2 style="color:white;text-align:center;letter-spacing:1px">Student Registration</h2></div>
            <div class="card-body">
                <div class="myform-card">
                    
                       <form class="card-form" id="form"  @submit.prevent="Reg_data()">
                        <div class="input">
                          <select class="input-field" v-model="student_register.orgid">
                            <option value="1" selected>Select College</option>
                            <option v-for="clist in collegelist " :value="clist._id" :key="clist._id">{{clist.ins_name}}</option>
                            
                        </select>
                          
                          </div>
                          <div class="input">
                            <input type="text" class="input-field" v-model="student_register.name" autocomplete="off" required/>
                            <label class="input-label">Name</label>
                          </div>
                          <div class="input">
                            <input type="text" class="input-field" v-model="student_register.fathers_name" autocomplete="off" required/>
                            <label class="input-label">Father's Name</label>
                          </div>
                          <div class="input">
                            <input type="text" class="input-field"  v-model="student_register.email" id="email" autocomplete="off" required/>
                            <label class="input-label">Email</label> 
                          </div>
                               
                               
                                <div class="input">
                            <input type="password" class="input-field" v-model="student_register.password" id="pass" autocomplete="off" required/>
                            <label class="input-label">Password</label>
                          </div>
                          <div class="input">
                            <input type="text" class="input-field" v-model="student_register.rollno" autocomplete="off" required/>
                            <label class="input-label">Roll Number</label>
                          </div>
                          <div class="input">
                            <input type="text" class="input-field" v-model="student_register.rank" autocomplete="off" required/>
                            <label class="input-label">Rank</label>
                          </div>
                          <div class="input">
                            <input type="text" class="input-field" v-model="student_register.marks" autocomplete="off" required/>
                            <label class="input-label">Total Marks</label>
                          </div>
                          <div class="input">
                           
                            <select class="input-field" v-model="student_register.categ">
                                <option value="1" selected>Select Category</option>
                                <option value="GEN">General</option>
                                <option value="OBC">OBC</option>
                                <option value="SC">SC</option>
                                <option value="ST">ST</option>
                            </select>
                            
                          </div>
                          <div class="input">
                            <input type="text" class="input-field" v-model="student_register.dob" autocomplete="off" required/>
                            <label class="input-label">Date of Birth</label>
                          </div>
                         
                          <div class="input">
                            <input type="text" class="input-field" v-model="student_register.mobile" autocomplete="off" required/>
                            <label class="input-label">Mobile No.</label>
                          </div>
                              
                         <div class="action">
                           <button class="action-button">Register</button>
                         </div>
                       </form>
                       
                     </div>


            </div>
          </div>
       
      </div>
    </div>
</template>
<script>
import axios from  'axios'
export default {
    name:'StudentRegister',
    data(){
        return{
            registerflag:false,
            student_register:{orgid:1,categ:1},
            collegelist:[],
        }
    },
    mounted(){
      //invoke college list function
      this.college_list();
    },
    methods:{

    async  Reg_data(){
     await axios.post('student_api/student/reg',this.student_register)
        .then(()=>{
        
         //success alert
         alert('Your registration has been successfully done !');
         this.$router.push('/Student_Login')
          
        }).catch((err)=>{
          
       const isDuplicate= err.response.data.errmsg.keyPattern.email;
       if(isDuplicate){
        alert('Email is already exist!')
       }else{
        alert(err.message);
       }
        })
//for reset input after submit
const form = document.getElementById('form');
form.reset();
      
    },
    //college list function
   async college_list(){
    await axios.get('student_api/student/college_list')
        .then((res)=>{
        
         //college list store 
      //  console.log(res.data)
      this.collegelist=res.data;
          
        }).catch((err)=>{
      console.log(err);
        })
    }
    }
}
</script>
