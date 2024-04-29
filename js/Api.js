const baseUrl = 'http://127.0.0.1:8000'

const api = {
  userLogin,
  userRegister,
  getUserInfo,
  getFlightsPage,
}


function userLogin(email, password) {
  $.ajax({
    type: "post",
    url: baseUrl + '/user/login/',
    data: {
      email,
      password
    },
    dataType: "json",
    success: function (response) {
      if (response.code == 0){
        common.setToken(response.data.token)
        common.setUserInfo(response.data.userInfo)
        $('#loginModal').modal('hide')
        $('#loginForm .tips').text()

        $('.header-action ul .header-btn').hide()
        $('.header-action ul .loginUser').show()
        $('.header-action ul .loginUser').text(response.data.userInfo.username)
      }
      if (response.code == 1){
        $('#loginForm .tips').text(response.msg)
      }
    }
  });
}

function userRegister(data){
  $.ajax({
    type: 'post',
    url: baseUrl + '/user/register/',
    data:data,
    dataType: 'json',
    success: function(response){
      if (response.code == 1){
        $('#registerForm .tips').text(response.msg)
      }
      if(response.code == 0){
        $('#registerModal').modal('hide')
        alert('register success')
      }
    }
  })
}

function getUserInfo(){
  $.ajax({
    type: "get",
    url: baseUrl + "/user/getUserInfo/",
    headers: {
      Authorization: common.getToken()
    },
    dataType: "json",
    success: function (response) {
      if (response.code == 1){
        common.removeToken()
        common.removeUserInfo()
        $('.header-action ul .header-btn').show()
        $('.header-action ul .loginUser').hide()
      }
      if (response.code == 0){
        common.setUserInfo(response.data)
        $('.header-action ul .header-btn').hide()
        $('.header-action ul .loginUser').show()
        $('.header-action ul .loginUser').text(response.data.username)
      }
      console.log(response);
    }
  });
}

function getFlightsPage(data, callback){
  $.ajax({
    type: "get",
    url: baseUrl + "/flights/getFlightsPage/",
    data: data,
    dataType: "json",
    success: function (response) {
      callback(response)
    }
  });
}