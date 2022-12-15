<template>
  <!-- 页面整体框架 -->
  <el-container style="height: 100%">
    <!-- 构建左侧菜单 -->
    <div style="background-color: #545c64; width: 200px; height: 100vh">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-aside width="201px" style="height: 100vh">
          <el-menu router :default-openeds="['0', '1', '2', '3', '4']">
            <div
              v-for="(item, index) in $router.options.routes.slice(0, 5)"
              :key="index"
            >
              <el-sub-menu
                v-if="item.meta.role.indexOf(role) >= 0"
                :index="index + ''"
              >
                <template #title
                  ><i class="el-icon-setting">{{ item.name }}</i></template
                >
                <div v-for="(item2, index2) in item.children" :key="index2">
                  <el-menu-item
                    v-if="item2.meta.role.indexOf(role) >= 0"
                    style="background-color: #1f2d3d !important"
                    :index="item2.path"
                    :class="$route.path == item2.path ? 'is-active' : ''"
                    >{{ item2.name }}</el-menu-item
                  >
                </div>
              </el-sub-menu>
            </div>
          </el-menu>
        </el-aside>
      </el-menu>
    </div>
    <!-- 顶部导航栏 -->
    <div style="height: 30px; width: 100%">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item disabled>后台管理</el-menu-item>
        <div>
          <button class="button1" @click="layout">退出登录</button>
        </div>
      </el-menu>
      <router-view v-if="isRouterAlive"></router-view>
    </div>

    <!-- <div>
  <el-main>
    </el-main>
</div> -->
  </el-container>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-size: 100%;
  box-sizing: border-box;
  /* border: 1px solid saddlebrown; */
}


i {
  font-style: normal;
}

.button1 {
  width: 8em;
  height: 3em;
  border-radius: 30em;
  font-size: 15px;
  font-family: inherit;
  border: none;
  overflow: hidden;
  margin-left: 1056px;
  margin-top: 5px;
  position: absolute;
  z-index: 1;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #c5c5c5;
}

.button1::before {
  content: "";
  width: 0;
  height: 3em;
  border-radius: 30em;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(to right, #0fd850 0%, #f9f047 100%);
  transition: 0.5s ease;
  display: block;
  z-index: -1;
}

.button1:hover::before {
  width: 9em;
}
</style>

<script>
export default {
  provide () {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true,
      role: JSON.parse(sessionStorage.getItem("user")).role,
    };
  },
  methods: {
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
    layout() {
      this.openFullScreen2();
      setTimeout(() => {
        sessionStorage.clear();
        this.$router.push("/");
      }, 2000);
    },
    reload() {
      this.isRouterAlive = false,
      this.$$nextTick(function() {
        this.isRouterAlive = true
      })
    }
  },
};
</script>
