<template>
<div style="margin: 20px;"></div>
<diV style="width:700px;margin:0 auto;">
<el-form
  :label-position="right"
  label-width="80px"
  :model="formLabelAlign"
>
  <el-form-item label="名称">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="电话">
    <el-input v-model="formLabelAlign.phone"></el-input>
  </el-form-item>
  <el-form-item label="发货地址">
    <el-input v-model="formLabelAlign.address"></el-input>
  </el-form-item>
</el-form>
</diV>
</template>

<script>
import { right } from '@popperjs/core';

  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '老王',
          phone: '13126019494',
          address: '广东省中山市',
        },
      }
    },
    created() {
      const  _this = this
            let role = JSON.parse(sessionStorage.getItem('user')).role;
            console.log(JSON.parse(sessionStorage.getItem('user')))
            let id = JSON.parse(sessionStorage.getItem('user')).sid;
            if (role == "merchant") {
              this.axios.get('http://localhost:8080/merchant/findByName?username='+ JSON.parse(sessionStorage.getItem('user')).username).then(function (resp) {
                console.log(4566556)
                console.log(resp.data);
                _this.formLabelAlign.name = resp.data.sname;
                _this.formLabelAlign.phone = resp.data.sphone;
                _this.formLabelAlign.address = resp.data.saddress;
                console.log(_this.formLabelAlign)
              })
              .catch(function (error) {
                  console.log(error);
              });
            }else if(role=="admin") {
                this.axios.get('http://localhost:8080/admin/findByName?username=' + JSON.parse(sessionStorage.getItem('user')).username).then(function (resp) {
                console.log(resp.data);
              })
              .catch(function (error) {
                  console.log(error);
              });
            }
            
    }
  }
</script>

<style>

</style>