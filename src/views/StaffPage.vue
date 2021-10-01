<template>
   <div id="app" class="d-flex justify-content-end">
    <h1>Date: </h1>
    <p>{{currentDate()}}</p>
  </div>
    <div class="d-flex justify-content-start">
      <div id="nav" class="w-25">
        <div class="avatar">
      <img src="" alt="">
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item d-flex justify-content-startd-flex justify-content-between">
        <router-link to="/personalDetail">Personal Details</router-link></li>
      <li class="list-group-item d-flex justify-content-startd-flex justify-content-between">
        <router-link to="/shifts">My shifts</router-link></li>
      <li class="list-group-item d-flex justify-content-startd-flex justify-content-between">
        <router-link to="/">Notifications</router-link>
          <span class="badge bg-primary rounded-pill">4</span>
      </li>
      <li class="list-group-item d-flex justify-content-startd-flex justify-content-between">
        <router-link to="/">Availability</router-link></li>
      <li class="list-group-item d-flex justify-content-startd-flex justify-content-between">
        <router-link to="/">Chat</router-link></li>
  </ul>
  </div>
  <router-view/>
</div>
    
</template>

<script>
export default {
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      return date;
    }
  }
};

</script>

<style scoped>
#app {
  padding: 20px;

}
#app h1 {
  font-size: 22px;
  margin-right: 5px;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 1px black;
  padding: 50px;
  margin-left: 50px;
  margin-bottom: 20px;
}
</style>