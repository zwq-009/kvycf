<template>
  <div class="block">
    <el-carousel height="150px" arrow="never" trigger="click">
      <el-carousel-item>
        <el-button>1231234</el-button>
      </el-carousel-item>
      <el-carousel-item>
        <el-button>456834</el-button>
      </el-carousel-item>
      <el-carousel-item>
        <el-button>789321</el-button>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
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
</style>
