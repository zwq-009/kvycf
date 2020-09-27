<template>
  <div class="staticPosition">
    <div style="position: relative;top:0px"></div>
    <div class="signUpImage">
      <img class="sourceImg" src="../../../img/Company.png" />
      <img class="arrow" src="../../../img/RightArrow.png" />
      <img class="targetImg" src="../../../img/LOGO.png" />
    </div>
    <div class="joininHead">企业注册</div>
    <el-steps :active="signinProgress" align-center class="progress">
      <el-step title="公司注册"></el-step>
      <el-step title="等待审核"></el-step>
      <el-step title="选择服务"></el-step>
      <el-step title="添加客服"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <router-view class="signUpInnerPage"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signinProgress: 0
    }
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>

<style></style>
