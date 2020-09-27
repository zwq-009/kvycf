<template>
  <el-container style="height:100%">
    <el-header style="padding:0px">
      <el-menu
        :default-active="$store.state.LayOut_EnterPage_NowChoisePage"
        class="el-menu-demo"
        mode="horizontal"
        background-color="black"
        text-color="#fff"
        active-text-color="#FF8C00"
        router
        style="z-index:1000"
      >
        <img class="logo" src="../img/LOGO.png" />
        <div class="title" style="color:#47c0e8">凯文</div>
        <div class="title" style="color:#ffb05b">云客服</div>
        <div
          class="title"
          style="color:#ffffff;float:right;margin-right:20px;font-weight: 400;font-size:25px"
        >
          www.KevCCS.com
        </div>
        <el-menu-item index="1" route="/" class="item">
          主页
        </el-menu-item>
        <el-menu-item
          index="2"
          route="/EnterSignUpPage/EnterCompanyPage/EnterCompanyPageR1"
          class="item"
        >
          获取解决方案
        </el-menu-item>
        <el-menu-item
          index="3"
          route="/EnterSignUpPage/EnterServicePage/EnterServicePageR1"
          class="item"
        >
          成为客服
        </el-menu-item>
        <el-menu-item
          index="4"
          route="/EnterSignUpPage/EnterJoinUsPage"
          class="item"
        >
          加入我们
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main class=".el-main" style="padding:0px;position:relative;">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {}
</script>

<style>
.title {
  float: left;
  height: 60px;
  line-height: 60px;
  font-size: 30px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  color: white;
  user-select: none;
}

.logo {
  margin-left: 30px;
  float: left;
  width: 111px;
  height: 60px;
}
.item {
  position: relative;
  left: 30px;
  user-select: none;
}
</style>
