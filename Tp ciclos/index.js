// let dato = prompt("ingrese su nombre");

// while(dato != "" ){
//     alert(`Bienvenido ${dato}`);
//     dato= prompt("ingrese su nombre");   
// }

// if (dato !="") {
//     alert(`Bienvenido ${dato}`);
// }else{
//     prompt("Debe ingresar su nombre para continuar")
// }

for (let i = 1; i <= 20; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}
