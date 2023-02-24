//FUNCIONES

function mostrarDetalles(id) {
    let idProd = JSON.parse(localStorage.getItem("IdVerProducto"))
    for (let i = 0; i < stockProductos.length; i++) {
        if (stockProductos[i].id === idProd) {
            verImagenProducto.innerHTML = `
            <img src="${stockProductos[i].imagen}" class="card card-producto" style="width: 30rem;">
            <div class="col col-titulo-detalle">
            <h1 class="color-titulo-detalles mt-4">${stockProductos[i].nombre}</h1>

            <h3 class="descripcion">
                "${stockProductos[i].descripcion}"
            </h3>

            <p class="detalles">
                ${stockProductos[i].detalles}
            </p>

            <h2 class="precio">
                $ ${stockProductos[i].precio}
            </h2>
            <div class="container-btn-detalles">
                <button onclick="irTienda()" class="btn btn-primary btn-detalles-volver btn-volver-atras">Volver</button>
                <button onclick="agregarAlCarrito(${idProd})" class="btn btn-primary btn-detalles">Agregar al Carrito</button>
            </div>
        </div>`
        }
    }
}

function agregarAlCarrito (id) {
    for (let i = 0; i < stockProductos.length; i++) {
        if (stockProductos[i].id === id) {
            tuCarritoStorage = JSON.parse(localStorage.getItem("tuCarrito")) || []
            tuCarritoStorage.push(stockProductos[i])
            localStorage.setItem("tuCarrito", JSON.stringify(tuCarritoStorage))
        }
    }
    alertaCarrito("Producto agregado","rgb(130, 255, 138)")
    setTimeout(function () {location.href = "index.html"}, 1300) 
    
}

function alertaCarrito(mensaje, pigmento) {
    Toastify({
        text: mensaje,
        duration: 1100,
        gravity: 'top', // top o bottom
        position: 'right', // left, center o right
        offset: {
            x: 20,
            y: 60
        },
        stopOnFocus: true,
        style: {
            background: pigmento,
            color: 'rgb(8, 72, 12)',
            borderRadius: '5%'
        }
    }).showToast()
}

function irTienda() { 
    location.href = "index.html"
}

function irAlInicio() {
    location.href = "index.html"
}

//ARRAYS

const stockProductos = JSON.parse(localStorage.getItem("Stock"))

//PRINCIPAL



let verImagenProducto = document.getElementById("ver-detalles-producto")


document.addEventListener("DOMContentLoaded", mostrarDetalles)

let home = document.getElementById("home-detalles")

home.addEventListener("click", irAlInicio)