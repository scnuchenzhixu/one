// app.js
App({
  onLaunch() {
    //测试async
    // (async () => {
    //   const p = await new Promise(resolve => {
    //     setTimeout(() => resolve("hello async/await"), 1000);
    //   });
    //   console.log(p);
    // })();
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    //获取头部定义高度(手机刘海的高度)
    const statusBarHeight = wx.getSystemInfoSync()['statusBarHeight']
    wx.setStorageSync('statusBarHeight', statusBarHeight)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        //console.log(res)
        // wx.request({
        //   url: 'http://59.110.237.12:8000/getcarousel/',
        //   data: {
        //     // code: res.code
        //   },
        //   success: function (res) {
        //     console.log("成功", res)
        //   },
        //   fail: function (res) {
        //     console.log("失败", res)
        //   }
        // })
      }
    })
  },
  globalData: {
    userInfo: null,
  }
})