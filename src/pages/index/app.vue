<template>
  <div id="app">
    <el-card class="index-card">
      <div slot="header">
        My Codes
      </div>
      <ul>
        <li>
          <a
            href="https://github.com/Plortinus/vue-multiple-pages"
            target="_blank"
          >
            Vue Multiple Pages
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Plortinus/element-china-area-data"
            target="_blank"
          >
            Element China Area Data
          </a>
        </li>
      </ul>
      <el-button type="primary" @click="gogogo"
        >To Customer Home Page 2021</el-button
      >
      <el-button type="primary" plain @click="tototo"
        >To User Login Page</el-button
      >
    </el-card>
  </div>
</template>

<script>
import { getMenu } from "@/api/home";
export default {
  components: {},
  data() {
    return {
      msg: "Use Vue 2.0 Today!",
    };
  },
  methods: {
    gogogo() {
      //location.assign("../customer/home.html");

      getMenu().then((res) => {
        console.log("res", res);
      });
    },
    tototo() {
      //location.assign("../user/login.html");
    },
  },
  // async mounted() {
  //   let { data } = await getMenu();

  //   console.log("data", data);
  // },
};
</script>

<style lang="postcss">
.index-card {
  width: 800px;
  margin: 100px auto;
}
</style>
