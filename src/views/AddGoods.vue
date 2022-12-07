<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="商品名称" prop="cname">
      <el-input v-model="ruleForm.cname"></el-input>
    </el-form-item>

    <el-form-item label="介绍" prop="introduction">
      <el-input v-model="ruleForm.introduction"></el-input>
    </el-form-item>

    <el-form-item label="价格" prop="price">
      <el-input v-model="ruleForm.price"></el-input>
    </el-form-item>

    <el-form-item label="库存" prop="inventory">
      <el-input v-model="ruleForm.inventory"></el-input>
    </el-form-item>

    <!-- <el-form-item label="商品类别" prop="lid">
      <el-input v-model="ruleForm.lid"></el-input>
    </el-form-item> -->
    <div style="margin-left: 100px; margin-top: 40px; width: 600px">
      <el-select v-model="value" placeholder="请选择商品类别">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>

    <div style="margin-left: 100px; margin-top: 40px; width: 600px">
      <el-upload
        class="upload-demo"
        action="http://localhost:8080/upload/"
        :on-remove="handleRemove"
        name="fileUpload"
        list-type="picture"
        multiple
        :on-success="setfileList"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <template #tip>
          <div class="el-upload__tip">
            只能上传 jpg/png 文件，且不超过 500kb
          </div>
        </template>
      </el-upload>
    </div>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleForm)"
        >立即创建</el-button
      >
      <el-button @click="resetForm('ruleForm')">重置</el-button>
      <!-- <el-button @click="test()">test</el-button> -->
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "类别1",
        },
        {
          value: "选项2",
          label: "类别2",
        },
        {
          value: "选项3",
          label: "类别3",
        },
        {
          value: "选项4",
          label: "类别4",
        },
        {
          value: "选项5",
          label: "类别5",
        },
      ],
      value: "",

      ruleForm: {
        cname: "",
        introduction: "",
        price: "",
        inventory: "",
        lid: "",
      },
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      rules: {
        cname: [
          { required: true, message: "商品名称不能为空", trigger: "blur" },
        ],
        introduction: [
          { required: true, message: "介绍不能为空", trigger: "blur" },
        ],
        price: [{ required: true, message: "价格不能为空", trigger: "blur" }],
        inventory: [
          { required: true, message: "库存不能为空", trigger: "blur" },
        ],
        lid: [{ required: true, message: "类别不能为空", trigger: "blur" }],
      },
    };
  },

  methods: {
    setfileList(res) {
      console.log(res)
      this.fileList.push(res[0])
      console.log(this.fileList)
    },
    // handleRemove(file, fileList) {
    //   console.log(file, fileList);
    // },
    // handlePreview(file) {
    //   console.log(file);
    // },

    submitForm(formName) {
      console.log(formName)
      const _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios
            .post("http://localhost:8080", this.ruleForm)
            .then(function (resp) {
              if (resp.data == "success") {
                _this.$alert(
                  "《" + _this.ruleForm.name + "》 上架成功！",
                  "消息",
                  {
                    confirmButtonText: "确定",
                    callback: (action) => {
                      _this.$router.push("/Goods");
                    },
                  }
                );
              }
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
