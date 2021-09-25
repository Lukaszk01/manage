<template>
    
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <h1>This is an personaldetails page</h1>
            <form id="pd-form" class="w-50" >
              <div class="mb-3">
                <label class="form-label">Email address</label>
                <input type="email" v-model="email" class="form-control">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" v-model="password">
              </div>

              <div class="mb-3">
                <label class="form-label">firstname</label>
                <input type="firstname" class="form-control" v-model="firtnam">
              </div>
              <div class="mb-3">
                <label class="form-label">familyname</label>
                <input type="familyname" class="form-control" v-model="familyname">
              </div>
              <div class="mb-3">
                <label class="form-label">DOB</label>
                <input type="DOB" class="form-control" v-model="DOB">
              </div>



              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button  @click="submit" type="submit" class="btn btn-primary">Submit</button>
           
            </form>
        </div>
      </div>
    </div>

    

  
</template>

<style scoped>
  #pd-form {
    margin-left: 200px;
  }

</style>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        firstname: '',
        familyname: false,
        DOB: ''
      }
    }
  },
  methods: {
    async submit() {
      this.$emit('submit', this.form)
    }
  }
}
</script>