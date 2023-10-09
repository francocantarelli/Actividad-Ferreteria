document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  mostrarProductos();

  const check1 = document.getElementById("flexRadioDefault1");
  const check2 = document.getElementById("flexRadioDefault2");
  const check3 = document.getElementById("flexRadioDefault3");
  check1.addEventListener("change", total);
  check2.addEventListener("change", total);
  check3.addEventListener("change", total);
});
function mostrarProductos() {
  let total_a_agregar = 0;

  let appendCarrito = "";
  if (carrito.length > 0) {
    for (const item of carrito) {
      const subtotal = item.costo_en_pesos_uruguayos * item.cantidad;
      appendCarrito += 
      `
      <tr>
      <div id="top-cart">
        <th>${item.identificacion}</th>
        <td>${item.nombre}</td>
        <td>${item.cantidad}</td>
        <td>${item.descripcion}</td>
        <td>$${subtotal}</td>
        <td><img height="100" width="100" src=${item.imagen} alt=""></td>
        <td><i onclick="handleDelete(${item.identificacion})" class="fa-solid fa-trash" id="move-caracteristicas"></i></td>
        </div>
      </tr>
      `;
      total_a_agregar += subtotal;
    }
  } else {
    appendCarrito += `<p> Agregue productos a su lista </p>`;
  }
  document.getElementById("productos_del_carrito").innerHTML = appendCarrito;
  document.getElementById("total").innerHTML = total_a_agregar;
}

function handleDelete(id) {
  const producto = carrito.find((item) => item.identificacion == id);
  if (producto.cantidad > 1) {
    producto.cantidad--;
  } else {
    carrito = carrito.filter((item) => item.identificacion !== id);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarProductos();
}

function calcularTotal() {
  let subtotal = 0;
  for (const item of carrito) {
     subtotal += item.costo_en_pesos_uruguayos * item.cantidad;
  }
  return subtotal;
}
function total() {
  const debito = document.getElementById("flexRadioDefault1").checked;
  const credito = document.getElementById("flexRadioDefault2").checked;
  const efectivo = document.getElementById("flexRadioDefault3").checked;
  let total = calcularTotal();
  if (efectivo) {
    let porcentaje = total * (0.10);
    total -= porcentaje;
  }

  if (credito) {
    let porcentaje = total * (0.07);
    total += porcentaje;
  }
  document.getElementById("total").innerHTML = total;
}


const handleCheckOut = () => {
  alert ("Compra realizada con éxito!")
}
