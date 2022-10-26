//LOS PRODUCTOS SE VAN AGREGANDO.
const fragment = document.createDocumentFragment(); //CREAN ESPACIO DONDE IRA LA CARD
const templateCard = document.getElementById('template-card').content; //LA CARD
const items = document.getElementById('listar-productos')
//MI ARRAY DE OBJETOS (PRODUCTOS EN VENTA)
class Producto {

    constructor(item){
        this.id = item.id;
        this.titulo = item.titulo
        this.imagen = item.imagen
        this.precio = item.precio
        this.descripcion= item.descripcion
    }

};

const agregarProductos = [
    new Producto ({id: "1", titulo: "todo en acero blanco y acero dorado", imagen: "./img/banner06.png" ,precio: 1599, descripcion: "Joyas de calidad , delicadas para usar en todo momento "}),
    new Producto ({id: "2", titulo: "todo en acero blanco y acero dorado", imagen: "./img/banner04.png" ,precio: 2000, descripcion:"Joyas de calidad , delicadas para usar en todo momento"}),
    new Producto({ id: "3", titulo: "todo en acero blanco y acero dorado ", imagen: "./img/banner05.png", precio: 1900, descripcion: "Joyas de calidad , delicadas para usar en todo momento " }),
    new Producto ({id: "4", titulo: "todo en acero blanco y en acero dorado ", imagen: "./img/banner07.png" , precio: 2500, descripcion:" Joyas de calidad , delicadas para usar en todo momento."}),
    new Producto ({id: "5", titulo: "todo en acero blanco y acero dorado", imagen: "./img/banner08.png" , precio: 1500, descripcion:"Joyas de calidad , delicadas para usar en todo momento"}),
    new Producto ({id: "5", titulo: "todo en acero blanco y acero dorado", imagen: "./img/banner09.png" , precio: 3000, descripcion:" Joyas de calidad , delicadas para usar en todo momento."}),
];

//CREANDO CARDS

agregarProductos.forEach((item) => {
    templateCard.querySelector('h3').textContent = item.titulo
    templateCard.querySelector('span').textContent = item.precio
    templateCard.querySelector('img').setAttribute("src", item.imagen)
    templateCard.querySelector('p').textContent = item.descripcion
    templateCard.querySelector('.agregar-carrito').dataset.id = item.id


    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
})
//SE PINTA LA CARD
items.appendChild(fragment)