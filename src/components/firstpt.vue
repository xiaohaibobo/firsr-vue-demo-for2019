<template>
  <div>
    <div class="rest-title">
      <div class="restTcont">
        <p>选择项目描述</p>
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
          :label="d.description?d.description:'这个人很低调，什么都没写'"
          class="ptcont"
          border
        ></el-radio>
      </el-checkbox-group>
    </div>
    <div id="footer3">
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

      arr3: {}
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
    after() {
      this.$router.push({ path: "/ptname" });
    },
    next() {
      if (this.arr != "") {
        this.$router.push({ path: "/timet" });
        this.arr3 = this.arr;
        this.$store.dispatch("saveArr3", this.arr3);
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