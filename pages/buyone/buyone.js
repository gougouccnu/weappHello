//获取应用实例
var Bmob = require('../../utils/bmob.js');
var app = getApp();
var contactsArray = [{"name": 'lishaowei', "phone": '18926418053',
               "address": 'wuhan city'},
            {"name": 'jinli', "phone": '18926418053',
               "address": 'wuhan city'}];
Page({
  data: {
    contacts: {"name": 'lishaowei', "phone": '18926418053',
               "address": 'wuhan city'},
    userInfo: {}
  },
  //事件处理函数
  check: function() {
    wx.setStorageSync('selectedItemIndex', '1')
      var Diary = Bmob.Object.extend("diary");
      var diary = new Diary();
      diary.set("title","hello");
      diary.set("content","hello world");
      //添加数据，第一个入口参数是null
      diary.save(null, {
        success: function(result) {
          // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
            console.log("日记创建成功, objectId:"+result.id);
        },
        error: function(result, error) {
          // 添加失败
          console.log('创建日记失败');

        }
      });
  },
  onLoad: function () {
    console.log('onLoad')
    // this值在方法的函数内指向Page，一般用that变量首先捕获this added by lsw
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        contacts:contactsArray[1]
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
