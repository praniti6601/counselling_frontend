<template>
    <div>
      
   <div class="text-center mb-2 text-white bg-primary">
    <div class="container py-5">
    <div class="row pt-5">
    <div class="mx-auto col-lg-10">
      <h1 class="display-4 mb-4 text-light">e-Counselling Portal</h1>
    </div>
    </div></div></div>
    <div class="container-fluid content-row" style="min-height: 300px;">
        <!-- Cards -->
        
         <div class="row">
          <div class="col-sm-12 col-lg-3">
            <div class="card  h-100">
              <img class="card-img-top img-fluid" src="" alt="" />
              <div class="card-body">
                <h3 class="card-title">Institutes</h3>
                <p class="card-text">
                  Add your colleges and total seats available in the respective branches for all categories. Start allotment on one single click.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-3">
            <div class="card  h-100">
              <img class="card-img-top img-fluid" src="" alt="" />
              <div class="card-body">
                <h3 class="card-title">Students</h3>
                <p class="card-text">
               Fill your preferred choices of colleges with the branch you are interested in and lock them finally.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-3">
            <div class="card  h-100">
              <img class="card-img-top img-fluid" src="" alt="" />
              <div class="card-body">
                <h3 class="card-title">Information</h3>
                <p class="card-text">
                Institutes and Students can login to see the alloted students lists and status of allotment respectively.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-3">
            <div class="card  h-100">
              <img class="card-img-top img-fluid" src="" alt="" />
              <div class="card-body">
                <h3 class="card-title">Preference</h3>
                <p class="card-text">
                  More preferences will be introduced in future for allotment.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  </template>
  <script>
  export default {
    name:'HomePage',
  }
  </script>
  <style scoped>
  .dropdown-toggle::after {
    display: none;
  }
.text-decoration-none{
  text-decoration: none!important;
}
/* Font Awesome Icons have variable width. Added fixed width to fix that.*/
.icon-width { width: 2rem; }
  </style>