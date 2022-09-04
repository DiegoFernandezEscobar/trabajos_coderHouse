// No logre encontrar una api publica que tuviera contenido de autos asi que use un json aparte del que consumo los datos, no logro sumarle las opciones una vez que se selecciona la marca del auto.


const cargar = async () => {
	const response = await fetch("./autos.json")// relizo la promesa que trae los datos
	// console.log(response);

	let lista = await response.json();// traigo los datos en formato Json
	  console.log(lista);
//----------------------------------funciona------------------------------------------
	  // busco el array x id y dependiendo del id trae una marca para luego acceder al array de modelos dentro de la marca 
// let bmw = lista.marcas[0].modelos[1]
// console.log(bmw);

// let {id, nombre, modelos} = bmw

//  console.log(id);
//  console.log(nombre);
//  console.log(modelos);
//----------------------------------funciona------------------------------------------

// recorro el indice del array marcas que contiene en su interior cada marca con id y modelo 
let marcas = lista.marcas

marcas.map(element => {
	let {id ,nombre, modelos} = element

	//Con el metodo sort()ordeno alfabeticamente el array de modelos 
	modelos.sort()
	// console.log(nombre[1], id, modelos[1]);

	let btn = document.querySelector("#btnBorrar")
	btn.addEventListener(("click"), ()=>{
	
		let marca = document.querySelector("#selectMarca")
			
		let modelo =  document.querySelector("#selectModelo"); //Select marca
			
		let year = document.querySelector("#selectAnioCotizacion") // Select año 			
			
		let km = document.querySelector("#km") // capturo km
			
		let cotizacion = document.querySelector("#cotizacionCreada")
	

		let edadCliente = document.querySelector("#edadCliente") //capturo edad cliente 
			
			const limpiar = () => {
				for (let i = modelo.options.length; i >= 0; i--) {
				modelo.remove(i);
				}
				for (let i = year.options.length; i >= 0; i--) {
					year.remove(i);
					}
		cotizacion.remove()
					
			};
			limpiar()
	
	})


	//Resto 1 al Id para que los modelos coincidan con el indice del array de los modelos que comienza en 0 
    id --

	// fn que renderiza el primer select q´ permite elegir la marca. La Fn padre contiene una fn hija que renderiza los modelos de cada marca 
	let cargarMarca =(nombre, id) => {
		
		let select =  document.querySelector("#selectMarca"); //Seleccionamos el select
		
		let option = document.createElement("option"); //Creamos la opcion
		
		option.innerHTML = nombre; //Metemos el texto en la opción
		select.appendChild(option); //Metemos la opción en el select
			
		
		select.addEventListener(("change"), (e)=> {
			let valorOpcion = e.target.value
					// console.log(id);

			if (valorOpcion == nombre) {
				
				rellenaModelo = (i)=>{
				// console.log(marcas);
				let pepino = marcas[i].modelos
						
				for (let i = 0; i < pepino.length ; i++) {
					const pepi = pepino[i] 
					    //   console.log(pepi);
				// console.log(pepi);
				// let e = 6
				// console.log(marcas[`${i}`].modelos[`${e}`]);					
		
				let cargarModelo = (element) => {
					let select =  document.querySelector("#selectModelo"); //Seleccionamos el select
					
					let option = document.createElement("option"); //Creamos la opcion
						option.innerHTML = element; //Metemos el texto en la opción
						select.appendChild(option); //Metemos la opción en el select
					
				}
				cargarModelo(pepi)
				
		}
	}
		rellenaModelo(id)
		// console.log(valorOpcion);
				// console.log(id);
			}
			return valorOpcion
		}) 
		select.addEventListener(("onchange"),(e)=>{

			select.reset()
		})
	
	}
	cargarMarca(nombre, id);
});	
// Analizo los Km 
let km = () => {
	let km = document.querySelector("#km")
	km.addEventListener(("change"), (e)=>{
		let cantidadKm = e.target.value
		// console.log(cantidadKm);
	})
}
km()

// // cargo los años en el select año 
let yearModelo = () =>{
	let selectYear = document.querySelector("#selectAnioCotizacion")
	selectYear.addEventListener(("click"),(e)=> {

		let yearActual = new Date().getFullYear();
			for(let i = yearActual; i >= yearActual - 25; i--){	
			let opcion = document.createElement('option');
			opcion.value = i;
			opcion.innerText = i;
			selectYear.appendChild(opcion);

}
// Capturo el año seleccionado 
		selectYear.addEventListener(("change"),(e)=>{
			let valorDelYear = e.target.value
			// console.log(valorDelYear);
		})

	})
}
yearModelo()

// Funcion que analiza los datos ingresados 

let calcularPrecio = () =>{
	let btnCalcular = document.querySelector("#btnCotizar")
	btnCalcular.addEventListener(("click"), (e)=>{
       
		let marca =  document.querySelector("#selectMarca"); //Select marca
		let valorMarca = marca.value // Capturo el value de la marca seleccionada
		console.log(valorMarca);
		
		let modelo = document.querySelector("#selectModelo")
		let valorModelo = modelo.value // capturo el modelo

		let year = document.querySelector("#selectAnioCotizacion")// Select año 			
		let valorYear = year.value // Capturo el value seleccionado 
		console.log(valorYear);
		// capturo km
		let km = document.querySelector("#km")
		let valorKm = km.value
		console.log(valorKm);
		//capturo edad cliente 
		let edadCliente = document.querySelector("#edadCliente")
		let valorEdad = edadCliente.value
		console.log(valorEdad);

		// Una vez que tengo los valores que van a modificar el $ de la poliza los proceso en la logica 
		class Cotizacion{
			constructor (valorMarca, valorYear, valorKm, valorEdad, valorModelo ){
				// this.id 
				this.Marca = valorMarca;
				this.Year = valorYear;
				this.Km = valorKm;
				this.Edad = valorEdad;
				this.Modelo = valorModelo
			}
		
			procesar() {
				// creo las variables con las que voy a modificar los valores
				let poliza = 5500
				let riesgoXmarca = 10000
				let riesgoXyear = 1250
				let riesgoXkm = 5000
				let riesgoXedad = 4800
				let conDescuento = 10000

				let valorParcial = 0
				
				// Audi
				
				let audi = 5800 //Valor de la marca Exclusivo
				
				if (this.Marca == "Audi") {
				
				valorParcial = 	audi += poliza += riesgoXmarca
					console.log(valorParcial);
				
					if (this.Edad <= "2022-01-01") {
						valorParcial += riesgoXedad
						console.log(valorParcial);
					}
					if (this.Year >= 2014) {
						riesgoXyear += 8000
						valorParcial += riesgoXyear
						console.log(valorParcial);
						
					}
					if (this.Year >= 2005 && this.Year <= 2013) {
							riesgoXyear += 4000
							valorParcial += riesgoXyear
							console.log(valorParcial);
					}
					if (this.Year  <= 2004) {
	
						valorParcial += riesgoXyear
						console.log(valorParcial);
				}
					if (this.km <= 35000) {
						riesgoXkm += riesgoXkm * 1.5
						valorParcial += riesgoXkm
						console.log(valorParcial);
					}
					if (this.km  >=35001) {
						valorParcial += riesgoXkm
						console.log(valorParcial);
					}
					
					
						let resultadoCotizacion = document.querySelector("#resultadoCotizacion")
				
						let contenedor = document.createElement("div")
						contenedor.innerHTML = 	`<div class="d-flex p-2" id="cotizacionCreada">
						
						<div class="card p-2"  style="width: 25rem;">
												<img src="./img/seguro/seguroPoliza.jpg" class="card-img-top" alt="...">
												<div class="card-body">
												<h5 class="card-title">Podemos cuidar tu ${this.Modelo}</h5>
												<p class="card-text">Creemos que para poder vivir tranquilo tu ${this.Marca} debe contar con un seguro a su medida. 
												Por eso procesamos los datos que nos brindaste para cotizar la poliza adecuada para tu ${this.Modelo}</p>
												</div>
												<ul class="list-group list-group-flush">
												<li class="list-group-item"></li>
												<li class="list-group-item">Poliza contra todo riesgo completa</li>
												<li class="list-group-item">$${valorParcial}</li>
												</ul>
												<div class="card-body">
												<p> Podes solicitar una poliza que se ajuste a distintos presupuestos</P>
												<p>Si sos cliente del BBVA Frances accede a enormes descuentos!</P>
												</div>
											</div>
											</div>`
				resultadoCotizacion.appendChild(contenedor)
					
				}
		
				// BMW
				
				let Bmw = 6400
				
				if (this.Marca == "BMW") {
				
					valorParcial = 	Bmw += poliza += riesgoXmarca
						console.log(valorParcial);
						
						if (this.Edad <= "2022-01-01") {
							valorParcial += riesgoXedad
							console.log(valorParcial);
						}
						if (this.Year >= 2014) {
							riesgoXyear += 8000
							valorParcial += riesgoXyear
							console.log(valorParcial);
							
						}
						if (this.Year >= 2005 && this.Year <= 2013) {
								riesgoXyear += 4000
								valorParcial += riesgoXyear
								console.log(valorParcial);
						}
						if (this.Year  <= 2004) {
		
							valorParcial += riesgoXyear
							console.log(valorParcial);
					}
						if (this.km <= 35000) {
							riesgoXkm += riesgoXkm * 1.5
							valorParcial += riesgoXkm
							console.log(valorParcial);
						}
						if (this.km  >=35001) {
							valorParcial += riesgoXkm
							console.log(valorParcial);
						}

					
					
						let resultadoCotizacion = document.querySelector("#resultadoCotizacion")
						let contenedor = document.createElement("div")
						contenedor.innerHTML = 	`<div class="d-flex p-2" id="cotizacionCreada">
						
						<div class="card p-2"  style="width: 25rem;">
												<img src="./img/seguro/seguroPoliza.jpg" class="card-img-top" alt="...">
												<div class="card-body">
												<h5 class="card-title">Podemos cuidar tu ${this.Modelo}</h5>
												<p class="card-text">Creemos que para poder vivir tranquilo tu ${this.Marca} debe contar con un seguro a su medida. 
												Por eso procesamos los datos que nos brindaste para cotizar la poliza adecuada para tu ${this.Modelo}</p>
												</div>
												<ul class="list-group list-group-flush">
												<li class="list-group-item"></li>
												<li class="list-group-item">Poliza contra todo riesgo completa</li>
												<li class="list-group-item">$${valorParcial}</li>
												</ul>
												<div class="card-body">
												<p> Podes solicitar una poliza que se ajuste a distintos presupuestos</P>
												<p>Si sos cliente del BBVA Frances accede a enormes descuentos!</P>
												</div>
											</div>
											</div>`
				resultadoCotizacion.appendChild(contenedor)
				}
					
					

					// Chevrolet
					
					let chevrolet = 2300
					
					if (this.Marca == "Chevrolet") {
				
						valorParcial = 	chevrolet += poliza += riesgoXmarca
							console.log(valorParcial);
						
							if (this.Edad <= "2022-01-01") {
								valorParcial += riesgoXedad
								console.log(valorParcial);
							}
							if (this.Year >= 2014) {
								riesgoXyear += 8000
								valorParcial += riesgoXyear
								console.log(valorParcial);
								
							}
							if (this.Year >= 2005 && this.Year <= 2013) {
									riesgoXyear += 4000
									valorParcial += riesgoXyear
									console.log(valorParcial);
							}
							if (this.Year  <= 2004) {
			
								valorParcial += riesgoXyear
								console.log(valorParcial);
						}
							if (this.km <= 35000) {
								riesgoXkm += riesgoXkm * 1.5
								valorParcial += riesgoXkm
								console.log(valorParcial);
							}
							if (this.km  >=35001) {
								valorParcial += riesgoXkm
								console.log(valorParcial);
							}
							
						let resultadoCotizacion = document.querySelector("#resultadoCotizacion")
				
						let contenedor = document.createElement("div")
						contenedor.innerHTML = 	`<div class="d-flex p-2" id="cotizacionCreada">
						
						<div class="card p-2"  style="width: 25rem;">
												<img src="./img/seguro/seguroPoliza.jpg" class="card-img-top" alt="...">
												<div class="card-body">
												<h5 class="card-title">Podemos cuidar tu ${this.Modelo}</h5>
												<p class="card-text">Creemos que para poder vivir tranquilo tu ${this.Marca} debe contar con un seguro a su medida. 
												Por eso procesamos los datos que nos brindaste para cotizar la poliza adecuada para tu ${this.Modelo}</p>
												</div>
												<ul class="list-group list-group-flush">
												<li class="list-group-item"></li>
												<li class="list-group-item">Poliza contra todo riesgo completa</li>
												<li class="list-group-item">$${valorParcial}</li>
												</ul>
												<div class="card-body">
												<p> Podes solicitar una poliza que se ajuste a distintos presupuestos</P>
												<p>Si sos cliente del BBVA Frances accede a enormes descuentos!</P>
												</div>
											</div>
											</div>`
				resultadoCotizacion.appendChild(contenedor)
						}


						//Citroen

						let citroen = 1890
						
						if (this.Marca == "Citroen") {
				
							valorParcial = 	citroen += poliza += riesgoXmarca
								console.log(valorParcial);
							
								if (this.Edad <= "2022-01-01") {
									valorParcial += riesgoXedad
									console.log(valorParcial);
								}
								if (this.Year >= 2014) {
									riesgoXyear += 8000
									valorParcial += riesgoXyear
									console.log(valorParcial);
									
								}
								if (this.Year >= 2005 && this.Year <= 2013) {
										riesgoXyear += 4000
										valorParcial += riesgoXyear
										console.log(valorParcial);
								}
								if (this.Year  <= 2004) {
				
									valorParcial += riesgoXyear
									console.log(valorParcial);
							}
								if (this.km <= 35000) {
									riesgoXkm += riesgoXkm * 1.5
									valorParcial += riesgoXkm
									console.log(valorParcial);
								}
								if (this.km  >=35001) {
									valorParcial += riesgoXkm
									console.log(valorParcial);
								}

								let resultadoCotizacion = document.querySelector("#resultadoCotizacion")
				
								let contenedor = document.createElement("div")
								contenedor.innerHTML = 	`<div class="d-flex p-2" id="cotizacionCreada">
								
								<div class="card p-2"  style="width: 25rem;">
														<img src="./img/seguro/seguroPoliza.jpg" class="card-img-top" alt="...">
														<div class="card-body">
														<h5 class="card-title">Podemos cuidar tu ${this.Modelo}</h5>
														<p class="card-text">Creemos que para poder vivir tranquilo tu ${this.Marca} debe contar con un seguro a su medida. 
														Por eso procesamos los datos que nos brindaste para cotizar la poliza adecuada para tu ${this.Modelo}</p>
														</div>
														<ul class="list-group list-group-flush">
														<li class="list-group-item"></li>
														<li class="list-group-item">Poliza contra todo riesgo completa</li>
														<li class="list-group-item">$${valorParcial}</li>
														</ul>
														<div class="card-body">
														<p> Podes solicitar una poliza que se ajuste a distintos presupuestos</P>
														<p>Si sos cliente del BBVA Frances accede a enormes descuentos!</P>
														</div>
													</div>
													</div>`
						resultadoCotizacion.appendChild(contenedor)
							}
							
							//Daihatsu

							let dai = 800

							if (this.Marca == "Daihatsu") {
				
								valorParcial = 	dai += poliza += riesgoXmarca
									console.log(valorParcial);
								
									if (this.Edad <= "2022-01-01") {
										valorParcial += riesgoXedad
										console.log(valorParcial);
									}
									if (this.Year >= 2014) {
										riesgoXyear += 8000
										valorParcial += riesgoXyear
										console.log(valorParcial);
										
									}
									if (this.Year >= 2005 && this.Year <= 2013) {
											riesgoXyear += 4000
											valorParcial += riesgoXyear
											console.log(valorParcial);
									}
									if (this.Year  <= 2004) {
					
										valorParcial += riesgoXyear
										console.log(valorParcial);
								}
									if (this.km <= 35000) {
										riesgoXkm += riesgoXkm * 1.5
										valorParcial += riesgoXkm
										console.log(valorParcial);
									}
									if (this.km  >=35001) {
										valorParcial += riesgoXkm
										console.log(valorParcial);
									}
									
						let resultadoCotizacion = document.querySelector("#resultadoCotizacion")
				
						let contenedor = document.createElement("div")
								contenedor.innerHTML = 	`<div class="d-flex p-2" id="cotizacionCreada">
								
								<div class="card p-2"  style="width: 25rem;">
														<img src="./img/seguro/seguroPoliza.jpg" class="card-img-top" alt="...">
														<div class="card-body">
														<h5 class="card-title">Podemos cuidar tu ${this.Modelo}</h5>
														<p class="card-text">Creemos que para poder vivir tranquilo tu ${this.Marca} debe contar con un seguro a su medida. 
														Por eso procesamos los datos que nos brindaste para cotizar la poliza adecuada para tu ${this.Modelo}</p>
														</div>
														<ul class="list-group list-group-flush">
														<li class="list-group-item"></li>
														<li class="list-group-item">Poliza contra todo riesgo completa</li>
														<li class="list-group-item">$${valorParcial}</li>
														</ul>
														<div class="card-body">
														<p> Podes solicitar una poliza que se ajuste a distintos presupuestos</P>
														<p>Si sos cliente del BBVA Frances accede a enormes descuentos!</P>
														</div>
													</div>
													</div>`
						resultadoCotizacion.appendChild(contenedor)
								}


								//Dodge 

								let dodge = 3201

								if (this.Marca == "Dodge") {
				
									valorParcial = dodge += poliza += riesgoXmarca
										console.log(valorParcial);
									
										if (this.Edad <= "2022-01-01") {
											valorParcial += riesgoXedad
											console.log(valorParcial);
										}
										if (this.Year >= 2014) {
											riesgoXyear += 8000
											valorParcial += riesgoXyear
											console.log(valorParcial);
											
										}
										if (this.Year >= 2005 && this.Year <= 2013) {
												riesgoXyear += 4000
												valorParcial += riesgoXyear
												console.log(valorParcial);
										}
										if (this.Year  <= 2004) {
						
											valorParcial += riesgoXyear
											console.log(valorParcial);
									}
										if (this.km <= 35000) {
											riesgoXkm += riesgoXkm * 1.5
											valorParcial += riesgoXkm
											console.log(valorParcial);
										}
										if (this.km  >=35001) {
											valorParcial += riesgoXkm
											console.log(valorParcial);
										}
										
						let resultadoCotizacion = document.querySelector("#resultadoCotizacion")
				
						let contenedor = document.createElement("div")
						contenedor.innerHTML = 	`<div class="d-flex p-2" id="cotizacionCreada">
						
						<div class="card p-2"  style="width: 25rem;">
												<img src="./img/seguro/seguroPoliza.jpg" class="card-img-top" alt="...">
												<div class="card-body">
												<h5 class="card-title">Podemos cuidar tu ${this.Modelo}</h5>
												<p class="card-text">Creemos que para poder vivir tranquilo tu ${this.Marca} debe contar con un seguro a su medida. 
												Por eso procesamos los datos que nos brindaste para cotizar la poliza adecuada para tu ${this.Modelo}</p>
												</div>
												<ul class="list-group list-group-flush">
												<li class="list-group-item"></li>
												<li class="list-group-item">Poliza contra todo riesgo completa</li>
												<li class="list-group-item">$${valorParcial}</li>
												</ul>
												<div class="card-body">
												<p> Podes solicitar una poliza que se ajuste a distintos presupuestos</P>
												<p>Si sos cliente del BBVA Frances accede a enormes descuentos!</P>
												</div>
											</div>
											</div>`
				resultadoCotizacion.appendChild(contenedor)
									}


									// Fiat

									let fiat = 1832

									if (this.Marca == "Fiat") {
				
										valorParcial = 	fiat += poliza += riesgoXmarca
											console.log(valorParcial);
											
											if (this.Edad <= "2022-01-01") {
												valorParcial += riesgoXedad
												console.log(valorParcial);
											}
											if (this.Year >= 2014) {
												riesgoXyear += 8000
												valorParcial += riesgoXyear
												console.log(valorParcial);
												
											}
											if (this.Year >= 2005 && this.Year <= 2013) {
													riesgoXyear += 4000
													valorParcial += riesgoXyear
													console.log(valorParcial);
											}
											if (this.Year  <= 2004) {
							
												valorParcial += riesgoXyear
												console.log(valorParcial);
										}
											if (this.km <= 35000) {
												riesgoXkm += riesgoXkm * 1.5
												valorParcial += riesgoXkm
												console.log(valorParcial);
											}
											if (this.km  >=35001) {
												valorParcial += riesgoXkm
												console.log(valorParcial);
											}

						let resultadoCotizacion = document.querySelector("#resultadoCotizacion")
				
						let contenedor = document.createElement("div")
								contenedor.innerHTML = 	`<div class="d-flex p-2" id="cotizacionCreada">
								
								<div class="card p-2"  style="width: 25rem;">
														<img src="./img/seguro/seguroPoliza.jpg" class="card-img-top" alt="...">
														<div class="card-body">
														<h5 class="card-title">Podemos cuidar tu ${this.Modelo}</h5>
														<p class="card-text">Creemos que para poder vivir tranquilo tu ${this.Marca} debe contar con un seguro a su medida. 
														Por eso procesamos los datos que nos brindaste para cotizar la poliza adecuada para tu ${this.Modelo}</p>
														</div>
														<ul class="list-group list-group-flush">
														<li class="list-group-item"></li>
														<li class="list-group-item">Poliza contra todo riesgo completa</li>
														<li class="list-group-item">$${valorParcial}</li>
														</ul>
														<div class="card-body">
														<p> Podes solicitar una poliza que se ajuste a distintos presupuestos</P>
														<p>Si sos cliente del BBVA Frances accede a enormes descuentos!</P>
														</div>
													</div>
													</div>`
						resultadoCotizacion.appendChild(contenedor)
										}

										//Ford

										let ford = 2890

										if (this.Marca == "Ford") {
				
											valorParcial = ford += poliza += riesgoXmarca
												console.log(valorParcial);
												
												if (this.Edad <= "2022-01-01") {
													valorParcial += riesgoXedad
													console.log(valorParcial);
												}
												if (this.Year >= 2014) {
													riesgoXyear += 8000
													valorParcial += riesgoXyear
													console.log(valorParcial);
													
												}
												if (this.Year >= 2005 && this.Year <= 2013) {
														riesgoXyear += 4000
														valorParcial += riesgoXyear
														console.log(valorParcial);
												}
												if (this.Year  <= 2004) {
								
													valorParcial += riesgoXyear
													console.log(valorParcial);
											}
												if (this.km <= 35000) {
													riesgoXkm += riesgoXkm * 1.5
													valorParcial += riesgoXkm
													console.log(valorParcial);
												}
												if (this.km  >=35001) {
													valorParcial += riesgoXkm
													console.log(valorParcial);
												}

						let resultadoCotizacion = document.querySelector("#resultadoCotizacion")
				
						let contenedor = document.createElement("div")
								contenedor.innerHTML = 	`<div class="d-flex p-2" id="cotizacionCreada">
								
								<div class="card p-2"  style="width: 25rem;">
														<img src="./img/seguro/seguroPoliza.jpg" class="card-img-top" alt="...">
														<div class="card-body">
														<h5 class="card-title">Podemos cuidar tu ${this.Modelo}</h5>
														<p class="card-text">Creemos que para poder vivir tranquilo tu ${this.Marca} debe contar con un seguro a su medida. 
														Por eso procesamos los datos que nos brindaste para cotizar la poliza adecuada para tu ${this.Modelo}</p>
														</div>
														<ul class="list-group list-group-flush">
														<li class="list-group-item"></li>
														<li class="list-group-item">Poliza contra todo riesgo completa</li>
														<li class="list-group-item">$${valorParcial}</li>
														</ul>
														<div class="card-body">
														<p> Podes solicitar una poliza que se ajuste a distintos presupuestos</P>
														<p>Si sos cliente del BBVA Frances accede a enormes descuentos!</P>
														</div>
													</div>
													</div>`
						resultadoCotizacion.appendChild(contenedor)
											}

			}
			
		}



		
		
		let nuevaCotizacion = new Cotizacion(valorMarca, valorYear, valorKm, valorEdad, valorModelo)
		console.log(nuevaCotizacion);
		nuevaCotizacion.procesar()

// Agregar al session storage lo que el cliente registra
		let datosCliente = sessionStorage.setItem(nuevaCotizacion, "Cotizacion cliente")
		console.log(datosCliente);

		





	})
	
	
}
calcularPrecio()
// Creo el cartel con el valor de la cotizacion dependiendo todas las variables 






  };
  // ejecuto la fn padre, asyn  
  cargar();
	


