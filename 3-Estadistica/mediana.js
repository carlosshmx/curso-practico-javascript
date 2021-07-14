const lista1 = [
    100,
    200,
    800,
    500,
    400000000,
    100000
];

function esPar(numero){
    if(numero % 2 == 0){
        return true;
    }else{
        return false;
    }
}

lista1.sort((a,b) => a - b);    //asi se ordenan los elementos de la lista de nanera numerica, el sort solo ordena de manera string

function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(   //este metodo funciona igual que el ciclo for en este caso
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    let resultado = sumaLista / lista.length;

    return resultado.toFixed(2);

}


let mediana;

const mitadLista1 = lista1.length / 2;

if(esPar(lista1.length)){   //es par

    const elemeto1 = lista1[mitadLista1 - 1];
    const elemeto2 = lista1[mitadLista1];

    const promedio1y2 = calcularMediaAritmetica([elemeto1,elemeto2]);
    mediana = promedio1y2;

}else{

    mediana = lista1[parseInt(mitadLista1)];

}