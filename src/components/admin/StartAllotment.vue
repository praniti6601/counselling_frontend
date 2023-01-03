<template>
    <div>
        <div class="container">
            <div class="card mb-5" style="margin-top:70px;min-height:600px">
                <div class="card-header"><h2 style="text-align:center;letter-spacing:1px">Allotment Process</h2></div>
                <div class="card-body">
                    <div class="col-md-12 text-center"><button @click="start()" class="btn btn-primary">Start Allotment</button></div>
                   
        </div></div>
      </div>

      
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'StartAllotment',
    data(){
        return{
            total_student:0,
            verified:0,
            collegename:localStorage.getItem('college_name'),
        }
    },
    methods:{
        async start(){
            const token = localStorage.getItem('token');
      await axios.get(`api/admin/verified_student`,{ headers: { 'Authorization': 'Bearer ' + token } 
    })
        .then((res)=>{
      
       if(res.data.update_status) //alert for process done
       alert("Allotment Done !")
        }).catch((err)=>{
if(err.response.data.errmsg==false){
    alert("Allotment already done of verified student!")
}else{
    alert("Server not connected !")
}
        })
    }
    }
}
</script>