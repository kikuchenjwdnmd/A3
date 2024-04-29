const baseUrl = 'http://127.0.0.1:8000'

const api = {
  userLogin,
  userRegister,
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