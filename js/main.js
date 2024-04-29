// dropdown-btn
if ($(".menu-area li.menu-item-has-children ul").length) {
    $(".menu-area .navigation li.menu-item-has-children").append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>')
}

// moblie menu
let menuHtml = $(".menu-area .main-menu").html();
$(".mobile-menu .menu-box .menu-outer").append(menuHtml);


// modal

let loginModal = `  <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="loginModalLabel">Login</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <!-- Login form -->
      <form id="loginForm">
        <div class="mb-3">
          <label for="loginEmail" class="form-label">Email address</label>
          <input type="email" class="email form-control" id="loginEmail" required>
        </div>
        <div class="mb-3">
          <label for="loginPassword" class="form-label">Password</label>
          <input type="password" class="password form-control" id="loginPassword" required>
        </div>
        <p style = "color:red" class="tips"></p> 
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</div>
</div>
`

let registerModal = `  <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="registerModalLabel">Register</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <!-- Register form -->
      <form id="registerForm">
        <div class="mb-3">
          <label for="registerEmail" class="form-label">Email address</label>
          <input type="email" class="form-control" id="registerEmail" required>
        </div>
        <div class="mb-3">
          <label for="registerPassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="registerPassword" required>
        </div>
        <div class="mb-3">
          <label for="registerUsername" class="form-label">Username</label>
          <input type="text" class="form-control" id="registerUsername" required>
        </div>
        <div class="mb-3">
         <label for="registerAge" class="form-label">Age</label>
         <input type="number" class="form-control" id="registerAge" required>
        </div>
        <p style = "color:red" class="tips"></p> 
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  </div>
</div>
</div>`

$('body').append(loginModal,registerModal)

// LoginFunction
$('#loginForm').on('submit', (e) => {
  e.preventDefault();

  let email = $('#loginForm .email').val()
  let password = $('#loginForm .password').val()

  api.userLogin(email, password)

})

$('#registerForm').on('submit', (e) => {
  e.preventDefault();

  let email = $('#registerEmail').val()
  let password = $('#registerPassword').val()
  let age = $('#registerAge').val()
  let username = $('#registerUsername').val()

  let data = {email, password, age, username}

  api.userRegister(data)

})

$(".mobile-nav-toggler").on("click", function () {
    $("body").addClass("mobile-menu-visible")
});

$(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
    $("body").removeClass("mobile-menu-visible")
});


$(".mobile-menu li.menu-item-has-children .dropdown-btn").on("click", function () {
    $(this).toggleClass("open");
    $(this).prev("ul").slideToggle(500)
});


// scroll 
$(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop < 245) {
        $("#sticky-header").removeClass("sticky-menu");
    } else {
        $("#sticky-header").addClass("sticky-menu");
    }
});


// radio
$(".fly-next-nav button, .content-top li, .gender-select ul li").on("click", function (e) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    e.preventDefault()
});