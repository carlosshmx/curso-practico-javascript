//Helpers
function esPar(numero){
    return (numero % 2 == 0);
}

function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(   //este metodo funciona igual que el ciclo for en este caso
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    let resultado = sumaLista / lista.length;

    return resultado.toFixed(2);

}


//Calculadora de medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    let mediana;

    if(esPar(lista.length)){
        const persona1 = lista[mitad - 1];
        const persona2 = lista[mitad];

        const promedio1y2 = calcularMediaAritmetica([persona1,persona2]);
        mediana = promedio1y2;
        return mediana;

    }else{
        mediana = lista[parseInt(mitad)];
        return mediana;
    }
}

//Calculando mediana general
const salariosVen = venezuela.map(
    function (persona){
        return persona.salary;
    }
);

const salariosVenSorted = salariosVen.sort((a,b) => a-b);

const medianaGeneralVen = medianaSalarios(salariosVenSorted);


//Calculando mediana del top 10
const spliceStart = (salariosVenSorted.length * 90) / 100; //guarda el 90pc del numero de personas
const spliceCont = salariosVenSorted.length - spliceStart; //guarda el resto 10pc
const salariosVenTop10 = salariosVenSorted.splice(spliceStart , spliceCont);

const medianaTop10Ven = medianaSalarios(salariosVenTop10);

console.log(
    medianaGeneralVen,
    medianaTop10Ven,
);