 alert("Bienvenido a 99. Tu aseguradora de confianza");
 alert("Le pediremos algunos datos para poder brindarle una cotizacion");
 //Ingresan los datos de el usuario
let email= prompt("Ingrese su E-mail");
let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("¿Cuantos años tiene?"));
let vehiculo = prompt("Indique si su auto es Nuevo o Usado");
let año = prompt("¿En que año fue radicado?");
let km = prompt("¿Cuantos kilometros tiene recorridos?");
alert("Si tenes BBVA Frances tenes o Santander Rio tienes un bono de $3500 de descuento!");
let banco = prompt("Contanos, Que banco tenes? Frances o Santander?");
// Funcion constructora crea el usario


       
// Convierte lo que ingrese por el promp a minuscula para que coincida con la comparacion
let bancoMin = banco.toLowerCase();
let nombreMin = nombre.toLowerCase()
// console.log(bancoMin);

class NuevoUser{
    constructor (email, nombreMin, edad, vehiculo, año, km, bancoMin ){
        // this.id 
        this.email = email;
        this.nombre = nombreMin;
        this.edad = edad;
        this.vehiculo = vehiculo;
        this.año = año;
        this.km = km;
        this.precio;
        this.banco = bancoMin 
    }

// //Funcion incremental de id
//     idMas(){
//         let id = date()
//         if (this.nombre !== "") {
//             id.getSecond()   
//             this.nombre += id
//             }
//     }

    // Funcion anonima que valida si tiene descuento x banco
    tieneBanco(){
        if (this.banco !== "frances" || this.banco !== "santander") {
            this.precio = 0
        }
        if (this.banco === "frances" || this.banco === "santander" ){
            this.precio = -3500
        }
    }
}

let usuarioNuevo = new NuevoUser(email, nombreMin, edad, vehiculo, año, km, bancoMin)
 console.log(usuarioNuevo);

 // Ejecucion de los metodos de la funcion constructora
usuarioNuevo.tieneBanco()
// usuarioNuevo.idMas()

function cumpleConLaEdad() {
    
    if (usuarioNuevo.edad != "" && usuarioNuevo.edad <= 17) {
        console.log( "su edad es insuficiente para solicitar un seguro" );
        usuarioNuevo.edad = "su edad es insuficiente para solicitar un seguro"
    }
    if (usuarioNuevo.edad != "" && usuarioNuevo.edad  >= 18 && usuarioNuevo.edad<=30 ) {
        console.log("Puede solicitar un seguro!");
        usuarioNuevo.edad= "Puede solicitar un seguro!"
    }
    if (usuarioNuevo.edad != "" && usuarioNuevo.edad >=31 && usuarioNuevo.edad <=65) {
        console.log("Su edad le permite acceder a un seguro con descuentos");
        usuarioNuevo.edad ="Su edad le permite acceder a un seguro con descuentos"
    } 
    if (usuarioNuevo.edad != "" && usuarioNuevo.edad >=66){
        console.log("Supera la edad maxima para solicitar un seguro");
        usuarioNuevo.edad = "Supera la edad maxima para solicitar un seguro"
    }
}
// Se ejecuta la Funcion
cumpleConLaEdad(usuarioNuevo.edad)

// Tipos de polizas
let riesgo = 12500
let conDescuento = 10000

// Penalidad por edades 
function penalidad_x_edad() {
    if (usuarioNuevo.edad === "Puede solicitar un seguro!") {
        usuarioNuevo.precio += riesgo
    }
    if (usuarioNuevo.edad === "Su edad le permite acceder a un seguro con descuentos" ) {
        usuarioNuevo.precio += conDescuento
    }
}
// Se ejecuta la funcion penalidad_x_edad llamando la funcion cumpleConLaEdad
penalidad_x_edad(cumpleConLaEdad)

console.log(usuarioNuevo.precio);

// Penalidad por cantidad de Km
let ceroKm = 13000
let semiNuevo = 7400
let usado = 5000
let usadoPlus = 3000
// Funcion que suma valor a la poliza dependiendo los km 
function valor_x_km() {
    if (usuarioNuevo.km <= 50) {
        usuarioNuevo.precio += ceroKm
    }
    if (usuarioNuevo.km >= 51 && usuarioNuevo.km <= 35000 ) {
        usuarioNuevo.precio += semiNuevo
    }
    if (usuarioNuevo.km >= 35001 && usuarioNuevo.km <= 70000) {
        usuarioNuevo.precio +=semiNuevo
    }
    if (usuarioNuevo.km >= 70001) {
        usuarioNuevo.precio += usadoPlus
    }
}

// Se ejecuta la funcion valor_x_km
valor_x_km(usuarioNuevo.km)

// console.log(usuarioNuevo.precio);

// //Descuentos bancarios
// let descuentoBBVA =   0.30
// let descuentoSantander =  0.40

// funcion descuentos
// function descuentoBancario() {
//     if (usuarioNuevo.banco === "Frances" || usuarioNuevo.banco === "frances" ) {
//         usuarioNuevo.precio = usuarioNuevo.precio - (usuarioNuevo.precio * 0.30)
//     }
//     if (usuarioNuevo.banco === "Santander" || usuarioNuevo.banco === "santander") {
//         usuarioNuevo.precio = usuarioNuevo.precio * descuentoSantander
//     }
// }

// descuentoBancario()

console.log(usuarioNuevo.precio);

// Array de usuarios
let usuarios = [
    
]

usuarios.push(usuarioNuevo.email, usuarioNuevo.edad, usuarioNuevo.vehiculo, usuarioNuevo.año, usuarioNuevo.km, usuarioNuevo.precio )

console.log(usuarios);

// Quise poner en practica la devolucion para que me forme un array de objetos pero me devuelve un error en el nav
//usuarios.push(new usuarioNuevo(email, edad,vehiculo, año,km, precio ))


// No logre que mi funcion constructora me cree un array de objetos asi que cree uno para enviar al home 
let usuariosConAntiguedad = [
    {
        Nombre: "Miguel Rodriguez",
        Edad: 43,
        Modelo: "Ford fiesta kinetic",
        km: 35000
    }, 
    { 

        Nombre: "Sandra Lopez",
        Edad: 65,
        Modelo: "Mercedes Benz C250",
        km: 45500},
    {    
        Nombre: "Brensa Sessolo",
        Edad: 22,
        Modelo: "Chevrolet Agile",
        km: 70000}
]

// //capturando elemento titulo via class
 
 for(const usuario of usuariosConAntiguedad){
    let datosUsuario = document.getElementById("lista-datos");
    datosUsuario.innerHTML = `<h2>Nombre: ${usuario.Nombre}</h2>
                    <p>Edad: ${usuario.Edad}</p>
                    <p>Vehiculo: ${usuario.Modelo}</p>
                    <b>Kilometros${usuario.km}</b>
                   `;
    contenedor.append(lista-datos);
  }