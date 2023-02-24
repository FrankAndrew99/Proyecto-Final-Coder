//FUNCIONES

function infoCompra() {
    compra.forEach((prod) => {
        const {nombre,precio,imagen,cantidad} = prod
        listaPedido.innerHTML += `
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item lista-imagen">
                <img src="${imagen}" class="card card-producto" style="width: 10rem; height: 10rem;">
            </li>
            <li class="list-group-item lista-nombre">${nombre}</li>
            <li class="list-group-item lista-precio">${precio}</li>
            <li class="list-group-item lista-cantidad">${cantidad}</li>
            <li class="list-group-item lista-subtotal">$${cantidad*precio}</li>
        </ul>
        <hr>
        `
    })

    total()
}

function total() {
    totalPedido.innerHTML = `$${compra.reduce((acc,prod) => acc + prod.cantidad * prod.precio,0)}`
}

function alertaFinal() {
    swal({
        title: "Gracias por tu compra!!!",
        text: "Que disfrutes de nuestros productos. Esperamos verte pronto ;) .",
        button: "Volver a la tienda",
        icon: "success",
        iconWidth: 30,
        iconHeight: 50,
        color: "green"
    }).then((value) => {
        location.href = "index.html"
      });
}

function procesarCompra() {
    compra.splice(0,compra.length)
    localStorage.setItem("tuCarrito", JSON.stringify(compra))
    alertaFinal()
}

function cancelarCompra() {
    alerta("Compra cancelada", "red")
    setTimeout(function () {location.href = "index.html"}, 1300)
}

function alerta(mensaje, pigmento) {
    Toastify({
        text: mensaje,
        duration: 1100,
        gravity: 'bottom', // top o bottom
        position: 'right', // left, center o right
        offset: {
            x: 300,
            y: 20
        },
        stopOnFocus: true,
        style: {
            background: pigmento,
            color: 'white',
            borderRadius: '5%'
        }
    }).showToast()
}



//PRINCIPAL

const compra = JSON.parse(localStorage.getItem("tuCarrito"))

document.addEventListener("DOMContentLoaded", infoCompra)

let listaPedido = document.getElementById("prueba")

let totalPedido = document.getElementById("total-pedido")

let btnProcesarCompra = document.getElementById("btn-procesar-compra")

let btnCancelarCompra = document.getElementById("btn-cancelar-compra")

//EVENTOS

btnProcesarCompra.addEventListener("click", procesarCompra)

btnCancelarCompra.addEventListener("click", cancelarCompra)