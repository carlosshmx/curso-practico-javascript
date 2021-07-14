const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
    8
];

function calcularModa(lista){
    const lista1Count = {}; //objeto donde se van a guardar los elementos y sus ocurrencias

    lista.map(     //cuenta las ocurrencias de un numero en el array y las almacena en lista1Count
        function (elemento) {
            if(lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
            lista1Count[elemento] = 1;
            }
        }
    );

    let lista1Array = Object.entries(lista1Count);  //convierte lista1Count en array de arrays y lo guarda en lista1Array 
    //El metodo entries convierte un objeto en un array

    lista1Array.sort(
        function(valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
        // ((a,b) => a[1]-b[1]) es lo mismo, ordena el array por el segundo elemento del los array
    );

    const moda = lista1Array[lista1Array.length-1]; //accede a la ultima posicion del array lista1Array donde se guarda el que tiene mas ocurrencias

    return moda;
    
}

calcularModa(lista1);