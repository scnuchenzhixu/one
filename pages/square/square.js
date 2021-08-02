const requset = require('../../utils/promisify.js') //引入外局变量
Page({

  /**
   * 页面的初始数据
   */
  data: {
    normalShow: true, //选中普通类型
    qiyeShow: false, //选中企业类型
    showList: [], //展示列表,
    normalList: [{
        img: "http://59.110.237.12:8009/media/taskimages/1.jfif",
        title: "淋浴感应器鼓励用户节约用水",
        author: "作者1",
        time: "2021-7-14",
        price: "500"
      },
      {
        img: "http://59.110.237.12:8009/media/taskimages/2.jfif",
        title: "利用太阳能路灯为电动汽车充电",
        author: "作者2",
        time: "2021-7-14",
        price: "800"
      },
      {
        img: "http://59.110.237.12:8009/media/taskimages/3.jfif",
        title: "公共垃圾箱的附件",
        author: "作者3",
        time: "2021-7-14",
        price: "666"
      },
    ], //普通查看列表
    qiyeList: [{
        img: "http://59.110.237.12:8009/media/taskimages/4.jfif",
        title: "生物燃料生产零碳玻璃",
        author: "小明",
        time: "2021-7-14",
        price: "2000"
      },
      {
        img: "http://59.110.237.12:8005/media/images/untitled2.png",
        title: "Leverice协作平台",
        author: "小红",
        time: "2021-7-14",
        price: "700"
      },
      {
        img: "http://59.110.237.12:8009/media/images/untitled1.png",
        title: "可移动床和办公桌设置",
        author: "小花",
        time: "2021-7-14",
        price: "1000"
      },
      {
        img: "http://59.110.237.12:8009/media/images/untitled.png",
        title: "食品级原料制成的蜡笔",
        author: "小猪",
        time: "2021-7-14",
        price: "999"
      },
    ], //企业查看列表
  },
  //图片加载失败的时候
  imageFail(e) {
    //得到传过来的参数
    let name = e.currentTarget.dataset.name
    let index = e.currentTarget.dataset.index
    console.log("图片加载失败", name, index)
    //设置修改替换掉原来的图片
    let img = name + '[' + index + '].img'
    this.setData({
      [img]: '/image/fail.png'
    })
  },
  //选中普通类型
  setNormal() {
    this.setData({
      normalShow: true,
      qiyeShow: false,
      showList: this.data.normalList
    })
  },
  //选中企业类型
  setQiye() {
    this.setData({
      normalShow: false,
      qiyeShow: true,
      showList: this.data.qiyeList
    })
  },
  //跳转至详情界面
  toDetail(e) {
    let index = e.currentTarget.dataset.index
    let list = this.data.showList[index]
    let data = {
      id: list.id
    }
    console.log("id",data)
    let header = {
      "Content-Type": "application/x-www-form-urlencoded" //POST方式是这个
    }
    console.log(list)
    let postTask = requset.requestSync('http://59.110.237.12:8009/taskdetail/', data, header, 'POST')
    postTask.then(res => {
      console.log("postTask success", res)
      wx.navigateTo({
        url: '/pages/squareDetail/squareDetail?list=' + JSON.stringify(list),
      })
    }).catch(res => {
      wx.showToast({
        title: '数据获取失败',
        icon: 'none'
      })
      console.log("postTask fail", res)
    })
  },
  //获取任务列表
  async getTaskList() {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    try {
      let getTask = await requset.requestSync('http://59.110.237.12:8009/gettasklist/')
      let data = getTask.data
      this.setData({
        normalList: data.gentaskdata,
        qiyeList: data.contaskdata
      })
      if (this.data.normalShow) {
        this.setData({
          showList: this.data.normalList
        })
      } else {
        this.setData({
          showList: this.data.qiyelList
        })
      }
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
      console.log("创意广场数据获取成功", getTask)
    } catch (err) {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
      console.log("创意广场数据获取失败",err)
    }
  },
  //跳转至查看任务界面
  toTask(){
      wx.navigateTo({
        url: '/pages/task/task',
      })
  },
  //跳转至发布需求界面
  toRequire(){
    wx.navigateTo({
      url: '/pages/require/require',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTaskList()
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
    this.getTaskList()
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