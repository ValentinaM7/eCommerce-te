
const carritoButton = document.getElementById("carrito-button")
const carritoAside = document.getElementById ("cart")
const cerrarCarrito = document.getElementById("close-cart")
const tarjetitas = document.getElementById('tarjetitas') //1) Traemos la info de tarjetitas desde el HTML 
const carritoImagen = document.getElementById('carrito-button')
const carritoFisicoInterno = document.getElementById('carrito-fisico-interno')
const total = document.getElementById('total')
const finalizarCompra = document.getElementById('finalizar')

let carrito = [] // si esta como constante no se puede reasignar, por eso le ponemos let

carritoButton.addEventListener('click', () => { //Aca hicimos que la lista de productos a comprar que no se ve, se vea al hacer click en el carrito
    carritoAside.classList.toggle('show')
})

cerrarCarrito.addEventListener('click', () => {
    carritoAside.classList.toggle('show')
})

//2- Array de productos - nuestra base de datos
const tes =[
    {
        id: 1,
        nombre: "Té Negro — English Breakfast",
        descripcion: "Cuerpo pleno, ideal para empezar el día.",
        precio: "$6",
        imagen: "img/english_breakfast.png", 
    },
    {
        id: 2,
        nombre: "Te verde - Sencha",
        descripcion: "Notas vegetales y refrescantes, bajo en cafeína.",
        precio: "$7",
        imagen: "img/te_verde.png", 
    },
    {
        id: 3,
        nombre: "Té Blanco — Bai Mudan",
        descripcion: "Sutil y floral, extracción delicada.",
        precio: "$9",
        imagen: "img/te_blanco.png", 
    },
    {
        id: 4,
        nombre: "Te Oolong",
        descripcion: "Semi-oxidado, con aroma a frutas y miel.",
        precio: "$10",
        imagen: "img/oolong.png", 
    },
]


const calculadoraTotal = () =>{
    let totalAPagar = carrito.reduce((acc, el) => {
        const soloNumero = parseFloat(el.precio.replace("$", ""))
        return (acc += soloNumero)
    },0)

    return totalAPagar
}

const SumaAlCarrito = () => {       //aca hacemos que se vea lo que compramos en la lista.
    carritoFisicoInterno.innerHTML = ''
    carrito.forEach((producto) => {
        carritoFisicoInterno.innerHTML += `<div>
        <h3>${producto.nombre}</h3> 
        <p>${producto.precio}</p>
        </div>` 
    })

    let CalculoAPagar = calculadoraTotal()

    total.innerHTML = `<p class= "total"> Total: $ ${CalculoAPagar}</p>`
    console.log(CalculoAPagar)
}


const AgregadoraDeEvento =() => { //5-Vamos agregando productos sin aun imprimir en el html
    const botonesAgregar = document.querySelectorAll('.agregarAlCarrito') //Traemos todos los botones del html
    const arraydeBotones = Array.from (botonesAgregar) //Tuki, transformamos los botones en un array para que sea mas facil llegar a ellos

    arraydeBotones.forEach(botonesAgregar => {  //recorremos cada boton y agregamos un evento por cada uno
        botonesAgregar.addEventListener("click", (event) =>{
            //console.dir(event.target.parentNode.id) //para Ver todas las propiedades de un objeto JS o explorar objeto complejo
            let id = event.target.parentNode.id
            console.log (id)

            let producto = tes.find((el) => el.id == id)
            carrito.push({...producto})

            console.log(carrito)
            SumaAlCarrito()
        })
    })
}

const ListaDeTes = () => {   //3- Aca creamos la "plantilla base o tarjeta" para todos los productos - En la constante ListaDeTes, usamos la funcion for Each para recorrer cada Array. Con InnerHtml hacemos que la info se "imprima" en nuestra pantalla
    tes.forEach((te) => {
        tarjetitas.innerHTML += `<div class="card" id=${te.id} aria-label=${te.nombre}>
                <img 
                    src=${te.imagen} 
                    alt= ${te.nombre}
                />
                <h2>${te.nombre}</h2>
                <p>${te.descripcion}</p>
                <p>${te.precio}</p>
                <button class='agregarAlCarrito' type="button">Agregar al carrito</button>
            </div>
        `;
    });
    AgregadoraDeEvento()
}

finalizarCompra.addEventListener("click", () => {
    carrito = []
    SumaAlCarrito()
})

ListaDeTes(); // 4-Ejecucion de la funcion foreach