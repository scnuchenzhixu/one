// pages/idea/idea.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "", //填写的名字
    phone: "", //填写的电话
    company: "", //填写的公司信息
    email: "", //填写的邮箱信息
    detailContent: "", //填写的详细描述内容
    path: '', //上传的文件目录路径
    filename: '', //上传的文件名字
    taskNumber: '',//任务码
  },
  //输入名字
  inputName: function (e) {
    //console.log(e.detail.value)
    let name = e.detail.value
    this.setData({
      name: name
    })
    console.log(this.data.name)
  },
  //输入电话信息
  inputPhone: function (e) {
    //console.log(e.detail.value)
    let phone = e.detail.value
    this.setData({
      phone: phone
    })
    console.log(this.data.phone)
  },
  //输入公司信息
  inputCompany: function (e) {
    //console.log(e.detail.value)
    let company = e.detail.value
    this.setData({
      company: company
    })
    console.log(this.data.company)
  },
  //输入邮箱信息
  inputEmail: function (e) {
    //console.log(e.detail.value)
    let email = e.detail.value
    this.setData({
      email: email
    })
    console.log(this.data.email)
  },
  //输入描述详细信息
  inputDetail: function (e) {
    //console.log(e.detail.value)
    let detail = e.detail.value
    this.setData({
      detail: detail
    })
    console.log(this.data.detail)
  },
  //上传文件
  uploadFile: function () {
    let that = this
    wx.chooseMessageFile({
      count: 1, //能选择文件的数量
      type: 'file', //能选择文件的类型,我这里只允许上传文件.还有视频,图片,或者都可以
      success(res) {
        console.log(res)
        var size = res.tempFiles[0].size;
        var filename = res.tempFiles[0].name;
        var newfilename = filename + "";

        let ifTrue = !(newfilename.indexOf(".pdf") == -1)|| !(newfilename.indexOf(".doc") == -1)|| !(newfilename.indexOf(".dock") == -1) //判断文件类型是否为doc,dock,pdf
        console.log(ifTrue)
        if (size <= 10485760 && ifTrue) { //限制了文件的大小和具体文件类型
          that.setData({
            path: res.tempFiles[0].path, //将文件的路径保存在页面的变量上,方便 wx.uploadFile调用
            filename: filename //渲染到wxml方便用户知道自己选择了什么文件
          })
        } else {
          wx.showToast({
            title: '文件大小不能超过4MB,格式必须为doc,dock,pdf！',
            icon: "none",
            duration: 2000,
            mask: true
          })
        }
      }
    })
  },
  //删掉上传的文件
  deleteFile() {
    this.setData({
      path: '', //上传的文件目录路径
      filename: '' //上传的文件名字
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log("options有值")
      this.setData({
        taskNumber: options.taskNumber
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