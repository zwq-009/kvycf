<template>
  <div class="mainBackGround">
    <div class="boxOuter">
      <el-carousel height="600px" class="zmd" arrow="never" trigger="click">
        <el-carousel-item class="zmdItem">
          <el-button>123</el-button>
        </el-carousel-item>
        <el-carousel-item>
          <el-button>456</el-button>
        </el-carousel-item>
        <el-carousel-item>
          <el-button>789</el-button>
        </el-carousel-item>
      </el-carousel>
      <div class="loginIntry">
        <img src="../../img/LOGO.png" class="logoImage" />
        <div style="color:#000000" class="enterTitle">欢迎使用</div>
        <div
          style="color:#47c0e8;float:left;margin-left:100px"
          class="enterTitle"
        >
          凯文
        </div>
        <div style="color:#ffb05b;float:left" class="enterTitle">云客服</div>

        <div style="height:30px;margin-top:70px"></div>
        <el-button
          type="primary"
          class="enterButton"
          @click="ServiceLogin = true"
        >
          <div class="enterButtonText">
            客服登录<i class="el-icon-right"></i>
          </div>
        </el-button>
        <div style="height:30px"></div>
        <el-button
          type="success"
          class="enterButton"
          @click="AdminLogin = true"
        >
          <div class="enterButtonText">
            管理员登录<i class="el-icon-right"></i>
          </div>
        </el-button>
      </div>
    </div>
    <el-drawer
      title="我是标题"
      :visible.sync="ServiceLogin"
      :with-header="false"
      style="z-index:990"
    >
    </el-drawer>
    <el-drawer
      title="我是标题"
      :visible.sync="AdminLogin"
      :with-header="false"
      style="z-index:990"
    >
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ServiceLogin: false,
      AdminLogin: false
    }
  },
  methods: {}
}
</script>

<style>
.mainBackGround {
  width: 100%;
  height: 100%;
  background-image: url('../../img/EnterBackground.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.boxOuter {
  position: absolute;
  left: 50%;
  margin-left: -700px;
  height: 100%;
  min-width: 1400px;
}
.zmd {
  position: absolute;
  top: 50%;
  margin-top: -300px;
  width: 900px;
}

.loginIntry {
  position: absolute;
  top: 50%;
  margin-top: -300px;
  margin-left: 950px;
  width: 450px;
  height: 600px;

  border-radius: 20px;
  background-color: #ffffffd3;
  text-align: center;
  align-content: center;
}

.el-carousel__item:nth-child(1) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2) {
  background-color: #d3dce6;
}
.el-carousel__item:nth-child(3) {
  background-color: blue;
}

.logoImage {
  margin-top: 50px;
  width: 309px;
  height: 168px;
}
.enterTitle {
  height: 60px;
  line-height: 60px;
  font-size: 50px;
  font-weight: 600;
  margin: 0;
  margin-top: 10px;
  padding: 0;
}
.enterButton {
  margin-top: 30px;
  width: 300px;
  height: 60px;
}
.enterButtonText {
  font-family: NSimSun;
  font-size: 30px;
  font-weight: 500;
  margin: 0;
  padding: 0;
}
</style>
