// pages/squareDetail/squareDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskNumber: "123456"
  },
  //复制任务码
  copyTask() {
    let that = this
    wx.setClipboardData({
      data: that.data.taskNumber,
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
  //跳转到提交构思界面
  toDetail(){
    let that = this
    wx.navigateTo({
      url: '/pages/idea/idea?taskNumber='+that.data.taskNumber,
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