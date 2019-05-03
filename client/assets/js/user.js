
function registerUser(){
    const name = $('#name').val()
    const email = $('#email').val()
    const password = $('#password').val()

    $.ajax({
        url : `${url}/users/register`,
        method : 'POST',
        data : {name, email, password}
    })
    .done(data =>{
        Swal.fire({
            title: 'Register Success',
            type: 'success'
          })
    })
    .fail((jhr, textStatus) => {
        console.log(textStatus)
        Swal.fire({
            title: 'Error Register!',
            type: 'error',
          })
    })
}


function loginUser(){
    const email = $('#login-email').val()
    const password = $('#login-password').val()

    $.ajax({
        url : `${url}/users/login`,
        method : 'POST',
        data : {email, password}
    })
    .done(data =>{
        localStorage.setItem('token', data.token)
        fetchCountry()
    
        $("#login-page").slideUp(2000,function(){
          $("#home").fadeIn(1000)
        })
        
        Swal.fire({
            title: 'Login Success',
            type: 'success'
          })
    })
    .fail((jhr, textStatus) => {
        console.log(textStatus)
        Swal.fire({
            title: 'Error Login!',
            type: 'error',
          })
    })
}

