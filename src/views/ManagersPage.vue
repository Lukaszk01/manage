<template>
  <div>
    <div class="flex-table">
      <div>Name</div>
      <div></div>
    </div>
    <div v-for="tag in tags" :key="tag.id" class="flex-table">
      <div>
        <div v-if="tagEditingId == tag.id">
          <v-text-field v-model="tag.name"
                        :id="`tag-edit-${tag.id}`"
                        @blur="updateTagName(tag)"
                        @keydown.enter="updateTagName(tag)" />
        </div>
        <div v-else @click="setToEditing(tag)">
          {{tag.name}}
        </div>
      </div>
      <div>
        <router-link :to="{ name: 'tag', params: { id: tag.id }}">
          {{tag.ids.length}}
        </router-link>
      </div>
      <div class="actions">
        <v-btn x-small @click="setToEditing(tag)">Edit</v-btn>
      </div>
    </div>
    <div v-if="!isEditingNewTag">
      <v-btn @click="startNewTag()">Add Tag</v-btn>
    </div>
    <div v-else>
      <v-text-field v-model="newTagName"
                    :id="`new-tag-name`"
                    @blur="createTag()"
                    @keydown.enter="createTag()" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
  export default {
    data() {
      return {
        tagEditingId: '',
        isEditingNewTag: false,
        newTagName: '',
      }
    },
    computed: {
      ...mapState({
        tags: state => state.tags.tags
      })
    },
    methods: {
      startNewTag(){
        this.isEditingNewTag = true;
        setTimeout(()=> {
          document.getElementById(`new-tag-name`).focus()
        }, 1)
      },
      createTag(){
        if(this.newTagName.length > 0) {
          this.$store.dispatch('tags/create', {name: this.newTagName})
          this.newTagName = ''
        }
        this.isEditingNewTag = false
      }
    }
  }
</script>

<style>
  .flex-table {
    display: grid;
    grid-template-columns: repeat(auto-fill, 33%);
    padding: 10px;
    border-bottom: 1px black solid;
    &:nth-of-type(2n) {
      background-color: #dedede;
    }
    .actions {
      * {
        margin-right: 10px
      }
    }
  }
</style>