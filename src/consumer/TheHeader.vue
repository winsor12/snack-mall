<template>
  <div class="header">
    <div class="header__logo">
      <img src="../assets/logo.svg" class="logo" />
    </div>
    <div class="header__title">
      <h2>零食侦探购物平台</h2>
    </div>
    <div class="header__user">
      <div class="header__iconbox header__user-message">
        <img src="../assets/message.svg" class="header__icon" />
      </div>
      <div class="header__iconbox header__user-shopcar">
        <img src="../assets/shopcar.svg" class="header__icon" />
      </div>
      <el-dropdown>
        <div class="header__user-box">
          <div class="header__user-image">
            <img
              src="../assets/bighead.svg"
              alt="people"
              class="header__image"
            />
          </div>
          <div class="header__user-username">
            <h3>{{ user.username }}</h3>
          </div>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              ><span @click="layout">退出登录</span></el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(sessionStorage.getItem('user'))
    };
  },
  methods: {
    layout() {
      this.openFullScreen2();
      setTimeout(() => {
        sessionStorage.clear();
        this.$router.push("/");
      }, 2000);
    },
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
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &__iconbox {
    padding: 0 10px;
    height: 100%;
    align-self: stretch;
    display: flex;
    align-items: center;

    &:hover {
      background-color: #f7f7f7;
    }
  }

  &__logo {
    width: 25px;
    height: 25px;
    margin-left: 5px;
  }

  &__title {
  }

  &__user {
    display: flex;
    flex-direction: row;
    align-self: stretch;
    align-items: center;

    &-box {
      display: flex;
      align-items: center;
      align-self: stretch;
      &:hover {
        background-color: #f7f7f7;
      }
    }

    &-message {
    }

    &-image {
      width: 45px;
      height: 45px;
      border-radius: 100px;
    }

    &-image:hover {
      background-color: #f7f7f7;
    }

    &-username {
      padding: 0 8px;
    }
  }

  &__icon {
    width: 25px;
    height: 25px;
  }
}

.logo {
  width: 100%;
  height: 100%;
}
</style>
