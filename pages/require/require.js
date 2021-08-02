// pages/require/require.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageChoose: false, //是否已经添加图片
    imgsrc: "", //图片链接
    fileName: "", //文件名字
    filePath: "", //文件路径
    require_name: "", //需求名字
    require_task: "", //任务介绍
    require_money: "", //任务金额=
  },
  //输入需求名称
  inputName(e){
    let name = e.detail.value
    this.setData({
      require_name: name
    })
  },
  //输入任务详情
  inputTask(e){
    let task = e.detail.value
    this.setData({
      require_task: task
    })
    //console.log(e)
  },
  //输入任务金额
  inputMoney(e){
    let money = e.detail.value
    this.setData({
      require_money: money
    })
  },
  //上传图片
  uploadImg() {
    let that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        that.setData({
          imgsrc: res.tempFilePaths[0],
          imageChoose: true
        })
        console.log("选择图片成功", res)
      },
      fail(res) {
        console.log("选择图片失败", res)
      }
    })
  },
  //删除已经选择的图片
  cancelImg() {
    this.setData({
      imageChoose: false,
      imgsrc: ""
    })
  },
  //图片预览
  preview(){
    let urls = []
    urls.push(this.data.imgsrc)
    if(this.data.imgsrc==""){
      wx.showToast({
        title: '当前并没有图片',
        icon: 'none'
      })
    } else{
      wx.previewImage({
        current: this.data.imgsrc, // 当前显示图片的http链接
        urls: urls // 需要预览的图片http链接列表
      })
    }
  },
  //选择文件上传
  uploadChooseFile() {
    var that = this
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success(res) {
        console.log(res)
        var filename = res.tempFiles[0].name
        var path = res.tempFiles[0].path
        //console.info(filename);
        that.setData({
          filename: filename
        })
      }
    })
  },
  //点击发布按钮
  submit(){
    console.log(this.data.require_name,this.data.require_task,this.data.require_money)
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