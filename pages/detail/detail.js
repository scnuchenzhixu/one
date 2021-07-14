// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    copyIs: true, //是否自动复制创新点
    title: "", //文章标题
    content: "", //文章内容
  },
  //是否自动复制创新点
  copy(){
    //console.log("点击了")
    this.setData({
      copyIs: !this.data.copyIs
    })
  },
  //跳转到提交构思界面
  toIdea(){
    wx.navigateTo({
      url: '/pages/idea/idea',
    })
  },
  //跳转到推荐文章的详细界面
  toDetail(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      title: options.title,
      content: options.content
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