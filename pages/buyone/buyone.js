//获取应用实例
var Zan = require('../../zanui-weapp/dist/index');

var Bmob = require('../../utils/bmob.js');
var app = getApp();
var contactsArray = [{"name": 'lishaowei', "phone": '18926418053',
               "address": 'wuhan city'},
            {"name": 'jinli', "phone": '18926418053',
               "address": 'wuhan city'}];
var orderList = [];

Page(Object.assign({}, Zan.Quantity, {
  data: {
    contacts: {"name": 'lishaowei', "phone": '18926418053',
               "address": 'wuhan city'},
    userInfo: {},
    orderList: [],
    quantity1: {
      quantity: 10,
      min: 1,
      max: 20
    },
    quantity2: {
      quantity: 1,
      min: 1,
      max: 1
    },
    quantity3: {
      quantity: 10,
      min: 1,
      max: 20
    }
  },
  handleZanQuantityChange(e) {
    var componentId = e.componentId;
    var quantity = e.quantity;
    console.log('quantity clicked');
    console.log(e);
    this.setData({
      [`${componentId}.quantity`]: quantity
    });
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
  onLoad: function (options) {
    console.log(options)
    if (options.buyone == 'true') {
      orderList = [
      {
        id: 0,
        name: '麻辣味',
        checked: true,
        price: 67,
        amount: 1,
        pictureUrl: '../../resources/pic/2.jpg'
      }
    ];
    } else {
      orderList = wx.getStorageSync('orderList');
    }
    // this值在方法的函数内指向Page，一般用that变量首先捕获this added by lsw
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        contacts:contactsArray[1],
        orderList: orderList
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
}))
