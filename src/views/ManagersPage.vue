<template>
   <button @click="isShow = !isShow">click Me</button>
</template>


<script>
export default {
  name: "ToggleDiv",
  data: function () {
    return {
      isShow: true,
    };
  },

  props: {
    msg: String,
  },
};
</script>
