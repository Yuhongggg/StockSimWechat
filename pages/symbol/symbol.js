var backend = require('../../utils/backend.js')

Page({
  data: {
    IP: '18.220.245.253:8080',
    searchText: "MU",
    companies: []
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  searchTextInput: function (e) {
    this.setData({
      searchText: e.detail.value
    })
  },
  searchSymbol: function (e) {
    console.log(this.data.text);
    var that = this;
    var searchText = this.data.searchText;
    var url = backend.buildSearchSymbolRequestUrl(searchText);
    wx.request({
      url: url,
      method: "GET",
      success: function (res) {
        that.setData({
          companies: res.data.companies
        })
      }
    })
  },
  showPriceTimeline: function(event) {
    var symbolToShow = event.currentTarget.dataset.symbol;
    wx.navigateTo({
      url: '../pricetimeline/pricetimeline?symbol=' + symbolToShow,
    })
  }
})
