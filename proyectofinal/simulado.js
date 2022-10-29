
// function numero() {
//     let conversion = prompt("Ingrese el numero que desea: ")
//     alert("su numero es " + conversion * 100)
// }

// numero();


// function numero2( x) {
// }


// let numero = Number(prompt("Ingrese un numero por favor"));

// if (numero == 100 +(10*10)) {
//     alert("Este resultado es verdadero");
// } else {
//     alert("Este resultado es falso");
// }

function gradoElQueCursa() {
    let promedio = 0
    let grado = 0
    let final = 2
    let volverAcalcularPromedio = false
    let nota = 0
}

//bucle para verifica el grado en el que se encuentra la persona
do {
    grado = prompt("¿Cual es el grado que cursa?", 'Ej: 6,7,8,9,10,11,12');
    
    switch (grado) {
            case "6":
                    alert("Su grado es: sexto de secundaria");
            break;
            case "7":
                    alert("Su grado es: septimo de secundaria");
            break;
            case "8":
                    alert("Su grado es: octavo de secundaria");
            break;
            case "9":
                    alert("Su grado es: noveno de secundaria");
            break;
            case "10":
                    alert("Su grado es: decimo de secundaria");
            break;
            case "11":
                    alert("Su grado es: onceavo de secundaria");
            break;
            case "12":
                    alert("Su grado es: doceavo de secundaria");
            break;
            default:
            alert("El numero que ingresso es default");
            break;
            
    }
    nota = parseInt(prompt("Ingrese su nota para calcular el promedio de su materia", 'ej: 1.0 hasta 5.0'));
    break;
    

} while (grado); 

function promedio(nota) {
    alert("Su promedio: " + nota);
}

//promedio

promedio(nota/2);

