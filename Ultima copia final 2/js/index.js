// Capturo boton de nightMode
let nightMode = document.querySelector("#nightMode")

// Le asigno el evento
nightMode.addEventListener("click", ()=>{
let body = document.querySelector(".nightMode");
activo = body.classList.toggle("nightMode-Active");

// Modifico el B-G del descuento 
let descuento = document.querySelector("#descuento")
descuento.classList.toggle("card-body-active")

// modifico las letras para que se lean en el modo nocturno
let tituloBajadaDescuento = document.querySelector("#cardTitle")
tituloBajadaDescuento.classList.toggle("card-title-active")
let bajadaDescuento = document.querySelector("#cardText")
bajadaDescuento.classList.toggle("card-text-active")

//Modifico el B-G del form y de la lista
let formulario = document.querySelector("#formFinal")
formulario.classList.toggle()

sessionStorage.setItem("ModoNoche", activo)
activoModoNoche = sessionStorage.getItem("ModoNoche")
})

// Capturo el boton login con icono 
let nombreDato = document.querySelector("#login")

//Capturo el contenedor del form de login
let contenedorFormLogin = document.querySelector("#contenedorFormLogin")
nombreDato.addEventListener("click", ()=>{
	//Al hacer click le sumo la clase active que muestra el formulario de login
	contenedorFormLogin.classList.toggle("formulario-login-active")
})

// capturo los input del form de login
let user = document.querySelector("#inputUser"),
passwordUser = document.querySelector("#password")

// ante el cambio del input name obtengo los datos ingresados 
user.addEventListener("change",(e)=>{

let valorInputName = e.target.value

	function crearId(valorInputName){	  
		if (!valorInputName == "") {
			// creo la variable id que registra los segundos como id unico  
			let fecha = new Date(); 
			let segundos = fecha.getSeconds();
			let id =  segundos   
			   console.log(id); 
				 
			let usuarioConId = valorInputName + "ID" + 1 + id;
				console.log(usuarioConId);
			
			let usuario;
			let usuarioConSession = sessionStorage.getItem("usuario")
			// Se fija si hay un usuario almacenado en la sessionStorage, si lo encuentra lo almacena en usuario, sino lo crea a travez del valor del inputName 
			if (usuarioConSession) {
				usuario = usuarioConSession
			}
			 usuario = sessionStorage.setItem("userName", valorInputName)
			}
			
				
			}
			crearId(valorInputName)
})

// ante el cambio del input password obtengo los datos ingresados 
passwordUser.addEventListener("change", (e)=>{
	let valorInputPass = e.target.value
	//guardamos contraseña en sessionStorage
	 localStorage.setItem("password",valorInputPass)
 passwordUnica = localStorage.getItem("password")
	console.log(passwordUnica);

	})



 // Array de Objetos con los productos de la App

	let productos = [{
		nombre: "Seguro Moto Classic",
		img: "./img/productos/SeguroMoto.jpg",
		titulo: "Lleva tu moto donde quieras, usuala tranquilo",
		descripcion: "sadsdadsadsadsadsadsadassda",
		precio: 6500
},
{
	    nombre: "Seguro Moto Plus",
		img: "./img/productos/SeguroMotoPLus.jpg",
		titulo: "La van a mirar muchisimo, vos estacionala tranquilo ",
		descripcion: "sadsdadsadsadsadsadsadassda",
		precio: 12500
}, 
{
	    nombre: "Seguro Auto Classic",
		img: "./img/productos/SeguroAuto.jpg",
		titulo: "Podes tener lo que quieras, hasta un clasico ",
		descripcion: "sadsdadsadsadsadsadsadassda",
		precio: 17500

}, 
{
	    nombre: "Seguro Auto Plus",
		img: "./img/productos/SeguroAutoPlus.jpg",
		titulo: "Para los mas detallistas que salen a la aventura",
		descripcion: "sadsdadsadsadsadsadsadassda",
		precio: 23500

}, 
{
	    nombre: "Seguro Embarcaciones Classic",
		img: "./img/productos/SeguroBarco.jpg",
		titulo: "Poder realizar cualquier actividad con nuestro respaldo",
		descripcion: "sadsdadsadsadsadsadsadassda",
		precio: 54500

}, 
{
	    nombre: "Seguro Embacaciones Plus",
		img: "./img/productos/SegurobarcoPlus.jpg",
		titulo: "Alta mar sin preocupaciones",
		descripcion: "sadsdadsadsadsadsadsadassda",
		precio: 123500

}]
	
	for (const producto of productos) {
		let productosVarios = document.querySelector("#productosVarios")

		let contenedor = document.createElement("div")
		contenedor.innerHTML = `<h2 class="titulo-producto" > ${producto.nombre} </h2>
		<div class=" d-flex content-center mb-25px" id="div-productos">                      
		                      <img src="${producto.img}" class="img-fluid" " alt="SeguroMoto">
							  <div class="d-flex justify-content-center" id="textoProductos"> 
							  <div class="card-body" id="${producto.nombre}">
							  <h5 class="card-title ">${producto.titulo}</h5>
							  <p class="card-text">${producto.descripcion} tan solo por <h3>$${producto.precio}</h3></p>
							  </div> 
							  </div>`
	   productosVarios.appendChild(contenedor)
	}

	//Convierto los Productos a JSON para enviarlos al nav en forma de string
	let productosEnJson = JSON.stringify(productos) 
    console.log(productosEnJson);
	let listaDeProductosEnSession = sessionStorage.setItem("productos", productosEnJson)

