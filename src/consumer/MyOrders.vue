<template>
  <div class="box">
    <div class="box__contain">
      <el-container direction="vertical">
        <el-header height="60px">
          <TheHeader></TheHeader>
        </el-header>
         <div class="box_myorders">
               <button class="box_back" @click="back">回到首页</button>
         </div>
         <div class="box_myorders1">我的订单</div>
         <hr>
         <div style="width:90%;margin:0 auto;">
        <el-table :data="tableData" style="width:100%;">
      <el-table-column prop="cname" label="商品名称">
      </el-table-column>
      <el-table-column prop="image" label="商品图">
      </el-table-column>
      <el-table-column prop="price" label="价格">
      </el-table-column>
      <el-table-column prop="number" label="订购数量">
      </el-table-column>
      <el-table-column prop="uname" label="收货人姓名">
      </el-table-column>
      <el-table-column prop="uphone" label="我的电话">
      </el-table-column>
      <el-table-column prop="uaddress" label="收货地址">
      </el-table-column>
      <el-table-column prop="dtime" label="订单时间">
      </el-table-column>
      <el-table-column prop="status" label="订单状态">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template #default="scope">
          <el-button @click="takegoods(scope.row)" type="primary" size="small">我已收货</el-button>
          <el-button @click="returngoods(scope.row)" type="danger" size="small">退货</el-button>
        </template>
      </el-table-column>
    </el-table>

    </div>
      </el-container>
    </div>
  </div>
</template>

<script>
import TheCarousel from './TheCarousel.vue'
import TheHeader from './TheHeader.vue'
import TheAside from './TheAside.vue'
import TheMain from './TheMain.vue'
import { ElMessageBox } from 'element-plus'


export default {
    components: {TheCarousel, TheHeader, TheAside, TheMain},
    data() {
    return {
      total: null,
      tableData: [
        {
          did: '1',
          cname: '解忧炸货店',
          image: '123345',
          number: '1',
          price: '12',
          uname: '老王',
          uphone: '1331123111',
          uaddress: '广东省中山市',
          dtime: '22-12-1',
          dstateid: '1',
          status: '未完成',
        },
         {
          did: '1',
          cname: '解忧炸货店',
          image: '123345',
          number: '1',
          price: '12',
          uname: '老王',
          uphone: '1331123111',
          uaddress: '广东省中山市',
          dtime: '22-12-1',
          dstateid: '2',
          status: '已完成',
        },
      ],
    }
  },
  methods: {
    takegoods() {
        this.$confirm('确认收货？, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            this.$message({
              type: 'success',
              message: '收货成功!',
            })
          })
      },
    returngoods(){
         this.$confirm('确认退货？, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            this.$message({
              type: 'success',
              message: '退货成功!',
            })
          })
           },
        back(){
            this.$router.push("/consumer")
           }
  },
}
</script>
<style>
.box_myorders{
    width: 100%;
    height: 60px;
    background-color: #ff9999;
}
.box_myorders1{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
}
</style>