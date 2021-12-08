<template>
<div id="list-rendering">
  <ol>
    <li v-bind:todo in todos>
      {{ todo.text }}
    </li>
  </ol>
</div>
</template>


<script>
export default {
  const ListRendering = {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  }
}



  }
Vue.createApp(ListRendering).mount('#list-rendering')  
</script>