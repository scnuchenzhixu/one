// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: 0, //刘海高度
    plate: [{
      imgSelect: "/image/article_select.png",
      imgNone: "/image/article_none.png",
      value: "文章"
    }, {
      imgSelect: "/image/demand_select.png",
      imgNone: "/image/demand_none.png",
      value: "需求"
    }, {
      imgSelect: "/image/application_select.png",
      imgNone: "/image/application_none.png",
      value: "应用"
    }, ], //文章应用等板块
    plateIndex: 0, //plate选中索引
    about: ["相关度", "时间", "阅读量"], //相关内容板块
    aboutIndex: 0, //about选中索引
  },
  //返回上一个界面
  back() {
    wx.navigateBack({
      delta: 1,
    })
  },
  //选择板块
  plateIndex(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      plateIndex: index
    })
  },
  //选择文章条件
  aboutIndex(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      aboutIndex: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let barHeight = wx.getStorageSync("statusBarHeight")
    this.setData({
      statusBarHeight: barHeight
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})