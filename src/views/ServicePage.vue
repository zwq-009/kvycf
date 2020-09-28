<template> 
<el-container class="ServicePage_el-container">
  <el-aside class="ServicePage_el-aside"  style="overflow:unset">
    <div class="logo"><div class="img">Logo</div></div>
        <div class="nav-item">
            <i id="icon" class="el-icon-s-home"></i>
            <div class="tip">首页</div>
        </div>
        <div class="nav-item">
            <i id="icon" class="el-icon-s-comment"></i>
            <div class="tip">会话</div>
        </div>
        <div class="nav-item">
            <i id="icon" class="el-icon-s-custom"></i>
            <div class="tip">访客</div>
        </div>
        <div class="nav-item">
            <i id="icon" class="el-icon-s-unfold"></i>
            <div class="tip">历史</div>
        </div>
        <div class="nav-item">
            <i id="icon" class="el-icon-s-custom"></i>
            <div class="tip">客户</div>
        </div>
        <div class="nav-item">
            <i id="icon" class="el-icon-s-order"></i>
            <div class="tip">工单</div>
        </div>
        <div class="nav-item">
            <i id="icon" class="el-icon-s-marketing"></i>
            <div class="tip">统计</div>
        </div>
        <div class="nav-item">
            <i id="icon" class="el-icon-s-tools"></i>
            <div class="tip"> 设置 </div>
        </div>
        <div class="nav-item">
            <i id="icon" class="el-icon-switch-button"></i>
            <div class="tip">退出</div>
        </div>
  </el-aside>
  
<el-header class="ServicePage_el-header">
  <div class="customer-info">
        <div class="head">
            <img src="u94.svg" alt="" class="hop">
            <span class="customer-name">凯文客服</span>
            <img src="u93.svg" alt="" class="tip">
        </div>
        <div class="status">
            <li class="statu">在线</li>
            <li class="statu">离线</li>
        </div>
    </div>
    </el-header>
    <el-main class="mainen"  >
        <router-view></router-view>
        <!-- <div :is="currentView"></div> -->
    </el-main>
</el-container>
</template>

<script>
import CompanyPage from '@/components/Enter/Company/CompanyPage.vue'
import CompanyPageR1 from '@/components/Enter/Company/CompanyPageR1.vue'
export default {
    name:'Header',
    components:{CompanyPage,CompanyPageR1},
    data(){
        return{
            activeIndex: '1',
            currentView:''
        }
    },
    methods:{
        tabChange(tabItem) {
            this.currentView = tabItem;
        }
    }
}
</script>

<style>
.ServicePage_el-container{
height: 707px;
width: 866px;
}
  .ServicePage_el-aside {
  width: 64px!important;
  height: 715px;
  background-color: rgba(23, 28, 58, 1);
  }
.logo{
    margin-left: 8px;
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 10px;
    width: 48px;
    height: 48px;
  }
  .img{
   width: 48px;
    height: 48px;
    border-radius: 50%;

    background-color: #006eff;
    color: #fff;

    text-align: center;
    line-height: 48px;

    font-family: 'Arial Regular', 'Arial', sans-serif;
    font-size: 14px;
    font-weight: 700;
}
  i{
    border-width: 0px;
    left: 22px;
    top: 116px;
    width: 25px;
    height: 22px;
    display: flex;
}
.nav-item {
    left: 0px;
    top: 60px;
    width: 64px;
    height: 56px;
  font-size: 18px;
  font-weight: 1200;
  text-align: center;
  line-height: 56px;
  color: #fff;

  position: relative;
}
.tip{
    position: absolute;
    left: 72px;
    top: 13px;
    height: 30px;
    width: 36px;
    border-radius: 2px;

    background: #333;
    font-size: 10px;
    line-height: 30px;

    display: none;
}
.nav-item:hover .tip{
    display: block;

}
.tip::before{
    content: '';
    width: 0;
    height: 0;
    border: solid 10px;
    border-color: transparent #333 transparent transparent;

    position: absolute;
    top: 5px;
    left: -16px;
}
  
  .ServicePage_el-header {
    background-color: #bcd1f3;
    color: #333;
    line-height: 60px;
    width: 743px;
    height: 64px;
    text-align: right;
    font-size: 12px;
    position: fixed;
    top: 0px;
    left: 64px;
  }
  .customer-info{
            margin:0;
            position: relative;
            width: 157px;
            height:64px;
            float: right;
            right: 0;
            }
  .head{
    border-width: 0px;
    position: absolute;
    right: 0px;
    top: 0px;
    width: 130px;
    height: 64px;
    line-height: 64px;
    background-color: rgb(225, 234, 235) ;
    border: none;
    border-radius: 2px;
        }
    .hop .tip{
     font-size: 15px;
      position: relative;
      top: -16px;
      }
      .status{
    display:none;
    background-color: #fff;
    position:absolute;
    width:120px;
    top:65px;
    padding-right: 10px;
    right: 0;
    }
    .customer-info:hover .status{
       display: block;
    }


.mainen{
    background-color: rgb(160, 206, 233);
}


</style>
