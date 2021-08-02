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
    taskNumber: '', //任务码
  },
  //输入名字
  inputName: function (e) {
    //console.log(e.detail.value)
    let name = e.detail.value
    this.setData({
      name: name
    })
    //console.log(this.data.name)
  },
  //输入名字是否合法
  isName() {
    if (this.data.name.length > 8) {
      wx.showToast({
        title: '名字字符不能超过8个长度',
        icon: 'none',
        duration: 1500
      })
      // this.setData({
      //   name: ""
      // })
    }
  },
  //输入电话信息
  inputPhone: function (e) {
    //console.log(e.detail.value)
    let phone = e.detail.value
    this.setData({
      phone: phone
    })
    //console.log(this.data.phone)
  },
  //判断输入电话号码是否合理
  isPhone() {
    if (!this.isEmpty(this.data.phone)) {
      let phone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
      if (!phone.test(this.data.phone)) {
        wx.showToast({
          title: '请输入合法的手机号码',
          icon: 'none',
          duration: 1500
        })
        // this.setData({
        //   phone: ""
        // })
      }
    }
  },
  //输入公司信息
  inputCompany: function (e) {
    //console.log(e.detail.value)
    let company = e.detail.value
    this.setData({
      company: company
    })
    //console.log(this.data.company)
  },
  //输入邮箱信息
  inputEmail: function (e) {
    //console.log(e.detail.value)
    let email = e.detail.value
    this.setData({
      email: email
    })
    //console.log(this.data.email)
  },
  //判断输入的邮箱信息是否合理
  isEmail() {
    var email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    if(!this.isEmpty(this.data.email)){
      if (!email.test(this.data.email)) {
        wx.showToast({
          title: '请输入正确的邮箱',
          icon: 'none',
          duration: 1500
        })
       }
    }
    
  },
  //输入描述详细信息
  inputDetail: function (e) {
    //console.log(e.detail.value)
    let detail = e.detail.value
    this.setData({
      detailContent: detail
    })
    //console.log(this.data.detail)
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

        let ifTrue = !(newfilename.indexOf(".pdf") == -1) || !(newfilename.indexOf(".doc") == -1) || !(newfilename.indexOf(".dock") == -1) //判断文件类型是否为doc,dock,pdf
        console.log(ifTrue)
        if (size <= 10485760 && ifTrue) { //限制了文件的大小和具体文件类型
          that.setData({
            path: res.tempFiles[0].path, //将文件的路径保存在页面的变量上,方便 wx.uploadFile调用
            filename: filename //渲染到wxml方便用户知道自己选择了什么文件
          })
        } else {
          wx.showToast({
            title: '文件大小不能超过10MB,格式必须为doc,dock,pdf！',
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
  //判断字符是否为空的方法
  isEmpty(obj) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
      return true;
    } else {
      return false;
    }
  },
  //提交
  submit() {
    let that = this
    console.log(this.data.name, this.data.phone, this.data.company, this.data.detailContent)
    let flag = this.isEmpty(this.data.name) || this.isEmpty(this.data.phone) || this.isEmpty(this.data.company) || this.isEmpty(this.data.detailContent)
    //console.log(flag)
    if (flag) {
      wx.showToast({
        title: '请检查内容是否全部填写',
        icon: 'none'
      })
    } else {
      console.log("内容已全部填写")
      wx.request({
        url: 'http://59.110.237.12:8009/getpostconce/',
        data: {
          name: that.data.name,
          phone: that.data.phone,
          company: that.data.company,
          email: that.data.email,
          concedescribe: that.data.detailContent,
          file: that.data.path
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded" //POST方式是这个
          },
        method: 'POST',
        success: function (res) {
          console.log("success", res)
        },
        fail: function (res) {
          console.log("fail", res)
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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