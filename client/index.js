const SERVER = 'http://localhost:3000';
// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client(CLIENT_ID);
let recipe = {
  vegetarian: true,
  vegan: false,
  glutenFree: false,
  dairyFree: false,
  veryHealthy: true,
  cheap: false,
  veryPopular: false,
  sustainable: false,
  weightWatcherSmartPoints: 24,
  gaps: 'no',
  lowFodmap: false,
  aggregateLikes: 1,
  spoonacularScore: 92.0,
  healthScore: 100.0,
  creditsText:
      'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
  license: 'CC BY 3.0',
  sourceName: 'Foodista',
  pricePerServing: 348.74,
  id: 640338,
  title: 'Cracked Wheat Salad with Dates & Tahini Yogurt',
  readyInMinutes: 45,
  servings: 2,
  sourceUrl:
      'http://www.foodista.com/recipe/6PVSJLCP/cracked-wheat-salad-with-dates-tahini-yogrt',
  image: 'https://spoonacular.com/recipeImages/640338-312x231.jpg',
  imageType: 'jpg',
  summary:
      'Cracked Wheat Salad with Dates & Tahini Yogurt might be just the main course you are searching for. One serving contains <b>900 calories</b>, <b>33g of protein</b>, and <b>48g of fat</b>. For <b>$3.45 per serving</b>, this recipe <b>covers 44%</b> of your daily requirements of vitamins and minerals. If you have ground cumin, lemon, dates, and a few other ingredients on hand, you can make it. To use up the ground cumin you could follow this main course with the <a href="https://spoonacular.com/recipes/moroccan-chocolate-mousse-752536">Moroccan Chocolate Mousse</a> as a dessert. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Not a lot of people made this recipe, and 1 would say it hit the spot. All things considered, we decided this recipe <b>deserves a spoonacular score of 93%</b>. This score is awesome. Try <a href="https://spoonacular.com/recipes/sea-scallops-with-cracked-wheat-salad-roasted-red-pepper-tahini-vinaigrette-and-grilled-lemons-346792">Sea Scallops with Cracked Wheat Salad, Roasted Red Pepper Tahini Vinaigrette and Grilled Lemons</a>, <a href="https://spoonacular.com/recipes/lamb-beet-and-cracked-wheat-meatballs-with-cucumber-yogurt-sauce-91819">Lamb, Beet, and Cracked Wheat Meatballs with Cucumber Yogurt Sauce</a>, and <a href="https://spoonacular.com/recipes/mediterranean-cracked-wheat-salad-103311">Mediterranean Cracked Wheat Salad</a> for similar recipes.',
  cuisines: [],
  dishTypes: ['salad'],
  diets: ['lacto ovo vegetarian'],
  occasions: [],
  analyzedInstructions: [
      {
          name: '',
          steps: [
              {
                  number: 1,
                  step:
                      'For Tahini Yogurt: dry roast ground cumin and coriander in a pan for a few minutes until they start getting fragrant. In a mixing bowl, add yogurt and tahini and mix well. Now add cumin, coriander, juice and zest of 1 lemon, olive oil, and salt to taste and mix well to form a thick paste-like mixture. Set aside.For Assembling the Salad: In a big salad bowl mix everything and season with little salt (just be careful as the yogurt topping also has salt in it).',
                  ingredients: [
                      {
                          id: 9150,
                          name: 'lemon',
                          localizedName: 'lemon',
                          image: 'lemon.png',
                      },
                      {
                          id: 1002014,
                          name: 'ground cumin',
                          localizedName: 'ground cumin',
                          image: 'ground-cumin.jpg',
                      },
                      {
                          id: 1012013,
                          name: 'coriander',
                          localizedName: 'coriander',
                          image: 'ground-coriander.jpg',
                      },
                      {
                          id: 4053,
                          name: 'olive oil',
                          localizedName: 'olive oil',
                          image: 'olive-oil.jpg',
                      },
                      {
                          id: 12698,
                          name: 'tahini',
                          localizedName: 'tahini',
                          image: 'tahini-paste.png',
                      },
                      {
                          id: 1116,
                          name: 'yogurt',
                          localizedName: 'yogurt',
                          image: 'plain-yogurt.jpg',
                      },
                      {
                          id: 1002014,
                          name: 'cumin',
                          localizedName: 'cumin',
                          image: 'ground-cumin.jpg',
                      },
                      {
                          id: 2047,
                          name: 'salt',
                          localizedName: 'salt',
                          image: 'salt.jpg',
                      },
                  ],
                  equipment: [
                      {
                          id: 405907,
                          name: 'mixing bowl',
                          localizedName: 'mixing bowl',
                          image: 'mixing-bowl.jpg',
                      },
                      {
                          id: 404645,
                          name: 'frying pan',
                          localizedName: 'frying pan',
                          image: 'pan.png',
                      },
                  ],
              },
              {
                  number: 2,
                  step:
                      'Serve in individual salad bowls,  putting a dollop of the tahini yogurt and sprinkling some toasted sesame seeds. Tastes best at room temperature.',
                  ingredients: [
                      {
                          id: 12023,
                          name: 'sesame seeds',
                          localizedName: 'sesame seeds',
                          image: 'sesame-seeds.png',
                      },
                      {
                          id: 12698,
                          name: 'tahini',
                          localizedName: 'tahini',
                          image: 'tahini-paste.png',
                      },
                      {
                          id: 1116,
                          name: 'yogurt',
                          localizedName: 'yogurt',
                          image: 'plain-yogurt.jpg',
                      },
                  ],
                  equipment: [
                      {
                          id: 404783,
                          name: 'bowl',
                          localizedName: 'bowl',
                          image: 'bowl.jpg',
                      },
                  ],
              },
          ],
      },
  ],
  spoonacularSourceUrl:
      'https://spoonacular.com/cracked-wheat-salad-with-dates-tahini-yogurt-640338',
}

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
  console.log(recipe.title)
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
  showRestaurants()
  showUserProfile()
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

function showRecipe(){

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
}

function addToFavorites(id){
  const recipeId = id;

  $.ajax({
    method : 'POST',
    url : SERVER + `/recipes/addToFavorites/${recipeId}`
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
        <h5 class="card-title">Welcome back, ${response.name}!</h5>
        <a href="" class="btn btn-sm btn-primary">Favourite this Recipe</a>
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
          <p><a href="" onclick="getRecipe(${fave.id})">${fave.title}</a></p>
        </div>
      </div>    
    `)

  })
}


function showRestaurants(){


  $('#restaurants-container').empty()

  zomato.forEach(restaurant => {
    let gMapURL = (`https://www.google.com/maps/search/?api=1&query=${restaurant.location}`)
    $('#restaurants-container').append(`
      <div class="card mb-3">
      <img class="card-img-top" src=${restaurant.img} alt="Card image cap">
      <div class="card-body">
  
        <h5 class="card-title"><a href = ${restaurant.url} target="_blank">${restaurant.name}</a></h5>
        <p class="card-text"><a href = ${gMapURL} target="_blank">${restaurant.location}</a></p>
  
      </div>
    </div>
    `)
  })

}

function searchRestaurant(){
  let city = $('#search-bar').val().toLowerCase()

  console.log(city)
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
  localStorage.clear()
  afterSignOut()
}