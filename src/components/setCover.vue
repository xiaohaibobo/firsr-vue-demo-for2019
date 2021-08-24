<template>
  <div>
    <div class="rest-title">
      <div class="restTcont">
        <p>设置封面</p>
        <el-row class="logout">
          <el-button class="logoutBtn" @click="logout">退出</el-button>
        </el-row>
      </div>
    </div>
    <div class="login-cont">
      <img src="@/img/tx.png" alt="超越哦" />
      <el-row>
        <el-button id="set-cover" type="success" @click="setCover">设置封面</el-button>
      </el-row>
      <span>XIAO_HAI_BOBO</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("data");
      this.$router.push({ path: "/login" });
    },
    setCover() {
      this.$router.push({ path: "/ptname" });
    }
  },
  beforeRouteEnter(to, from, next) {
    let st = localStorage.getItem("hasCover");
    if (st) {
      next({ path: "/restCover" });
    } else {
      next();
    }
  }
};
</script>

<style>
</style>