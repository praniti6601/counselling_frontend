<template>
    <div>
      
   <div class="text-center mb-2 text-white bg-primary">
    <div class="container py-5">
    <div class="row pt-5">
    <div class="mx-auto col-lg-10">
      <h1 class="display-4 mb-4 text-light">e-Counselling Portal</h1>
    </div>
    </div></div></div>
    <div class="container-fluid content-row">
        <!-- Cards -->
        
         <div class="row">
          <div class="col-sm-12 col-lg-3">
            <div class="card  h-100">
              <img class="card-img-top img-fluid" src="" alt="" />
              <div class="card-body">
                <h3 class="card-title">Hostels</h3>
                <p class="card-text">
                  Set numbert of rooms according to need.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-3">
            <div class="card  h-100">
              <img class="card-img-top img-fluid" src="" alt="" />
              <div class="card-body">
                <h3 class="card-title">Rooms</h3>
                <p class="card-text">
                 One or more students can be alloted a single room as per your need.
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
                  You can send the allotment status mail to the students with their unique username and password in one single click.
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
                  More preference will be introduced in future for allotment.
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