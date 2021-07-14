Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectShow: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['中学生', '大学生', '产品经理'], //下拉列表的数据
    index: 0, //选择的下拉列表下标
    lunboData: ["https://i.loli.net/2021/07/06/RdVul3w8ZamKEBr.png",
      "https://i.loli.net/2021/07/06/BnWr2AhX5RCEKav.png",
      "https://i.loli.net/2021/07/06/o3mRFPti8pVYGfw.png"
    ], //轮播图
    articleList: [], //文章列表
    colorList: ["#DB7093","#8A2BE2","#1E90FF","#008B8B","#FFD700","#FFA500","#00FFFF","	#40E0D0"], //颜色列表
    swiperIndex: 0, //轮播图当下索引值
    theme: [{
      statu: false,
      name: "主题1"
    }, {
      statu: false,
      name: "主题2"
    }, {
      statu: false,
      name: "主题3"
    }], //主题
    technology: [{
      statu: false,
      name: "数据库"
    }, {
      statu: false,
      name: "物联网"
    }, {
      statu: false,
      name: "人工智能"
    }], //技术
    themeShow: 0, //主题那一栏是否展开
    techShow: 0, //技术那一栏是否展开
    multiHeight: "", //分栏区高度
    sortData: ["默认", "升序排序", "降序排序"], //排序条件
    sortIndex: 0, //排序条件索引
    sortShow: false, //是否显示排序条件
    userData: ["所有", "会员", "普通用户"], //用户筛选条件
    userIndex: 0, //用户筛选索引
    userShow: false, //是否显示用户筛选条件
    condition: [], //用户筛选的条件组
  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      selectShow: !this.data.selectShow
    });
    console.log(this.data.selectShow)
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    this.setData({
      index: Index
    });
  },
  //设置轮播索引
  clickChange(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      swiperIndex: index
    })
  },
  //轮播图改变对应时间
  getIndex(e) {
    let index = e.detail.current
    this.setData({
      swiperIndex: index
    })
    //console.log(index)
  },
  //减少轮播图索引
  minusIndex() {
    //进行减法的时候注意index不能减成负数
    if (this.data.swiperIndex == 0) {
      var index = (this.data.swiperIndex + this.data.lunboData.length - 1) % this.data.lunboData.length
    } else {
      var index = (this.data.swiperIndex - 1) % this.data.lunboData.length
    }
    console.log(index)
    this.setData({
      swiperIndex: index
    })
  },
  //增加轮播图索引
  addIndex() {
    let index = (this.data.swiperIndex + 1) % this.data.lunboData.length
    console.log(index)
    this.setData({
      swiperIndex: index
    })
  },
  //主题栏是否展开
  themeShow() {
    let height = 170 + !this.data.themeShow * this.data.theme.length * 60 + this.data.techShow * this.data.technology.length * 60
    console.log(height)
    this.setData({
      themeShow: !this.data.themeShow,
      multiHeight: height
    })
  },
  //技术栏是否展开
  techShow() {
    let height = 170 + this.data.themeShow * this.data.theme.length * 60 + !this.data.techShow * this.data.technology.length * 60
    console.log(height)
    this.setData({
      techShow: !this.data.techShow,
      multiHeight: height
    })
  },
  //设置主题选择
  setTheme(e) {
    let index = e.currentTarget.dataset.index
    let statu = "theme[" + index + "].statu"
    this.setData({
      [statu]: !this.data.theme[index].statu
    })
    console.log(index, this.data.theme[index].statu)
  },
  //设置技术选择
  setTech(e) {
    let index = e.currentTarget.dataset.index
    let statu = "technology[" + index + "].statu"
    this.setData({
      [statu]: !this.data.technology[index].statu
    })
    console.log(index, this.data.technology[index].statu)
  },
  //下拉排序选择
  chooseSort() {
    if (this.data.userShow) { //上一个选择框还在
      this.setData({
        userShow: !this.data.userShow
      })
    }
    this.setData({
      sortShow: !this.data.sortShow
    })
    console.log(this.data.sortShow)
  },
  //下拉用户选择
  chooseUser() {
    if (this.data.sortShow) { //上一个选择框还在
      this.setData({
        sortShow: !this.data.sortShow
      })
    }
    this.setData({
      userShow: !this.data.userShow
    })
    console.log(this.data.userShow)
  },
  //设置排序选择索引
  getSort(e) {
    let index = e.currentTarget.dataset.index
    console.log(index)
    this.setData({
      sortIndex: index
    })
  },
  //设置用户选择索引
  getUser(e) {
    let index = e.currentTarget.dataset.index
    console.log(index)
    this.setData({
      userIndex: index
    })
  },
  //跳转到提交构思界面
  toIdea() {
    wx.navigateTo({
      url: '/pages/idea/idea',
    })
  },
  //跳转到详细文章页面
  toDetail(e) {
    let title = e.currentTarget.dataset.title
    let content = e.currentTarget.dataset.content
    //console.log(title,content)
    wx.navigateTo({
      url: '/pages/detail/detail?title='+title+'&content='+content,
    })
  },
  //根据条件进行筛选
  conditionSelect() {
    let condition = []
    let theme = this.data.theme.filter(element => {
      if (element.statu == true) {
        return true
      } else {
        return false
      }
    })
    theme = theme.map(value => {
      return value.name
    })
    let technology = this.data.technology.filter(element => {
      if (element.statu == true) {
        return true
      } else {
        return false
      }
    })
    technology = technology.map(value => {
      return value.name
    })
    condition.push(this.data.sortData[this.data.sortIndex], this.data.userData[this.data.userIndex], theme, technology)
    this.setData({
      condition: condition
    })
    console.log(this.data.condition)
  },
  //从后端获取数据
  getMessage() {
    let that = this
    that.setData({
      lunboData: wx.getStorageSync('lunboData'),
      articleList: wx.getStorageSync('articleList'),
    })
    console.log(that.data.lunboData)
    //获取轮播图列表
    wx.request({
      url: 'http://59.110.237.12:8000/getcarousel/',
      data: {},
      success: function (res) {
        let data = res.data.data
        //console.log(data == that.data.lunboData)
        that.setData({
          lunboData: data
        })
        wx.setStorageSync('lunboData', that.data.lunboData)
        console.log("获取轮播图数据成功", data)
      },
      fail: function (res) {
        console.log("获取轮播图数据失败", res)
      }
    })
    //获取用户列表
    wx.request({
      url: 'http://59.110.237.12:8000/getuserlist/',
      success(res) {
        let data = res.data.data
        that.setData({
          articleList: data
        })
        console.log("获取用户列表成功", data)
      },
      fail(res) {
        console.log("获取用户列表失败", res)
      }
    })
    //获取文章列表
    wx.request({
      url: 'http://59.110.237.12:8000/getarticlelist/',
      data: {},
      success(res) {
        let data = res.data.data
        that.setData({
          articleList: data
        })
        wx.setStorageSync('articleList', that.data.articleList)
        console.log("获取文章列表成功", data)
      },
      fail(res) {
        console.log("获取文章列表失败", res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMessage()

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