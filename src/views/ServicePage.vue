<template> 
<el-container style="height: 707px; width: 866px;">
  <el-aside>
    <div class="logo"><div class="img">Logo</div></div>
        <div class="nav-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="el-icon-s-home" ></use>
            </svg>
            <div class="tip">首页</div>
        </div>
        <div class="nav-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="el-icon-s-comment"></use>
            </svg>
            <div class="tip">会话</div>
        </div>
        <div class="nav-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="el-icon-s-custom"></use>
            </svg>
            <div class="tip">访客</div>
        </div>
        <div class="nav-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="el-icon-s-unfold"></use>
            </svg>
            <div class="tip">历史</div>
        </div>
        <div class="nav-item">
            <svg class="icon" ariel-icon-usera-hidden="true">
                <use xlink:href="#icon-wode"></use>
            </svg>
            <div class="tip">客户</div>
        </div>
        <div class="nav-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="el-icon-s-order"></use>
            </svg>
            <div class="tip">工单</div>
        </div>
        <div class="nav-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="el-icon-s-marketing"></use>
            </svg>
            <div class="tip">统计</div>
        </div>
        <div class="nav-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="el-icon-s-tools"></use>
            </svg>
            <div class="tip"> 设置 </div>
        </div>
        <div class="nav-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="el-icon-switch-button"></use>
            </svg>
            <div class="tip">退出</div>
        </div>
  </el-aside>
  
    <el-header style="text-align: right; font-size: 12px">
  <div class="customer-info">
        <div class="head">
            <img src="u94.svg" alt="" class="header">
            <span class="customer-name">凯文客服</span>
            <img src="u93.svg" alt="" class="tip">
        </div>
        <div class="status">
            <li class="statu">在线</li>
            <li class="statu">离线</li>
        </div>
    </div>
    </el-header>
    
    <el-main>
      <div :is="currentView"></div>
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
  .el-aside {
    width: 64px!important;
    background-color: rgb(173, 182, 235);
    color: #333;
    height: 700px;
    position: fixed;
    left: 0;
    top: 0;
    color: #fff;
  }
.logo{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #006eff;
    color: #fff;
    text-align: center;
    font-family: 'Arial Regular', 'Arial', sans-serif;
    font-size: 14px;
    font-weight: 700;
    position: absolute;
    align-self: center;
    padding: 2px 2px 2px 2px;
    box-sizing: border-box;
    width: 100%;
  }
  .img{
    width: 48px;
    height: 48px;
    margin: 29px 8px;
    background-color: #006eff;
    border-radius: 50%;
    text-align: center;
    line-height: 48px;
    font-size: 12px;
    font-weight: 800;
}
  .icon {
    font-size: 21px;
    width: 1.5em;
    height: 1.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
.nav-item {
  width: 60px;
  height: 56px;
  font-size: 18px;
  font-weight: 1200;
  text-align: center;
  line-height: 56px;
  color: #fff;

  position: relative;
}
.tip{
    display: none;
    background-color:  #a59b9b;
    width: 40px;
    height: 30px;
    border-radius: 4px;
    position: absolute;
    left: 76px;
    top: 6px;
    text-align: center;
    line-height: 30px;
    color: rgb(39, 138, 39);
    font-size: 14px;
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

.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    width: 800px;
    height: 64px;
  }
  .customer-info{
            margin:0;
            position: relative;
            width: 157px;
            height: 0;
            float: right;
            }
  .customer-info .head{
    border-width: 0px;
    position: absolute;
    right: 0px;
    top: 0px;
    width: 130px;
    height: 64px;
    line-height: 64px;
    background-color: #fff ;
    border: none;
    border-radius: 2px;
        }
    .head .customer-name, .head .tip{
      position: relative;
      top: -16px;
      }
.status{
    display:none;
    background-color: #fff;
    position:absolute;
    width:120px;
    top:45px;
    padding-right: 10px;
    right: 0;
}
  .customer-info:hover .status{
       display: block;
    }
</style>
