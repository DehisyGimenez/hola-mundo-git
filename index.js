let nombre = "Juan Perez";
let edad = calcularEdad(2002);
console.log("Hola" + nombre);
console.log(nombre + " tiene"+ edad +"años");  
console.log("Se va a pagar: "+calcularSalario(16))

function calcularEdad(anioNacimiento){
    return new Date().getFullYear() - anioNacimiento;
}

function calcularSalario(horasTrabajadas){
    return horasTrabajadas * 20000;
}