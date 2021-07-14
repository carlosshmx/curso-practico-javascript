const lista1 = [
    100,
    200,
    300,
    500
];



function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
 
    // for(let i=0; i<lista.length; i++){
    //     sumaLista += lista[i];
    // }

    const sumaLista = lista.reduce(   //este metodo funciona igual que el ciclo for en este caso
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    let resultado = sumaLista / lista.length;

    return resultado.toFixed(2);

}

