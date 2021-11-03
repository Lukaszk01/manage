<template>
  <form class="mt-3">
        <h4 class="text-secondary">Contact Details</h4>
        <div class="form-group" id="first-name" label="First Name" label-for="first-name">
          <input
            id="first-name"
            type="text"
            placeholder="First Name"
            v-model="customer.contact_firstname"
          >
        </div>
        <div class="form-group" id="last-name" label="Last Name" label-for="last-name">
          <input
            id="last-name"
            type="text"
            placeholder="Last Name"
            v-model="customer.contact_lastname"
          >
        </div>
    <div class="mt-3">
        <form id="email" label="E-Mail" label-for="email">
          <input
            id="email"
            type="email"
            placeholder="example@crm.com"
            v-model="customer.contact_email"
          >
        </form>

    <div class="mt-5">
      <h4 class="text-secondary">Company Details</h4>
    </div>
        <form
          id="company_name"
          label="Company Name"
          label-for="company_name"
        >
          <input
            id="company_name"
            type="text"
            placeholder="XYZ Industries"
            v-model="customer.company_name"
          >
        </form>
      <col>
    </div>
        <form
          id="acquired_on"
          label="Acquired On"
          label-for="acquired_on"
        >
          <input
            id="acquired_on"
            type="date"
            v-model="customer.acquired_on"
          >
        </form>
    <div class="mt-2">
      <input
        id="customer_status"
        v-model="customer.customer_status"
        name="customer-status"
        value="active"
        unchecked-value="inactive"
        type="checkbox"
       >
       <p>Customer is active</p> 
     
    </div>
    <div class="mt-4"> </div>
        <button variant="primary" class="px-5" @click="addNewCustomer"
          >Add Customer</button
        >
        <button variant="warning" @click="triggerClose">Close</button>
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