//Una variable es un conetedor o espacio en memoria que se utiliza para almacenar datos,
// Númeircos [Number], cadenas de texto [String], Bollean [true/false]

//Variable = el dato o valor cambia
//Declarar variable = var suma 1
//Inicializar una variable = 1

var suma_= 1

const pi = 3.141516

let suma = 1


//AMBITO DE BLOQUE
//La variable funcion, método etc son llamadas o son usados

//Ambito Global
let mascota_gato =  "Vigotes";
console.log(mascota_gato);
console.log(mascota_gato);

//Ambito X

{
    let mascota_gato = "Garfield";
    console.log(mascota_gato);
}

mascota_gato = "Rodolfo"
console.log(mascota_gato);