<template>
    <div style="width:100%;margin:0 auto; margin-left: 50px;">
        <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="cid" label="商品编号" width="120">
      </el-table-column>
      <el-table-column prop="cname" label="商品名称" width="120">
      </el-table-column>
      <el-table-column prop="image" label="商品图" width="120">
      </el-table-column>
      <el-table-column prop="introduction" label="介绍" width="200">
      </el-table-column>
      <el-table-column prop="price" label="价格" width="120">
      </el-table-column>
      <el-table-column prop="inventory" label="库存" width="120">
      </el-table-column>
      <el-table-column prop="lid" label="商品类别" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template #default="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small">修改商品</el-button>
          <el-button @click="deleteForId(scope.row.cid)"  type="danger" size="small">删除商品</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
    
    <!-- <el-pagination
    :page-size="6"
    :pager-count="11"
    layout="prev, pager, next"
    :total="total"
    @current-change="page">
    </el-pagination> -->
    <el-pagination background layout="prev, pager, next" :total="1000" />

  </template>
  
  <script>
  export default {
    methods: {
      deleteForId(cid) {
        const  _this = this
            this.axios.get('http://localhost:8080/goods/deleteById?id=' + cid).then(function (resp) {
                console.log(resp.data);
            })
            .catch(function (error) {
                console.log(error);
            });
      },
      handleClick(row) {
        console.log(row)
      },
      page(currentPage){
        const  _this = this
            this.axios.get('http://localhost:8080/goods/findAll'+currentPage+'/6').then(function (resp) {
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
            this.axios.get('http://localhost:8080/goods/findAll').then(function (resp) {

                console.log(resp.data);
                _this.tableData = resp.data;
                console.log(_this.tableData)
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
            cid: '1',
            cname: '解忧炸货店',
            image: '123345',
            introduction: '东野圭吾',
            price: '12',
            inventory: '1000',
            lid: '1'
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