// // Consumo de API del clima 
// const apiClima = async ()=>{
// 	let lista = 
	
// 	try{
	
// 		let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}/`)
// 		console.log(respuesta);
// 		let datos = await respuesta.json()
// 		console.log(datos);
// 	}catch(e){
// 		console.log(e);
// 	}
// }
// apiClima()
// const buscarModelo = async () => {
// // let respuesta = await fetch("https://api.api-ninjas.com/v1/cars?api_key=g6UMHdmsfZ9a7fFRZhqHFA==UtwgkkuCyEOu3Znm")
// // console.log(respuesta);
// let modelo = "touareg"
// let modelos = await fetch ("https://api.api-ninjas.com/v1/cars?limit=2&model=" + modelo )
// console.log(modelos);
// }

// var model = 'camry'                                          
// function buscarModelo(model) {
// 	auto.ajax({
// 		method: 'GET',
// 		url: 'https://api.api-ninjas.com/v1/cars?model=' + model,
// 		headers: { 'X-Api-Key': 'YOUR_API_KEY'},
// 		contentType: 'application/json',
// 		success: function(result) {
// 			console.log(result);
// 		},
// 		error: function ajaxError(jqXHR) {
// 			console.error('Error: ', jqXHR.responseText);
// 		}
// 	});
	
