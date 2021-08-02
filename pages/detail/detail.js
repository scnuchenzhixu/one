const requset = require('../../utils/promisify.js') //引入外局变量
Page({

  /**
   * 页面的初始数据
   */
  data: {
    copyIs: true, //是否自动复制创新点
    title: "", //文章标题
    content: "", //文章内容
    message: [], //推荐文章
    showPoint: false, //是否显示创新点
    dirArray: ["关于视频实现","关于技术实现","关于内容实现","关于资料收集","关于创意实现"], //创新方向选择、
    dirIndex: 0, //创新方向下索引
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
  //跳转到分析报告的界面
  toReport(){
    wx.navigateTo({
      url: '/pages/report/report',
    })
  },
  //跳转到推荐文章的详细界面
  toDetail(e) {
    let title = e.currentTarget.dataset.title //文章标题
    let content = "" //文章内容
    let id = e.currentTarget.dataset.id //文章id
    //使用封装好的方法
    let postData = {
      id: id
    }
    let header = {
      "Content-Type": "application/x-www-form-urlencoded" //POST方式是这个
    }
    console.log(title, id, postData)
    let postId = requset.requestSync('http://59.110.237.12:8009/clickarti/', postData, header, 'POST')
    postId.then(res => {
      content = res.data.data.content
      let message = res.data.simarti //推荐文章
      console.log("post success", res)
      wx.navigateTo({
        url: '/pages/detail/detail?title=' + title + '&content=' + content+'&message='+JSON.stringify(message),
      })
    }).catch(res => {
      console.log("post fail", res)
      wx.showToast({
        title: '数据获取失败',
        icon: 'none'
      })
    })
  },
  //是否显示创新点
  showPoint(){
    this.setData({
      showPoint: !this.data.showPoint
    })
  },
  //picker选择事件
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dirIndex: e.detail.value
    })
  },
  //长按创新点选择操作
  choice(){
    wx.showModal({
      title: '提示',
      content: '请选择操作',
      confirmText: '前往推导',
      cancelText: '分析想法',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      title: options.title,
      content: options.content,
      message: JSON.parse(options.message)
    })
    console.log(this.data.message)
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