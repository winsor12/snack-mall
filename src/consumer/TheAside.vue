<template>
  <div class="aside">
    <el-menu
      background-color="#ff9999"
      text-color="#FAFAFA"
      active-text-color="var(--color-primary-light)"
      router :default-active="this.$router.path">

      <el-menu-item index="/consumer">首页</el-menu-item>
      <el-menu-item-group title="商品分类">
        <el-menu-item index="/type/2">干果</el-menu-item>
        <el-menu-item index="/type/3">膨化食品</el-menu-item>
        <el-menu-item index="/type/4">熟食</el-menu-item>
        <el-menu-item index="/type/5">油炸物</el-menu-item>
        <el-menu-item index="/type/6">奶制品</el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.aside {
  height: 900px;
  width: 201px;
  background-color: #ff9999;
}
</style>
