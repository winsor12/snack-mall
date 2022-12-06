<template>
  <div class="aside">
    <el-menu
      background-color="#2c3e50"
      text-color="#FAFAFA"
      active-text-color="var(--color-primary-light)"
      router="true"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item-group title="分类">
        <el-menu-item index="2">干果</el-menu-item>
        <el-menu-item index="3">膨化食品</el-menu-item>
      </el-menu-item-group>
      <el-menu-item></el-menu-item>
      <el-menu-item></el-menu-item>
    </el-menu>
  </div>
</template>

<style>
.aside {
  height: 100%;
}
</style>
