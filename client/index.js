const SERVER = 'http://localhost:3000';
// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client(CLIENT_ID);
let foodKeyword = 'health'

let googleUser = {
  name : 'Deo Mareza',
  avatarUrl : 'https://lh3.googleusercontent.com/a-/AOh14GgezQV4qqXZEXfIRdIYLkh83P8Krg4ONbXo77HQ0w=s96-c'
}

let zomato = [
  {
    id: "18665235",
    name: "Dope Burger & Co.",
    location: "Jl. Teuku Cik Ditiro No. 25, Menteng, Jakarta",
    url: "https://www.zomato.com/jakarta/dope-burger-co-menteng?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
    thumnail: "https://b.zmtcdn.com/data/pictures/5/18665235/91953fdc5136be707f0ac227fc4fdb5e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    img: "https://b.zmtcdn.com/data/pictures/5/18665235/91953fdc5136be707f0ac227fc4fdb5e.jpg"
  },
  {
    id: "18665235",
    name: "Dope Burger & Co.",
    location: "Jl. Teuku Cik Ditiro No. 25, Menteng, Jakarta",
    url: "https://www.zomato.com/jakarta/dope-burger-co-menteng?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
    thumnail: "https://b.zmtcdn.com/data/pictures/5/18665235/91953fdc5136be707f0ac227fc4fdb5e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    img: "https://b.zmtcdn.com/data/pictures/5/18665235/91953fdc5136be707f0ac227fc4fdb5e.jpg"
  }
]

$(document).ready(function(){
  console.log('document is ready 🔥🔥')
  $.getScript('./search.js')
  const token = localStorage.getItem('access_token')
  
  if(token){
    afterSignIn()

  } else {
    init()

  }
})

function init(){
  $('#page_login').show()
  $('#page_home').hide()
  $('#error').hide()

  // changing BG ↘
  // $('body').css('background-image', "url('https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg')")
}

function afterSignIn(){
  $('#error').hide()
  $('#page_login').hide()
  $('#page_home').show()
  $('body').css('background-image', 'none')

  showAllHome()
  // showUserProfile(googleUser)
}

function showAllHome(){
  showRecipe()
  showUserFavorites()
  showUserProfile()

  // search(foodKeyword)

}

function afterSignOut(){
  $('#error').hide()
  $('#page_home').hide()
  $('#page_login').show()
  $('body').css('background-image', "url('https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg')")

}


function signIn(e){
  e.preventDefault()
  let email = $('#signin-email').val()
  let password = $('#signin-password').val()

   $.ajax({
     method : 'POST',
     url : SERVER + '/signin',
     data : {
       email,
       password
     }
   })
    .done(response => {

    const access_token = response.access_token
    localStorage.setItem('access_token', access_token)
    afterSignIn()

   })
    .fail((error)=>{
      console.log(error)
      showError(error.responseJSON.message)
  })
    .always(_=>{
      $('#login-email').val('')
      $('#login-password').val('')
    })

}

function signUp(){
  let email = $('#register-email').val()
  let name = $('#register-fullname').val()
  let password = $('#register-password').val()

  console.log('user trying to register')
  console.log(email, password)

  $.ajax({
    method : 'POST',
    url : SERVER + '/signup',
    data : {
      email,
      name,
      password
    }
  }).done(response => {
    console.log(response.message)

  })
  .fail((error)=>{
    showError(error.responseJSON.message)
  })
  .always(_=>{
    $('#register-email').val('')
    $('#register-password').val('')
    $('#register-fullname').val('')
  })

}

async function onSignIn(googleUser) {

  let google_user_token = await googleUser.getAuthResponse().id_token;
 
  $.ajax({
     method : 'POST',
     url : SERVER + '/googleSignin',
     data : {
       token : google_user_token
     }
   }).done((data)=>{

    localStorage.setItem('access_token', data.access_token)
    
    console.log(localStorage.getItem('user_data'))
    afterSignIn()

   }).fail((error)=>{
     showError(error.responseJSON.message)
   })


}

function showError(message){
  $('#error').show()
  $('#error').empty()
  
  if(Array.isArray(message)){
    $('#error').append(`
      ${message.join(', ')}
    `)

  } else {
    $('#error').append(`
      ${message}
    `)
  }

}

