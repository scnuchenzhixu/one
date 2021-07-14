// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: 0, //刘海高度
    userInfo: {}, //用户信息
    hasUserInfo: false, //小程序是否获取了用户信息
    showMotal: false, //是否显示修改昵称模态框
    nickName: "", //用户昵称
    tempName: "", //输入框中的昵称
    src: "" ,//头像
  },
  //获取用户信息
  getUserMessage(e) {
    if(this.data.hasUserInfo){ //有信息之后就不需要重复点击登陆了
      return
    }else{
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          wx.setStorageSync('userInfo', res.userInfo)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            nickName: res.userInfo.nickName,
            src: res.userInfo.avatarUrl
          })
        }
      })
    }
  },
   //显示修改昵称模态框
   showMotal(){
    this.setData({
      showMotal: true
    })
  },
  //隐藏修改昵称模态框
  hideMotal(){
    this.setData({
      showMotal: false
    })
  },
  //文本框里面的内容
  inputNickName(e){
    let name = e.detail.value
    this.setData({
      tempName: name
    })
  },
  //点击取消
  cencel(){
    this.setData({
      showMotal: false
    })
  },
  //点击确定
  sure(){
    this.setData({
      showMotal: false,
      nickName: this.data.tempName
    })
  },
  //更改头像
  changeSrc(){
    let that = this
    if(this.data.hasUserInfo){
      wx.chooseImage({
        count: 1,
        success: function(res){
          that.setData({
            src: res.tempFilePaths
          })
          console.log("上传图片成功",res)
        },
        fail: function(res){
          console.log("上传图片失败",res)
        }
      })
    }
    else{
      return
    }
  },
  //跳转到vip界面
  toVip(){
    wx.navigateTo({
      url: '/pages/vip/vip',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let barHeight = wx.getStorageSync("statusBarHeight")
    let userInfo = wx.getStorageSync("userInfo")
    this.setData({
      statusBarHeight: barHeight
    })
    if (userInfo) {
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true,
        nickName: userInfo.nickName,
        src: userInfo.avatarUrl
      })
    }
    console.log(this.data.userInfo)
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