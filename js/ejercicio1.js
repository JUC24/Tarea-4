/**
  1- Generar un programa que pida los años de edad de una persona, con esta edad se
  genera un if el cual determinará su ciclo de vida si la persona tiene igual o menos de 3 años
  es un bebe, si su edad es igual o mayor a 4 años pero menor a 12 es un niño, si es igual o
  mayor a 12 años pero menor a 18 años está en la adolescencia, si es igual o mayor a 18
  pero menor a 65 es adulto, si es igual o mayor a 65 años es adulto mayor.
*/
let edad = prompt("Ingrese su edad: ")

if (edad <=3){
  console.log ("Es un bebe")
}else if (edad >=4 && edad < 12){
  console.log ("Es un niño")
}else if (edad >= 12 && edad < 18){
  console.log ("Es un adolecente")
}else if (edad >= 18 && edad < 65){
  console.log ("Es un adulto")
}else if (edad >= 65){
  console.log ("Es un adulto mayor")
}
else {
  console.log()
}