function showRecipe(recipeObj){
  if(recipeObj){

    $('#content-recipe').empty()
    $('#content-recipe').append(`
  
    <img class="card-img-top" src="${recipeObj.image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${recipeObj.title}</h5>
      <p class="card-text">${recipeObj.summary}</p>
  
      <a href=${recipeObj.sourceUrl} target="_blank" class="btn btn-primary">Checkout Full Recipe</a>
      <a href="#" onclick="addToFavorites(${recipeObj.id})" class="btn btn-primary">Save to Favorites</a>
      </div>
    `)

  } else {
    $.ajax({
      method : 'GET',
      url : SERVER + `/recipes/search?food=${foodKeyword}`
    }).done(response => {

      let randomNum = Math.floor(Math.random() * response.results.length);
      let recipe = response.results[randomNum]

      foodKeyword = recipe.title    
      search(recipe.title)
      
      $('#content-recipe').empty()
      $('#content-recipe').append(`
    
      <img class="card-img-top" src="${recipe.image}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${recipe.title}</h5>
        <p class="card-text">${recipe.summary}</p>
    
        <a href=${recipe.sourceUrl} target="_blank" class="btn btn-primary">Checkout Full Recipe</a>
        <a href="#" onclick="addToFavorites(${recipe.id})" class="btn btn-primary">Save to Favorites</a>
        </div>
      `)

      
    }).fail(response => {
      console.log(response)
    })

  }

}

function addToFavorites(id){
  const recipeId = id;
  const access_token = localStorage.getItem('access_token')
  $.ajax({
    method : 'POST',
    url : SERVER + `/recipes/addToFavorites/${recipeId}`,
    headers : {
      access_token
    }

  })
  .done(_=>{
    showUserFavorites()
  })
  .fail(err => {
    console.log(err)
  })
}


function showUserProfile(){
  let access_token = localStorage.getItem('access_token')

  $.ajax({
    method : 'GET',
    url : SERVER + '/findOne',
    headers : {
      access_token
    }
  })
  .done(response => {

    let profile_picture = response.avatarUrl || './img/profile_pic.jpg'

    $('#user-container').empty()
    $('#user-container').append(`
      <div class="card mb-3" id="content-profile">
      <div class="card-body">
        <div class ='avatar-container mb-3'>
          <img class='avatar' src = ${profile_picture}>
        </div>
        <h5 class="card-title" style="text-align:center;">Welcome back, ${response.name}!</h5>
      </div>
    </div>
    `)

  })
  .fail(error => {
    console.log(error)
  })


}


function showUserFavorites(){
  let userFave = [
    {
      id: 640338,
      title: 'Cracked Wheat Salad with Dates & Tahini Yogurt',
      image: 'https://spoonacular.com/recipeImages/640338-312x231.jpg'
    },
    {
      id: 640338,
      title: 'Cracked Wheat Salad with Dates & Tahini Yogurt',
      image: 'https://spoonacular.com/recipeImages/640338-312x231.jpg'
    }
  ]


  $('#favourite-container').empty()

  userFave.forEach(fave => {
    $('#favourite-container').append(`
      <div class = "row mb-3">
        <div class = "col-2">
          <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="orange" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
        </div>
        <div class = "col">
          <p><a href="" onclick="getFavoriteRecipe(${fave.id})">${fave.title}</a></p>
        </div>
      </div>    
    `)

  })
}


function searchRestaurant(){
  let city = $('#search-bar').val()
  console.log(city)
  search(foodKeyword, city)
}


function promiseAjax (url, method, data){

  return new Promise((resolve, reject) => {
      $.ajax({
        method: method,
        url: url,
        data: data
      }).done(respones => {
        resolve(respones)
      }).fail(err => {
        reject(err)
      })

  })
}

function search(foodInput, cityInput){
  // e.preventDefault()
  // const city = $("#city").val() || "jakarta"
  const city = cityInput || "jakarta"
  // const food = $('#food').val()
  const food = foodInput
  // console.log(city)
  console.log(food);
  const maxDisplay = 5;

  return promiseAjax(SERVER + '/restaurants/city', 'GET', {city})
      .then(kota => {

        let id = +kota.id

        return promiseAjax(SERVER + '/restaurants/search', 'GET', {city: id, makanan: food })
      })
      .then(restaurants => {
          $('#restaurants-container').empty()
          
          for(let i = 0; i < maxDisplay; i++){
            let restaurant = restaurants[i]
            
            if(restaurant.img){
              let gMapURL = (`https://www.google.com/maps/search/?api=1&query=${restaurant.location}`)
              $('#restaurants-container').append(`
                <div class="card mb-2">
                <img class="card-img-top" src=${restaurant.img} alt="Card image cap">
                <div class="card-body">
            
                  <h5 class="card-title"><a href = ${restaurant.url} target="_blank">${restaurant.name}</a></h5>
                  <p class="card-text"><a href = ${gMapURL} target="_blank">View Location</a></p>
            
                </div>
              </div>
              `)
              
            }
          }
            
          $("#city").val("")
          $('#food').val("")

      })
      .catch(err => {
        console.log(err);

      })
} 

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
  localStorage.clear()
  afterSignOut()
}