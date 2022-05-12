<template>
  <h1>Transaction details pages is here....</h1>
  <div v-if="transaction">
    <h2>ID: {{ $route.params.id }}</h2>
    <h3>Name: {{ transaction.name }}</h3>
    <p>Name: {{ transaction.price }}</p>
  </div>
  <div v-else>Loading transaction details {{ $route.params.id }}</div>
</template>
<script>
export default {
  data() {
    return {
      transaction: null,
    };
  },
  created() {
    fetch("http://localhost:3000/transactions/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.transaction = data))
      .then(() => console.log(this.transaction));
  },
};
</script>
