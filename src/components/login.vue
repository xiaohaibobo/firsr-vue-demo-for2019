<template>
  <div>
    <div class="login-title">登录</div>
    <div class="login-cont">
      <img src="@/img/tx.png" alt="可爱的超越" />
      <el-input v-model="token" placeholder="token" style="width:5.65rem"></el-input>
      <p>{{owarn}}</p>
      <el-row>
        <el-button id="login-button" type="success" @click="signIn">登录</el-button>
      </el-row>

      <span>XIAO_HAI_BOBO</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
      owarn: ""
    };
  },
  methods: {
    signIn() {
      //记录登录状态
      localStorage.setItem("token", this.token);

      this.axios.defaults.headers.Authorization = "token " + this.token;
      this.axios.defaults.baseURL = "https://api.github.com/";

      this.axios
        .get("user/repos")
        .then(data => {
          //跳转到个人信息页
          this.$router.push({ path: "/setCover" });
          this.$store.dispatch("saveData", data.data);
          console.log(data.data);
        })
        .catch(err => {
          this.owarn = "登录错误";
        });
    }
  }
};
</script>

<style>
</style>