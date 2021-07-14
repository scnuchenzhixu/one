// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    normalShow: true, //选中普通类型
    qiyeShow: false, //选中企业类型
    list: [1,2,3,4,5],
    showList:[], //展示列表,
    normalList:[],
  },
  //选中普通类型
  setNormal(){
    this.setData({
      normalShow: true,
      qiyeShow: false
    })
  },
  //选中企业类型
  setQiye(){
    this.setData({
      normalShow: false,
      qiyeShow: true
    })
  },
  //跳转至详情界面
  toDetail(){
    wx.navigateTo({
      url: '/pages/squareDetail/squareDetail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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