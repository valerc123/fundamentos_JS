// promesas encadenadas, multiples promesas en paralelo
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id/'

const opts = { crossDomain: true } //pide la informacion a otra url


function obtenerPersonaje(id){

	return new Promise ((resolve, reject)=>{
		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`//url//remplaza el id por un 1
		//manera de hacer un request en jquery(url,opts,funcion)
		$.get(url, opts, data => {
				resolve(data)
			})
			.fail(()=> reject(id))//en caso de fallar
			
	})		
}

function onError(id){
	console.log(`Sucedió un error al obtener el personaje ${id}`)
}

//multiples Promesas en paralelo
// var ids = [1,2,3,4,5,6,7]
// var promesas = ids.map(id => obtenerPersonaje(id))
var ids = []

const promesas = () => {
  for(i = 1; i < 17; i++){
    ids.push(obtenerPersonaje(i));
  }
   return ids
}
promesas();
Promise.all(ids)
.then(personajes => console.log(personajes))
.catch(onError)



// //promesas encadenadas
obtenerPersonaje(1)
	.then(personaje1 =>{
        console.log(`El personaje 1 es ${personaje1.name}`)
        return obtenerPersonaje(2) //encadena promesas
    })
    .then(personaje2 =>{
        console.log(`El personaje 2 es ${personaje2.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje3 =>{
        console.log(`El personaje 3 es ${personaje3.name}`)
    })
    .catch(onError)//el catch es el mismo para todos funciona para todos