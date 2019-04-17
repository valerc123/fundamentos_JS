// var x = 4, y = "4"

// var sacha = {
//     nombre : "sacha",
//     ingeniero: true,
//     edad:8,
//     drone: true,
//     dj:false,
//     guitarrista: false
// }
// const esMayorDeEdad = ({ edad }) => edad >= 18
// const esMenorDeEdad = ({edad}) => !esMayorDeEdad({edad})

//introduccion arrays
var sacha = {
   nombre: 'Sacha',
   apellido: 'Lifszyc',
   altura: 1.72,
   cantidadDeLibros: 111
}

var alan = {
   nombre: 'Alan',
   apellido: 'Perez',
   altura: 1.86,
   cantidadDeLibros: 78
}

var martin = {
   nombre: 'Martin',
   apellido: 'Gomez',
   altura: 1.85,
   cantidadDeLibros: 132
}

var dario = {
   nombre: 'Dario',
   apellido: 'Juarez',
   altura: 1.71,
   cantidadDeLibros: 90
}

var vicky = {
   nombre: 'Vicky',
   apellido: 'Zapata',
   altura: 1.56,
   cantidadDeLibros: 91
}

var paula = {
   nombre: 'Paula',
   apellido: 'Barros',
   altura: 1.76,
   cantidadDeLibros: 182
}


var personas = [sacha, alan, martin, dario, vicky, paula]

for(var i =  0; i < personas.length; i++)
{
    var x = personas[i]
    console.log(`${x.nombre} mide ${x.altura}`)
}

// FILTRAR ARRAYS
// filtrar las personas altas 
const esAlta = ({altura}) => { //recibe cada uno de los elementos del array
    return altura > 1.8
}
const esBaja = ({altura})=> { 
    return !esAlta({altura})
}
var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
console.log(personasAltas)


//TRANSFORMAR UN ARRAY
pasarAlturaCms = persona => {
   return {... persona, altura: persona.altura *= 100 } //se crea otro arreglo para no modificar el original
}
var personasCms = personas.map(pasarAlturaCms)

//REDUCIR UN ARRAY
//sacar ls cantidad total de libros

//opcion 1. acumulador
let acum = 0;
for(var i = 0; i < personas.length; i++)
{
   acum = acum + personas[i].cantidadDeLibros 
}
console.log(`hay ${acum} libros`)

//opcion 2. reduce
const reducer = (acum, personas) => {
   return acum + personas.cantidadDeLibros
}
var totalLibros = personas.reduce(reducer,0)
console.log(`hay ${totalLibros} libros`)