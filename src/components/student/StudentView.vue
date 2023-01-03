<template>
    <div>
        <StudentNavbar/>
        <router-view></router-view>
        <!-- footer -->
        <div class="bg-dark text-white footer">
            <p class="text-center pt-2 m-0">Copyright &copy; 2022-2023 Design and Developed By</p>
            <p class="text-center pb-3 m-0" style="color:yellow">Pragya Yadav</p>
          </div>
    </div>
</template>

<script>
import StudentNavbar from './StudentNavbar.vue'
export default {
name: 'HomeVue',
components:{
    StudentNavbar
},
}
</script>
<style scoped>
.footer{
    margin-top:20px;
}
</style>