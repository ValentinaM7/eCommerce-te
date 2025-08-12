
const tarjetitas = document.getElementById('tarjetitas')

const tes =[
    {
        id: 1,
        nombre: "Té Negro — English Breakfast",
        descripcion: "Cuerpo pleno, ideal para empezar el día.",
        precio: "$6.00 / 50g",
        imagen: src="img/te_negro.png", 
        alt:"Imagen té negro"
    },
    {
        id: 2,
        nombre: "Te verde - Sencha",
        descripcion: "Notas vegetales y refrescantes, bajo en cafeína.",
        precio: "$7.00 / 50g",
        imagen: src="img/te_verde.png", 
        alt:"Imagen té verde"
    },
    {
        id: 3,
        nombre: "Té Blanco — Bai Mudan",
        descripcion: "Sutil y floral, extracción delicada.",
        precio: "$9.00 / 50g",
        imagen:  src="img/te_blanco.png", 
        alt:"Imagen té blanco"
    },
    {
        id: 4,
        nombre: "Té Blanco — Bai Mudan",
        descripcion: "Semi-oxidado, con aroma a frutas y miel.",
        precio: "$10.00 / 50g",
        imagen: src="img/oolong.png", 
        alt:"Imagen té Oolong"
    },
];


const ListaDeTes = () => {
    tes.forEach((producto) => {
        tes.innerHTML += `
            <div class="card" role="listitem" aria-label="${tes.nombre}">
                <img src=${tes.imagen} alt= ${tes.nombre}/>
                <h2>${tes.nombre}</h2>
                <p>${tes.descripcion}</p>
                <p>${tes.precio}</p>
                <button type="button">Agregar al carrito</button>
            </div>
        `;
    });
}

ListaDeTes();