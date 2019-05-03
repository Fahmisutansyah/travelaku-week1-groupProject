let url = `http://localhost:3000`

function register(){
    const name = $('#name').val()
    const email = $('#email').val()
    const password = $('#password').val()

    $.ajax({
        url : `${url}/users/register`,
        method : 'POST',
        data : {name, email, password}
    })
    .done(data =>{
        console.log(data)
    })
    .fail((jhr, textStatus) => {
        console.log(textStatus)
    })
}


