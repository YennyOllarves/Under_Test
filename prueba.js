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

// git init // Inicializamos git en nuestro proyecto
// git remote add <url> // Conectamos git - github
// git chekcout -b <nombre_rama>
// git add . // Agrear al stage todos los archivos 
// git add prueba.js // Agrear al stage el archivo nombre_archivo
// git commit -m "Subiendo el archivo prueba.js al repositorio"  // ingresamos la descripcion del comit"
// git push origin <nombre_rama> // subir los cambios a git github
// git pull origin <nombre_rama> // traer los cambios de git github a mi entorno local