<template>
  <div class="signUpMsgText">请输入公司名称</div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '0',
      activeIndex2: '0'
    }
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style></style>
