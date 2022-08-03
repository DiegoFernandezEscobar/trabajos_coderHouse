// // Codigo optimizado x cuestion de tiempo solo agrego unos ejemplos y despues lo aplico a todo el codigo

const swalWithBootstrapButtons = Swal.mixin({
	customClass: {
	  confirmButton: 'btn btn-success',
	  cancelButton: 'btn btn-danger'
	},
	buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
	title: 'Eres mayor de edad?',
	text: "Ingrese su edad para continuar",
	icon: 'warning',
	input: "number",
	showCancelButton: true,
	confirmButtonText: 'Si, soy mayor',
	cancelButtonText: 'Soy menor de edad',
	reverseButtons: true
  }).then((result) => {
	// Codigo optimizado como ejemplo 
	result.isConfirmed ? swalWithBootstrapButtons.fire(
		 	'Puedes Ingresar!',
		 	'Al ser mayor de edad puedes contratar un seguro.',
		 	'success'
		   ) : swalWithBootstrapButtons.fire(
			 	'No puedes Ingresar',
			 	'Es muy importante ser mayor de edad para poder navegar',
			 	'error'
			   ) 

  })
  
  // Codigo a perfeccionar que aun no funciona 

// let btnContratarProducto = document.querySelector("#btnContratar");
// console.log(btnContratarProducto + 1 );
// btnContratarProducto.addEventListener('click',()=>{

// 	console.log(btnContratar);
// 	Swal.fire({
// 		title: 'Are you sure?',
// 		text: "You won't be able to revert this!",
// 		icon: 'warning',
// 		showCancelButton: true,
// 		confirmButtonColor: '#3085d6',
// 		cancelButtonColor: '#d33',
// 		confirmButtonText: 'Yes, delete it!'
// 	  }).then((result) => {
// 		if (result.isConfirmed) {
// 		  Swal.fire(
// 			'Deleted!',
// 			'Your file has been deleted.',
// 			'success'
// 		  )
// 		}
// 	  })
// })
// Capturo el body 
// let nav = document.querySelector("#nav");
// function captarCliente(nav) {
	
// 	nav.addEventListener("mouseleave",()=>{
// 		console.log(1);
// 		const swalWithBootstrapButtons = Swal.mixin({
// 			customClass: {
// 			  confirmButton: 'btn btn-success',
// 			  cancelButton: 'btn btn-danger'
// 			},
// 			buttonsStyling: false
// 		  })
		  
// 		  swalWithBootstrapButtons.fire({
// 			title: 'Ya estas registrado?',
// 			text: "Para poder realizar la compra tenes que tener una cuenta!",
// 			icon: 'warning',
// 			showCancelButton: true,
// 			confirmButtonText: 'Si, tengo!',
// 			cancelButtonText: 'No, quiero registrarme!',
// 			reverseButtons: true
// 		  }).then((result) => {
// 			if (result.isConfirmed) {
// 			  swalWithBootstrapButtons.fire(
// 				'Excelente!',
// 				'Podes ingresar mediante el boton de login que se encuentra arriba a la derecha',
// 				'success'
// 			  )
// 			} else if (
// 			  /* Read more about handling dismissals below */
// 			  result.dismiss === Swal.DismissReason.cancel
// 			) {
// 			  swalWithBootstrapButtons.fire(
// 				'Cancelled',
// 				'No pierdas tiempo, podes registrarte desde el boton de login que se encuentra arriba a la derecha',
// 				'error'
// 			  )
// 			}
// 		  })
// 	})
// }


// Capturo boton de nightMode
let nightMode = document.querySelector("#nightMode")

// Le asigno el evento
nightMode.addEventListener("click", ()=>{
let body = document.querySelector(".nightMode");
activo = body.classList.toggle("nightMode-Active");

// Logica que modifica el Btn de DarkMode a WhiteMode
if (body.classList.contains("nightMode-Active")) {
	let btnWhite  = document.querySelector(".btn-dark")
	btnWhite.classList.toggle("btn-dark-active")
	btnWhite.innerText = "WhiteMode"
	// console.log(btnWhite);
}else
{let bntNight  = document.querySelector(".btn-dark")
	bntNight.innerText = "NightMode"
}

// Modifico el B-G del descuento 
let descuento = document.querySelector("#descuento")
descuento.classList.toggle("card-body-active")

// modifico las letras para que se lean en el modo nocturno
let tituloBajadaDescuento = document.querySelector("#cardTitle")
tituloBajadaDescuento.classList.toggle("card-title-active")
let bajadaDescuento = document.querySelector("#cardText")
bajadaDescuento.classList.toggle("card-text-active")

//capturo primera bajada y lo convierte a darkMode
let primerBajada = document.querySelector(".primer-bajada-contenedor")
primerBajada.classList.toggle("primer-bajada-contenedor-active")

//Modifico el B-G del form y de la lista
// let formulario = document.querySelector("#formFinal")
// formulario.classList.toggle()

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

// Capturo el Btn "enviar" del form de login 
let btnLogin = document.querySelector("#btn-enviar")
// Le asigno un evento 
btnLogin.addEventListener("click",()=>{
// obtengo los formularios 
	valorUser = user.value;
	// console.log(valorUser);	
	valorPass = passwordUser.value;
	//Agrego sweetAlert para informar que se enviaron ok los datos
	
	  const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
		  toast.addEventListener('mouseenter', Swal.stopTimer)
		  toast.addEventListener('mouseleave', Swal.resumeTimer)
		}
	  })
	  
	  Toast.fire({
		icon: 'success',
		title: 'Logueado Correctamente'+`${valorUser}`
	  })

})

