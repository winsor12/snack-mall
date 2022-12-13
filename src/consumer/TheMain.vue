<template>
  <div class="main">
    <div class="main__newnacks">
      <div class="main__newnacks-title">New Product launch !</div>
      <div class="main__newnacks-content">
        <div v-for="(item, index) in tableData" :key="index" class="snacklist">
          <div @click="details(index)">
            <div class="image">
              <div v-if="item.imageList[0] && item.imageList[0].image">
                <!-- {{ item.imageList[0].image }} -->
                <el-image
                  :src="require('@/assets/' + item.imageList[0].image)"
                ></el-image>
              </div>
            </div>

            <div>
              <div class="cname">{{ item.cname }}</div>
              <div class="introduction">{{ item.introduction }}</div>
              <div class="price">¥{{ item.price }}</div>
            </div>
          </div>
          <div class="shopcar" @click="addshopcar">+</div>
        </div>
      </div>
    </div>
    <div class="main__news">
      <div class="main__newsbox">
        <div class="main__news-title">热销排行</div>
        <div class="main__news-content">
          <p>
            Possimus debitis enim autem sapiente tempore. Minima possimus
            repellat alias? Architecto illum aperiam quisquam, optio blanditiis
            id quidem maxime. Porro, hic repellat.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: null,
      tableData: [
        {
          cid: "1",
          cname: "浣熊干脆面",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
          imageList: [{ image: "redmimi.png" }],
        },
        {
          cid: "2",
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸好吃到爆炸",
          price: "12",
          imageList: [{ image: "redmimi.png" }],
        },
        {
          cid: "3",
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
          imageList: [{ image: "redmimi.png" }],
        },
        {
          cid: "4",
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
          imageList: [{ image: "redmimi.png" }],
        },
        {
          cid: "5",
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
          imageList: [{ image: "redmimi.png" }],
        },
        {
          cid: "6",
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
          imageList: [{ image: "redmimi.png" }],
        },
        {
          cid: "7",
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
          imageList: [{ image: "redmimi.png" }],
        },
        {
          cid: "8",
          cname: "浣熊干脆面2",
          image: "123345",
          introduction: "好吃到爆炸",
          price: "12",
          imageList: [{ image: "redmimi.png" }],
        },
      ],
    };
  },
  methods: {
    addshopcar() {
      alert("加入购物车成功");
    },
    details(index) {
      // alert(this.tableData[index].cid)
      this.$router.push("/details/" + this.tableData[index].cid);
    },
  },
  created() {
    const _this = this;
    this.axios
      .get("http://localhost:8080/goods/findGoodsBySid?pageSize=" + 50)
      .then(function (resp) {
        console.log(resp.data);
        _this.tableData = resp.data.list;
        console.log(_this.tableData);
        _this.total = resp.data.total;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">
.main {
  width: 100%;
  height: 100%;
  // border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &__newnacks {
    background: #fff;
    background-size: cover;
    margin-right: 20px;
    // flex: 0 0 70%;
    width: 850px;
    border-radius: 3px;
    padding: 20px 35px;
    color: aliceblue;
    // border: 1px solid black;

    &-title {
      font-size: 25px;
      font-weight: 800;
      // border: 1px solid black;
      color: #ff9999;
      border-radius: 23px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    &-content {
      font-size: 2rem;
      text-align: left;
      height: 100%;
      background-color: rgb(255, 255, 255);
      padding: 25px;
      color: #565656;
      // border: 1px solid black;
    }
  }

  &__news {
    background-color: azure;
    flex: 1;
    border-radius: 20px;
    // border: 1px solid black;
  }
}
.snacklist {
  width: 150px;
  height: 245px;
  //  border: 1px solid black;
  float: left;
  margin-left: 30px;
  margin-top: 20px;
  border-radius: 23px;
  //  background-color: rgb(212, 245, 143);
  box-shadow: 0px 1px 3px #909090;
  overflow: hidden;
}
.image {
  width: 150px;
  height: 150px;
  // border: 1px solid black;
  border-radius: 23px;
  margin-bottom: 26px;
}
.cname {
  width: 140px;
  margin-left: 10px;
  margin-top: 5px;
  // border: 1px solid black;
}
.introduction {
  width: 130px;
  margin-left: 10px;
  // border: 1px solid black;
  font-size: 12px;
}
.price {
  width: 100px;
  margin-left: 10px;
  // border: 1px solid black;
  float: left;
}
.shopcar {
  width: 40px;
  height: 43px;
  // border: 1px solid black;
  float: left;
  line-height: 40px;
  text-align: center;
  border-radius: 23px 0px 23px 0px;
  background-color: #03c03c;
  margin-top: -12px;
  color: white;
  font-size: 30px;
}
</style>
