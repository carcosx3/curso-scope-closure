// variable
var a; //declarando
var b = 'b'; // declarando / asignamos
b = 'bb'; // reasignando
var a = 'aa'; // redeclaracion

// Global Scope
var fruit = 'Apple'; // Global

function bestFruit(){
    console.log( fruit );
}

bestFruit();

function countries(){
    country = 'Colombia'; //Global

    console.log( country );
}

countries();

console.log( country );