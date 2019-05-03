function fetchCountry(){
  // console.log('anjayyy')
  $.ajax({
    url: "http://localhost:3000/country",
    method: "GET"
  })
  .done(country=>{
    country.forEach(element=>{
      $("#collection").append(
      `<li class="collection-item avatar">
      <img src="${element.flag}" alt="" class="circle">
      <span class="title">${element.name}</span>
      <p>Region: ${element.region}<br>
          Population: ${element.population}
      </p>
      <a href="#!" class="secondary-content waves-effect waves-teal btn-flat" id="lets-go" onclick="fetchCity('${element.name}')"><i class="fas fa-fighter-jet"></i>LET's GO!</a>
  </li>`)
    })
    console.log(country)
  })
  .fail((jqXHR,textStatus)=>{
    console.log(textStatus,'request failed')
  })
}

function cityDetails(city){
  //$('#isicarousel').carousel();
  $("#cities").fadeOut()
  $.ajax({
    url: `http://localhost:3000/cities/${city}`,
    method:'GET'
  })
  .done(city=>{
    console.log("UHUHAUHAHUHA")
    console.log(city.results[0].images)
    
    city.results[0].images.forEach((element,index)=>{
      console.log(element)
      $("#slide-content")
        .append(`<li>
        <img src="${element.sizes.medium.url}"> <!-- random image -->
        <div class="caption center-align">
          <h3>${element.caption}</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>`)
      })
    // console.log(city)
    $('.slider').slider();
    $('#city').fadeIn(1000)
  })
  .fail((jqXHR,textStatus)=>{
    console.log(textStatus,'request failed')
  })
}
function fetchCity(country){
  console.log(country)
  $("#home").fadeOut(function(){
  
  })
    
  $.ajax({
    url: `http://localhost:3000/cities`,
    method: "GET",
    data: `country=${country}`
  })
  .done(cities=>{
    console.log(cities)
    if(cities.more){
      cities.results.forEach(element=>{
        $("#cities-container").append(`<div class="row center-align">
        <div class="center-align cities">
            <div class="card horizontal">
                <div class="card-image">
                    <img src="${element.images[0].sizes.medium.url}">
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <h4>${element.name}</h4>
                        <p>${element.snippet}</p>
                    </div>
                    <div class="card-action">
                        <a href="#" onclick="cityDetails('${element.name}')">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
      $("#cities").fadeIn(1000)
      })
    }else if(!cities.more){
      $("#cities").fadeIn(1000)
    }
  })
  .fail((jqXHR,textStatus)=>{
    console.log(textStatus,'request failed')
  })
}

function onSignIn(googleUser) {
  let id_token = googleUser.getAuthResponse().id_token;
  console.log(id_token)
  fetchCountry()

  $("#login-page").slideUp(2000,function(){
    $("#home").fadeIn(1000)
  })
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
    $("#home").hide(function(){
      $("#login-page").fadeIn(1000)
    })
    // $("#sign-out").hide()
  });

}
function flagButton(element){
  $(`#${element}`).fadeOut(1000,function(){
    $("#home").fadeIn(1000)
    $("#cities-container").empty()
  })
}

$(document).ready(function () {
  $('.fixed-action-btn').floatingActionButton();
  
  $('.parallax').parallax();
  $('.modal').modal();
  $("#city").hide()
  $("#cities").hide()
  $('#home').hide()
  $('#welcome').hide()
  $('#lets-login').hide()
  $('#login-buttons').hide()
  $('#welcome').fadeIn(3000)
  $('#lets-login').fadeIn(3000)
  $('#login-buttons').fadeIn(3000)
  $('#sign-out').click(function () {
    signOut()
  })
  $('.slider').slider();
  $('#isicarousel').carousel();
});
