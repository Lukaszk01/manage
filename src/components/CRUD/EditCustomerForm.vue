<template>

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
  <form class="mt-3">
        <h4 class="text-secondary">Contact Details</h4>
      <div class="col-6">
        <form id="first-name" label="First Name" label-for="first-name">
          <input
            id="first-name"
            type="text"
            placeholder="First Name"
            v-model="customer.contact_firstname"
          >
        </form>
      </div>
      <div class="col-6">
        <form id="last-name" label="Last Name" label-for="last-name">
          <input
            id="last-name"
            type="text"
            placeholder="Last Name"
            v-model="customer.contact_lastname"
          >
        </form>
      </div>

    <div class="mt-3">
      <div class="col-6">
        <form id="email" label="E-Mail" label-for="email">
          <input
            id="email"
            type="email"
            placeholder="example@crm.com"
            v-model="customer.contact_email"
          >
        </form>
      </div>
    </div>
    <div class="mt-5">
      <h4 class="text-secondary">Company Details</h4>
    </div>

      <div class="col-4">
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
      </div>
      <div class="col-4">
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
      </div>
   
    <div class="mt-2">
      <input
        id="customer_status"
        v-model="customer.customer_status"
        name="customer-status"
      
        unchecked-value="inactive"
      >
        Customer is active
     
    </div>
    <div class="mt-4">
      <div class="col-3">
        <button variant="primary" class="px-5" @click="updateCustomer"
          >Update Customer</button
        >
      </div>
        <button variant="warning" @click="triggerClose">Close</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateCustomerModal",
  props: {
    customerId: Number,
  },
  data() {
    return {
      customer: {},
    };
  },
  mounted() {
    this.getCusomterByID();
  },
  methods: {
    triggerClose() {
      this.$emit("closeEditModal");
    },
    getCusomterByID() {
      axios
        .get(`http://localhost:3000/customers/${this.customerId}`)
        .then((response) => {
          this.customer = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateCustomer() {
      axios
        .put(
          `http://localhost:3000/customers/${this.customerId}`,
          this.customer
        )
        .then((response) => {
          console.log(response.data);
          this.$emit("closeEditModal");
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