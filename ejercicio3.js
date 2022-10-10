/**
  3-Generar un programa que le pida a una persona un país, con este dato se debe
  determinar de qué continente es el país si este es de África, América, Asia u Oceanía.
  lista de países:
  América: Costa Rica, Argentina, Colombia, Nicaragua, Panamá, Uruguay, Estados Unidos, Canadá, México
  Europa: España, Italia, Francia, Rumania, Inglaterra, Alemania
  África: Nigeria, Kenia, Ghana, Marruecos, Senegal
  Oceanía: Nueva Zelanda 😈, Australia, Fiyi, Tonga
*/

let pais = prompt("Ingrese el nombre de un pais.")

if ( pais.toLowerCase() == "costa rica" | pais.toLowerCase() == "costarica"){
  alert ("Este es un país de America")
}
else if(pais.toLowerCase() == "argentina"){
  alert ("Este es un país de America")
}
else if(pais.toLowerCase() == "colombia"){
  alert ("Este es un país de America")
}
else if(pais.toLowerCase() == "nicaragua"){
  alert ("Este es un país de America")
}
else if(pais.toLowerCase() == "panama"){
  alert ("Este es un país de America")
}
else if(pais.toLowerCase() == "uruguay"){
  alert ("Este es un país de America")
}
else if(pais.toLowerCase() == "estados unidos" | pais.toLowerCase() == "estadosunidos" | pais.toLowerCase() == "usa"){
  alert ("Este es un país de America")
}
else if(pais.toLowerCase() == "canada"){
  alert ("Este es un país de America")
}
else if(pais.toLowerCase() == "mexico"){
  alert ("Este es un país de America")
}
else if (pais.toLowerCase() == "españa"){
  alert ("Este es un país de Europa")
}
else if (pais.toLowerCase() == "italia"){
  alert ("Este es un país de Europa")
}
else if (pais.toLowerCase() == "francia"){
  alert ("Este es un país de Europa")
}
else if (pais.toLowerCase() == "rumania"){
  alert ("Este es un país de Europa")
}
else if (pais.toLowerCase() == "inglaterra"){
  alert ("Este es un país de Europa")
}
else if (pais.toLowerCase() == "alemania"){
  alert ("Este es un país de Europa")
}
else if (pais.toLowerCase() == "nigeria"){
  alert ("Este es un país de África")
}
else if (pais.toLowerCase() == "kenia"){
  alert ("Este es un país de África")
}
else if (pais.toLowerCase() == "ghana"){
  alert ("Este es un país de África")
}
else if (pais.toLowerCase() == "marruecos"){
  alert ("Este es un país de África")
}
else if (pais.toLowerCase() == "senegal"){
  alert ("Este es un país de África")
}
else if (pais.toLowerCase() == "nueva zelanda" | pais.toLowerCase() == "nuevazelanda"){
  alert ("Este es un país de oceanía")
}
else if (pais.toLowerCase() == "australia"){
  alert ("Este es un país de oceanía")
}
else if (pais.toLowerCase() == "fiyi"){
  alert ("Este es un país de oceanía")
}
else if (pais.toLowerCase() == "tonga"){
  alert ("Este es un país de oceanía")
}
else{
  alert ("Ingrese el nombre de un pais")
}
/**.replace(/ /g, "") = sirve para quitar espacios entre palabras */
/**.toLowerCase() : sirve para hacer cualquier palbra que se ingrese en minuscula */