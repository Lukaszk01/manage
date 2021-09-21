<template>
  <div class="staffPage">
    <h1>This is an Staff page</h1>
  </div>

    <div id="nav" class="w-25 p-3">
    <ul class="list-group list-group-flush">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <router-link to="/personalDetail">Personal Details</router-link></li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <router-link to="/shifts">My shifts</router-link></li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <router-link to="/">Notifications</router-link>
          <span class="badge bg-primary rounded-pill">4</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <router-link to="/">Availability</router-link></li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <router-link to="/">Chat</router-link></li>
  </ul>
  </div>
  <router-view/>
</template>

