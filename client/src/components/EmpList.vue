
<template>
 
        <DataTable :value="customers" removableSort paginator :rows="10" :rowsPerPageOptions="[ 10, 20, 50]" tableStyle="min-width: 50rem">
            <Column field="empName" sortable  header="Employee Name" style="width: 25%"></Column>
            <Column field="empIdNum" sortable  header="ID Number" style="width: 25%"></Column>
            <Column field="empOdsu" sortable  header="Office/Division/Section/Unit" style="width: 25%"></Column>
            <Column field="empStatus" sortable  header="Employment Status" style="width: 25%"></Column>
        </DataTable>
 
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/services/Api';

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
});

const customers = ref();

</script>