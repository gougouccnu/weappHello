//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    selectedItemPicUrl: "../../resources/pic/2.jpg"
  },
  onLoad: function () {
    this.setData({
      // log数组用map函数转化格式
      //console.log(wx.getStorageSync('logs')) // added by lsw
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      }),
      selectedItemPicUrl: "../../resources/pic/" + wx.getStorageSync('selectedItemIndex') + ".jpg"
    })
  },
  onShow: function() {


  }      
})
