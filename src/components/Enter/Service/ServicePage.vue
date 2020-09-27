<template>
  <div class="staticPosition">
    <div style="position: relative;top:0px"></div>
    <div class="signUpImage">
      <img class="sourceImg" src="../../../img/Service.png" />
      <img class="arrow" src="../../../img/RightArrow.png" />
      <img class="targetImg" src="../../../img/LOGO.png" />
    </div>
    <div class="joininHead">客服注册</div>
    <el-steps :active="signinProgress" align-center class="progress">
      <el-step title="填写申请"></el-step>
      <el-step title="等待审核"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
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
