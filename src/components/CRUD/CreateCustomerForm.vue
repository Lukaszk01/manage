<template>
<h1>Create new customer</h1>
  <form>
        <h4 class="text-secondary">Contact Details</h4>
        <label class="form-group" id="first-name" label="First Name" label-for="first-name">
          <input
            class="form-control"
            id="first-name"
            type="text"
            placeholder="First Name"
            v-model="customer.contact_firstname"
          >
        </label>
        <label class="form-group" id="last-name" label="Last Name" label-for="last-name">
          <input
            class="form-control"
            id="last-name"
            type="text"
            placeholder="Last Name"
            v-model="customer.contact_lastname"
          >
        </label>
    <div class="mt-3">
        <label id="email" label="E-Mail" label-for="email">
          <input
            class="form-control"
            id="email"
            type="email"
            placeholder="example@crm.com"
            v-model="customer.contact_email"
          >
        </label>

    <div class="mt-5">
      <h4 class="text-secondary">Company Details</h4>
    </div>
        <label
          id="company_name"
          label="Company Name"
          label-for="company_name"
        >
          <input
            class="form-control"
            id="company_name"
            type="text"
            placeholder="XYZ Industries"
            v-model="customer.company_name"
          >
        </label>
      <col>
    </div>
        <label
          id="acquired_on"
          label="Acquired On"
          label-for="acquired_on"
        >
          <input
            class="form-control"
            id="acquired_on"
            type="date"
            v-model="customer.acquired_on"
          >
        </label>
    <div class="mt-2">
      <input
        class="form-check-input"
        id="customer_status"
        v-model="customer.customer_status"
        name="customer-status"
        value="active"
        unchecked-value="inactive"
        type="checkbox"
       >
       <p>Customer is active</p> 
     
    </div>
        <div class="btn btn-primary" variant="primary" @click="addNewCustomer"
          >Add Customer</div>
        <div class="btn btn-primary" variant="warning" @click="triggerClose">Close</div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateCustomerModal",
  data() {
    return {
      customer: {},
    };
  },
  methods: {
    triggerClose() {
      this.$emit("closeCreateModal");
    },
    addNewCustomer() {
      axios
        .post("http://localhost:3000/customers/", this.customer)
        .then((response) => {
          console.log(response.data);
          this.$emit("closeCreateModal");
          this.$emit("reloadDataTable");
          this.$emit("showSuccessAlert");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>