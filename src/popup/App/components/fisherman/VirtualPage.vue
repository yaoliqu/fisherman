<template>
  <el-scrollbar
    wrap-style="overflow-x: hidden;margin-bottom:0"
    style="height: 300px"
  >
    <div class="virtualPage">
      <div class="header">
        <span>你这个老六,这么好奇的哇</span>
        <span>别往下拉！！！</span>
      </div>
      <img :src="img" />
      <div class="dot">
        <span v-for="i in 30" :key="i">·</span>
      </div>
      <img :src="img1" />
      <div class="bottom">
        你干嘛～啊哈～哎呦～你好烦～
        <el-button type="primary" size="mini" @click="changeStatus"
          >别点！</el-button
        >
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  data() {
    return {
      img: require('../../../../assets/img.png'),
      img1: require('../../../../assets/img1.png'),
    }
  },
  methods: {
    changeStatus() {
      this.$emit('changeStatus', true)
    },
  },
}
</script>

<style lang="scss" scoped>
.virtualPage {
  width: 100%;
  font-size: 12px;
  padding: 8px;
  // height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  .header {
    font-size: 14px;
    text-align: center;
    font-weight: 600;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-bottom: 16px;
  }
  img {
    width: 300px;
    height: 320px;
  }
  .dot {
    width: 100%;
    font-size: 18px;
    font-weight: bolder;
    height: 620px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .bottom {
    width: 100%;
    padding: 12px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
