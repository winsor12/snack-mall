<template>
  <div class="box">
    <div class="box__contain">
      <el-container direction="vertical">
        <el-header height="60px">
          <TheHeader></TheHeader>
        </el-header>
        <el-container direction="horizontal">
    <div class="box_zong">
         <div class="box_top" v-for="(item,index) in snack" :key="index">
          <button class="box_back" @click="back">回到首页</button>
          <div class="box_sname">
            <div>供应商:{{item.sname}}</div>
            <div>供应商电话:{{item.sphone}}</div>
            <div>供应商地址:{{item.saddress}}</div>
          </div>
         </div>
         <div class="box_main" v-for="(item,index) in snack" :key="index">
                 <div class="box_image"><img :src="item.image" style="width: 400px;height: 400px;"></div>
             <div class="box_main2">
                <div class="box_inventory">商品库存量:{{item.inventory}}</div>
                <div class="box_cname"><p class="shuming">商品名称:</p>{{item.cname}}</div>
                <div class="box_introduction"><p class="shuming">商品介绍:</p>{{item.introduction}}</div>
                <div class="box_price"><p class="shuming">单价:</p>¥{{item.price}}</div>
                <p class="shuming2">数量:</p>
                <div class="box_num">
                  <div> <button @click="reduce1(index)" class="reduce1">-</button> </div>
                   <div class="num">{{item.num}}</div>
                  <div> <button @click="addition1(index)" class="addition1">+</button> </div>
                </div>
                <div class="box_sum">小计：¥{{item.num * item.price}}</div>
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
                    :autosize="{ minRows: 5, maxRows: 7}"
                    placeholder="亲～给个好评吧！"
                    v-model="textarea"
                    maxlength="50"
                    show-word-limit
                    >
                  </el-input>
                  <button class="comment4_button" @click="addcomment">发表评论</button>
              </div>
              <div class="comment5">用户评论</div>

              <div class="box_comment5">
              <div class="comment6" v-for="(item,index) in comment" :key="index">
                <div class="comment6_uname">{{item.uname}}</div>
                <div class="comment6_content">{{item.content}}</div>
                <div class="comment6_ptime">{{item.ptime}}</div>
                 <div class="comment6_jubao" @click="jubao">举报</div>
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
import TheCarousel from './TheCarousel.vue'
import TheHeader from './TheHeader.vue'
import TheAside from './TheAside.vue'
import TheMain from './TheMain.vue'
 import { defineComponent, ref } from 'vue'

export default defineComponent ({
    components: {TheCarousel, TheHeader, TheAside, TheMain},
    data() {
      return {
        total: null,
        value: null,
        snack: [
          {
            id: '2',
            image: require('../assets/redmimi.png'),
            introduction: '好吃到智障',
            cname: '王小美',
            sid: '1',
            sname: '解忧炸货店',
            sphone: '131-119-112',
            saddress: '广东省中山市大望路21号零食工厂',
            price: '10',
            num: '1',
            inventory: '5',
          },
        ],
        comment: [
          {
            pid: '1',
            uid: '2',
            uname: '罗爵',
            cid: '2',
            content: '这个零食很贼难吃，还会回购个屁，评论区都是骗人的，傻逼评论区,这个零食很贼难吃，还会回购个屁，评论区都是骗人的，傻逼评论区这个零食很贼难吃，还会回购个屁，评论区都是骗人的，傻逼评论区这个零食很贼难吃，还会回购个屁，评论区都是骗人的，傻逼评论区这个零食很贼难吃，还会回购个屁，评论区都是骗人的，傻逼评论区',
            ptime: '2022-12-23'
          },
           {
            pid: '1',
            uid: '2',
            uname: '罗爵',
            cid: '2',
            content: '这个零食很好吃，还会回购',
            ptime: '2022-12-23'
          },
          {
            pid: '1',
            uid: '2',
            uname: '罗爵',
            cid: '2',
            content: '这个零食很好吃，还会回购',
            ptime: '2022-12-23'
          },
        ],
      }
    },
  methods: {
    back(){
      alert("返回首页")
    },
    buy(index){
      alert("购买成功！")
    },
    reduce1(index){
      if( this.snack[index].num <= 1){
        alert("数量已减为1")
      }else{
        this.snack[index].num --
      }
    },
    addition1(index){
      if( this.snack[index].num < this.snack[index].inventory){
        this.snack[index].num ++
      }else{
        alert("亲～没货啦～>.<")
      }
    },
    addcomment(){
      alert("发表成功")
    },
    jubao(){
      alert("举报成功")
    }
  },
    setup() {
      return {
        textarea: ref(''),
      }
    },
    
})
</script>
<style>
.box_zong{
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
}
.box_top{
  width: 100%;
  height: 60px;
  /* border: 1px solid black; */
  background-color: #ff9999;
}
.box_main{
  width: 1100px;
  height: 400px;
  margin: auto;
  /* border: 1px solid black; */
}
.box_image{
  width: 400px;
  height: 400px;
  float: left;
  /* border: 1px solid black; */
}

