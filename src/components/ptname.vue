<template>
  <div>
    <div class="rest-title">
      <div class="restTcont">
        <p>选择项目名</p>
        <el-row class="logout">
          <el-button class="logoutBtn" @click="logout">退出</el-button>
        </el-row>
      </div>
    </div>
    <div id="ptList">
      <el-checkbox-group class="check-group">
        <el-radio
          v-model="arr1"
          v-for="(d,i) in data"
          :key="i"
          :label="d.name"
          class="ptcont"
          border
        ></el-radio>
      </el-checkbox-group>
    </div>
    <div id="footer2">
      <el-row>
        <el-button type="success" @click="after">上一步</el-button>
        <el-button type="success" @click="next">下一步</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr1: "",
      arr2: 0
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
    after() {
      this.$router.push({ path: "/setCover" });
    },
    next() {
      if (this.arr1 != "") {
        this.$router.push({ path: "/firstpt" });
        this.arr2 = this.arr1;
        this.$store.dispatch("setData", this.arr2);
      }
    }
  },
  computed: {
    data() {
      let adc = this.$store.state.data;
      if (adc) {
        return adc;
      } else {
        let ad = JSON.parse(localStorage.getItem("data"));
        return ad;
      }
    }
  }
};
</script>

<style>
</style>