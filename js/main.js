const productos = [
    {
        id: 1,
        nombre: "Campera Nike",
        precio: 50000,
        stock: true,
        imagen: "https://i.pinimg.com/736x/1f/ad/74/1fad740130ba5a5a52494fd64db7ceb5.jpg"
    },
    {
        id: 2,
        nombre: "Camiseta Barcelona",
        precio: 35000,
        stock: true,
        imagen: "https://i.pinimg.com/564x/f9/b1/5a/f9b15ab29ae4734e64acb41149f5f828.jpg"
    },
    {
        id: 1,
        nombre: "Buzo Adidas",
        precio: 40000,
        stock: true,
        imagen: "https://i.pinimg.com/564x/4d/2d/1c/4d2d1c2774e0ef6bbb46350cff0f7a7d.jpg"
    },
];

const container = document.getElementById("container");

productos.forEach(el => {
    const card = document.createElement("div");
    card.className = "card";

    const titulo = document.createElement("h2");
    titulo.innerText = el.nombre;

    const precio = document.createElement("h3");
    precio.innerText = `$${el.precio}`;

    const imagen = document.createElement("img");
    imagen.src = el.imagen;
    imagen.alt = "NOIMG";
    imagen.className = "img";

    card.appendChild(titulo);
    card.appendChild(precio);
    card.appendChild(imagen);

    container.appendChild(card);

});

const barraNavegacion = [
    {
        nombre : "Inicio",
    },
    {
        nombre : "Productos",
    },
    {
        nombre : "Sobre Nosotros",
    },
    {
        nombre : "Contacto",
    },
];

const barra = document.getElementById("encabezado");

barraNavegacion.forEach(el => {
    const div2 = document.createElement("div");
    div2.className = "div2";

    const seccion = document.createElement("p");
    seccion.innerText = el.nombre;

    div2.appendChild(seccion);
    barra.appendChild(div2);
})