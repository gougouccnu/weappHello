//index.js
//获取应用实例
var app = getApp();
var ifCheckedAll = true;
Page({
  data: {
    motto: 'Hello World!!',
    userInfo: {},
    ifCheckedAll: true
  },
  //事件处理函数
  checkedAll: function() {
    ifCheckedAll = ! ifCheckedAll;
    this.setData({
      ifCheckedAll: ifCheckedAll
    })
  },
  onLoad: function () {
    console.log('onLoad')
    // this值在方法的函数内指向Page，一般用that变量首先捕获this added by lsw
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  // added by lsw 
  onShareAppMessage: function() {
    return {
      title: 'custom share title',
      path: '/pages/index/index'
    }
  }
})
