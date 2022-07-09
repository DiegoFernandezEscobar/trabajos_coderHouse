 alert("Bienvenido a 99. Tu aseguradora de confianza")
 alert("Le pediremos algunos datos para poder brindarle una cotizacion")
 //Ingresan los datos de el usuario
let email= prompt("Ingrese su E-mail")
let nombre = prompt("Ingrese su nombre")
let edad = parseInt(prompt("¿Cuantos años tiene?"))
let vehiculo = prompt("Indique si su auto es Nuevo o Usado")
let año = prompt("¿En que año fue radicado?")
let km = prompt("¿Cuantos kilometros tiene recorridos?")
// alert("Si tenes BBVA Frances tenes 30% off y si tenes Santander Rio un 40% off")
// let banco = prompt("Contanos, Que banco tenes? Frances o Santander?")
//Funcion constructora crea el usario

// Para preguntar en una after class / Es una funcion que detecta si el mail ya esta en el array de usuarios, si esta devuelve un mensaje, sino realiza todo el codigo
// function idUsuarios() {
//     if (usuarioNuevo.includes(usuarioNuevo.email) == true ) {
       
//     }
// }


class NuevoUser{
    constructor (email, nombre, edad, vehiculo, año, km ){
       this.id 
        this.email = email;
        this.nombre = nombre;
        this.edad = edad;
        this.vehiculo = vehiculo;
        this.año = año;
        this.km = km;
        this.precio;
        // this.banco = banco 
    }
}

let usuarioNuevo = new NuevoUser(email, nombre, edad, vehiculo, año, km)
 console.log(usuarioNuevo);

function cumpleConLaEdad() {
    
    if (usuarioNuevo.edad <= 17) {
        console.log( "su edad es insuficiente para solicitar un seguro" );
        usuarioNuevo.edad = "su edad es insuficiente para solicitar un seguro"
    }
    if (usuarioNuevo.edad  >= 18 && usuarioNuevo.edad<=30 ) {
        console.log("Puede solicitar un seguro!");
        usuarioNuevo.edad= "Puede solicitar un seguro!"
    }
    if (usuarioNuevo.edad >=31 && usuarioNuevo.edad <=65) {
        console.log("Su edad le permite acceder a un seguro con descuentos");
        usuarioNuevo.edad ="Su edad le permite acceder a un seguro con descuentos"
    } 
    if (usuarioNuevo.edad >=66){
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
        usuarioNuevo.precio = riesgo
    }
    if (usuarioNuevo.edad === "Su edad le permite acceder a un seguro con descuentos" ) {
        usuarioNuevo.precio = riesgo
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
let usuarios = []

usuarios.push(usuarioNuevo.email, usuarioNuevo.edad, usuarioNuevo.vehiculo, usuarioNuevo.año, usuarioNuevo.km, usuarioNuevo.precio )

console.log(usuarios);

// alert("nombre"=usuarios[0])

// No logro que funcione
// switch (edad) {
//     case edad <= 17:
//         // let insuficiente =
//         console.log( "su edad es insuficiente para solicitar un seguro" );
//         break;
//         case edad >= 18 && edad <=30:
//             // let riesgo = "Puede solicitar un seguro!"
//             console.log("Puede solicitar un seguro!");
//             case edad >=31 && edad <=65:
//         //    let bajoRiesgo = "Su edad le permite acceder a un seguro con descuentos" 
//         console.log("Su edad le permite acceder a un seguro con descuentos");
//         break;
//              default: 
//             //  let nulo = "Supera la edad maxima para solicitar un seguro"
//             console.log("Supera la edad maxima para solicitar un seguro");
//         break;
// }
// console.log(edad);
