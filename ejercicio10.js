/**
  10- pedir que se digite un año y que este indique si hay mundial o no que cuente desde el
  2002 recordar que los mundiales son cada 4 años.
*/

let año = prompt("Ingrese un año para saber si hubó o habrá un MUndial")

if (año % 4 == 2){
  alert("En el año " + año + " hubo o se va a realizar un mundial football.")
}
else if (año % 4 != 2) {
  alert ("En el año " + año + " No se realizo, ni se realizara un mundial de football.")
}

/**Valeria Jimenez, colaboró en el codigo */