<template>
    <div>
      <div class="container">
        <div class="card mb-5" style="margin-top: 70px; min-height: 600px">
          <h5 class="card-header">Choice Filled List</h5>
          <div class="card-body">
            <div class="row">
             
              <div class="col">
                <h5 style="text-align: center; color: black">Filled Choice</h5>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Choice No.</th>
                      <th scope="col">Institute Name</th>
                      <th scope="col">Branch</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="cdata in choice_data" :key="cdata._id">
                      <th scope="row">{{ cdata.choice_no }}</th>
                      <td>{{ cdata.name }}</td>
                      <td>{{ cdata.branchs }}</td>
                    
                    </tr>
  
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  export default {
    name: "ChoiceList",
    data() {
      return {
        choice_data: [],
      };
    },
    mounted() {
      //call when dom render
      this.choise_list();
    },
    methods: {
      
  
      //fetch list of filled choice
      async choise_list() {
        const token = localStorage.getItem("token");
        await axios
          .get(`student_api/student/choice_list`, {
            headers: { Authorization: "Bearer " + token },
          })
          .then((res) => {
            //response collect
            // console.log(res.data[0].choice)
            this.choice_data=res.data[0].choice;
          })
          .catch((err) => {
            console.log(err);
          });
      },
  
  
  
  
    
    },
  };
  </script>