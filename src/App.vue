<template>
  <base-nav />
  <router-view />
</template>

<script>
import NavTag from "./components/NavTag.vue";
export default {
  name: "App",
  components: {
    BaseNav: NavTag,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
