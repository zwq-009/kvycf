<template>
  <div class="staticPosition">
    <div style="position: relative;top:0px"></div>
    <div class="signUpImage">
      <img class="sourceImg" src="../../../img/JoinIn.png" />
      <img class="arrow" src="../../../img/RightArrow.png" />
      <img class="targetImg" src="../../../img/LOGO.png" />
    </div>
    <div class="joininHead">加入凯文云客服团队</div>
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
