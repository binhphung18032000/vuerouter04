<template>
  <h1>Transactions is here...</h1>
  <div v-if="transactions.length">
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
      <router-link
        :to="{
          name: 'transaction-details-route',
          params: { id: transaction.id },
        }"
        >{{ transaction.name }}</router-link
      >
      <div style="margin-bottom: 10px" class="price">
        Salary: {{ transaction.price }}
      </div>
    </div>
  </div>
  <div v-else-if="error">{{ error.message }}</div>
  <div v-else>Loading transaction page</div>
</template>
<script>
import { ref } from "vue";
export default {
  // data() {
  //   return {
  //     transactions: [],
  //   };
  // },
  // created() {
  //   fetch("http://localhost:3000/transactions")
  //     .then((response) => response.json())
  //     .then((data) => (this.transactions = data));
  // },
  setup() {
    const transactions = ref([]);
    const error = ref(null);
    const fetchAll = async () => {
      try {
        const response = await fetch("http://localhost:3000/transactions");
        if (!response.ok) throw new Error("Something went wrong! Binhphung");
        transactions.value = await response.json();
      } catch (err) {
        error.value = err;
        console.log(error.value);
      }
    };
    fetchAll();

    return { error, transactions };
  },
};
</script>
