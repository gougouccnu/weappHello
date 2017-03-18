//index.js
//获取应用实例
var app = getApp();
//是否全选
var ifCheckedAll = true;
var orderList;

Page({
  data: {
    motto: 'Hello World!!',
    userInfo: {},
    ifCheckedAll: true,
    orderList: []
  },
  //事件处理函数
  checkedAll: function() {
    ifCheckedAll = ! ifCheckedAll;
    this.setData({
      ifCheckedAll: ifCheckedAll
    })
  },
  orderItemCheck: function(event) {
    var checkItemId = parseInt(event.target.id);
    console.log(checkItemId);
    orderList[checkItemId]["checked"] = ! orderList[checkItemId]["checked"];
    this.setData({
      orderList: orderList
    })
  },
  onLoad: function () {
    console.log('onLoad')
    orderList = [
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
