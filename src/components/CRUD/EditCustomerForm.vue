<template>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Company name</th>
      <th scope="col">Contact name</th>
      <th scope="col">Conatact email</th>
      <th scope="col">Customer status</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{ customer }}this one</th>
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
            class="form-control"
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
            class="form-control"
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
            class="form-control"
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
            class="form-control"
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
            class="form-control"
            id="acquired_on"
            type="date"
            v-model="customer.acquired_on"
          >
        </form>
      </div>
   
    <div class="mt-2">
      <input
        class="form-check-input"
        id="customer_status"
        v-model="customer.customer_status"
        name="customer-status"
        type="checkbox"
        unchecked-value="inactive"
      >
        Customer is active
     
    </div>
    <div class="mt-4">
      <div class="col-3">
        <div variant="primary" class="btn btn-primary" @click="updateCustomer"
          >Update Customer</div
        >
      </div>
        <div class="btn btn-primary" variant="warning" @click="triggerClose">Close</div>
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