// }
// buscarModelo("camry")


// Codigo optimizado como ejemplo
	// ¿Que hace? envia un SweetAlert preguntando si eres mayor de edad, en caso de no serlo muestra un cartel durante 2seg y reinicia la pagina nuevamente mostrando el cartel 
	
const swalWithBootstrapButtons = Swal.mixin({
	customClass: {
	  confirmButton: 'btn btn-success',
	  cancelButton: 'btn btn-danger'
	},
	buttonsStyling: false
  })
  let pagina = window.onload
  swalWithBootstrapButtons.fire({
	title: 'Eres mayor de edad?',
	text: "Seleccione una opcion para poder continuar",
	icon: 'warning',
	showCancelButton: true,
	confirmButtonText: 'Si, soy mayor',
	cancelButtonText: 'Soy menor de edad',
	reverseButtons: true
  }).then((result) => {
	result.isConfirmed ? swalWithBootstrapButtons.fire(
		 	'Puedes Ingresar!',
		 	'Al ser mayor de edad puedes contratar un seguro.',
		 	'success'
		    ) : swalWithBootstrapButtons.fire(
			 	'No puedes Ingresar',
			 	'Es muy importante ser mayor de edad para poder navegar',
			 	'error'
			   ).then(
				   setTimeout(
				()=>{
					window.location.reload()
				}, 2000)
				) 

  })
  
  


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
		let btnEnviar = document.querySelector("#btn-enviar")
		btnEnviar.addEventListener(("click"),(e)=>{
			e.preventDefault()
			let contenedorFormLogin = document.querySelector("#contenedorFormLogin")
			contenedorFormLogin.addEventListener("click", ()=>{
				//Al hacer click le sumo la clase active que muestra el formulario de login
				contenedorFormLogin.classList.toggle("formulario-login-active")
				let nombreDato = document.querySelector("#login")
				nombreDato.innerHTML = "logOut"
			})
		})   
		if (!valorInputName == "") {
			// creo la variable id que registra los segundos como id unico  
			let fecha = new Date(); 
			let segundos = fecha.getSeconds();
			let id =  segundos   
			//    console.log(id); 
				 
			
			let usuarioConId = valorInputName + "ID" + 1 + id;
				// console.log(usuarioConId);
			
			let usuario;
			
			
			let usuarioConSession = sessionStorage.getItem("usuario")
			// Se fija si hay un usuario almacenado en la sessionStorage, si lo encuentra lo almacena en usuario, sino lo crea a travez del valor del inputName 
			if (usuarioConSession) {
				usuario = usuarioConSession
			}
			 usuario = sessionStorage.setItem("userName", valorInputName)
		
			//Recupero el valor almacenado en el sessionSotorage y lo almaceno en una variable para utilizarlo
			 let elNombre = sessionStorage.getItem("userName")
			 // a revisar!
			 
			 let crearTitulo = (elNombre)=>{
				 
				 
				 let div = document.querySelector("#divDinamico")
				 let titulo = document.createElement("h1")
				 
				 titulo.innerHTML = `<h1 class="primer-bajada-titulo text-center" >Bienvenido ${elNombre}, gracias por confiar en nosotros!</h1>`
				 
				 div.appendChild(titulo)
				 
				}
				console.log(elNombre);
			    crearTitulo(elNombre)
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


 const cargarProductos = async () => {
	const response = await fetch("./productos.json")// relizo la promesa que trae los datos
	// console.log(response);

	let lista = await response.json();// traigo los datos en formato Json
	  console.log(lista);	

// {nombre, img, titulo, descripcion, precio} = lista

	for (const producto of lista) {
		let productosVarios = document.querySelector("#productosVarios")

		let contenedor = document.createElement("div")
		
		contenedor.innerHTML = `<div class="container text-center">
									<h2 class="titulo-producto" > ${producto.nombre} </h2>
								  <div class="contenedor-div d-flex content-center mb-25px" id="div-productos">                      
								  <img class="img-fluid"  alt="SeguroMoto" src="${producto.img}">
								  <div class="d-flex justify-content-center" id="textoProductos"> 
								  <div class="card-body" id="${producto.nombre}">
								  <h3 class="card-title">${producto.titulo}</h3>
								  <h5 class="card-text">${producto.descripcion}
								  <h3 class="precio-producto p-2 "> Tan solo por $${producto.precio}</h3></h5>
								  <button type="button" class="btn btn-outline-secondary p-2 " id="btnContratar" >Contratar Ahora!</button>
								  </div>
								  </div>`
	   productosVarios.appendChild(contenedor)
	   //aplicando efecto mouseOver al div productos
	   
	 


		   //Convierto los Productos a JSON para enviarlos al nav en forma de string
		//    let productosEnJson = JSON.stringify(productos) 

		//    // console.log(productosEnJson);
		//    let listaDeProductosEnSession = sessionStorage.setItem("productos", productosEnJson)
	   
	}
}

cargarProductos()



//Clientes que nos elijen (array de objetos que enviaremos a una lista en el home)
const cargarClientesFieles = async()=>{
 const response = await fetch("./clientesFieles.json")
 let clientes = await response.json()

 
 // // Datos de la lista de clientes 
  
 tablaClientesFieles = document.querySelector("#tabla-clientes");
 
 
 // * Rellenando datos de la lista dinamicamente
 
 for (const cliente of clientes) {
	  datosClientesFieles = document.querySelector("#columna-cliente")
 
	 let listaClientesFieles = document.createElement("tr")
	 listaClientesFieles.innerHTML = `<td>${cliente.id} </td>
									<td>${cliente.nombre} </td>
									<td>${cliente.vehiculo} </td>
									<td>${cliente.km} </td>
									`
	datosClientesFieles.appendChild(listaClientesFieles)
 }
}
cargarClientesFieles()
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