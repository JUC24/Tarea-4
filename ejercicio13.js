/** 
  13-pedir que digite un jugador de fútbol y que diga si es el mejor del mundo o no,
  solo puede decir que messi o cristiano o maradona son los mejores.
*/

let jugador = prompt ("Igrese el nombre de algun jugador de football, para saber si es el mejor del mundo o no: ")

if (jugador.toLowerCase() == "messi"| jugador.toLowerCase() == "cristiano ronaldo" | jugador.toLowerCase() == "maradona "){
  alert ("Está en el top 3, de mejores jugadores del mundo")
}
else{alert ("No está en el top 3 de mejores jugadores del mundo")}