<template>
  <div>
    <container>
      <div class="mt-5">
        <HeaderBar />
        <EditCustomerForm /> 
        <DeleteCustomerModal /> 
        <DataTable />
        <CustomerOverview />
        <CreateCustomerForm />
        <router-view />
      </div>
    </container>
  </div>
</template>


<script>
import HeaderBar from "@/components/CRUD/HeaderBar.vue";
import EditCustomerForm from "@/components/CRUD/EditCustomerForm.vue";
import DeleteCustomerModal from "@/components/CRUD/DeleteCustomerModal.vue";
import DataTable from "@/components/CRUD/DataTable.vue";
import CustomerOverview from "@/components/CRUD/CustomerOverview.vue";
import CreateCustomerForm from "@/components/CRUD/CreateCustomerForm.vue";


export default {
  components: {
    HeaderBar,
    EditCustomerForm, 
    DeleteCustomerModal, 
    DataTable,
    CustomerOverview,
    CreateCustomerForm 
  },
};
</script>