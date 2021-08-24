<template>
  <div>
    <div class="rest-title">
      <div class="restTcont">
        <p>首页</p>
        <el-row class="logout">
          <el-button class="logoutBtn" @click="logout">退出</el-button>
        </el-row>
      </div>
    </div>
    <div class="rest-img">
      <img :src="src" alt />
    </div>
    <div class="rest-cont">
      <li>项目名：{{arr2}}</li>
      <li>项目时间：{{arr4}}</li>
      <li>项目描述：{{arr3}}</li>
      <li>项目备注：{{input}}</li>
    </div>
    <div class="setCont">
      <el-row>
        <el-button id="resetBtn" type="success" @click="reset">重设封面</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push({ path: "/login" });
    },
    reset() {
      this.$router.push({ path: "/ptname" });
      localStorage.removeItem("arr2");
      localStorage.removeItem("arr3");
      localStorage.removeItem("arr4");
      localStorage.removeItem("src");
      localStorage.removeItem("input");
    }
  },

  computed: {
    arr2() {
      return this.$store.state.arr2;
    },
    arr3() {
      return this.$store.state.arr3;
    },
    arr4() {
      return this.$store.state.arr4;
    },
    src() {
      return this.$store.state.src;
    },
    input() {
      return this.$store.state.input;
    }
  }
};
</script>

<style>
</style>