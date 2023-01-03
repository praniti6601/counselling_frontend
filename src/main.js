import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router'
import axios from 'axios'
//localhost api http://localhost:3001/


axios.defaults.baseURL='https://counselling-portal.onrender.com/'
Vue.config.productionTip = false
Vue.use(VueRouter);

// admin loggedin flag
var isadmin=false
//student loggedin flag 
var isloggedin=false
const router=new VueRouter({
  mode:'history',
  routes
} 
)

//admin authentication
//gourd
router.beforeEach((to,from,next)=>{
if(to.meta.adminauth){
  isadmin = localStorage.getItem("admin_status");

 if(isadmin){
   next();
 }else{
   next('/Admin_Login');
 }  
}else{
 next();
}
//Student authentication
if(to.meta.auth){
  isloggedin=localStorage.getItem("student_status");
  if(isloggedin){
    next();
  }else{
    next('/Student_login');
  }  
}else{
  next();
}



})
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')