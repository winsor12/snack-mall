<template>
    <div style="width:100%;margin:0 auto; margin-left: 50px;">
        <el-table :data="tableData" style="width:100%;">
      <el-table-column fixed prop="did" label="订单编号" width="100">
      </el-table-column>
      <el-table-column prop="cname" label="商品名称" width="150">
      </el-table-column>
      <el-table-column prop="image" label="商品图" width="120">
      </el-table-column>
      <el-table-column prop="price" label="价格" width="100">
      </el-table-column>
      <el-table-column prop="number" label="订购数量" width="100">
      </el-table-column>
      <el-table-column prop="uname" label="客户姓名" width="120">
      </el-table-column>
      <el-table-column prop="uphone" label="客户电话" width="120">
      </el-table-column>
      <el-table-column prop="uaddress" label="送货地址" width="120">
      </el-table-column>
      <el-table-column prop="dtime" label="订单时间" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small">删除订单</el-button>
          <!-- <el-button type="primary" size="small">删除商品</el-button> -->
        </template>
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
  handleClick(row) {
  //   console.log(row)
  alert("删除成功")
  },
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
        did: '1',
        cname: '解忧炸货店',
        image: '123345',
        number: '1',
        price: '12',
        uname: '老王',
        uphone: '1331123111',
        uaddress: '广东省中山市',
        dtime: '22-12-1',
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