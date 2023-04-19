// Selecciona todos los elementos de producto en el catálogo
const productItems = document.querySelectorAll('.catalog li');

// Agrega una animación cuando el mouse se mueve sobre un elemento de producto
productItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.1)';
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
  });
});





const listadoArticulosDOM = document.querySelector("#listado-articulos");
const botonAtrasDOM = document.querySelector("#atras");
const informacionPaginaDOM = document.querySelector("#informacion-pagina");
const botonSiguienteDOM = document.querySelector("#siguiente");
const plantillaArticulo = document.querySelector("#plantilla-articulo").content.firstElementChild;
const elementosPorPagina = 12;
let paginaActual = 1;
const baseDeDatos = [
  {
    "UserId": 1,
    "Id": 1,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del Producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 2,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 3,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 4,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 5,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 6,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 7,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 8,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 9,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 10,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 11,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 12,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 13,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 14,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 15,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 16,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 17,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 18,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 19,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 20,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 21,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 22,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 23,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 24,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 25,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 26,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 27,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 28,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 29,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 30,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 31,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 32,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 33,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 34,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 35,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 36,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 37,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 38,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 39,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 40,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 41,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 42,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 43,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 44,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 45,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 46,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 47,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 48,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 49,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 50,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 51,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 52,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 53,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 54,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 55,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 56,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 57,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 58,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 59,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 60,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 61,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 62,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 63,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 64,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 65,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 66,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 67,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 68,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 69,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 70,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 71,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 72,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 73,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 74,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 75,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 76,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 77,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 78,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 79,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 80,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 81,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 82,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 83,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 84,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 85,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 86,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 87,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 88,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 89,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 90,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 91,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 92,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 93,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 94,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 95,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 96,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 97,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 98,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 99,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 100,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 101,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 102,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 103,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 104,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 105,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 106,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 107,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 108,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 109,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 110,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 111,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 112,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 113,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 114,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 115,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 116,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 117,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 118,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 119,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 120,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 121,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 122,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 123,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 124,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 125,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 126,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 127,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 128,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 129,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 130,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 131,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 132,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 133,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 134,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 135,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 136,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 137,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 138,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 139,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 140,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 141,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 142,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 143,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 144,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 145,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 146,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 147,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 148,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 149,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  }, {
    "UserId": 1,
    "Id": 150,
    "title": "Nombre del Producto",
    "price": "$XX.XX",
    "desc": "Descripcion del producto",
    "img": "media/download.png",
  },

];

// --
// Funciones
// --

/**
 * Función que pasa a la siguiente página
 * @return void
 */
function avanzarPagina() {
  // Incrementar "paginaActual"
  paginaActual = paginaActual + 1;
  // Redibujar
  renderizar();
}

/**
 * Función que retrocedea la página anterior
 * @return void
 */
function retrocederPagina() {
  // Disminuye "paginaActual"
  paginaActual = paginaActual - 1;
  // Redibujar
  renderizar();
}

/**
 * Función que devuelve los datos de la página deseada
 * @param {Int} pagina - Número de página
 * @return {Array<JSON>}
 */
function obtenerRebanadaDeBaseDeDatos(pagina = 1) {
  const corteDeInicio = (paginaActual - 1) * elementosPorPagina;
  const corteDeFinal = corteDeInicio + elementosPorPagina;
  return baseDeDatos.slice(corteDeInicio, corteDeFinal);
}

/**
 * Función que devuelve el número total de páginas disponibles
 * @return {Int}
 */
function obtenerPaginasTotales() {
  return Math.ceil(baseDeDatos.length / elementosPorPagina);
}

/**
 * Función que gestiona los botones del paginador habilitando o
 * desactivando dependiendo de si nos encontramos en la primera
 * página o en la última.
 * @return void
 */
function gestionarBotones() {
  // Comprobar que no se pueda retroceder
  if (paginaActual === 1) {
    botonAtrasDOM.setAttribute("disabled", true);
  } else {
    botonAtrasDOM.removeAttribute("disabled");
  }
  // Comprobar que no se pueda avanzar
  if (paginaActual === obtenerPaginasTotales()) {
    botonSiguienteDOM.setAttribute("disabled", true);
  } else {
    botonSiguienteDOM.removeAttribute("disabled");
  }
}

/**
 * Función que se encarga de dibujar el nuevo DOM a partir de las variables
 * @return void
 */
function renderizar() {
  // Limpiamos los artículos anteriores del DOM
  listadoArticulosDOM.innerHTML = "";
  // Obtenemos los artículos paginados
  const rebanadaDatos = obtenerRebanadaDeBaseDeDatos(paginaActual);
  //// Dibujamos
  // Deshabilitar botones pertinentes (retroceder o avanzar página)
  gestionarBotones();
  // Informar de página actual y páginas disponibles
  informacionPaginaDOM.textContent = `${paginaActual}/${obtenerPaginasTotales()}`;
  // Crear un artículo para cada elemento que se encuentre en la página actual
  rebanadaDatos.forEach(function (datosArticulo) {
    // Clonar la plantilla de artículos
    const miArticulo = plantillaArticulo.cloneNode(true);
    // Rellenamos los datos del nuevo artículo
    const productIDs = [
      "MLA18638143", "MLA8063362", "MLA6347697", "MLA19852752", 
     ]
     
     productIDs.forEach(id => {
       fetch(`https://api.mercadolibre.com/items?ids=MLA830724206`)
         .then(response => response.json())
         .then(product => {
           const productContainer = document.getElementsById(".item");
           const productImage = productContainer.querySelector(".img");
           const productName = productContainer.querySelector(".title");
           const productDesc = productContainer.querySelector(".desc");
           const productPrice = productContainer.querySelector(".price");
     
           productImage.src = product.pictures[0].url;
           productName.textContent = product.title;
           productDesc.textContent = product.description;
           productPrice.textContent = `$${product.price}`;
         })
         .catch(error => console.error(`Error al mostrar el producto ${ID}: ${error.message}`));
     
     });
     
    // Lo insertamos dentro de "listadoArticulosDOM"
    listadoArticulosDOM.appendChild(miArticulo);
  });
}

// --
// Eventos
// --
botonAtrasDOM.addEventListener("click", retrocederPagina);
botonSiguienteDOM.addEventListener("click", avanzarPagina);

// --
// Inicio
// --
renderizar();

const productIDs = [
 "MLA18638143", "MLA8063362", "MLA6347697", "MLA19852752"
]

productIDs.forEach(id => {
  fetch(`https://api.mercadolibre.com/items?ids=MLA830724206`)
    .then(response => response.json())
    .then(product => {
      const productContainer = document.getElementsById(".item");
      const productImage = productContainer.querySelector(".img");
      const productName = productContainer.querySelector(".title");
      const productDesc = productContainer.querySelector(".desc");
      const productPrice = productContainer.querySelector(".price");

      productImage.src = product.pictures[0].url;
      productName.textContent = product.title;
      productDesc.textContent = product.description;
      productPrice.textContent = `$${product.price}`;
    })
    .catch(error => console.error(`Error al mostrar el producto ${ID}: ${error.message}`));

});



