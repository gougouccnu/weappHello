//logs.js
var util = require('../../utils/util.js')
var selectedItemIndex
Page({
  data: {
    logs: [],
    selectedItemPicUrl: "../../resources/pic/2.jpg",
    itemTitle: "香辣烤兔，拍后请联系卖家修改邮费",
    itemPrice: "57元",
    itemHaulage: "运费：23元"
  },
  haulage: function() {
    wx.navigateTo({
      url: '../haulage/haulage'
    })
  },
  add: function() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  buy: function() {
    wx.navigateTo({
      url: '../buyone/buyone'
    })
  }, 
  onLoad: function () {
    selectedItemIndex = wx.getStorageSync('selectedItemIndex')
    this.setData({
      // log数组用map函数转化格式
      //console.log(wx.getStorageSync('logs')) // added by lsw
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      }),
      selectedItemPicUrl: "../../resources/pic/" + selectedItemIndex + ".jpg"
    })
  }   
})