//Clientes que nos elijen (array de objetos que enviaremos a una lista en el home)

let clientesFieles =[{
    id: 1,
    nombre: "Juan Perez",
    vehiculo: "tesla Model S",
    km: 58000
},
{
    id: 2,
    nombre: "Miguel Ramirez",
    vehiculo: "Porche Taycan",
    km: 5000
},
{
    id: 3,
    nombre: "Brenda Sessolo",
    vehiculo: "Audi Q5",
    km:8000
},
{
    id: 4,
    nombre: "Diego Fernandez",
    vehiculo: "Aston Martin Db9",
    km: 500
}]


// // Datos de la lista de clientes 
 
tablaClientesFieles = document.querySelector("#tabla-clientes");


// * Rellenando datos de la lista dinamicamente

for (const cliente of clientesFieles) {
 	datosClientesFieles = document.querySelector("#columna-cliente")

	let listaClientesFieles = document.createElement("tr")
	listaClientesFieles.innerHTML = `<td>${cliente.id} </td>
	 	                          <td>${cliente.nombre} </td>
	 							  <td>${cliente.vehiculo} </td>
	 							  <td>${cliente.km} </td>
	 							  `
   datosClientesFieles.appendChild(listaClientesFieles)
}

// Funcionalidades a los nodos obtenidos

// botonEnviar.addEventListener("click", () => alert("revisa que este todo correcto!"));

//Obteniendo datos tarjeta
const tarjeta = document.querySelector('#tarjeta'),
	  btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
	  formulario = document.querySelector('#formulario-tarjeta'),
	  numeroTarjeta = document.querySelector('#tarjeta .numero'),
	  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
	  logoMarca = document.querySelector('#logo-marca'),
	  firma = document.querySelector('#tarjeta .firma p'),
	  mesExpiracion = document.querySelector('#tarjeta .mes'),
	  yearExpiracion = document.querySelector('#tarjeta .year');
	  ccv = document.querySelector('#tarjeta .ccv');


 // * Volteamos la tarjeta para mostrar el frente.
 const mostrarFrente = () => {
	if(tarjeta.classList.contains('active')){
		tarjeta.classList.remove('active');
	}
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
	formulario.classList.toggle('active');
});

// * Select del mes generado dinamicamente.
for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

	numeroTarjeta.textContent = valorInput;

	if(valorInput == ''){
		numeroTarjeta.textContent = '#### #### #### ####';

		logoMarca.innerHTML = '';
	}

	if(valorInput[0] == 4){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/visa.png';
		logoMarca.appendChild(imagen);
	} else if(valorInput[0] == 5){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/mastercard.png';
		logoMarca.appendChild(imagen);
	}

	// Volteamos la tarjeta para que el usuario vea el frente.
	mostrarFrente();
});

// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if(valorInput == ''){
		nombreTarjeta.textContent = 'Jhon Doe';
	}

	mostrarFrente();
});

// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;
	mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarFrente();
});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});






 


