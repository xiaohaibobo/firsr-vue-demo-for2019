<template>
  <div>
    <div class="rest-title">
      <div class="restTcont">
        <p>选择项目时间</p>
        <el-row class="logout">
          <el-button class="logoutBtn" @click="logout">退出</el-button>
        </el-row>
      </div>
    </div>
    <div id="ptList">
      <el-checkbox-group class="check-group" ref="fuxuan">
        <el-radio
          v-model="arr"
          v-for="(d,i) in data"
          :key="i"
          :label="d.updated_at"
          class="ptcont"
          border
        ></el-radio>
      </el-checkbox-group>
    </div>
    <div id="footer4">
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
      arr: "",
      arr4: {}
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },

    after() {
      this.$router.push({ path: "/firstpt" });
    },
    next() {
      if (this.arr != "") {
        this.$router.push({ path: "/headico" });
        this.arr4 = this.arr;
        this.$store.dispatch("setDatao", this.arr4);
      }
    }
  },
   computed: {
    data() {
      let adc=this.$store.state.data;
      if(adc){
      return adc
      }else{
        let ad=JSON.parse(localStorage.getItem('data'))
        return ad
      }
      
    }
  }
};
</script>

<style>
</style>