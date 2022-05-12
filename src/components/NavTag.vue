<template>
  <nav class="nav">
    <router-link style="margin-right: 20px" :to="{ name: 'overview-route' }"
      >Overview</router-link
    >
    <router-link style="margin-right: 20px" :to="{ name: 'transaction-route' }"
      >Transactions</router-link
    >
    <router-link style="margin-right: 20px" to="/">Budgets</router-link>
    <router-link style="margin-right: 20px" to="/">Reports</router-link>
    <router-link style="margin-right: 20px" to="/">Settings</router-link>
  </nav>
</template>
