

const SERVER = 'http://localhost:3000'

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

function search (e){
  e.preventDefault()
  const city = $("#city").val()
  const food = $('#food').val()
  console.log(city)
  console.log(food);

  return promiseAjax(SERVER + '/restaurants/city', 'GET', {city})
          .then(kota => {
           
            let id = +kota.id
            
            return promiseAjax(SERVER + '/restaurants/search', 'GET', {city: id, makanan: food })
          })
          .then(restaurants => {
              console.log(restaurants);
              
              restaurants.forEach(element => {
                $("#restaurants").append(`
                  <div class"col my-2 p-3 card">
                    <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${element.img}" alt="Card image cap">
                    <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
              </div>
                `)
              });
              $("#city").val("")
              $('#food').val("")
              
          })
          .catch(err => {
            console.log(err);
            
          })
}