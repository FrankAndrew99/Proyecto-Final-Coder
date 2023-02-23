//FUNCIONES
function verTienda() {
    listaProductos.innerHTML = ""
    stock.forEach((prod) => {
        const {id,nombre,precio,imagen,descripcion} = prod
        listaProductos.innerHTML += `
            <div class="card bg-card card-producto" style="width: 16rem;">
                <img src="${imagen}" class="card-img-top px-2 py-2" alt="...">
                <div class="card-body">
                    <h4 class="card-title color login-text">$ ${precio}</h4>
                    <h5 class="card-title color color-titulo">${nombre}</h5>
                    <p class="card-text">${descripcion}</p>
                    <button class="btn btn-primary" id="ver-producto-btn">Ver Producto</button>
                    <button onclick="enviarCarrito(${id})" class="btn btn-primary">Agregar al Carrito</button>
                </div>
            </div>   
       `
    })

    tuCarritoStorage = JSON.parse(localStorage.getItem("tuCarrito")) || []
    for (let i = 0; i < tuCarritoStorage.length; i++) {
        carrito.push(tuCarritoStorage[i])
    }
    verCarrito()    
}

function irAlInicio() {
    location.href = "index.html"
}

function enviarCarrito(id) {
    let item = stock.find((prod) => prod.id === id)
    carrito.push(item)
    alerta("Producto agregado","rgb(130, 255, 138)")
    verCarrito()
}

function verCarrito() {
    let modalBody = document.getElementById("modal-carrito")
    modalBody.innerHTML = ""
    carrito.forEach((prod) => {
        const {id,imagen,nombre,precio} = prod
        modalBody.innerHTML += `
        <div class="modal-container">
            <div>
                <img class="img-fluid img-carrito" src="${imagen}">
            </div>

            <div>
                <p class="color-info-carrito"><span class="color-item-carrito">Producto:</span> ${nombre}</p>
                <p class="color-info-carrito"><span class="color-item-carrito">Precio:</span> $ ${precio}</p>
            </div>

            <button onclick="eliminarProdCarrito(${id})"class="btn btn-danger btn-eliminar-producto">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
            </svg>
            </button>
        </div>
        <hr>
        `
    })
    guardarCarrito()
}

function alerta(mensaje, pigmento) {
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

function verGuitarras() {
    listaProductos.innerHTML = ''
    stock.forEach((prod) => {
        if (prod.categoria === "GUITARRA") {
            const {id,nombre,precio,imagen,descripcion} = prod
            listaProductos.innerHTML += `
            <div class="card bg-card card-producto" style="width: 16rem;">
                <img src="${imagen}" class="card-img-top px-2 py-2" alt="...">
                <div class="card-body">
                    <h4 class="card-title color login-text">$ ${precio}</h4>
                    <h5 class="card-title color color-titulo">${nombre}</h5>
                    <p class="card-text">${descripcion}</p>
                    <button class="btn btn-primary" id="ver-producto-btn">Ver Producto</button>
                    <button onclick="enviarCarrito(${id})" class="btn btn-primary">Agregar al Carrito</button>
                </div>
            </div>   
            `       
        }
    })
}

function verPianos() {
    listaProductos.innerHTML = ''
    stock.forEach((prod) => {
        if (prod.categoria === "PIANO") {
            const {id,nombre,precio,imagen,descripcion} = prod
            listaProductos.innerHTML += `
            <div class="card bg-card card-producto" style="width: 16rem;">
                <img src="${imagen}" class="card-img-top px-2 py-2" alt="...">
                <div class="card-body">
                    <h4 class="card-title color login-text">$ ${precio}</h4>
                    <h5 class="card-title color color-titulo">${nombre}</h5>
                    <p class="card-text">${descripcion}</p>
                    <button class="btn btn-primary" id="ver-producto-btn">Ver Producto</button>
                    <button onclick="enviarCarrito(${id})" class="btn btn-primary">Agregar al Carrito</button>
                </div>
            </div>   
            `       
        }
    })
}

function verBaterias() {
    listaProductos.innerHTML = ''
    stock.forEach((prod) => {
        if (prod.categoria === "BATERIA") {
            const {id,nombre,precio,imagen,descripcion} = prod
            listaProductos.innerHTML += `
            <div class="card bg-card card-producto" style="width: 16rem;">
                <img src="${imagen}" class="card-img-top px-2 py-2" alt="...">
                <div class="card-body">
                    <h4 class="card-title color login-text">$ ${precio}</h4>
                    <h5 class="card-title color color-titulo">${nombre}</h5>
                    <p class="card-text">${descripcion}</p>
                    <button class="btn btn-primary" id="ver-producto-btn">Ver Producto</button>
                    <button onclick="enviarCarrito(${id})" class="btn btn-primary">Agregar al Carrito</button>
                </div>
            </div>   
            `       
        }
    })
}

function eliminarProdCarrito(id) {
    let idProd = id
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === idProd) {
            carrito.splice(i,1)
        }
    }
    verCarrito()
}

function guardarCarrito() {
    localStorage.setItem("tuCarrito", JSON.stringify(carrito))
}

//ARRAYS

const stock = []

const carrito = []

//CLASES

class Producto {
    constructor (id, nombre,precio,imagen,descripcion,categoria) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.imagen = imagen
        this.descripcion = descripcion
        this.categoria = categoria
    }
}

//OBJETOS

let producto1 = new Producto(
    1,
    "Fender Stratocaster",
    415000,
    "../img/fender Strat.jpg",
    "Sonido limpio y excelente digitacion.",
    "GUITARRA"
)
let producto2 = new Producto(
    2,
    "G. Shelter (5 cuerpos)",
    252000,
    "../img/bateria.jpg",
    "Agresividad y percucion lineal.",
    "BATERIA"
)
let producto3 = new Producto(
    3,
    "Fender Stratocaster",
    415000,
    "../img/fender Strat.jpg",
    "Sonido limpio y excelente digitacion.",
    "GUITARRA"
)

let producto4 = new Producto(
    4,
    "Yamaha P-45",
    347000,
    "../img/piano.jpg",
    "Excelente golpe de martillo y sensibilidad.",
    "PIANO"
)

let producto5 = new Producto(
    5,
    "Fender Stratocaster",
    415000,
    "../img/fender Strat.jpg",
    "Sonido limpio y excelente digitacion.",
    "GUITARRA"
)
let producto6 = new Producto(
    6,
    "G. Shelter (5 cuerpos)",
    252000,
    "../img/bateria.jpg",
    "Agresividad y percucion lineal.",
    "BATERIA"
)
let producto7 = new Producto(
    7,
    "Fender Stratocaster",
    415000,
    "../img/fender Strat.jpg",
    "Sonido limpio y excelente digitacion.",
    "GUITARRA"
)

let producto8 = new Producto(
    8,
    "Yamaha P-45",
    347000,
    "../img/piano.jpg",
    "Excelente golpe de martillo y sensibilidad.",
    "PIANO"
)

stock.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8)

//PROGRAMA PRINCIPAL

/////LISTADO DE PRODUCTOS/////

//DOM

let listaProductos = document.getElementById("lista-productos")
let home = document.getElementById("home")
let guitarras = document.getElementById("guitarras")
let pianos = document.getElementById("pianos")
let baterias = document.getElementById("baterias")
let todos = document.getElementById("todos")

//EVENTOS

document.addEventListener("DOMContentLoaded", verTienda)

home.addEventListener("click", irAlInicio)

guitarras.addEventListener("click", verGuitarras)

pianos.addEventListener("click", verPianos)

baterias.addEventListener("click", verBaterias)

todos.addEventListener("click", verTienda)










