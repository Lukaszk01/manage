<template>
  <div id="app">
  <div class="row p-2">
    <div class="col-6">
      <h2>List</h2>
      <transition-group class="list-group" name="employee-list" tag="ul">
        <li class="list-group-item employee-list-item" v-for="item in items" :key="item.id">
          <div class="d-flex align-items-center">
           <div>
            {{ item.name }}
           </div>
           <div class="ml-auto">
            <button type="button" @click="removeItem" class="btn btn-danger btn-sm">
              X
            </button>
            <button type="button" @click="addItem" class="btn btn-warning btn-sm">
              +
            </button>
            <button type="button" @click="moveItems" class="btn btn-primary btn-sm ml-3">
              Move
            </button>
           </div>
          </div>
        </li>
      </transition-group>
      <h3>Number of items: {{ items.length }}</h3>
    </div>
    <div class="col-6">
      <h2>Table</h2>
      <table class="table mb-0">
        <thead>
          <tr>
            <th scope="col">Employee</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody name="employee-table">
          <tr class="employee-table-item" v-for="item in items" :key="item.id">
            <td scope="row">
                {{ item.name }}
            </td>
            <td>
                {{ item.quantity }}
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Total quantity: {{ totalQuantity }}</h3>
    </div>
  </div>
</div>
</template>

<script>


export default ({

  el: "#app",
  
  data() {
  	return {
      items: [
        {
          id: 1,
          name: "John Smith",
          quantity: 5
        }, {
          id: 2,
          name: "Matt Rat",
          quantity: 3
        }, {
          id: 4,
          name: "Jim Beam",
          quantity: 1
        }, {
          id: 5,
          name: "Tony Malony",
          quantity: 25
        },
      ]
    }
  },
  
  computed: {
  	totalQuantity() {
    	return this.items.reduce((total, item) => {
      	return total + item.quantity
      }, 0)
    },
  },
  
  mounted() {
  	this.addItem()
  },
  
  methods: {
  	addItem() {
    	this.items.splice(2, 0, {
      	id: 3,
      	name: "Kiwis",
      	quantity: 8
      })
    },
    moveItems() {
      this.items = this.items.reverse()
      setTimeout(() => {
      	this.removeItem()
      }, 2000)
    },
    removeItem() {
      this.items.splice(2, 1)
      setTimeout(() => {
      	this.addItem()
      }, 2000)
    }
  }
})
</script>


<style>
.employee-list-item {
  transition: all 1s;
}
.employee-list-enter,
.employee-list-leave-to {
  max-height: 0px;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  overflow: hidden;
}
.employee-list-enter-to,
.employee-list-leave {
  max-height: 80px;
}

.employee-table-item {
  transition: all 1s;
}
.employee-table-item > * {
  transition: all 1s;
  overflow: hidden;
}
.employee-table-enter,
.employee-table-leave-to {
  line-height: 0;
}
.employee-table-enter > *,
.employee-table-leave-to > * {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
.employee-table-enter-to,
.employee-table-leave {
  line-height: 1.5;
}
</style>