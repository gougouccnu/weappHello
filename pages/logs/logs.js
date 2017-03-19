//logs.js
var Zan = require('../../zanui-weapp/dist/index');
var util = require('../../utils/util.js')
var app = getApp();
var selectedItemId;

Page(Object.assign({}, Zan.Toast,{
  data: {
    logs: [],
    itemsToBuy: [],
    selectedItemPicUrl: "../../resources/pic/0.jpg",
    itemTitle: "香辣烤兔，拍后请联系卖家修改邮费",
    itemPrice: "57元",
    itemHaulage: "运费：23元"
  },
  showToast() {
    this.showZanToast('已加入购物车');
  },
  haulage: function() {
    wx.navigateTo({
      url: '../haulage/haulage'
    })
  },
  add: function() {
    var orderList = wx.getStorageSync('orderList') || [];
    orderList.push(app.globalItemArray[parseInt(selectedItemId)]);
    wx.setStorageSync('orderList', orderList);
    console.log(wx.getStorageSync('orderList'));
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
      duration: 2000
    })
  },
  buy: function() {
    wx.navigateTo({
      url: '../buyone/buyone?buyone=true'
    })
  }, 
  onLoad: function (options) {
    selectedItemId = app.requestDetailid;
    this.setData({
      selectedItemPicUrl: "../../resources/pic/" + selectedItemId + ".jpg"
    })
    console.log(selectedItemId);
    console.log('restore clicked id')
    console.log(app.requestDetailid)
  }   
}))
