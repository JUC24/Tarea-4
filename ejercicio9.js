/**
  9- generar un if en el cual si la persona pone que quiere algo salado le muestre pan de
  pizza, pan con jamón y queso, si pone algo dulce que muestre flauta de guayaba, cacho de
  dulce de leche, pañuelo de crema pastelera.
*/

let pedido = prompt ("Desea algop dulce o saldo ?: ")

if (pedido.toLowerCase() == "salado"){
  alert("Nuestra oferta para hoy es Pan de pizza, Pan con jamón y queso,")
}
else if (pedido.toLowerCase() == "dulce"){
  alert ("Nuestra oferta para hoy es Flauta de guayaba, Cacho de dulce de leche, Pañuelo de crema pastelera.")
}