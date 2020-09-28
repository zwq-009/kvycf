<template>
  <div class="page">
    <div class="box">
      <div class="box box1" router="./ShuJu1.vue"></div>
      <div class="box box2"></div>
      <div class="box box3"></div>
      <div class="box box4"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.page {
  width: 1500px;
  height: 1100px;
  background-color: rgb(226, 23, 23);
}
.box {
  width: 500px;
  height: 300px;
  position: absolute;
  top: 100px;
  left: 500px;
  background-color: black;
  
}
.box1 {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 500px;
  left: -300px;
  background-color: blue;
}
.box2 {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 500px;
  left: 0px;
  background-color: green;
}
.box3 {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 500px;
  left: 300px;
  background-color: darkseagreen;
}
.box4 {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 500px;
  left: 600px;
  background-color: midnightblue;
}
</style>
