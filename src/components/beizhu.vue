<template>
  <div>
    <div class="rest-title">
      <div class="restTcont">
        <p>输入备注信息</p>
        <el-row class="logout">
          <el-button class="logoutBtn" @click="logout">退出</el-button>
        </el-row>
      </div>
    </div>
    <div id="textCont">
      <el-input
        class="beizhu"
        :rows="16"
        type="textarea"
        placeholder="请输入备注"
        resize="none"
        v-model="input"
        clearable
      ></el-input>
    </div>
    <div class="footer">
      <el-row>
        <el-button type="success" @click="after">上一步</el-button>
        <el-button type="success" @click="next">完成</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      done: "xhb"
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
    after() {
      this.$router.push({ path: "/headico" });
    },
    next() {
      if (this.input != "") {
        this.$router.push({ path: "/restCover" });
        localStorage.setItem("hasCover", this.done);
        this.$store.dispatch("setText", this.input);
      }
    }
  }
};
</script>

<style>
</style>