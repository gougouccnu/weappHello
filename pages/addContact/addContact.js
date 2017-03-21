
var area, city, street, cityRange, streetRange;

Page({
  data: {
    area: [],
    areaIndex: 0,
    city: [],
    cityIndex: 0,
    cityRange: ['选择城市'],
    street: [['选择地区'], [['平谷区'], ['东城区'], ['西城区']]],
    streetIndex: 0,
    streetRange: ['选择地区']
  },

  onLoad: function () {
    area = ['选择省份', '北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台湾省', '香港特别行政区', '澳门特别行政区'];
    city = [['选择城市'], ['北京市'], ['天津市']];
    this.setData({
      area: area,
      city: city
    })
  },

  onShow: function () {
  },

  onAreaChange: function (e) {
    console.log('area changed')
    console.log(city)
    //console.log(e)
    //console.log(city[e.detail.value])
    this.setData({
      areaIndex: 1
    });
  },

  onCityChange: function (e) {
    console.log(e)
    this.setData({
      cityIndex: e.detail.value,
      streetRange: street[e.detail.value]
    });
  },

  onStreetChange: function (e) {
    console.log(e)
    this.setData({
      streetIndex: e.detail.value
    });
  },

  saveContact: function() {
    wx.navigateTo({
      url: '../contacts/contacts'
    })
  }
});
