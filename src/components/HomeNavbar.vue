<template>
    <div>
        
<nav class="navbar navbar-expand-lg navbar-light shadow-sm bg-light fixed-top">
    <div class="container-fluid"><a class="navbar-brand d-flex align-items-center" href="#">
    </a>  
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
   </button>
    
    
   <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto pl-lg-4">
        <li class="nav-item rounded">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item rounded">
            <router-link class="nav-link" to="Student_registration">Student Registration</router-link>
          </li>
          <li class="nav-item rounded">
            <router-link class="nav-link" to="Student_login">Student Login</router-link>
          </li>
          <li class="nav-item rounded">
            <router-link class="nav-link" to="Admin_registration">Admin Registration</router-link>
          </li>
          <li class="nav-item rounded">
            <router-link class="nav-link" to="Admin_Login">Admin Login</router-link>
          </li>
    </ul>
    </div>
    </div>
    </nav>
    </div>
</template>
<script>
export default {
    name:'HomeNavbar',
}
</script>
<style scoped>
.navbar-brand {
    background-image: url("../assets/logo.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 48px;
    height: 48px;
  }
  
  .navbar-nav .nav-item:hover {
    background-color: rgba(180, 190, 203, 0.4);
  }
  
</style>