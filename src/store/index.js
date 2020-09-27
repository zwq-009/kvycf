import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //#region 页面布局
    LayOut_EnterPage_NowChoisePage: '1',
    //#endregion
    //#region 信息数据
    //#region 登录注册
    Data_VerificationCode: '7364',

    //#region 公司注册
    Data_SignUp_Company_Progress: 0, //公司注册进度

    Data_SignUp_Company_Name: '', //公司名称
    Data_SignUp_Company_PrincipalName: '', //公司负责人名称
    Data_SignUp_Company_tel: '', //公司联系人电话
    Data_SignUp_Company_Emil: '', //公司联系人邮箱

    Data_SignUp_Company_Scheme: 2, //公司选择的解决方案

    Data_SignUp_Company_Admin_Name: '', //添加的管理员的名字
    Data_SignUp_Company_Admin_Account: '', //添加管理员的账号
    Data_SignUp_Company_Admin_Pwd: '', //添加管理员的密码
    Data_SignUp_Company_Admin_Tel: '', //添加的管理员的电话
    Data_SignUp_Company_Admin_Emil: '', //添加管理员的邮箱
    //#endregion
    //#region 客服注册
    Data_SignUp_Service_Progress: 0, //客服注册进度
    Data_SignUp_Service_CompanyNum: 0, //要注册的公司
    Data_SignUp_Service_Name: '', //客服真实名称
    Data_SignUp_Service_IDNum: '', //身份证号
    Data_SignUp_Service_NName: '', //客服昵称
    Data_SignUp_Service_Emil: '', //邮箱
    Data_SignUp_Service_Tel: '', //电话
    //#endregion
    //#region 申请加入团队
    Data_SignUp_JoinUs_Position: 0, //要应聘的岗位
    Data_SignUp_JoinUs_Name: '', //真实姓名
    Data_SignUp_JoinUs_IDNum: '' //身份证号
    //#endregion
    //#endregion
    //#endregion
    //#region 模拟数据

    //#endregion
  },
  mutations: {
    //#region 页面布局
    Layout_EnterPage_ChangeChoisePage(state, index) {
      state.LayOut_EnterPage_NowChoisePage = index
    }
    //#endregion
  },
  actions: {},
  modules: {}
})
