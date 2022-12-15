<template>
  <div style="margin: 20px"></div>
  <diV style="width: 700px; margin: 0 auto">
    <el-form :label-position="right" label-width="80px" :model="formLabelAlign">
      <el-form-item label="名称:">
        <el-input v-model="formLabelAlign.sname"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input show-password v-model="formLabelAlign.spasswd"></el-input>
      </el-form-item>
      <el-form-item label="电话号码:">
        <el-input v-model="formLabelAlign.sphone"></el-input>
      </el-form-item>
      <el-form-item label="发货地址:">
        <el-input v-model="formLabelAlign.saddress"></el-input>
      </el-form-item>
    </el-form>
    <div style="margin: 0 auto; height: 40px; width: 100px">
      <el-button type="primary" class="button" @click="button"
        >确认修改</el-button
      >
    </div>
  </diV>
</template>

<script>
import { right } from "@popperjs/core";

export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        sid: null,
        sname: null,
        spasswd: null,
        sphone: null,
        saddress: null,
        oldName: null,
      },
    };
  },
  methods: {
    button() {
      const _this = this;
      this.$confirm("是否修改个人信息?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.axios({
            method: "post",
            url: "http://localhost:8080/merchant/update2",
            data: _this.formLabelAlign,
          }).then((res) => {

          });
          this.$message({
            type: "success",
            message: "修改成功!",
          });
          _this.$router.push("/");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消修改",
          });
        });
    },
  },
  created() {
    const _this = this;
    this.axios
      .get(
        "http://localhost:8080/merchant/findByName?username=" +
          JSON.parse(sessionStorage.getItem("user")).username
      )
      .then(function (resp) {
        console.log(resp.data);
        _this.formLabelAlign = resp.data;
        _this.formLabelAlign.oldName = JSON.parse(sessionStorage.getItem("user")).username;
        console.log(_this.formLabelAlign);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.button {
  width: 100px;
  height: 40px;
}
</style>
