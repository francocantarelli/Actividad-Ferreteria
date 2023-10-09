let prodJSON = [];
document.addEventListener("DOMContentLoaded", async () => {
  productos = await fetch("productos.json");
  prodJSON = await productos.json();
  console.log(prodJSON);

  function showCategoriesList(products) {
    let htmlContentToAppend = "";
    for (const producto of products.productos) {
      htmlContentToAppend += `
            <div class=" col-sm-12 col-md-6  col-lg-4 col-xl-3">
              <div class="card" >
                  <div class="imgContainer"><img src="${producto.imagen}" class="card-img-top" alt="..."> </div>
                  <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">$${producto.costo_en_pesos_uruguayos}</p>
                      <p class="card-text">${producto.descripcion}</p>
                      <button onclick="mandarCarrito(${producto.identificacion})" class="btn btn-primary">Comprar</button>
                  </div>
              </div>
            </div>`;
    }
    document.getElementById("product").innerHTML = htmlContentToAppend;
  }
  showCategoriesList(prodJSON);
});

function mandarCarrito(id) {
  const productoEncontrado = prodJSON.productos.find((item) => item.identificacion == id);
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  if (carrito.find( (item)=> item.identificacion == productoEncontrado.identificacion)) {
    for (const item of carrito) {
      if (item.identificacion == productoEncontrado.identificacion) {
        item.cantidad++;
      }
    }
  } else {
    productoEncontrado.cantidad = 1;
    carrito.push(productoEncontrado);
  }
  
  
  localStorage.setItem("carrito", JSON.stringify(carrito));
}