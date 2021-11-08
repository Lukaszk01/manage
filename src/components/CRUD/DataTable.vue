<template>
      <input v-model="showSuccessAlert" variant="success" dismissible>
        {{ alertMessage }}
      <customer-overview
        :totalCustomers="numberOfCustomers"
        :activeCustomers="activeCustomers"
        @totalCustomersIsActive="setFilterTotalIsActive"
        @activeCustomerIsActive="setFilterActiveIsActive"
      ></customer-overview>
            <h3>{{ tableHeader }}</h3>
                <button
                  variant="primary"
                  id="show-btn"
                  @click="showCreateModal"
                >
                  <div class="text-white"></div>
                  <span class="h6 text-white">New Customer</span>
                </button>
          <table
            striped
            hover
            :items="items"
            :fields="fields"
            class="text-center"
          >
                  <div
                    class="action-item"
                    variant="primary"
                    @click="getRowData(data.item.id)"
                  ></div>
                  <trash-fill
                    class="action-item"
                    variant="danger"
                    @click="showDeleteModal(data.item.id)"
                  ></trash-fill>
        
          </table>

    <!-- Modal for adding new customers -->
    <div
      ref="create-customer-modal"
      size="xl"
      hide-footer
      title="New Customer"
    >
      <create-customer-form
        @closeCreateModal="closeCreateModal"
        @reloadDataTable="getCustomerData"
        @showSuccessAlert="showAlertCreate"
      ></create-customer-form>
    </div>

    <!-- Modal for updating customers -->
    <div
      ref="edit-customer-modal"
      size="xl"
      hide-footer
      title="Edit Customer"
    >
      <edit-customer-form
        @closeEditModal="closeEditModal"
        @reloadDataTable="getCustomerData"
        @showSuccessAlert="showAlertUpdate"
        :customerId="customerId"
      ></edit-customer-form>
    </div>

    <!-- Delete Customer Modal -->
    <div
      ref="delete-customer-modal"
      size="md"
      hide-footer
      title="Confirm Deletion"
    >
      <delete-customer-modal
        @closeDeleteModal="closeDeleteModal"
        @reloadDataTable="getCustomerData"
        @showDeleteAlert="showDeleteSuccessModal"
        :customerId="customerId"
      ></delete-customer-modal>
    </div>
  >

  <div
      ref="create-customer-modal"
      size="xl"
      hide-footer
      title="New Customer"
    >
      <create-customer-form
        @closeCreateModal="closeCreateModal"
        @reloadDataTable="getCustomerData"
        @showSuccessAlert="showAlertCreate"
      ></create-customer-form>
    </div>

    <!-- Modal for updating customers -->
    <div
      ref="edit-customer-modal"
      size="xl"
      hide-footer
      title="Edit Customer"
    >
      <edit-customer-form
        @closeEditModal="closeEditModal"
        @reloadDataTable="getCustomerData"
        @showSuccessAlert="showAlertUpdate"
        :customerId="customerId"
      ></edit-customer-form>
    </div>

<!-- Delete Customer Modal -->
    <div
      ref="delete-customer-modal"
      size="md"
      hide-footer
      title="Confirm Deletion"
    >
      <delete-customer-modal
        @closeDeleteModal="closeDeleteModal"
        @reloadDataTable="getCustomerData"
        @showDeleteAlert="showDeleteSuccessModal"
        :customerId="customerId"
      ></delete-customer-modal>
    </div>
<p>Ehlo</p>
<p>{{fields[0]}}</p>
</template>

<script>
import axios from "axios";
import CustomerOverview from "@/components/CRUD/CustomerOverview.vue";
import CreateCustomerForm from "@/components/CRUD/CreateCustomerForm.vue";
import EditCustomerForm from "@/components/CRUD/EditCustomerForm.vue";
import DeleteCustomerModal from "@/components/CRUD/DeleteCustomerModal.vue";

export default {
  components: {
    CustomerOverview,
    CreateCustomerForm,
    EditCustomerForm,
    DeleteCustomerModal,
  },
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table

      fields: [
        {
          key: "company_name",
          label: "Company Name",
          sortable: false,
        },
        {
          key: "contact_name",
          label: "Contact Name",
          sortable: false,
        },
        {
          key: "contact_email",
          label: "Contact E-Mail",
          sortable: false,
        },
        {
          key: "customer_status",
          label: "Customer Status",
          sortable: false,
        },
        "actions",
      ],
      items: [],
      numberOfCustomers: 0,
      activeCustomers: 0,
      activeCustomersData: [],
      customerId: 0,
      companySearchTerm: "",
      tableHeader: "",
      showSuccessAlert: false,
      alertMessage: "",
    };
  },
  mounted() {
    this.getCustomerData();
  },
  methods: {
    showCreateModal() {
      this.$refs["create-customer-modal"].show();
    },
    closeCreateModal() {
      this.$refs["create-customer-modal"].hide();
    },
    getCustomerData() {
      axios
        .get("http://localhost:3000/customers/")
        .then((response) => {
          this.tableHeader = "Total Customer";
          this.items = response.data;
          this.numberOfCustomers = response.data.length;
          this.activeCustomersData = response.data.filter(
            (item) => item.customer_status === "active"
          );
          this.activeCustomers = this.activeCustomersData.length;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getRowData(id) {
      this.$refs["edit-customer-modal"].show();
      this.customerId = id;
    },
    closeEditModal() {
      this.$refs["edit-customer-modal"].hide();
    },
    setFilterTotalIsActive() {
      this.tableHeader = "Total Customers";
      this.getCustomerData();
    },
    setFilterActiveIsActive() {
      this.tableHeader = "Active Customers";
      this.items = this.activeCustomersData;
    },
    showAlertCreate() {
      this.showSuccessAlert = true;
      this.alertMessage = "Customer was created successfully!";
    },
    showAlertUpdate() {
      this.showSuccessAlert = true;
      this.alertMessage = "Customer was updated successfully";
    },
    showDeleteModal(id) {
      this.$refs["delete-customer-modal"].show();
      this.customerId = id;
    },
    closeDeleteModal() {
      this.$refs["delete-customer-modal"].hide();
    },
    showDeleteSuccessModal() {
      this.showSuccessAlert = true;
      this.alertMessage = "Customer was deleted successfully!";
    },
  },
};
</script>

<style>
.action-item:hover {
  cursor: pointer;
}
</style>