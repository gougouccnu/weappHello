//index.js
//获取应用实例
var app = getApp();
//是否全选
var ifCheckedAll = true;
var orderList;
var totalPrice;

function caculateTotalPrice(orderList) {
  var totalPrice = 0;
    var i, item;
    for (i=0; i < orderList.length; i++) {
      item = orderList[i];
      if (item["checked"]) {
        totalPrice += item["price"] * item["amount"];
        console.log(totalPrice);
      }
    }
    return totalPrice;
}

function setAllItemChecked(orderList) {
  var i, item;
    for (i=0; i < orderList.length; i++) {
      item = orderList[i];
      if (!item["checked"]) {
        item["checked"] = true;
      }
    }
}

Page({
  data: {
    motto: 'Hello World!!',
    userInfo: {},
    ifCheckedAll: true,
    orderList: [],
    totalPrice: 100
  },
  //事件处理函数
  checkedAll: function() {
    ifCheckedAll = ! ifCheckedAll;
    if (ifCheckedAll) {
      setAllItemChecked(orderList);
      totalPrice = caculateTotalPrice(orderList);
    } else {
      totalPrice = 0;
    }
    this.setData({
      ifCheckedAll: ifCheckedAll,
      totalPrice: totalPrice
    })
  },
  orderItemCheck: function(event) {
    var checkItemId = parseInt(event.target.id);
    console.log(checkItemId);
    orderList[checkItemId]["checked"] = ! orderList[checkItemId]["checked"];
    totalPrice = caculateTotalPrice(orderList);
    this.setData({
      orderList: orderList,
      totalPrice: totalPrice
    })
  },
  submit: function() {
    //var orderList = wx.getStorageSync('orderList');
    //console.log(orderList);
    wx.navigateTo({
      url: '../buyone/buyone'
    })
  },
  onLoad: function() {
    console.log('onLoad')
    orderList = wx.getStorageSync('orderList');
    this.setData({
      orderList: orderList
    })
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
