<template>
  <div class="box">
    <div class="box__contain">
      <el-container direction="vertical">
        <el-header height="60px">
          <TheHeader></TheHeader>
        </el-header>
        <el-container direction="horizontal">
          <el-aside width="200px">
            <TheAside></TheAside>
          </el-aside>
          <!-- <el-container direction="vertical">
            <el-main>
              <div class="carousel">
               
              </div>
            </el-main>
          </el-container> -->
          <div class="box_type">
            <div v-for="item in tableData" :key="item" class="type">
              <div class="image">
                <div v-if="item.imageList && item.imageList[0] && item.imageList[0].image">
                  <el-image
                    :src="require('@/assets/' + item.imageList[0].image)"
                  ></el-image>
                </div>
              </div>
              <div class="cname">{{ item.cname }}</div>
              <div class="introduction">{{ item.introduction }}</div>
              <div class="price">¥{{ item.price }}</div>
              <div class="shopcar" @click="addshopcar">+</div>
            </div>
          </div>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import TheCarousel from "./TheCarousel.vue";
import TheHeader from "./TheHeader.vue";
import TheAside from "./TheAside.vue";
import TheMain from "./TheMain.vue";

export default {
  components: { TheCarousel, TheHeader, TheAside, TheMain },
  data() {
    return {
      total: null,
      tableData: [
        {
          cname: "浣熊干脆面",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
        {
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
        {
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
        {
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
        {
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
        {
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
        {
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
        {
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
        {
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
        {
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
        {
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
        {
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
        {
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
        {
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
        {
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
        {
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
        {
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
        {
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
        },
      ],
    };
  },
  methods: {
    addshopcar() {
      alert("加入购物车成功");
    },
  },
  watch: {
    $route() {
      this.id = this.$route.query.id;
      console.log(this.id);
      const _this = this;
      this.axios
        .get(
          "http://localhost:8080/goods/findGoodsByLid?lid=" +
            this.id +
            "&pageSize=" +
            15
        )
        .then(function (resp) {
          console.log(resp);
          _this.tableData = resp.data.list;
          console.log(_this.tableData);
          _this.total = resp.data.total;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    console.log(this.$route.query);
  },
};
</script>

<style>
.box_type {
  width: 100%;
}
.type {
  /* border:1px solid black; */
  width: 150px;
  height: 245px;
  margin-left: 40px;
  margin-top: 30px;
  border-radius: 23px;
  float: left;
  box-shadow: 0px 1px 3px #909090;
  /* background-color: rgb(212, 245, 143); */
  overflow: hidden;
}
.cname {
  text-align: left;
  font-size: 17px;
}
.introduction {
  text-align: left;
}
.price {
  text-align: left;
  font-size: 17px;
}
</style>
