<template>
  <el-button type="text" @click="dialogTableVisible = true"
    >打开嵌套表格的 Dialog</el-button
  >

  <el-dialog title="收货地址" v-model="dialogTableVisible">
    <el-table :data="gridData">
      <el-table-column
        property="date"
        label="日期"
        width="150"
      ></el-table-column>
      <el-table-column
        property="name"
        label="姓名"
        width="200"
      ></el-table-column>
      <el-table-column property="address" label="地址"></el-table-column>
    </el-table>
  </el-dialog>

  <!-- Form -->
  <el-button type="text" @click="dialogFormVisible = true"
    >打开嵌套表单的 Dialog</el-button
  >

  <el-dialog title="收货地址" v-model="dialogFormVisible">

    <el-upload
      v-model:file-list="fileList"
      class="upload-demo"
      action="http://localhost:8080/upload/"
      :on-remove="handleRemove"
      name="fileUpload"
      list-type="picture"
      multiple
      :on-success="setfileList"
      :limit="1"
      :on-exceed="handleExceed"
    >
      <el-link size="small" type="primary">点击上传</el-link>
      <template #tip>
        <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
      </template>
    </el-upload>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
};
</script>
