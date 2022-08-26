// Antes
function oldFunction(name, age, country) {
    var name = name || 'Andres';
    var age = age || 23;
    var country = country || 'Paraguay';
    console.log({ name, age, country });
}

//  es6+
function newFunction(name = 'Andres', age = 23, country = 'Paraguay') {
    console.log({ name, age, country });
}

newFunction();
newFunction("Moises", 22, "Argentino");

// Concadenacion
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6+
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// LET y CONST, Multilínea, Spread Operator y Desestructuración
// Multilínea
let texto = "parrafo de texto numero 1.\n" + "2do parrafo de texto."
console.log(texto);

// es6+
let texto2 = `usamos la comilla francesa(\`) 
parrafo de texto numero 1.
2do parrafo de texto.`;
console.log(texto2);

// Desestructuración de Elementos
let person = {
    'name': 'Andres',
    'age': 23,
    'Country': 'Paraguay'
}

console.log(person.name, person.age);

// es6
let { name, age } = person;
console.log(name, age);


// Spread Operator, agregado en es6+
let team1 = ['Andres', 'Moises', 'Isaac'];
let tema2 = ['Ana', 'Gloria', 'Maria', 'Camila'];

let grupoCompleto = ['Alegandro', ...team1, ...tema2];
console.log(grupoCompleto);

// en es6 se agrego:
// let
// const

let nombre = 'Andres';
let edad = 23;

// propiedad de objeto Mejorada
// antes
obj = { nombre: nombre, edad: edad };

// es6
obj2 = { nombre, edad }; // ya asigna la propiedad y el valor

// Arrow Functions, agregado en es6. es como usar funciones anonimas
let list = [
    { name: 'Andres', age: 23 },
    { name: 'Moises', age: 22 },
    { name: 'Isaac', age: 17 },
    { name: 'Gloria', age: 15 },
];

// iterando una lista antes
let listOfNames = list.map(function (item) {
    //console.log(item.name);
    return item.name;
});
console.log(listOfNames);

// Con arrow Function
let listOfNames2 = list.map(item => (item.name));
console.log(listOfNames2);

const listOfNames3 = (name, age, country) => {
    //...
};

const listOfNames4 = name => {
    //...
}

const square = num => num * num;

// Promesas 
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!, funciona todo bien');
        } else {
            reject('Ups!!, algo salio mal');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Then anidado...'))
    .catch(error => console.log(error));

// Clases
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

// usamos la clase "calculator"
const calc = new calculator();
console.log(calc.sum(2, 5));

// Modulos
// primero creamos un nuevo archivo separado llamado "module.js"
// ahi escribimos una logica sencilla
// importamos el modulo del otro archivo
import { hello } from './module'; // ahora y podemos usar la funcion del otro modulo

hello(); // ejecutamos la funcion importada

// Generator
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World!!';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value); // este va a imprimir undefined, porque ya no se tiene un 3er estado