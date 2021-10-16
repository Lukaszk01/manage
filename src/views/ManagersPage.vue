<template>
<input v-model="name" placeholder="edit me">
<p>Name is: {{ name }}</p>

 <div v-if="!isEditingName">
      <button @click="startName()">Add Tag</button>
    </div>
    <div v-else>
      <v-text-field v-model="Name" :id="`new-tag-name`" @blur="createTag()" @keydown.enter="createTag()" />
    </div>
</template>

<script>
    export default {
    data() {
      return {
        isEditingName: false,
        Name: '',
      }
    },
    computed: {
        if(confirmed){
          this.$store.dispatch('deleteTag', {tag});
        }
      },
      startName(){
        this.isEditingName = true;
        setTimeout(()=> {
          document.getElementById(`new-tag-name`).focus()
        }, 1)
      },
      createTag(){
        if(this.newTagName.length > 0) {
          this.$store.dispatch('createTag', {name: this.newTagName})
          this.newTagName = ''
        }
        this.isEditingNewTag = false
      }
    }
  }
</script>

<style scoped>

</style> 