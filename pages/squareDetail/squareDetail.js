// pages/squareDetail/squareDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskNumber: "123456", //任务码
    list: {}, //详细信息
    acceptTask: false, //是否已经结束任务
  },
  //复制任务码
  copyTask() {
    let that = this
    wx.setClipboardData({
      data: that.data.list.taskcode,
      success(res) {
        console.log("复制成功")
        // wx.getClipboardData({
        //   success(res) {
        //     console.log(res.data) // data
        //     wx.showToast({
        //       title: "任务码已复制",
        //       icon: 'none'
        //     })
        //   }
        // })
      },
      fail(res){
        console.log("复制失败",res)
      }
    })
  },
  //接受任务
  accept(){
    this.setData({
      acceptTask: true
    })
  },
  //图片加载失败时
  imgfail(){
    console.log("图片加载失败")
    let imgsrc = 'list.imgsrc'
    this.setData({
      [imgsrc]: '/image/fail.png'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
    let list = JSON.parse(options.list)
    this.setData({
      list: list
    })
    console.log(this.data.list)
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