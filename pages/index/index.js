const requset = require('../../utils/promisify.js') //引入外局变量
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selectShow: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['发明人', '专利工程师', '高校学生'], //下拉列表的数据
    index: 0, //选择的下拉列表下标
    lunboData: [], //轮播图
    articleList: [], //文章列表
    pages: 1, //文章页码
    idlist: [], //当前文章id列表

    scrollTop: 0, //滚动条位置
    colorList: ["#DB7093", "#8A2BE2", "#1E90FF", "#008B8B", "#FFD700", "#FFA500", "#00FFFF", "	#40E0D0"], //颜色列表
    swiperIndex: 0, //轮播图当下索引值
    theme: [{
      statu: false,
      name: "循环经济",
      number: "th0001"
    }, {
      statu: false,
      name: "气候变化",
      number: "th0002"
    }, {
      statu: false,
      name: "冠状病毒",
      number: "th0003"
    }, {
      statu: false,
      name: "数据隐私",
      number: "th0004"
    }, {
      statu: false,
      name: "多样性与社交",
      number: "th0005"
    }, {
      statu: false,
      name: "工作的未来",
      number: "th0006"
    }, {
      statu: false,
      name: "游戏化",
      number: "th0007"
    }, {
      statu: false,
      name: "沉浸式技术",
      number: "th0008"
    }, {
      statu: false,
      name: "个性化",
      number: "th0009"
    }, {
      statu: false,
      name: "共享访问经济",
      number: "th0010"
    }, {
      statu: false,
      name: "智慧城市",
      number: "th0011"
    }, {
      statu: false,
      name: "社交媒体",
      number: "th0012"
    }, {
      statu: false,
      name: "太空旅行",
      number: "th0013"
    }, {
      statu: false,
      name: "透明度",
      number: "th0014"
    }, {
      statu: false,
      name: "用户生成内容",
      number: "th0015"
    }, {
      statu: false,
      name: "可穿戴设备",
      number: "th0016"
    }, {
      statu: false,
      name: "无线接入",
      number: "th0017"
    }], //主题
    technology: [{
      statu: false,
      name: "人工智能",
      number: "te0001"
    }, {
      statu: false,
      name: "大数据",
      number: "te0002"
    }, {
      statu: false,
      name: "3D打印",
      number: "te0003"
    }, {
      statu: false,
      name: "3D成像",
      number: "te0004"
    }, {
      statu: false,
      name: "航天航空",
      number: "te0005"
    }, {
      statu: false,
      name: "应用程序",
      number: "te0006"
    }, {
      statu: false,
      name: "增强现实",
      number: "te0007"
    }, {
      statu: false,
      name: "自动化",
      number: "te0008"
    }, {
      statu: false,
      name: "生物技术",
      number: "te0009"
    }, {
      statu: false,
      name: "生物识别",
      number: "te0010"
    }, {
      statu: false,
      name: "区块链",
      number: "te0011"
    }, {
      statu: false,
      name: "聊天机器人",
      number: "te0012"
    }, {
      statu: false,
      name: "云计算",
      number: "te0013"
    }, {
      statu: false,
      name: "无人机",
      number: "te0014"
    }, {
      statu: false,
      name: "地理空间",
      number: "te0015"
    }, {
      statu: false,
      name: "触觉",
      number: "te0016"
    }, {
      statu: false,
      name: "物联网",
      number: "te0017"
    }, {
      statu: false,
      name: "材料科学",
      number: "te0018"
    }, {
      statu: false,
      name: "NFC(近场通信)",
      number: "te0019"
    }, {
      statu: false,
      name: "二维码",
      number: "te0020"
    }, {
      statu: false,
      name: "雷达",
      number: "te0021"
    }, {
      statu: false,
      name: "机器人",
      number: "te0022"
    }, {
      statu: false,
      name: "传感器",
      number: "te0023"
    }, {
      statu: false,
      name: "虚拟现实",
      number: "te0024"
    }, ], //技术
    themeShow: 0, //主题那一栏是否展开
    techShow: 0, //技术那一栏是否展开
    multiHeight: "", //分栏区高度
    sortData: [{
      descri: "默认",
      id: null
    }], //排序条件
    getSortData: false, //是否已经获取排序条件数据
    sortIndex: 0, //排序条件索引
    sortShow: 0, //是否显示排序条件
    sortHeight: 0, //排序选择栏高度
    userData: [{
      name: '所有',
      number: '000'
    }, {
      name: '中学生',
      number: '001'
    }, {
      name: '大学生',
      number: '002'
    }, {
      name: '研发工程师',
      number: '003'
    }, {
      name: '产品经理',
      number: '004'
    }, {
      name: '行业专家学者',
      number: '005'
    }, {
      name: '发明爱好者',
      number: '006'
    }, ], //用户选择列表
    userIndex: 0, //用户筛选索引
    userShow: 0, //是否显示用户筛选条件
    userHeighta: 0, //用户选择栏高度
    condition: [], //用户筛选的条件组
    loading: false, //加载等待动画
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
  //轮播图改变对应事件
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
  //清除所有筛选条件
  clearAll() {
    let theme = this.data.theme.map(value => {
      value.statu = false
      return value
    })
    let technology = this.data.technology.map(value => {
      value.statu = false
      return value
    })
    //console.log(theme,technology)
    this.setData({
      theme: theme,
      technology: technology,
      sortIndex: 0,
      userIndex: 0
    })
  },
  //主题栏是否展开
  themeShow() {
    //计算目前状态栏高度
    let height = 170 + !this.data.themeShow * this.data.theme.length * 60 + this.data.techShow * this.data.technology.length * 60
    console.log(height)
    this.setData({
      themeShow: !this.data.themeShow,
      multiHeight: height
    })
  },
  //技术栏是否展开
  techShow() {
    //计算目前选择栏高度
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
        userShow: this.data.userShow == 1 ? 0 : 1
      })
    }
    this.setData({
      sortShow: this.data.sortShow == 1 ? 0 : 1
    })
    //console.log(sortShow,this.userShow)
    //根据数组长度决定选择框高度
    let height = this.data.sortShow * this.data.sortData.length * 50
    console.log(height)
    this.setData({
      sortHeight: height,
      userHeight: 0 //另一个选择框高度为0
    })
  },
  //下拉用户选择
  chooseUser() {
    if (this.data.sortShow) { //上一个选择框还在
      this.setData({
        sortShow: this.data.sortShow == 1 ? 0 : 1
      })
    }
    this.setData({
      userShow: this.data.userShow == 1 ? 0 : 1
    })
    //根据数组长度决定选择框高度
    let height = this.data.userShow * this.data.userData.length * 50
    console.log(height)
    this.setData({
      userHeight: height,
      sortHeight: 0 //另一个选择框为0
    })
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
  //跳转至搜索界面
  toSearch() {
    wx.navigateTo({
      url: '/pages/search/search',
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
        url: '/pages/detail/detail?title=' + title + '&content=' + content + '&message=' + JSON.stringify(message),
      })
    }).catch(res => {
      console.log("post fail", res)
      wx.showToast({
        title: '数据获取失败',
        icon: 'none'
      })
    })
  },
  //根据条件进行筛选
  conditionSelect() {
    wx.showLoading({
      title: '加载中',
    })
    let that = this
    let condition = []
    let theme = this.data.theme.filter(element => {
      if (element.statu == true) {
        return true
      } else {
        return false
      }
    })
    //筛选出来的主题条件
    theme = theme.map(value => {
      return value.number
    })
    let technology = this.data.technology.filter(element => {
      if (element.statu == true) {
        return true
      } else {
        return false
      }
    })
    //筛选出来的科技条件
    technology = technology.map(value => {
      return value.number
    })
    condition = theme.concat(technology)
    this.setData({
      condition: condition
    })
    console.log(that.data.sortData[that.data.sortIndex].descri, that.data.userData[that.data.userIndex].number, this.data.condition)
    //向后端传数据
    wx.request({
      url: 'http://59.110.237.12:8009/getscreencondi/',
      data: {
        sort: that.data.sortData[that.data.sortIndex].descri,
        user: that.data.userData[that.data.userIndex].number,
        condition: that.data.condition
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded" //POST方式是这个
      },
      method: 'POST',
      success: function (res) {
        //console.log("choose success", res)
        let articleList = res.data.data
        let idlist = res.data.idlist
        that.setData({
          articleList: articleList,
          idlist: idlist
        })
        console.log('choose success：文章数据获取成功', res)
        wx.setStorageSync('articleList', that.data.articleList)
        wx.hideLoading()
      },
      fail: function (res) {
        console.log("fail", res)
        wx.hideLoading()
        wx.showToast({
          title: '加载失败',
          icon: 'none'
        })
      }
    })
  },
  //使用Async/await方法处理数据请求
  async Async() {
    this.getStroageData()
    try {
      wx.showNavigationBarLoading() //在标题栏中显示加载
      //获取轮播图数据
      let carousel = await requset.requestSync('http://59.110.237.12:8009/getcarousel/')
      this.setData({
        lunboData: carousel.data.data
      })
      wx.setStorageSync('lunboData', this.data.lunboData)
      console.log('轮播图数据获取成功', carousel)
      //获取文章列表数据
      this.conditionSelect()
      // let article = await requset.requestSync('http://59.110.237.12:8009/getarticlelist/')
      // this.setData({
      //   articleList: article.data.data
      // })
      //获取排序条件数据,仅获取一次
      if (!this.data.getSortData) {
        let sortlist = await requset.requestSync('http://59.110.237.12:8009/getsortlist/')
        let sortData = this.data.sortData.concat(sortlist.data.data)
        this.setData({
          sortData: sortData,
          getSortData: true
        })
        //wx.setStorageSync('articleList', this.data.articleList)
        console.log('排序数据获取成功', sortlist)
      }
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    } catch (err) {
      wx.showToast({
        title: '数据请求出现异常',
        icon: 'none'
      })
      console.log('数据请求出现异常', err)
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }
  },
  //请求分页更多数据
  getpagearti(pagenum) {
    console.log("请求分页中...")
    this.setData({
      loading: true
    })
    let that = this
    let postData = {
      pagenum: pagenum,
      idlist: that.data.idlist
    }
    let header = {
      "Content-Type": "application/x-www-form-urlencoded" //POST方式是这个
    }
    setTimeout( ()=> {
      let postPage = requset.requestSync('http://59.110.237.12:8009/getpagearti/', postData, header, 'POST')
      postPage.then(res => {
        that.setData({
          loading: false
        })
        console.log(res)
      }).catch(res => {
        console.log("getPage fail", res)
        that.setData({
          loading: false
        })
        wx.showToast({
          title: '数据获取失败',
          icon: 'none'
        })
      })
    }, 1000)

  },
  //图片加载失败的时候
  imageFail(e) {
    //得到传过来的参数
    let name = e.currentTarget.dataset.name
    let index = e.currentTarget.dataset.index
    //console.log("图片加载失败", name, index)
    //设置修改替换掉原来的图片
    let imgsrc = name + '[' + index + '].imgsrc'
    this.setData({
      [imgsrc]: '/image/fail.png'
    })
  },
  //请求数据函数
  requestFun() {
    this.getStroageData()
    wx.showNavigationBarLoading() //在标题栏中显示加载
    let that = this
    let carousel = requset.requestSync('http://59.110.237.12:8009/getcarousel/')
    //let useList= requset.requestSync('http://59.110.237.12:8005/getuserlist/')
    let article = requset.requestSync('http://59.110.237.12:8009/getarticlelist/')
    carousel.then(res => {
      let data = res.data.data.slice(2, 8)
      console.log("截取之后的数组", data)
      that.setData({
        lunboData: data
      })
      wx.setStorageSync('lunboData', that.data.lunboData)
      console.log("请求轮播图数据成功", res)
      article.then(res => {
        that.setData({
          articleList: res.data.data
        })
        wx.setStorageSync('articleList', that.data.articleList)
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
        console.log("请求文章列表数据成功", res)
      }).catch(res => {
        console.log("请求文章列表数据失败", res)
      })
    }).catch(res => {
      console.log("请求轮播图数据失败", res)
    })
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
  //从缓存中获取数据
  getStroageData() {
    this.setData({
      lunboData: wx.getStorageSync('lunboData'),
      articleList: wx.getStorageSync('articleList'),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.getMessage()
    //this.requestFun()
    this.Async()
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
    //this.requestFun()

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
    this.Async()
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.articleList.length >= 9) {
      let pages = this.data.pages + 1
      this.setData({
        pages: pages,
      })
      this.getpagearti(pages)
    }
    //console.log(this.data.pages)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})