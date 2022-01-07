<template>
  <div id="staff-list">
    <div class="header">
      <h1>{{ header || 'Welcome' }}</h1>
      <button v-if="editing" @click="doEdit(false)" class="btn btn-cancel">Cancel</button>
      <button v-else @click="doEdit(true)" class="btn btn-primry">Add Staff</button>
    </div>
    
    <div v-if="editing" class="add-item-form">
      <input 
        @keyup.enter="saveDetail" 
        type="text" v-model="newDetail" placeholder = "Add an Staff">
      <label>
        <input type="checkbox" v-model="newDetailHighPriority">
        High Priority
      </label>
      <button 
        @click="saveDetail" 
        class="btn btn-primary">
        Save Staff
      </button>
    </div>
    <p v-if="items.length === 0">Nice job! You've bought all your items!</p>
    <ul>
      <li 
        v-for="item in reversedDetails" 
        @click="togglePurchased(item)"
        :key="item.id"
        class="static-class"
      >
        {{item.name}}
        {{item.surname}}
        {{item.email}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
        return {
          header: 'Shopping List App',
          editing:false,
          newDetail: '',
          name: '',
          surname: '',
          email: '',
          newDetailHighPriority: false,
          items:[
            {id: 1, name:'John', surname: 'Smith', email: 'john@examle.com'},
            {id: 2, name:'Jim', surname: 'Beam', email: 'jim@examle.com'},
            {id: 3, name:'Tony', surname: 'Malony', email: 'tony@examle.com'},
          ]
        }
      },
      computed:{
        reversedDetails(){
          return [...this.items].reverse()
        }
      },
      methods:{
        saveDetail(){
          this.items.push({
            id:this.items.length + 1, 
            name: this.newDetail,
            email: this.newDetailHighPriority
          })
          this.newDetail = ""
          this.newDetailHighPriority = false
        },
        doEdit(editing){
          this.editing = editing
          this.newDetail = ""
          this.newDetailHighPriority = false
        },
        togglePurchased(item){
          item.surname = !item.surname
        }
      }
}
</script>


<style>
  body {
    background: #eff8ff;
    height: 100vh;
    width: 100vw;
    font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
  
  .counter {
    font-size: 0.8rem;
    padding-left: 10px;
    padding-right: 10px;
  }
  
  #staff-list {
    background: #fff;
    padding: 2rem;
    margin: 1rem;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    width: 95%;
    max-width: 900px;
  }
  
  h1 {
    color: #3d4852;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  a {
    color: #6cb2eb;
    font-size: 1.25rem;
    transition: all 0.1s ease-in;
    margin-top: 0.5rem;
    display: block;
  }
  
  a:hover {
    color: #3490dc;
  }
  
  li,
  p {
    display: flex;
    align-items: center;
    line-height: 1.75;
    letter-spacing: 0.5px;
    color: #3d4852;
    font-size: 1.25rem;
    cursor: pointer;
    transition: all 0.1s ease-in;
  }
  
  li:hover {
    color: #22292f;
  }
  
  li input {
    margin: 0 0.5rem 0;
  }
  
  #staff-list > input,
  #staff-list > select {
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #f1f5f8;
    color: #606f7b;
    padding: 0.5rem 0.75rem;
    box-sizing: border-box;
    font-size: 1rem;
    letter-spacing: 0.5px;
    margin: 0.5rem 0;
  }
  
  .add-item-form,
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .add-item-form input {
    width: 70%;
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #f1f5f8;
    color: #606f7b;
    padding: 0.5rem 0.75rem;
    box-sizing: border-box;
    font-size: 1rem;
    letter-spacing: 0.5px;
    margin: 0.5rem 0;
  }
  
  .btn {
    border: none;
    border-radius: 3px;
    margin: auto 0;
    padding: 0.5rem 0.75rem;
    flex-shrink: 0;
    cursor: pointer;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    transition: all 0.1s ease-in;
  }
  
  .btn[disabled] {
    background: #8795a1;
  }
  
  .btn[disabled]:hover {
    background: #606f7b;
  }
  
  .btn-primary {
    background: #6cb2eb;
    color: #fff;
  }
  
  .btn-primary:hover {
    background: #3490dc;
  }
  
  .btn-cancel {
    background: #ef5753;
    color: #fff;
  }
  
  .btn-cancel:hover {
    background: #e3342f;
    color: #fff;
  }
  
  .strikeout {
    text-decoration: line-through;
    color: #b8c2cc;
  }
  
  .strikeout:hover {
    color: #8795a1;
  }
  
  .priority {
    color: #de751f;
  }
  input[type="checkbox"]{
    display: inline !important;
    box-shadow: none;
    width: auto;
  }
</style>