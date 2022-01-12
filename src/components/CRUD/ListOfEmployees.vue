<template>
    <CreateUser />
  <div id="staff-list">

    <!-- <div class="header">
      <button  class="btn btn-cancel">Cancel</button>
      <button  class="btn btn-primry">Add Staff</button>
    </div> -->
    
    <!-- <div class="add-item-form">
      <input 
        @keyup.enter="saveDetail" 
        type="text" v-model="newName" placeholder = "Add an Name">
      <input 
        @keyup.enter="saveDetail" 
        type="text" v-model="newSurname" placeholder = "Add an Surname">
      <input 
        @keyup.enter="saveDetail" 
        type="text" v-model="newEmail" placeholder = "Add an Email">
      <button 
        @click="saveDetail" 
        class="btn btn-primary">
        Save Staff
      </button>

    </div> -->
    <ul>
      <li 
        v-for="item in reversedDetails" 
        :key="item.id"
        class="static-class"
      >
        {{item.newName}}
        {{item.newSurname}}
        {{item.newEmail}}
        <button 
          @click="deleteUser" 
          class="btn btn-danger">
          Delete Staff
      </button>
      </li>
    </ul>
    <br>
    <br>
        <li v-for="(item, index) in items" :item="item" :key="index">
      {{ item }}
    </li>


</div>  
</template>

<script>

import CreateUser from '@/components/CRUD/CreateUser.vue'
export default {
    props: {
        newName: String
    },
  components: {
    CreateUser,
  },
  data() {
        return {
          header: 'Staff List',
        //   newName: '',
          newSurname: '',
          newEmail: '',
          items:[
            {id: 1, newName:'John', newSurname: 'Smith', newEmail: 'john@examle.com'},
            {id: 2, newName:'Jim', newSurname: 'Beam', newEmail: 'jim@examle.com'},
            {id: 3, newName:'Tony', newSurname: 'Malony', newEmail: 'tony@examle.com'},
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
            newName: this.newName,
            newSurname: this.newSurname,
            newEmail: this.newEmail
          })
          this.newName
        },
        deleteUser(){
          this.items.pop({
            id:this.items.length - 1, 
            newName: this.newName,
            newSurname: this.newSurname,
            newEmail: this.newEmail
          })
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