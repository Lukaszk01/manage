<template>
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
  <div id="app">
    <h1>Table of the employees</h1>
    <transition name="fade">
    <table class="table">
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Surname</th>
      </thead>
      <tbody is="transition-group" name="rowtrans" @enter="enter" @beforeEnter="beforeEnter" @leave="leave" :css="false">
        <tr v-for="(row, index) in tablerows" class="ttrow" :key="row.id">
          <td>
            <div >{{ row.id }}</div>
          </td>
          <td>
            <div>{{ row.col1 }}</div>
          </td>
          <td>
            <div>{{ row.col2 }}</div>
          </td>
          <td>
            <div>
              <a href="#" @click="insert_row(index, $event)" class="has-text-primary fa fa-arrow-circle-left"  v-if="insert_row"></a>
              <a href="#" @click="remove_row(index, $event)" class="has-text-danger fa fa-times-circle" v-if="remove_row"></a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data() {
    return {
      show: true,
      latest_id: 5,
      tablerows: [
        { id: 1, col1: "Col1 text", col2: "Col2 Text" },
        { id: 2, col1: "Col1 text", col2: "Col2 Text" },
        { id: 3, col1: "Col1 text", col2: "Col2 Text" },
        { id: 4, col1: "Col1 text", col2: "Col2 Text" }
      ],
      ptb: 0,
      mh: 0
    };
  },
  mounted() {
    let div = document.querySelector(".ttrow td div");
    let style = window.getComputedStyle(div);
    this.ptb = style.getPropertyValue("padding-top");
    this.mh = style.getPropertyValue("max-height");
  },
  methods: {
    insert_row(index, evt) {
      this.tablerows.splice(index, 0, {
        id: this.latest_id++,
        col1: "Col1 text",
        col2: "Col2 Text",
        deleting: false
      });
    },
    remove_row(index, evt) {
      this.tablerows.splice(index, 1);
    },
    beforeEnter(el) {
      let divs = el.querySelectorAll("div");
      for (let i = 0; i < divs.length; i++) {
        divs[i].style.maxHeight = "0px";
        divs[i].style.paddingTop = "0px";
        divs[i].style.paddingBottom = "0px";
      }
    },
    enter(el, done) {
      let divs = el.querySelectorAll("div");
      Velocity(
        divs,
        { maxHeight: this.mh, paddingTop: this.ptb, paddingBottom: this.ptb },
        { duration: 300, complete: done }
      );
    },
    leave(el, done) {
      // console.log('leave');
      let divs = el.querySelectorAll("div");
      Velocity(
        divs,
        { maxHeight: "0px", paddingTop: "0px", paddingBottom: "0px" },
        { duration: 300, complete: done }
      );
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 1em;
}

h1 {
  font-size: x-large;
}

.ttrow td {
  padding: 0;
}

.ttrow td div {
  box-sizing: border-box;
  max-height: 40px;
  padding: 0.5em 0.75em;
  overflow: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
