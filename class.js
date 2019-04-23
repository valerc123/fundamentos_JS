function Persona(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = function(altura){
        try {
            if(isNaN(altura)) throw('Esto no es un numero') //validar que el parametro si sea int
            if(altura > 1.80){
                console.log('Eres alto')
            }
            else{console.log('no eres alto')}

        }catch(e){
            console.log(e)
        }
    }
}
var sacha = new Persona('sacha','Rua')
var sara = new Persona('sara','Ruiz')

Persona.prototype.saludar = function (){
  console.log(`hola soy ${this.nombre} ${this.apellido}`)
}
console.log(sara.altura(2))



