const baseUrl = 'http://127.0.0.1:8000'

const api = {
  userLogin,
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
      resolve(response)
    }
  });
}