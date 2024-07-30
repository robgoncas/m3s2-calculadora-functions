let display = document.getElementById('display');
let operadorActual = '';
let valorA = '';
let valorB = '';
let resultado = '';

///APARTADO DE FUNCTIONES -------------------------------------

//Function Tradicional ECMA5 HOISTING!!!!

function nombreFunction(){
    //CODIGO DE LA FUNCION
    console.log('Funcion tradicional sin parametros')
}
nombreFunction();


//Function tradicional ECMA5 con parametros

function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}, que tengas un excelente dia!`)
}
saludar('Roberto','Gonzalez');
saludar('Marcelo','Toro');

//Function con parametros y return

function saludar(nombre, apellido){
    return `Hola ${nombre} ${apellido}, que tengas un excelente dia!`
}
console.log(saludar('Perico', 'Lo palotes'))

//Funciones Flecha - Arrow functions ECMA6
const functAnonima = () => {
    console.log('Function flecha anonima');
}
functAnonima();

//Function flecha con parametros

const saludar2 = (nombre, apellido) => {
    console.log(`Hola ${nombre} ${apellido}, que tengas un excelente dia!`)
}

saludar2('Adolfo','F')

//Function flecha con 1 parametro, 2 o mas de una instruccion dentro

const saludar3 = nombre => {
    console.log(`Hola ${nombre}, que tengas un excelente dia!`)
    console.log(`Hola ${nombre}, que tengas un excelente dia!`)
}

saludar3('Nombre de la persona')

//Function flecha recibe un parametro , ejecuta solmanete 1 linea de codigo 
const saludar4 = nombre => console.log(`Hola ${nombre}, que tengas un excelente dia!`)
    
saludar4('Nombre!!!');

//------------------------------------------------------------------------



function agregarNumero(numero) {
    display.value += numero;
}

//const agregarNumero = numero => display.value += numero

function operar(operacion) {
    valorA = display.value;
    operadorActual = operacion;
    display.value = '';
}

// const operar = operacion => {
//     valorA = display.value;
//     operadorActual = operacion;
//     display.value = '';
// }


function calcular() {
    valorB = display.value;
    switch (operadorActual) {
        case 'sumar':
            resultado = parseFloat(valorA) + parseFloat(valorB);
            break;
        case 'restar':
            resultado = parseFloat(valorA) - parseFloat(valorB);
            break;
        case 'multiplicar':
            resultado = parseFloat(valorA) * parseFloat(valorB);
            break;
        case 'dividir':
            if (parseFloat(valorB) === 0) {
                resultado = 'Error';
            } else {
                resultado = parseFloat(valorA) / parseFloat(valorB);
            }
            break;
    }
    agregarResultado(operadorActual, resultado);
    display.value = '';
}

function limpiar() {
    display.value = '';
    operadorActual = '';
    valorA = '';
    valorB = '';
    resultado = '';
}

function agregarResultado(operacion, resultado) {
    let operacionSimbolo;
    switch (operacion) {
        case 'sumar':
            operacionSimbolo = '+';
            break;
        case 'restar':
            operacionSimbolo = '-';
            break;
        case 'multiplicar':
            operacionSimbolo = '*';
            break;
        case 'dividir':
            operacionSimbolo = '/';
            break;
    }

    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `<td>${valorA} ${operacionSimbolo} ${valorB}</td>
                            <td>${resultado}</td>`;
    document.getElementById('tablaResultados').appendChild(nuevaFila);
}