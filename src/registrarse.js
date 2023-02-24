//FUNCIONES

function camposCompletos(a) {
    a.preventDefault()
    let info = a.target
    if (info.children[1].value === "" || info.children[3].value === "" || info.children[7].value === "" || info.children[9].value === "") {
        alerta("Por favor complete todos los campos","red")
        return false;
    }else{
        return true
    }
}

function crearCuenta(e) {
    if (camposCompletos(e)) {
        e.preventDefault()
        let datos = e.target
        if (definirPassword(datos)) {
            let nuevaCuenta = new Cuenta(datos.children[1].value, datos.children[3].value, datos.children[7].value)
            contador = 0
            alerta("Cuenta creada con exito","rgb(10, 95, 31)")
            localStorage.setItem(nuevaCuenta.email, JSON.stringify(nuevaCuenta))
            setTimeout(() => {location.href = "login.html"}, 1300)
        }
    }  
}

function definirPassword(f) {
    if (f.children[5].value != f.children[7].value) {
        document.getElementById("pass").innerHTML="*Las contrasenas no coinciden"    
    }else{
        document.getElementById("pass").innerHTML=" "
        return true;
    }
}

function alerta(mensaje, pigmento) {
    Toastify({
        text: mensaje,
        duration: 1100,
        gravity: 'bottom', // top o bottom
        position: 'right', // left, center o right
        offset: {
            x: 300,
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

async function crearCuentaAleatoria() {
    formulario.innerHTML = ''
    usuarioAleatorio.splice(0,usuarioAleatorio.length)
    let indice = numeroRandom(2,10)

    formulario.innerHTML = `<div class="spinner-border text-center" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`

    //API
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        usuarioAleatorio.push(json[indice].name)
        usuarioAleatorio.push(json[indice].email)
    })

    let nombre = usuarioAleatorio[0]
    let correo = usuarioAleatorio[1]
    
    formulario.innerHTML = `<label for="" class="form-label login-text">Nombre:</label>
    <input class="form-control" id="nombre" value="${nombre}">

    <label for="" class="form-label login-text">Email:</label>
    <input class="form-control" id="correo" value="${correo}">

    <label for="" class="form-label login-text">Defina una contrasena:</label>
    <input type="text" class="form-control" id="contra">
  
    <label for="" class="form-label login-text">Repita la contrasena:</label>
    <input type="text" class="form-control">
    <p class="peligro" id="pass"></p>
  <div class="d-grid">
      <input type="submit" class="btn btn-ingreso btn-login" value="Crear Cuenta">
  </div>`

}

function numeroRandom(min,max) {
    return Math.floor(Math.random()*(max - min)) + min
}

//CLASES

class Cuenta {
    constructor(nombre,email,password) {
        this.nombre = nombre
        this.email = email
        this.password = password
    }
}

//ARRAYS

const usuarioAleatorio = []
const ejemplo = ["Franco","franco123.as@gmail.com"]

//REGISTRARSE

//DOM 

let formulario = document.getElementById("formulario")
let nombre = document.getElementById("nombre")
let email = document.getElementById("email")
let generarUsuario = document.getElementById("generar-usuario")

//EVENTOS

formulario.addEventListener("submit", crearCuenta)
generarUsuario.addEventListener("click", crearCuentaAleatoria)










