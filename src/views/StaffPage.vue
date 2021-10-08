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
     <div>
    <button @click="toggleModal">Open</button>

    <transition name="fade">
      <div v-if="isOpen" class="modal">
        <p>
          <button @click="toggleModal">Close</button>
        </p>
      </div>
    </transition>
  </div>
</div>
    
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      query: this.getInitialQueryValue()
    };
  },
  watch: {
    $route() {
      this.query = this.getInitialQueryValue()
    }
  },
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      return date;
    },
    getInitialQueryValue() {
      return this.$route.query.search || "";
    },
    emitQuery() {
      this.$emit("submit:query", this.query);
    },
    toggleModal() {
      this.isOpen = !this.isOpen
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
.fade-enter {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }
  .fade-leave-to {
    opacity: 0;
  }
  .modal {
    width: 250px;
    height: 200px;
    padding: 10px;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 2%;
    background-color: #e0e0e0;
}
</style>