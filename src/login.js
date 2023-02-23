//FUNCIONES

function iniciarSesion(a) {
    let usuario = 0
    a.preventDefault()
    let datosLogin = a.target
    usuario = JSON.parse(localStorage.getItem(datosLogin.children[1].value))

    if (usuario && usuario.password === datosLogin.children[3].value && usuario.email === datosLogin.children[1].value) {   
        alerta(`Accediste como ${usuario.nombre}`, "blue")
        setTimeout(function () {location.href = "index.html"}, 1300) 
    }else{
        alerta("email o password incorrecto", "red")
    }   
}

function alerta(mensaje, pigmento) {
    Toastify({
        text: mensaje,
        duration: 1100,
        gravity: 'top', // top o bottom
        position: 'right', // left, center o right
        offset: {
            x: 500,
            y: 10
        },
        stopOnFocus: true,
        style: {
            background: pigmento,
            color: 'white',
            borderRadius: '5%'
        }
    }).showToast()
}

//LOGIN

let formLogin = document.getElementById("form-login")

formLogin.addEventListener("submit", iniciarSesion)

