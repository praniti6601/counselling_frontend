<template>
  <div>
    <div class="container">
      <div class="card mb-5" style="margin-top: 70px; min-height: 600px">
        <h5 class="card-header">Choice Filling</h5>
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <h5 style="text-align: center; color: black">Available Choice</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Institute Name</th>
                    <th scope="col">Branch</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(stdata, i) in ins_data" :key="stdata._id">
                    <th scope="row">{{ i + 1 }}</th>
                    <td>{{ stdata.name }}</td>
                    <td>{{ stdata.branchs }}</td>
                    <td>
                      <button class="btn btn-primary" @click="add(i)">
                        Add
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-6">
              <h5 style="text-align: center; color: black">Filled Choice</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Institute Name</th>
                    <th scope="col">Branch</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(cdata, ind) in choice_data" :key="cdata._id">
                    <th scope="row">{{ ind + 1 }}</th>
                    <td>{{ cdata.name }}</td>
                    <td>{{ cdata.branchs }}</td>
                    <td>
                      <button class="btn btn-danger" @click="remove(ind)">
                        Remove
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="4">
                      <button
                        class="btn btn-success"
                        @click="final_lockchoice()"
                      >
                        Final Lock
                      </button>
                    </td>
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
  name: "StudentDashboard",
  data() {
    return {
      ins_data: [],
      choice_data: [],
    };
  },
  mounted() {
    //call when dom render
    this.ins_list();
  },
  methods: {
    //add choice
    add(rowid) {
      this.choice_data.push(this.ins_data[rowid]);
      //initialize object according to schema data
      this.choice_data[this.choice_data.length - 1].choice_no =
        this.choice_data.length;
      this.choice_data[this.choice_data.length - 1].ins_id =
        this.ins_data[rowid]._id;
      //remove from available choice
      this.ins_data.splice(rowid, 1);
    },

    //remove choice
    remove(rid) {
      //push in availaqble choice
      this.ins_data.push(this.choice_data[rid]);
      //remove from filled choice
      this.choice_data.splice(rid, 1);
    },




    //fetch list of avilable choice
    async ins_list() {
      const token = localStorage.getItem("token");
      await axios
        .get(`student_api/student/institute_list_choice`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          //response collect
          var instute_temp = res.data;

          //filter duplicate object which is already in choice data
          var result = instute_temp.filter((o1) => {
            return !this.choice_data.some((o2) => {
              return o1.branchs === o2.branchs && o1.name === o2.name; //unique object validation
            });
          });
          this.ins_data = result;
          // console.log(this.ins_data)
        })
        .catch((err) => {
          console.log(err);
        });
    },




    //final lock choice
    async final_lockchoice() {
      var props = ["ins_id","name", "branchs", "choice_no"];
      var finalchoice_data = this.choice_data.map(function (obj) {
        // use reduce to make objects with only the required properties
        // and map to apply this to the filtered array as a whole
        return props.reduce(function (newobj, name) {
          newobj[name] = obj[name];
          return newobj;
        }, {});
      });


      if(finalchoice_data!=0){
      const token = localStorage.getItem("token");
      await axios
        .post(`student_api/student/add_choice`, finalchoice_data, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          //    console.log(res.data.status)
          if (res.data.status) {
            alert("Choice Locked Successfully");
          }
        })
        .catch((err) => {
          const isDuplicate = err.response.data.errmsg.keyPattern.stu_id;
          if (isDuplicate) {
            alert("Choice is already locked!");
          } else {
            console.log(err);
          }
        });
      }else{
        alert("Please select atleast one choice.")
      }
    },
    //choice lock function  end



  },
};
</script>