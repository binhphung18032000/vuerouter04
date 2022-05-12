<template>
  <h1>Overview page is here</h1>
  <!-- <p>{{ firstName }}</p> -->
  <p>{{ secondName }}</p>
  <p>{{ car }}</p>
  <button @click="onChangeSomeThing">Click me!</button>
</template>
<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const firstName = ref("Binh Phung");
    const secondName = ref({
      name: "Hoa",
      something: "female",
    });
    let car = reactive({
      price: 650000,
      name: "Mitsumitsi",
    });

    function onChangeSomeThing() {
      // console.log("Running here...");
      // firstName.value = "Phùng An Bình";
      // secondName.value.name = "Hoa thi";
      // car.price = 860000;
      // console.log(firstName);
      // console.log(secondName);
      // console.log(car);
      secondName.value = {
        name: "Nguyen Phu",
        something: "male",
      };
      car = {
        price: 500000,
        something: "Toyota",
      };
      console.log(secondName);
      console.log(car);
    }
    return { firstName, secondName, car, onChangeSomeThing };
  },
};
</script>
