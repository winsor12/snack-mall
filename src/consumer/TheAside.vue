<template>
  <div class="aside">
    <el-menu
      background-color="#ff9999"
      text-color="#FAFAFA"
      active-text-color="var(--color-primary-light)"
      router
      :default-active="this.$router.path"
    >
      <el-menu-item index="/consumer">首页</el-menu-item>
      <el-menu-item-group title="商品分类">
        <el-menu-item
          v-for="(item, index) in typeData"
          :key="index"
          :index="'/type/' + index"
          :route="{path: '/type', query: { id: index+1} }"
          >{{ item.category }}</el-menu-item
        >
      </el-menu-item-group>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      typeData: [],
    };
  },
  created() {
    const _this = this;
    this.axios
      .get("http://localhost:8080/types/findAll")
      .then(function (resp) {
        _this.typeData = resp.data;
        console.log(_this.typeData);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
<style>
.aside {
  height: 900px;
  width: 201px;
  background-color: #ff9999;
}
</style>
