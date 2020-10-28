const SERVER = 'http://localhost:3000'

$(document).ready(function(){
  console.log('document is ready 🔥🔥')


})

function login(){
  let username = $('#login-email').val()
  let password = $('#login-password').val()

  console.log(username, password)
}

function register(){
  let username = $('#register-email').val()
  let password = $('#register-password').val()

  console.log('user trying to register')
  console.log(username, password)
}