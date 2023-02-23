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

//CLASES

class Cuenta {
    constructor(nombre,email,password) {
        this.nombre = nombre
        this.email = email
        this.password = password
    }
}

//ARRAYS


//REGISTRARSE

let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", crearCuenta)














