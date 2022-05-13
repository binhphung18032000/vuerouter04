<template>
  <h1>Overview page is here</h1>
  <input type="text" v-model="searchText" />
  <ul>
    <li v-for="(customer, index) in customersFiltered" :key="index">
      {{ customer }}
    </li>
  </ul>
</template>
<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
export default {
  props: {
    theme: {
      type: String,
      required: false,
      default: "light",
    },
  },
  // eslint-disable-next-line vue/no-setup-props-destructure
  setup({ theme }, { emit }) {
    // console.log(props);
    // console.log(context);
    console.log(theme);
    console.log(emit);

    const searchText = ref("");
    const customers = reactive([
      "Anh Tran",
      "Duy Nguyen",
      "Binh Phung",
      "Duc Nguyen",
      "Thinh Pham",
    ]);
    const customersFiltered = computed(() =>
      customers
        .map((customer) => {
          customer = customer.toLowerCase();
          return customer;
        })
        .filter((customer) => customer.includes(searchText.value.toLowerCase()))
    );
    watch(searchText, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    watchEffect(() => {
      if (searchText.value) {
        console.log("Running again...");
      }
    });
    return { searchText, customersFiltered };
  },
};
</script>
