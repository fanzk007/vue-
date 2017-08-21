import md5 from 'md5'
// 登录注册需要device_id产生方法
export var deviceId = function () {
  var time = Math.round(new Date().getTime() / 1000).toString()
  for (var i = 0; i < 6; i++) {
    time += Math.floor(Math.random() * 10)
  }
  return md5(time)
}
