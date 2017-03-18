//logs.js
var Zan = require('../../zanui-weapp/dist/index');
var util = require('../../utils/util.js')
var selectedItemIndex
Page(Object.assign({}, Zan.Toast,{
  data: {
    logs: [],
    itemsToBuy: [],
    selectedItemPicUrl: "../../resources/pic/2.jpg",
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
    var oldItems = wx.getStorageSync('itemsToBuy') || [];
    var newItem = {"id": 0, "name": "麻辣味", "price": 22.5, "count": 2};
    oldItems.push(newItem);
    wx.setStorageSync('itemsToBuy', oldItems);
    console.log(wx.getStorageSync('itemsToBuy'));
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
      duration: 2000
    })
  },
  buy: function() {
    wx.navigateTo({
      url: '../buyone/buyone?buyone=true&id=1'
    })
  }, 
  onLoad: function () {
    var orderList = [
      {
        id: 0,
        name: '麻辣味',
        checked: true,
        price: 67,
        amount: 1,
        pictureUrl: '../../resources/pic/2.jpg'
      }, {
        id: 1,
        name: '香辣味',
        checked: true,
        price: 67,
        amount: 2,
        pictureUrl: '../../resources/pic/1.jpg'
      }
    ];
    // for debug
    wx.setStorageSync('orderList', orderList)

    selectedItemIndex = wx.getStorageSync('selectedItemIndex')
    this.setData({
      // log数组用map函数转化格式
      //console.log(wx.getStorageSync('logs')) // added by lsw
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      }),
      selectedItemPicUrl: "../../resources/pic/" + selectedItemIndex + ".jpg"
    })
    console.log(logs)
  }   
}))
