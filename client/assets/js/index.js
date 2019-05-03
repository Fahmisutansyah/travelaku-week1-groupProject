
function onSignIn(googleUser) {
  let id_token = googleUser.getAuthResponse().id_token;
  console.log(id_token)
  $("#login-page").slideUp(2000)
  $('#sign-out').show()
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
    $("#login-page").fadeIn(3000)
    $("#sign-out").hide()
  });
}

$(document).ready(function () {
  $('.parallax').parallax();
  $('.modal').modal();
  $('#sign-out').hide()
  $('#welcome').hide()
  $('#lets-login').hide()
  $('#login-buttons').hide()
  $('#welcome').fadeIn(3000)
  $('#lets-login').fadeIn(3000)
  $('#login-buttons').fadeIn(3000)
  $('#sign-out').click(function () {
    signOut()
  })
  
  cariVideo()    
});
