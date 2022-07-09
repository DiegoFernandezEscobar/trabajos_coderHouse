 alert("Bienvenido a 99. Tu aseguradora de confianza")
 alert("Le pediremos algunos datos para poder brindarle una cotizacion")
 //Ingresan los datos de el usuario
let email= prompt("Ingrese su E-mail")
let nombre = prompt("Ingrese su nombre")
let edad = parseInt(prompt("¿Cuantos años tiene?"))
let vehiculo = prompt("Indique si su auto es Nuevo o Usado")
let año = prompt("¿En que año fue radicado?")
let km = prompt("¿Cuantos kilometros tiene recorridos?")
//Funcion constructora crea el usario

class NuevoUser{
    constructor (email, nombre, edad, vehiculo, año, km ){
        this.email = email;
        this.nombre = nombre;
        this.edad = edad;
        this.vehiculo = vehiculo;
        this.año = año;
        this.km = km;
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

// Array de usuarios
let usuarios = []

usuarios.push(usuarioNuevo.email, usuarioNuevo.edad, usuarioNuevo.vehiculo, usuarioNuevo.año, usuarioNuevo.km)

console.log(usuarios);

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
