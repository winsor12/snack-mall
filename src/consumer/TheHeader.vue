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
      <div class="header__iconbox header__user-shopcar" @click="shopcar">
        <img src="../assets/shopcar.svg" class="header__icon" />
      </div>

          <el-dialog title="购物车" v-model="ttt">
           <table>
            <tr>
              <th class="title">编号</th>
              <th class="title">商品图</th>
              <th class="title">商品名称</th>
              <th class="title">单价</th>
              <th class="title">数量</th>
              <th class="title">小计</th>
              <th class="title">操作</th>
            </tr>
            <tr v-for="(item,index) in cars " :key="index">
                <th>{{item.id}}</th>
                <th>{{item.image}}</th>
                <th>{{item.cname}}</th>
                <th>¥{{item.price}}</th>
                <th>
                  <el-button @click="reduce(index)" class="reduce">-</el-button>
                  <div class="num">{{item.num}}</div>
                  <el-button @click="addition(index)" class="addition">+</el-button>
                </th> 
                <th>¥{{item.num * item.price}}</th>
                <el-button @click="deletes(index)">删除</el-button>
            </tr>
           </table>
           <div class="sum">总价: ¥{{Total}}</div>
           <el-button class="buy" @click="buy">结算</el-button>
          </el-dialog>

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
      cars: [
          {
            id: '1',
            image: '123123',
            cname: '王小虎',
            price: '12',
            num: '1',
            inventory: '5',
          },
          {
            id: '2',
            image: '123123',
            cname: '王小美',
            price: '10',
            num: '1',
            inventory: '5',
          },
          {
            id: '3',
            image: '123123',
            cname: '王小费',
            price: '13',
            num: '1',
            inventory: '5',
          },
        ],
      ttt:false,
      user: JSON.parse(sessionStorage.getItem('user'))
    };
  },
  computed:{
 Total(){
      let total = 0;
      for (let i = 0; i< this.cars.length;i++){
        total += this.cars[i].num * this.cars[i].price
      }
      return total
    },
  },
  methods: {
    buy(){
      alert("购买成功！")
      window.location.reload()
    },
    reduce(index){
      if( this.cars[index].num <= 1){
        alert("数量已减为1")
      }else{
        this.cars[index].num --
      }
    },
    addition(index){
      if( this.cars[index].num < this.cars[index].inventory){
        this.cars[index].num ++
      }else{
        alert("亲～没货啦～>.<")
      }
    },
    deletes(index){
      this.cars.splice(index,1)
    },
    shopcar(){
      this.ttt = true;
      // this.$router.push('/shopcar')
    },
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

  // &__title {
  // }

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

    // &-message {
    // }

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
.title{
  width: 250px;
}
.reduce{
  float: left;
  margin-left: 3px;
  
}
.addition{
  float: left;
}
.num{
  float: left;
  width: 25px;
  height: 32px;
  text-align: center;
  line-height: 32px;
}
.sum{
  font-size: 20px;
  margin-left: 550px;
  margin-top: 20px;
}
</style>
