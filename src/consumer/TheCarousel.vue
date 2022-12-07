<template>
  <el-carousel type="card" height="150px">
    <el-carousel-item v-for="item in images" :key="item" >
        <el-image :src="item.url" style="width: 100%;" :fit="cover"></el-image>
    </el-carousel-item>
  </el-carousel>

</template>

<script>
export default {
  data() {
    return {
      images: [
        {url: require('../assets/photo1.jpg')},
        {url: require('../assets/photo2.jpg')},
        {url: require('../assets/photo3.jpg')},
      ]
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
  object-fit: cover;
}

</style>
