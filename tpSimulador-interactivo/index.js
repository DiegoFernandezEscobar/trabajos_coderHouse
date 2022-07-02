// El codigo calcula dependiendo de los parametros ingresados si el auto esta apto para ser asegurado, el valor de la poliza y retorna los datos ingresados para en un futuro refistrarlos en la Base de Datos 

class calcularSeguro{
  constructor(usuario, edad , marcaNacional, modelo, años, km){
    this.usuario = usuario;
    this.edad = edad;
    this.marca = marcaNacional;
    this.modelo = modelo;
    this.años = años;
    this.km= km;
    // this.precio = precio;
    // this.aprobado =aprobado
    // this.valorMedio =valorMedio
  }
     
// valor(precio){
//  if (this.edad<=17){
//      precio = "No se puede asegurar"
//  }precio="El valor de su poliza es de $13500"
// }

//   aprobado(){

// if (edad >= 18 || km<=200000 || años >=1990) {
//      "El vehiculo puede ser asegurado, en unos instantes de diremos el valor de su poliza ..." 
// }else{
//     return("El vehiculo no cumple los requisitos para ser asegurado por la compañia.")
// }
//    }
//    valorMedio(aumenta){
//        if (edad<=30 || marca !="importado" || (km>100000 && km <200000)) {
//            valorMin ++
//        }
//    }
}


let auto1 = new calcularSeguro("diego",15,"ford","focus",2011,700000)

console.log(auto1);


 switch (auto1) {
    case auto1<=17:
       console.log("No se puede asegurar su veiculo" );
        break;
    case auto1<=30:
            console.log("Su poliza tiene un valor de $14500" );
             break;
    case auto1<=60:
                console.log("Su poliza tiene un valor de $9500" );
    default:console.log("No se puede asegurar su vehiculo, no cumple con los requisitos");
        break;
}
console.log(auto1);
console.log();