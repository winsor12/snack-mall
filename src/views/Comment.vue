<template>
    <div style="width:100%;margin:0 auto; margin-left: 50px;">
      <el-table :data="tableData" style="width:100%;">
    <el-table-column fixed prop="pid" label="评论区编号" width="200">
    </el-table-column>
    <el-table-column prop="cid" label="商品编号" width="200">
    </el-table-column>
    <el-table-column prop="uname" label="客户姓名" width="200">
    </el-table-column>
    <el-table-column prop="uphone" label="客户电话" width="200">
    </el-table-column>
    <el-table-column prop="cname" label="商品名称" width="200">
    </el-table-column>
    <el-table-column prop="content" label="内容" width="400">
    </el-table-column>
    <el-table-column prop="ptime" label="评论时间" width="200">
    </el-table-column>
  </el-table>
  </div>

  <el-pagination
  :page-size="6"
  :pager-count="11"
  layout="prev, pager, next"
  :total="total"
  @current-change="page">
  </el-pagination>
</template>

<script>
export default {
methods: {
  page(currentPage){
    const  _this = this
        this.axios.get('http://localhost:8181/book/findAll/'+currentPage+'/6').then(function (resp) {
            _this.tableData = resp.data.content;
            _this.total = resp.data.totalElements;
            console.log(resp.data);
        })
        .catch(function (error) {
            console.log(error);
        });
  }
},
created(){
  const  _this = this
        this.axios.get('http://localhost:8181/book/findAll/1/6').then(function (resp) {
            _this.tableData = resp.data.content;
            _this.total = resp.data.totalElements;
            console.log(resp.data);
        })
        .catch(function (error) {
            console.log(error);
        });
},
data() {
  return {
    total: null,
    tableData: [
      {
        pid: '1',
        cid: '2',
        uname: '老王',
        uphone: '1331123111',
        cname: '解忧炸货店',
        content: '好吃',
        ptime: '22-12-1',
      },
    ],
  }
},
}
</script>

<style>
.el-table .warning-row {
--el-table-tr-background-color: var(--el-color-warning-lighter);
}
.el-table .success-row {
--el-table-tr-background-color: var(--el-color-success-lighter);
}
</style>