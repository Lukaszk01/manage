<template>
<input v-model="name" placeholder="edit me">
<p>Name is: {{ name }}</p>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        fullName: []
             }
          },
    methods: {
    
    }
  }
</script>

<style scoped>

</style> 