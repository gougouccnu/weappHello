// pages/contacts/contacts.js

Page({
  data:{
    contactsArray: []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    //var contactsArray = wx.getStorageSync('contactsArray') || [];
    var contactsArray = [{"name": 'lishaowei', "phone": '18926418053',
               "address": 'wuhan city'},
            {"name": 'jinli', "phone": '18926418053',
               "address": 'wuhan city'}];
    this.setData({
        contactsArray: contactsArray
      })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})