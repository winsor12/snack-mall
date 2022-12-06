<template>
  <div style="margin: 20px;"></div>
  <diV style="width:700px;margin:0 auto;">
    <el-form
    :label-position="right"
    label-width="80px"
    :model="formLabelAlign"
  >
    <el-form-item label="名称:">
      <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="密码:">
      <el-input v-model="formLabelAlign.password"></el-input>
    </el-form-item>
    <el-form-item label="电话号码:">
      <el-input v-model="formLabelAlign.phone"></el-input>
    </el-form-item>
    <el-form-item label="发货地址:">
      <el-input v-model="formLabelAlign.address"></el-input>
    </el-form-item>
  </el-form>
  <div style="margin:0 auto; height: 40px;width: 100px;">
     <el-button type="primary" class="button" @click="button">确认修改</el-button>
  </div>
 
  </diV>
  
  </template>
  
  <script>
  import { right } from '@popperjs/core';
  
    export default {
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

  <style scoped>
  .button{
    width: 100px;
    height: 40px;
  }
  </style>