// callback con jQuery, y multiples callbacks,callbacks hell, promesas
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id/'

const opts = { crossDomain: true } //pide la informacion a otra url


function obtenerPersonaje(id){

	return new Promise ((resolve, reject)=>{
		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`//url//remplaza el id por un 1
		//manera de hacer un request en jquery(url,opts,funcion)
		$.get(url, opts, function(data){
				resolve(data)
			})
			.fail(()=> reject(id)
			)
	})		
}

function onError(id){
	console.log(`Sucedió un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
	.then(function(personaje){
		console.log(`El personaje 1 es ${personaje.name}`)
	})
    .catch(onError)

//callback hell
// obtenerPersonaje(1, function(){
//     obtenerPersonaje(2, function(){
//         obtenerPersonaje(3)
//     })
// })