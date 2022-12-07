<template></template>

<script>
export default {
  created() {
    const _this = this;
    this.axios
      .get("http://localhost:8080/orders/findByUid/uid?" + 1)
      .then(function (resp) {
        console.log(resp.data);
        _this.tableData = resp.data;
        console.log(_this.tableData);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
