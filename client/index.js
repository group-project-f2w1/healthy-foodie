const SERVER = 'http://localhost:3000';
// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client(CLIENT_ID);
let foodKeyword = 'health'
let tempRecipe = {
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
  getBGPicture()

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

  getBGPicture()
}

function getBGPicture(){

  $('body').css('background-image', "url('https://picsum.photos/1600/1080?grayscale&blur=2')")
  // $.ajax({
  //   method : 'GET',
  //   url : SERVER + '/img/random',

  // }).done(response => {
  //   console.log(response)
  //     $('body').css('background-image', `url('${response.imgUrl.html}')`)

  // }).fail(err => {
  //   console.log(err)
  // })
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

  // temp recipe /// save bandwith //
  checkAdded(tempRecipe.id, (res) => {
    let temp
    let fav = ""
    $('#content-recipe').empty()
    if(res.includes("Add")) {
      temp = `<a href="#" onclick="addToFavorites('${tempRecipe.id}', '${tempRecipe.title}')" class="btn btn-primary">${res}</a>`
    } else {
      // $('#content-recipe').append(`<h1>Favorites</h1>`)
      fav = `
      <div class="btn card-title">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="yellow" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
      </svg>
      </div>
      `
      temp = `<a href="#" onclick="removeFavorites(${tempRecipe.id})" class="btn btn-danger">${res}</a>`
    }
    $('#content-recipe').append(`

    
    <img class="card-img-top" src="${tempRecipe.image}" alt="Card image cap">
      ${fav}
    <div class="card-body" id="recipe">
    <h5 class="card-title">${tempRecipe.title}</h5>
    <p class="card-text">${tempRecipe.summary}</p>
    
    <a href=${tempRecipe.sourceUrl} target="_blank" class="btn btn-primary">Checkout Full Recipe</a>
    ${temp}
    </div>
    `)
  })

  // =========== //
  // Real Recipe //

  $.ajax({
    method : 'GET',
    url : SERVER + `/recipes/search?food=${foodKeyword}`
  }).done(response => {
    let randomNum = Math.floor(Math.random() * response.results.length);
    console.log(response.results)
    console.log(response.results.length)
    console.log(randomNum)
    let recipe = response.results[randomNum]

    foodKeyword = recipe.title    
    search(recipe.title)
    checkAdded(recipe.id, (res) => {
      let temp
      if(res.includes("Add")) {
        temp = `<a href="#" onclick="addToFavorites('${recipe.id}', '${recipe.title}')" class="btn btn-primary">${res}</a>`
      } else temp = `<a href="#" onclick="removeFavorites(${recipe.id})" class="btn btn-danger">${res}</a>`
      $('#content-recipe').empty()
      $('#content-recipe').append(`
  
      <img class="card-img-top" src="${recipe.image}" alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${recipe.title}</h5>
      <p class="card-text">${recipe.summary}</p>
      <a href=${recipe.sourceUrl} target="_blank" class="btn btn-primary">Checkout Full Recipe</a>
      ${temp}
      </div>
      `)
    })
  }).fail(response => {
    console.log(response.responseJSON.message)
  })


}


// $('#recipe').on('')
function checkAdded(recipeId, cb) {
    
    const access_token = localStorage.getItem('access_token')
    
    $.ajax({
      method : 'GET',
      url : SERVER + '/recipes/favorites',
      headers : {
        access_token
      }
    })
  .done(response => {
    let added = false
    console.log(response.data, 'sudah keluar') 
    response.data.forEach(el => {
      if(el.RecipeId === recipeId) added = true
    })
    if(added === true) cb("Remove from favourites")
    else cb("Add to favourites")
  })
}

function removeFavorites(recipeId) {
  const access_token = localStorage.getItem('access_token')

  $.ajax({
    method: 'DELETE',
    url: SERVER + `/recipes/delete/${recipeId}`,
    headers: {
      access_token
    }
  }).done(_=> {
    showUserFavorites()
    showRecipe()
  })
  .fail(err => console.log(err.responseJSON.message))
}

function addToFavorites(id, recipeName){
  // console.log('addToFavorites invoked')
  
  const recipeId = id;
  const access_token = localStorage.getItem('access_token')
  $.ajax({
    method : 'GET',
    url : SERVER + `/recipes/addToFavorites?RecipeId=${recipeId}&recipeName=${recipeName.replace('&','%26')}`,
    headers : {
      access_token
    }
  })
  .done(_=>{
    // console.log('added to favorites')
    showUserFavorites()
    showRecipe()
  })
  .fail(err => {
    console.log(err.responseJSON.message)
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
          <img class='avatar' src = ${profile_picture} >
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

  const access_token = localStorage.getItem('access_token')

  $.ajax({
    method : 'GET',
    url : SERVER + '/recipes/favorites',
    headers : {
      access_token
    }
  }).done(response => {

    console.log(response.data, "dari sini")
    $('#favourite-container').empty()

    response.data.forEach( fave => {
      $('#favourite-container').append(`
        <div class = "row mb-3">

          <div class = "col">
            <p><a href="#" onclick="getFavoriteRecipe(${fave.RecipeId})">${fave.recipeName}</a></p>
          </div>
          
          
          <a href="#" onclick="removeFavorites(${fave.RecipeId}) ">
          <div class = "col">        
          
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="red" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
          
          </div>
          </a>
        </div>    
      `)
      
    })

  }).fail(err => {

    console.log(err)

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
  // console.log(food);
  const maxDisplay = 5;

  return promiseAjax(SERVER + '/restaurants/city', 'GET', {city})
      .then(kota => {

        let id = +kota.id

        return promiseAjax(SERVER + '/restaurants/search', 'GET', {city: id, makanan: food })
      })
      .then(restaurants => {

        if(restaurants.length > 0){
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

        } else {
          $('#restaurants-container').empty()
          $('#restaurants-container').append(`
          <div class="card mb-2">
          <div class="card-body">
      
            <h5 class="card-title">No Restaurant Found Nearby</h5>
      
          </div>
        </div>
        `)


        }

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