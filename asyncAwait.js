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

async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6,7]
    var promesas = ids.map(id => obtenerPersonaje(id))
	try{
	var personajes = await Promise.all(promesas)
	console.log(personajes)
	} catch(id){
		onError(id)
	}
}

obtenerPersonajes()