// Capturo el Btn "enviar" del form de contacto 
let btnFormContac = document.querySelector("#btn-enviar-contacto")
btnFormContac.addEventListener("click",()=>{
	// capturo el mail ingresado 
	let mailCliente = document.querySelector("#exampleFormControlInput1")
	   valorMail = mailCliente.value; 
	//Agrego sweetAlert para informar que se enviaron ok los datos
	   Swal.fire(
		'Tu consulta fue enviada con éxito!',
		'Gracias '+`${valorMail}`+' por enviarnos tu inquietud, en breves responderemos tu consulta.',
		'success'
	  )

})

// Capturo el Btn de descuento 
let btnDescuento = document.querySelector("#btnDescuento")
btnDescuento.addEventListener("click", ()=>{
	//Agrego sweetAlert para informar que se enviaron ok los datos
	Swal.fire(
		'Felicitaciones! contas con un descuento del 20% en tu seguro de confianza',
		'Para poder acceder al descuento porfavor ingresa los datos de la tarjeta de la derecha',
		'warning'
	  )
})

//Capturo btn de "Enviar" del form de la tarjeta
let btnTarjeta = document.querySelector("#btnTarjeta")
btnTarjeta.addEventListener("click" ,( )=>{
	Swal.fire(
		'Felicitaciones, su compra a sido realizada con éxito!',
		'Recibira la poliza al mail que registro en el proceso de login!',
		'success'
	  )
}) 


 // Array de Objetos con los productos de la App

	let productos = [{
		nombre: "Seguro Moto Classic",
		img: "./img/productos/SeguroMoto.jpg",
		titulo: "Lleva tu moto donde quieras, usuala tranquilo",
		descripcion: "A veces tu moto es tu herramienta de trabajo, no hay nada mejor que saber que esta respaldada por la mejor cobertura a tu medida, contra granizo, incendio total o parcial y contra robo o hurto",
		precio: 6500
},
{
	    nombre: "Seguro Moto Plus",
		img: "./img/productos/SeguroMotoPLus.jpg",
		titulo: "La van a mirar muchisimo, vos estacionala tranquilo ",
		descripcion: "Cuando tu moto es tu juguete caro no queres que nada le pase, la poliza plus esta pensada para los mas exigentes, cubre todo lo que la Classic sumando 3 caidas anuales con una franquicia de $4300 para que estes tranquilo que ante lo mas minimo vamos a estar para vos",
		precio: 12500
}, 
{
	    nombre: "Seguro Auto Classic",
		img: "./img/productos/SeguroAuto.jpg",
		titulo: "Podes tener lo que quieras, hasta un clasico ",
		descripcion: "Contar con un seguro que se ajuste a toda la familia, uno que te cubre en todo el mercosur. Granizo, llantas y cubiertas ilimitadas, robo y hurto parcial",
		precio: 17500

}, 
{
	    nombre: "Seguro Auto Plus",
		img: "./img/productos/SeguroAutoPlus.jpg",
		titulo: "Para los mas detallistas que salen a la aventura",
		descripcion: "Sabes que cualquier toque de estacionamiento o rayon que te hagan cambia la estetica de tu maquina. A nosotros nos molesta igual que a vos por eso esta poliza cubre cualquier detalle que tenga tu pintura con un minimo de poliza de $7800, ademas de incluir todo lo que ofrece la cobertura Classic tambien brindamos cristales y gruas ilimitadas",
		precio: 23500

}, 
{
	    nombre: "Seguro Embarcaciones Classic",
		img: "./img/productos/SeguroBarco.jpg",
		titulo: "Poder realizar cualquier actividad con nuestro respaldo",
		descripcion: "Seguro contra cualquier accidente nautico que pueda ocurrir tanto en moto de agua, lancha o boardingBoard",
		precio: 54500

}, 
{
	    nombre: "Seguro Embacaciones Plus",
		img: "./img/productos/SegurobarcoPlus.jpg",
		titulo: "Alta mar sin preocupaciones",
		descripcion: "Seguro de aguas internacionales de escala global, con alerta de tormentas o mal temporada, extraccion en caso de averia tecnica en aguas profundas ademas de incluir los beneficios de la poliza Classic",
		precio: 123500

}]
	
	for (const producto of productos) {
		let productosVarios = document.querySelector("#productosVarios")

		let contenedor = document.createElement("div")
		contenedor.innerHTML = `<h2 class="titulo-producto" > ${producto.nombre} </h2>
		                      <div class="contenedor-div d-flex content-center mb-25px" id="div-productos">                      
		                      <img src="${producto.img}" class="img-fluid" " alt="SeguroMoto">
							  <div class="d-flex justify-content-center" id="textoProductos"> 
							  <div class="card-body" id="${producto.nombre}">
							  <h3 class="card-title">${producto.titulo}</h3>
							  <h5 class="card-text">${producto.descripcion}
							  <h3 class="precio-producto p-2 "> Tan solo por $${producto.precio}</h3></h5>
							  <button type="button" class="btn btn-outline-secondary p-2 " id="btnContratar" >Contratar Ahora!</button>
							  </div> 
							  </div>`
	   productosVarios.appendChild(contenedor)
	}
	//aplicando efecto mouseOver al div productos
	
	let divProductos = document.querySelector("#div-productos");
	divProductos.addEventListener("click", ()=>{
		divProductos.classList.toggle("contenedor-div-active")

	}) 

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

	// Capturo el numero de la tarjeta de credito que ingreso el cliente
	let numeroDeCliente = sessionStorage.setItem("Numero de tarjeta del cliente", valorInput)

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

	// Capturo en el SessionStorage el Nombre que ingresa en la tarjeta
	let nombreDeCliente = sessionStorage.setItem("Nombre del cliente de la tarjeta", valorInput)

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