<template>
  <div class="box">
    <div class="box__contain">
      <el-container direction="vertical">
        <el-header height="60px">
          <TheHeader></TheHeader>
        </el-header>
        <el-container direction="horizontal">
          <div class="box_zong">
            <div class="box_top">
              <el-button class="box_back" @click="back">回到首页</el-button>
              <div class="box_sname">
                <div v-if="snack && snack.merchant">
                  <el-popover
                    placement="top-start"
                    title="店铺信息"
                    :width="200"
                    trigger="hover"
                  >
                    <template #reference>
                      <el-button class="m-2"
                        >店铺名： {{ snack.merchant.sname }}</el-button
                      >
                    </template>
                    <div>店铺名:{{ snack.merchant.sname }}</div>
                    <div>供应商电话:{{ snack.merchant.sphone }}</div>
                    <div>供应商地址:{{ snack.merchant.saddress }}</div>
                  </el-popover>
                </div>
              </div>
            </div>
            <div class="box_main">
              <div class="box_image">
                <div
                  v-if="
                    snack.imageList &&
                    snack.imageList[0] &&
                    snack.imageList[0].image
                  "
                >
                  <img
                    :src="require('@/assets/' + snack.imageList[0].image)"
                    style="width: 400px; height: 400px"
                  />
                </div>
              </div>
              <div class="box_main2">
                <div class="box_inventory">
                  商品库存量:{{ snack.inventory }}
                </div>
                <div class="box_cname">
                  <p class="shuming">商品名称:</p>
                  {{ snack.cname }}
                </div>
                <div class="box_introduction">
                  <p class="shuming">商品介绍:</p>
                  {{ snack.introduction }}
                </div>
                <div class="box_price">
                  <p class="shuming">单价:</p>
                  ¥{{ snack.price }}
                </div>
                <p class="shuming2">数量:</p>
                <div class="box_num">
                  <div>
                    <button @click="reduce1(index)" class="reduce1">-</button>
                  </div>
                  <div class="num">{{ num }}</div>
                  <div>
                    <button @click="addition1(index)" class="addition1">
                      +
                    </button>
                  </div>
                </div>
                <div class="box_sum">小计：¥{{ num * snack.price }}</div>
                <button class="box_buy" @click="buy(index)">购买</button>
              </div>
            </div>
            <div class="comment">
              <div class="comment2">商品评价</div>
              <div class="comment3">
                <el-rate v-model="value" show-text></el-rate>
              </div>
              <div class="comment4">
                <el-input
                  type="textarea"
                  :rows="2"
                  :autosize="{ minRows: 5, maxRows: 7 }"
                  placeholder="亲～给个好评吧！"
                  v-model="textarea"
                  maxlength="50"
                  show-word-limit
                >
                </el-input>
                <button class="comment4_button" @click="addcomment">
                  发表评论
                </button>
              </div>
              <div class="comment5">用户评论</div>

              <div class="box_comment5">
                <div
                  class="comment6"
                  v-for="(item, index) in comment"
                  :key="index"
                >
                  <div class="comment6_uname">{{ item.consumer.uname }}</div>
                  <div class="comment6_content">{{ item.content }}</div>
                  <div class="comment6_bottom">
                    <div class="comment6_ptime">{{ item.ptime }}</div>
                    <el-button
                      color="#2376b7"
                      type="primary"
                      round
                      @click="jubao"
                      >举报</el-button
                    >
                  </div>
                </div>
              </div>
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
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { TheCarousel, TheHeader, TheAside, TheMain },
  data() {
    return {
      total: null,
      value: null,
      snack: {},
      num: 1,
      comment: null,
      textarea: "",
      commentForm: {
        uid: "",
        cid: "",
        content: "",
      },
    };
  },
  methods: {
    back() {
      this.$router.push("/consumer");
    },
    buy(index) {
      alert("购买成功！");
    },
    reduce1(index) {
      if (this.num <= 1) {
        alert("数量已减为1");
      } else {
        this.num--;
      }
    },
    addition1(index) {
      if (this.num < this.snack.inventory) {
        this.num++;
      } else {
        alert("亲～没货啦～>.<");
      }
    },
    addcomment() {
      console.log(JSON.parse(sessionStorage.getItem("user")).id);
      this.commentForm.uid = JSON.parse(sessionStorage.getItem("user")).id;
      this.commentForm.cid = this.$route.query.id;
      this.commentForm.content = this.textarea;
      const _this = this;
      this.axios({
        method: "post",
        url: "http://localhost:8080/comment/insert",
        data: _this.commentForm,
      })
        .then((res) => {
          if (res) {
            alert("评论发布成功");
            this.$router.go(0);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(this.commentForm);
      console.log(this.textarea);
      
    },
    jubao() {
      alert("举报成功");
    },
  },
  setup() {
    return {
      textarea: ref(""),
    };
  },
  created() {
    let id = this.$route.query.id;
    const _this = this;
    this.axios
      .get("http://localhost:8080/goods/findGoodsById?id=" + id)
      .then(function (resp) {
        console.log(resp);
        _this.snack = resp.data;
        console.log(_this.snack);
        _this.total = resp.data.total;
        _this.comment = resp.data.commentList;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
});
</script>
<style>
.box_zong {
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
}
.box_top {
  width: 100%;
  height: 60px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  background-color: #ff9999;
  align-items: center;
}
.box_main {
  width: 1100px;
  /* height: 100%; */
  height: max-content;
  margin: auto;
  margin-top: 110px;
  /* border: 1px solid black; */
  display: table;
}
.box_image {
  width: 400px;
  height: 400px;
  float: left;
  /* border: 1px solid black; */
  border-radius: 10px;
  overflow: hidden;
}

.box_main2 {
  float: left;
}
.box_inventory {
  /* border: 1px solid black; */
  margin-left: 570px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
}
.box_cname {
  /* border: 1px solid black; */
  height: 30px;
  font-size: 15px;
  line-height: 30px;
  margin-left: 30px;
}
.box_introduction {
  /* border: 1px solid black; */
  /* text-align: left; */
  margin-left: 30px;
  font-size: 15px;
  height: 70px;
  line-height: 70px;
  margin-top: 20px;
}
.box_price {
  /* border: 1px solid black; */
  /* text-align: left; */
  margin-left: 30px;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
}
.reduce1 {
  width: 40px;
  height: 30px;
  background-color: #00a97f;
  float: left;
  color: white;
  font-size: 20px;
  border-radius: 20px;
}
.addition1 {
  width: 40px;
  height: 30px;
  background-color: #00a97f;
  float: left;
  color: white;
  font-size: 20px;
  border-radius: 20px;
}
.box_num {
  /* border: 1px solid black; */
  height: 30px;
  margin-left: 320px;
  width: 110px;
  margin-top: 30px;
}
.box_sum {
  /* border: 1px solid black; */
  width: 110px;
  height: 50px;
  margin-left: 550px;
  line-height: 50px;
  font-size: 18px;
  /* float: left; */
}
.shuming {
  text-align: left;
  float: left;
  color: darkgray;
  font-size: 15px;
}
.shuming2 {
  text-align: left;
  float: left;
  color: darkgray;
  font-size: 15px;
  margin-left: 30px;
  margin-top: 36px;
}
.box_buy {
  width: 90px;
  height: 40px;
  margin-left: 530px;
  margin-top: 30px;
  color: white;
  font-size: 20px;
  background-color: #00a97f;
  border-radius: 16px;
}
.box_back {
  width: 90px;
  height: 40px;
  /* color: white; */
  font-size: 13px;
  line-height: 40px;
  /* background-color: #00A97F; */
  float: left;
  margin-left: 20px;
  margin-top: 10px;
}
.box_sname {
  width: 350px;
  height: 60px;
  float: left;
  text-align: left;
  /* margin-left: 950px; */
  color: white;
  /* text-align: center; */
  /* line-height: 17px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}
.comment {
  height: 100%;
  width: 1100px;
  margin: 0 auto;
  margin-top: 20px;
}
.comment2 {
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  margin-left: 30px;
}
.comment3 {
  height: 30px;
  line-height: 30px;
  text-align: left;
  margin-left: 30px;
  /* border: 1px solid black; */
}
.comment4 {
  margin-left: 30px;
}
.comment4_button {
  width: 100px;
  height: 36px;
  margin-left: 960px;
  margin-top: 10px;
  font-size: 15px;
  color: white;
  background-color: #00a97f;
  border-radius: 20px;
}
.comment5 {
  height: 40px;
  /* width: 1100px; */
  /* border: 1px solid black; */
  margin: 0 auto;
  text-align: left;
  line-height: 40px;
  margin-left: 30px;
  font-size: 18px;
}
.box_comment5 {
  margin: 0 auto;
  margin-left: 30px;
  /* width: 100%; */
  height: 200px;
  margin-top: 20px;
}
.comment6 {
  height: 100%;
  margin-top: 20px;
  box-shadow: 0px 2px 20px #0000000f;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.comment6:last-child {
  margin-bottom: 100px;
}

.comment6_uname {
  /* width: 120px; */
  /* font-size: 19px; */
  font-size: 18px;
  color: #eebe77;
  text-align: left;
  padding: 0 65px;
  width: 100%;
}
.comment6_content {
  flex-shrink: 1;
  font-size: 18px;
  text-align: left;
  width: 60%;
}
.comment6_ptime {
  margin: 0 20px;
}
.comment6_jubao {
  border: 1px solid green;
  border-radius: 10px;
  color: blue;
}
.comment6_jubao:hover {
  color: red;
}
.comment6_bottom {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: 100%;
  padding: 0 20px;
}
</style>
