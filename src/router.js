//homepage directory
import HomePage from './components/HomePage.vue'
import StudentRegister from './components/StudentRegister.vue'
import StudentLogin from './components/StudentLogin.vue'
import HomeView from './components/HomeView.vue'
import AdminRegister from './components/AdminRegister.vue'
import AdminLogin from './components/AdminLogin.vue'


//admin directory
import AdminDashboard from './components/admin/AdminDashboard.vue'
import AdminView from './components/admin/AdminView.vue'
import AddInstitute from './components/admin/AddInstitute.vue'
import VerifyStudents from './components/admin/VerifyStudents.vue'
import StartAllotment from './components/admin/StartAllotment.vue'
import CounsellingStatus from './components/admin/CounsellingStatus.vue'


//student directory
import StudentDashboard from './components/student/StudentDashboard.vue'
import StudentView from './components/student/StudentView.vue'
import StudentChoice from './components/student/StudentChoice.vue'
import ChoiceList from './components/student/ChoiceList.vue'



export default [ {path:'/',component:HomeView,children:[
        {path:'', component: HomePage},
        {path:'Student_registration',component:StudentRegister},
        {path:'Student_login',component:StudentLogin},
        {path:'Admin_Login',component:AdminLogin},
        {path:'Admin_registration',component:AdminRegister},
    ]},
    {path:'/admin/',component:AdminView, children: [
        {path: '', component:AdminDashboard,meta:{adminauth:true }},
        {path: 'Add_Institute', component:AddInstitute,meta:{adminauth:true }},
        {path: 'Verify_Students', component:VerifyStudents,meta:{adminauth:true }},
        {path: 'Start_Allotment', component:StartAllotment,meta:{adminauth:true }},
        {path: 'Counselling_Status', component:CounsellingStatus,meta:{adminauth:true }},
    ]
    },

        {path:'/student/',component:StudentView, children: [
            {path: '', component:StudentDashboard,meta:{auth:true }},
            {path: 'Student_Choice', component:StudentChoice,meta:{auth:true }},
            {path: 'Student_List', component:ChoiceList,meta:{auth:true }}
        ]},
  ]
