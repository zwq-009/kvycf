<template>
  <div class="signupBackGround">
    <div class="Mask">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.signupBackGround {
  width: 100%;
  height: 1000px;
  background-image: url('../../img/EnterBackground.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.Mask {
  position: absolute;
  left: 50%;
  margin-left: -450px;
  width: 900px;
  min-height: 1000px;
  background-color: #ffffffcc;
  text-align: center;
}

.signUpImage {
  position: absolute;
  left: 50%;
  top: 30px;
  margin-left: -250px;
  margin-bottom: 50px;
  width: 500px;
}
.sourceImg {
  width: 100px;
  height: 100px;
  float: left;
}
.arrow {
  width: 150px;
  height: 100px;
}
.targetImg {
  width: 170px;
  height: 93px;
  float: right;
}
.joininHead {
  margin-top: 150px;
  font-size: 60px;
  font-weight: 800;
}
.progress {
  margin-top: 30px;
}
.signUpInnerPage {
  margin-top: 50px;
}

.signUpMsgText {
  font-size: 20px;
  font-weight: 600px;
}
</style>
