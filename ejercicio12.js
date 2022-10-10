/**
  12-pedir que se digite un país y que se indique si este país ha ganado un mundial.
  Brasil, Italia, Alemania, Francia, Argentina, Uruguay, España, Inglaterra.
*/

let pais = prompt("Ingrese el nombre de un país, que desee saber si ha ganado un mundial: ")

if (pais.toLowerCase() == "brazil" | pais.toLowerCase() == "italia" | pais.toLowerCase() == "alemani"){
  alert ("Este país ha ganado Copas Munduiales de Football Soccer")
}
else if (pais.toLowerCase() == "francia" | pais.toLowerCase() == "argentina" | pais.toLowerCase() == "uruguay"){
  alert ("Este país ha ganado Copas Munduiales de Football Soccer")
}
else if (pais.toLowerCase() == "españa" | pais.toLowerCase() == "inglaterra"){
  alert ("Este país ha ganado Copas Munduiales de Football Soccer")
}
else {
  alert ("Este país no ha ganado Copas Mundiales de football Soccer")
}