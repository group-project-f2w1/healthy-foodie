const SERVER = 'http://localhost:3000'
// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client(CLIENT_ID);

$(document).ready(function(){
  console.log('document is ready 🔥🔥')

  init()
})

function init(){
  $('#page_login').show()
  $('#page_home').hide()


  // changing BG ↘
  // $('body').css('background-image', "url('https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg')")
}

function afterLogin(){
  $('#page_login').hide()
  $('#page_home').show()
  $('body').css('background-image', 'none')
}


function signIn(e){
  e.preventDefault()
  let username = $('#login-email').val()
  let password = $('#login-password').val()
  console.log(username, password)

  /**
   * TODO : 
   *  Kirim ke backend untuk authenticate
   * NEED : 
   *  Route untuk login
   */

  afterLogin()
 
}

function signUp(){
  let username = $('#register-email').val()
  let fullname = $('#register-fullname').val()
  let password = $('#register-password').val()

  console.log('user trying to register')
  console.log(username, password)

  /**
   * TODO : 
   *  Kirim ke backend untuk register
   * NEED :
   *  Route untuk register
   */

}

async function onSignIn(googleUser) {

  let google_user_token = googleUser.getAuthResponse().id_token;

  /**
   * TODO : 
   *  Kirim ke backend untuk di verifikasi
   * NEED : 
   *  url route for google sign in
   */

  //  $.ajax({
  //    method : 'POST',
  //    url : 'googleLoginURL',
  //    data : {
  //      google_user_token
  //    }
  //  }).done(()=>{
  //    afterLogin()
  //  }).fail((error)=>{
  //    console.log(error)
  //  })


}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
  localStorage.clear()
}