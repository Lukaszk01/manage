<template>
  <div>
    <div class="mt-2 mb-3">
      <h6 class="text-secondary">
        Are you sure you want to delete this customer from your CRM?
      </h6>
    </div>
    <div class="mt-2 mb-3">
      <p class="text-danger">
        This action is not reversible and may result in the loss if important
        data.
      </p>
    </div>
    <div class="mt-4">
        <div class="btn btn-primary" variant="danger" @click="removeCustomerFromData"
          >Delete Customer</div
        >
  
        <div class="btn btn-primary" variant="warning" @click="triggerClose">Close</div>
   
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DeleteCustomerModal",
  props: {
    customerId: Number,
  },
  methods: {
    triggerClose() {
      this.$emit("closeDeleteModal");
    },
    removeCustomerFromData() {
      axios
        .delete(`http://localhost:3000/customers/${this.customerId}`)
        .then(() => {
          this.$emit("reloadDataTable");
          this.$emit("showDeleteAlert");
          this.$emit("closeDeleteModal");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>