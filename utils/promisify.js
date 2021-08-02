const requestSync = (_url, _data,_header, _method, _callcomplete)=>{
  let pro = new Promise(function(resolve, reject) {
    wx.request({
      url: _url,
      data:_data,
      header: _header,
      method:_method,
      success:function(res){
        if(res.statusCode==200){
          console.log("wx.request() is success : 200 ok.");
          resolve(res); //任务成功就执行resolve(),其他情况下都执行reject()
        }
        else{
          console.log("wx.request() is success : 200 lost.");
          reject(res); //响应失败就执行reject()
        }
      },
      fail:function(res){
        console.log("wx.request() is fail : "+ res.errMsg);
        reject(res); //API执行失败也执行reject()
      },
      complete:function(res){
        // console.log("wx.request() is complete .");
        // if(_callcomplete) {_callcomplete(res);} //如果有回调函数在执行完成后要调用回调函数
      }
    })

  });
  return pro;
}

//暴露接口供外部调用
module.exports = {
  requestSync: requestSync
}
