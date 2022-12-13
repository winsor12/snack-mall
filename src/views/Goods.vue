<template>
  <div style="width: 100%; margin: 0 auto" v-if="tableData">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column fixed prop="cid" label="商品编号"> </el-table-column>
      <el-table-column prop="cname" label="商品名称">
        <template #default="scope">
          {{ scope.row.cname }}
        </template>
      </el-table-column>
      <el-table-column prop="imageList" label="商品图">
        <!-- <el-image src="http://127.0.0.1:9000/krenz/60741694_p1_master1200.jpg?Content-Disposition=attachment%3B%20filename%3D%2260741694_p1_master1200.jpg%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=admin%2F20221212%2F%2Fs3%2Faws4_request&X-Amz-Date=20221212T091024Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=bed1c3eb84b5ca576e4451a6cddc95e263aa9b769f01d91ef6f151b6aef5536e"></el-image> -->
        <!-- <el-image
          preview-teleported="true"
          :preview-src-list="srcList"
          style="width: 50px; height: 50px"
          :src="require(prop)"
        ></el-image> -->
        <template #default="scope">
          <div v-if="scope.row.imageList[0] && scope.row.imageList[0].image">
            <el-image
              :src="require('@/assets/' + scope.row.imageList[0].image)"
              style="width: 50px"
              :preview-src-list="[
                require('@/assets/' + scope.row.imageList[0].image),
              ]"
              preview-teleported="true"
            ></el-image>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="introduction" label="介绍"> </el-table-column>
      <el-table-column prop="price" label="价格"> </el-table-column>
      <el-table-column prop="inventory" label="库存"> </el-table-column>
      <el-table-column prop="type.category" label="商品类别"> </el-table-column>
      <el-table-column type="expand" label="评论" width="100">
        <template #default="props">
          <h1 style="font-size: 20px; padding-left: 20px">商品评论</h1>
          <el-table :data="props.row.commentList">
            <el-table-column label="评论编号" prop="pid" />
            <el-table-column label="用户名称" prop="consumer.uname" />
            <el-table-column label="用户电话" prop="consumer.uphone" />
            <el-table-column label="评论内容" prop="content" min-width="200" />
            <el-table-column label="评论时间" prop="ptime" />
          </el-table>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template #default="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small"
            >修改商品</el-button
          >
          <el-button
            @click="deleteForId(scope.row.cid)"
            type="danger"
            size="small"
            >删除商品</el-button
          >
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
  <el-pagination
    background
    layout="prev, pager, next"
    v-model:current-page="currentPage"
    :total="pageInfo.total"
    :page-size="6"
    :pager-count="6"
    @current-change="page(currentPage)"
  />

  <el-dialog
    title="修改商品信息"
    v-model="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
        <el-form
          @submit.prevent
          label-position="left"
          label-width="100px"
          :model="rowData"
          style="max-width: 460px"
        >
          <el-form-item label="编号">
            <el-input v-model="rowData.cid" />
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="rowData.cname" />
          </el-form-item>
          <el-form-item label="介绍">
            <el-input v-model="rowData.introduction" />
          </el-form-item>
          <el-form-item label="价格">
            <el-input v-model="rowData.price" />
          </el-form-item>
          <el-form-item label="库存">
            <el-input v-model="rowData.inventory" />
          </el-form-item>
          <el-form-item label="类别">
            <el-select
              v-model="rowData.type.category"
              placeholder="请选择商品类别"
            >
              <el-option
                v-for="item in options"
                :key="item.lid"
                :label="item.category"
                :value="item.category"
                @click="
                  () => {
                    this.rowData.lid = item.lid;
                  }
                "
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="图片">
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
                <div class="el-upload__tip">
                  只能上传 jpg/png 文件，且不超过 500kb
                </div>
              </template>
            </el-upload>
          </el-form-item>
        </el-form>
  </el-dialog>
  <el-button @click="ssss">test</el-button>
</template>

<script>
import { ElMessage } from "element-plus";

export default {
  data() {
    return {
      fileList: [
        {
          // name: "123.jpg",
          url: "",
        },
      ],
      options: "",
      typeValue: "",
      srcList: [require("@/assets/redmimi.png")],
      currentPage: 1,
      pageInfo: {
        total: 1,
        pageSize: 1,
        pageNum: 1,
      },
      dialogVisible: false,
      rowData: [],
      tableData: [
        {
          imageList: [
            {
              cid: "123",
              image: "redmimi.png",
            },
          ],
        },
      ],
    };
  },
  methods: {
    ssss() {
      this.$router.push("/thetest")
    },
    test() {
      alert("ssfsdfsdf");
    },
    handleRemove() {
      console.log(199 + this.rowData.imgUrl);
      this.rowData.imgUrl = "";
      console.log(199 + this.rowData.imgUrl);
    },
    handleExceed() {
      ElMessage("只能上传一张图片");
    },
    setfileList(res) {
      console.log(res);
      this.rowData.imgUrl = res[0];
      console.log(this.rowData.imgUrl);
    },
    deleteForId(cid) {
      const _this = this;
      this.axios
        .get("http://localhost:8080/goods/deleteById?id=" + cid)
        .then(function (resp) {
          console.log(resp.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleClick(row) {
      this.rowData = JSON.parse(JSON.stringify(row));
      this.rowData.lid = row.type.lid;
      if (row.imageList[0] && row.imageList[0].image) {
        console.log("205");
        this.rowData.imgUrl = row.imageList[0].image;
        var list = [
          {
            // name: row.imageList[0].image,
            url: require("@/assets/" + row.imageList[0].image),
          },
        ];
        this.fileList = list;
        console.log(this.fileList);
      }
      console.log(this.rowData);
      this.dialogVisible = true;
    },
    page(currentPage) {
      console.log(currentPage);
      const _this = this;
      if (JSON.parse(sessionStorage.getItem("user")).role == "merchant") {
        this.axios
          .get(
            "http://localhost:8080/goods/findGoodsBySid?pageNum=" +
              currentPage +
              "&pageSize=6" +
              "&sid=" +
              JSON.parse(sessionStorage.getItem("user")).id
          )
          .then(function (resp) {
            _this.tableData = resp.data.list;
            _this.pageInfo.total = resp.data.total;
            console.log(resp.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  },
  created() {
    console.log("created");
    const _this = this;

    this.axios
      .get("http://localhost:8080/types/findAll")
      .then(function (resp) {
        console.log(resp.data);
        _this.options = resp.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    if (JSON.parse(sessionStorage.getItem("user")).role == "merchant") {
      this.axios
        .get(
          "http://localhost:8080/goods/findGoodsBySid?sid=" +
            JSON.parse(sessionStorage.getItem("user")).id
        )
        .then(function (resp) {
          console.log(resp.data);
          _this.tableData = resp.data.list;
          console.log(_this.tableData);
          _this.pageInfo.total = resp.data.total;
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (JSON.parse(sessionStorage.getItem("user")).role == "admin") {
      this.axios
        .get("http://localhost:8080/goods/findGoodsBySid")
        .then(function (resp) {
          console.log(resp.data);
          _this.tableData = resp.data.list;
          console.log(_this.tableData);
          _this.pageInfo.total = resp.data.total;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
};
</script>

<style>
.el-table .warning-row {
  --el-table-tr-background-color: var(--el-color-warning-lighter);
}
.el-table .success-row {
  --el-table-tr-background-color: var(--el-color-success-lighter);
}

.upload-demo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
}
</style>
