<template>
  <div id="app">
    <span type="primary" @click="fetchData"
      >To Customer Home Page 2021</span>
  </div>
</template>

<script>
import { getMenu } from "./api/home";

export default {
  name: "App",
  methods: {
    fetchData() {
      getMenu().then((res) => {
        console.log("getMenu.then(res=>{", res);
      });
    },
  },
  mounted() {
    // getMenu().then((res) => {
    //   console.log("getMenu.then(res=>{", res);
    // });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