.box_main2{
  float: left;
}
.box_inventory{
  /* border: 1px solid black; */
  margin-left: 570px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
}
.box_cname{
  /* border: 1px solid black; */
    height: 30px;
    font-size: 15px;
    line-height: 30px;
    margin-left: 30px;
}
.box_introduction{
    /* border: 1px solid black; */
    /* text-align: left; */
    margin-left: 30px;
    font-size: 15px;
    height: 70px;
    line-height: 70px;
    margin-top: 20px;
}
.box_price{
  /* border: 1px solid black; */
    /* text-align: left; */
    margin-left: 30px;
    font-size: 20px;
    height: 40px;
    line-height: 40px;
     margin-top: 20px;
}
.reduce1{
  width: 40px;
  height: 30px;
  background-color: #00A97F;
  float: left;
  color: white;
    font-size: 20px;
    border-radius: 20px;
}
.addition1{
  width: 40px;
  height: 30px;
  background-color: #00A97F;
  float: left;
  color: white;
    font-size: 20px;
    border-radius: 20px;
}
.box_num{
    /* border: 1px solid black; */
    height: 30px;
    margin-left: 320px;
    width: 110px;
    margin-top: 30px;
    
}
.box_sum{
  /* border: 1px solid black; */
    width: 90px;
    height: 50px;
    margin-left: 550px;
    line-height: 50px;
    font-size: 18px;
    /* float: left; */
}
.shuming{
  text-align: left;
  float: left;
  color: darkgray;
  font-size: 15px;
}
.shuming2{
  text-align: left;
  float: left;
  color: darkgray;
  font-size: 15px;
  margin-left: 30px;
  margin-top: 36px;
}
.box_buy{
  width: 90px;
  height: 40px;
  margin-left: 530px;
  margin-top: 30px;
  color: white;
  font-size: 20px;
  background-color: #00A97F;
  border-radius: 16px;
}
.box_back{
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
.box_sname{
    width: 350px;
    height: 60px;
    float: left;
    text-align: left;
    margin-left: 950px;
    color: white;
}
.comment{
  height: 100%;
  width: 1100px;
  /* border: 1px solid black; */
  margin: 0 auto;
  margin-top: 20px;
}
.comment2{
  height: 40px;
  /* width: 1100px; */
  /* border: 1px solid black; */
  margin: 0 auto;
  text-align: left;
  line-height: 40px;
  margin-left: 30px;
  font-size: 18px;
}
.comment3{
  height: 30px;
  line-height: 30px;
  text-align: left;
  margin-left: 30px;
  /* border: 1px solid black; */
}
.comment4{
  margin-left: 30px;
}
.comment4_button{
    width: 100px;
    height: 36px;
    margin-left: 960px;
    margin-top: 10px;
    font-size: 15px;
    color: white;
    background-color: #00A97F;
    border-radius: 20px;
}
.comment5{
  height: 40px;
  /* width: 1100px; */
  /* border: 1px solid black; */
  margin: 0 auto;
  text-align: left;
  line-height: 40px;
  margin-left: 30px;
  font-size: 18px;
}
.box_comment5{
   margin: 0 auto;
   margin-left: 30px;
   /* width: 100%; */
   height: 200px;
     margin-top: 20px;
}
.comment6{
   height: 100%;
   margin-top: 20px;
   box-shadow: 0px 2px 2px ;
}
.comment6_uname{
    width: 120px;
    font-size: 19px;
}
.comment6_content{
    float: left;
    margin-left: 130px;
    height: 140px;
    width: 700px;
    font-size: 18px;
    text-align: left;
}
.comment6_ptime{
  float: left;
    margin-left: 140px;
    font-size: 13px;
    margin-top: -20px;
}
.comment6_jubao{
    width: 40px;
    height: 25px;
    float: left;
    margin-top: 145px;
    margin-left: 190px;
    border: 1px solid green;
    border-radius: 10px;
    color: blue;
}
.comment6_jubao:hover{
  color: red;
}
</style>
