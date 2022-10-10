/**
  5-Generar un programa en el cual una persona digite un buenos días, buenas tardes o
  buenas noches y según lo que digite esta persona se le contesta de la misma forma buenos
  días,buenas tardes,buenas noches.
*/

let saludo = prompt("Escriba: Buenos días, Buenas tardes o Buenas noches: ")

if ( saludo.toLowerCase() == "buenos dias" | saludo.toLowerCase() == "buenos días" | saludo.toLowerCase() == "buenosdias" | saludo.toLowerCase() == "buenosdías"){
  alert ("Buenos días")
}
else if(saludo.toLowerCase() == "buenas tardes" | saludo.toLowerCase() == "buenastardes"){
  alert ("Buenas tardes")
}
else if(saludo.toLowerCase() == "buenas noches" | saludo.toLowerCase() == "Buenasnoches"){
  alert ("Buenas noches")
}
else{("Ingrese alguno de los saludos anteriormente solicitados")}