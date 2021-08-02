// pages/test/test.js
Page({
  data: {
    arr:[1,2,3],
    Arr: [1,2,3,4,5]
  },
  onReachBottom(e) {
    console.log("到底了") // 滚动到页面执行 该 方法 
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 2000
    })
    /*
      这里执行你需要的请求数据追加到循环数组就好了
    */
  },
  onPageScroll(e) {
    //console.log(e) //滚动条 滚动的位置（e.scrollTop）从头部开始计算
  },
})