/**
  4-Generar un programa en el cual cuando una persona digite un hola en todas sus formas
  como por ejemplo Hola,hola,HOLA,ola,hi,hello este debe responder hola,buen día.
*/

let saludo = prompt("¡HOLA¡ Saluda de vuelta ;) , Escribe de alguna manera que conoscas HOLA: ")

if ( saludo == "HOLA" | saludo == "Hola" | saludo == "hola"){
  alert ("Hola, buen día")
}
else if(saludo == "ola" | saludo == "OLA"){
  alert ("Hola, buen día")
}
else if(saludo == "Hi" | saludo == "hi" | saludo == "Hello" | saludo == "hello"){
  alert ("Hola, buen día")
}
else{
  alert("Escriba de alguna forma Hola")
}