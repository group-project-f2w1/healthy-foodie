// const SERVER = 'http://localhost:3000';

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

  return promiseAjax(SERVER + '/restaurants/city', 'GET', {city})
      .then(kota => {

        let id = +kota.id

        return promiseAjax(SERVER + '/restaurants/search', 'GET', {city: id, makanan: food })
      })
      .then(restaurants => {
          console.log(restaurants);
          $('#restaurants-container').empty()
          const maxDisplay = 5;
          for(let i = 0; i < maxDisplay; i++){
            let restaurant = restaurants[i]
            
            if(restaurant.img){
              let gMapURL = (`https://www.google.com/maps/search/?api=1&query=${restaurant.location}`)
              $('#restaurants-container').append(`
                <div class="card mb-3">
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
