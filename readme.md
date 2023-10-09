Propuesta:

La empresa "Barraca Ladrillos SRL" solicita al equipo de Jóvenes a Programar un
software para control de stock de mercaderías y un carrito. Necesitan que el software tenga
las siguientes funcionalidades:

1) Registro de productos, con los campos: identificación (debe ser único),
nombre, descripción, cantidad en stock, costo asociado al producto (en pesos). Pueden
inventar un JSON, mínimo 20 productos.

2) Carrito con costo del total de la compra: Si paga en efectivo hay 10% de descuento. Si
paga con crédito hay un 7% de aumento. Con débito se mantiene el precio.

3) Los datos ingresados deben ser consistentes, si se genera una venta, debe modificarse el
stock del producto correspondiente.

4) Debe funcionar adecuadamente en celulares.


Desafíense:
- En el carrito, por cada producto crear un botón "ELIMINAR" para quitar dicho producto.
- Crear un botón "COMPRAR" que nos muestre el total de la compra realizada. (Pueden
utilizar un prompt o un alert por ejemplo)


Puede que les sea útil la siguiente documentación:
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
JSON.stringify() - JavaScript | MDN (mozilla.org)
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event


1) pagina index : muestre todos los productos, en cards? :nombre,precio,descripcion, boton agregar al carrito
2) pagina carrito : sub total en pesos, boton eliminar y aumentar cantidad producto.

3) pagina carrito: calcular logica de pago en efectivo (10% descuento) y calcular logica de credito (7%aumento)
4) checkear consistencia de datos, script validarDatos.js ?
5) responsive para index, carritos.
6) Json -

1) Nahuel y Cami 
2) Ignacio y Fede
 
3) 
4) 
5) 