/* 沙箱模式 */
(function(window) {
  const token = localStorage.getItem("token");
  //发送请求前设置默认值
  $.ajaxSetup({
    //发送请求前运行的函数
    beforeSend(xhr) {
      //没有令牌跳转会登录页（登录接口用户用于获取令牌的）
      if (!token) {
        location.href = "./login.html";
      }
      //如果不是 login.html登录页，就统一添加请求头
      if (location.href.indexOf("login.html") === -1) {
        //注意这里的xhr是原生的对象，所有用原生的方式添加请求头
        xhr.setRequestHeader("Authorization", token);
      }
    }
  });

  //完整的URL：
  const baseURL = "http://localhost:8080/api/v1";
  const urls = {
    //2.获取用户信息
    userInfo: baseURL + "/admin/user/info",
    //3.获取用户详情
    userDetail: baseURL + "/admin/user/detail",
    //4.编辑用户信息
    userEdit: baseURL + "/admin/user/edit"
  };
  window.urls = urls;
})(window);
