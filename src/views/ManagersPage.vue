<template>

    <CreateUser />
    <ListOfEmployees />
  </template>

<script>


import CreateUser from '@/components/CRUD/CreateUser.vue'
import ListOfEmployees from '@/components/CRUD/ListOfEmployees.vue'
export default {
  components: {
    CreateUser,
    ListOfEmployees,
  }
}

</script>