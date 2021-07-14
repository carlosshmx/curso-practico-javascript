// multiplicar cada número del conjunto por su respectivo crédito, sumar todos los resultados y dividirlo entre la suma de todos los créditos.
// [(NI * C1) + (N2 * C2) + (N3 * C3)] / (C1 + C2 + C3)  N = Note C = Credit

//Definir el conjunto de números junto al peso de cada elemento

const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

//Multiplicar cada número de la lista por su peso
//Vamos a usar de nuevo el método map de los arrays. Crearemos un nuevo arreglo de solo números a partir de multiplicar cada nota con sus créditos.

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;

    //notes.map((noteObject) => noteObject.note * noteObject.credit)
});

//Sumar todos los elementos del arreglo de elementos multiplicados por su peso
//Vamos a usar de nuevo el método reduce de los arrays.

//Crearemos una nueva variable notesWithCredit que tenga como resultado la suma de 
// todos los elementos del arreglo sumOfNotesWithCredit. Recuerda que la función reduce 
// recibe una función con dos parámetros: el valor acumulado 
// (que para evitar errores debemos inicializar con 0) y el nuevo elemento de los arrays.

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const sumOfNotesWithCredit = 
    
    // notesWithCredit.reduce(
    // function (sum = 0, newVal) {
    //     return sum + newVal;
    // })
    notesWithCredit.reduce(reducer);
;

//Sumar todos los pesos (créditos)
//Sí, otra vez map y reduce. Vamos a crear un nuevo arreglo credits 
// únicamente con los créditos de cada materia y otra nueva variable 
// sumOfCredits que recorra el arreglo credits y sume sus elementos.

const credits = notes.map(function (noteObject) {    //recorre el objeto notes y guarda los credit en el array credits
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(  //suma todos los lementos de array credits y lo guarda en sumOfCredits
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

// Hacer la división entre ambas “sumas”
// Lo último que nos falta es dividir nuestra variable 
// sumOfNotesWithCredit sobre la variable sumOfCredits.

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;