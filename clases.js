//clases, herencia, funciones como parametros
class Persona{
    constructor(nombre, apellido, genero)
    {
        this.nombre = nombre
        this.apellido = apellido
        this.genero = genero
    }

    saludar(fn){
        let {nombre, apellido}= this
        console.log(`Hola me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre,apellido,false)
        }
    }
    soyAltX(){
        var altX = this.genero == 'masculino' ? 'alto' : 'alta'
        var string = this.altura >= 1.8 ? `Soy ${this.nombre} ${this.apellido} y sí, soy ${altX}.` 
                                        : `Soy ${this.nombre} ${this.apellido} y no, no soy ${altX}.`
        console.log(string)
    }
}

class Desarrollador extends Persona{
    constructor (nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(fn){
        let {nombre, apellido}= this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador.`)
        if(fn){
            fn(nombre,apellido,true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
   console.log(`Buen día ${nombre} ${apellido}`);
   if(esDev){
       console.log(`ah no sabía que eras desarrollador/a`);   
   }
}
 var sacha = new Persona("sacha", "sanchez", "niño")
 var sara = new Desarrollador("sara", "velez", 1.80)

sara.saludar(responderSaludo)
sacha.saludar(responderSaludo)