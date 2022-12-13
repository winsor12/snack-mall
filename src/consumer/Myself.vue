<template>
  <div class="box">
    <div class="box__contain">
      <el-container direction="vertical">
        <el-header height="60px">
          <TheHeader></TheHeader>
        </el-header>
            <div class="box_myself">
               <button class="box_back" @click="back">回到首页</button>
            </div>

            <diV style="width:700px;margin:0 auto;">
                <el-form
                :label-position="right"
                label-width="80px"
                :model="formLabelAlign"
            >
                <div class="box_myself1">我的信息</div>
                <el-form-item label="名称:">
                <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="密码:">
                <el-input v-model="formLabelAlign.password"></el-input>
                </el-form-item>
                <el-form-item label="电话号码:">
                <el-input v-model="formLabelAlign.phone"></el-input>
                </el-form-item>
                <el-form-item label="收货地址:">
                <el-input v-model="formLabelAlign.address"></el-input>
                </el-form-item>
            </el-form>
            <div style="margin:0 auto; height: 40px;width: 100px;">
                <el-button type="primary" class="button" @click="button">确认修改</el-button>
            </div>
            
            </diV>

            
         
      </el-container>
    </div>
  </div>
</template>

<script>
import TheCarousel from './TheCarousel.vue'
import TheHeader from './TheHeader.vue'
import TheAside from './TheAside.vue'
import TheMain from './TheMain.vue'


export default {
    components: {TheCarousel, TheHeader, TheAside, TheMain},
    data() {
        return {
          labelPosition: 'right',
          formLabelAlign: {
            name: '',
            password: '',
            phone: '',
            address: '',
          },
        }
      },
      methods: {
      button() {
        this.$confirm('是否修改个人信息?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            this.$message({
              type: 'success',
              message: '修改成功!',
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消修改',
            })
          })
      },
    },
}
</script>

<style>
.box_myself{
    width: 100%;
    height: 60px;
    background-color: #ff9999;
}
.box_myself1{
    width: 100%;
    height: 70px;
    text-align: left;
    font-size: 20px;
    color: #00a1d6;
    line-height: 50px;
}
</style>