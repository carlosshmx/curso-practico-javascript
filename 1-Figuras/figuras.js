// Codigo cuadrado
console.group("Cuadrado");
let ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden ${ladoCuadrado} cm`); 

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado ** 2;
console.log(`El area del cuadrado es ${areaCuadrado} cm^2`);
console.groupEnd();


// Codigo triangulo
console.group("triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`Los lados del triangulo miden ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y ${baseTriangulo} cm`);

console.log(`La altura del triangulo es de  ${alturaTriangulo}`);

console.log(`El perimetro del triangulo es ${ladoTriangulo1 + ladoTriangulo2 + baseTriangulo} cm`);

console.log(`El area del triangulo es ${(baseTriangulo * alturaTriangulo) / 2} cm^2`)

console.groupEnd();

//Codigo Circulo
console.group("Circulo");

const radioCirculo = 4;
const diametroCirculo = radioCirculo*2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo**2)*PI;

console.log(`El radio del circulo es ${radioCirculo} cm`);
console.log(`El perimetro del circulo es ${perimetroCirculo} cm`);
console.log(`El area del ciculo es ${areaCirculo}`);

console.groupEnd();

const resultado = document.querySelector(".resultado");
let div = document.createElement("DIV");
resultado.appendChild(div);


function calcularPerimeroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;
    const perimetro = lado*4;

    div.innerHTML = `<h3>El perimetro del cuadrado es:</h3> <br> <h2>${perimetro}</h2>`;

};

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;
    const area = lado*lado;

    div.innerHTML = `<h3>El area del cuadrado es:</h3> <br> <h2>${area} cm^2</h2>`;
    
}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("inputTriangulo");
    const lado = input.value;
    const perimetro = lado*3;

    div.innerHTML = `<h3>El perimetro del triangulo es:</h3> <br> <h2>${perimetro} </h2>  `;

}

function calcularAreaTriangulo(){
    const input = document.getElementById("inputTriangulo");
    const lado = input.value;
    const altura = ((Math.sqrt(3)*lado)/2).toFixed(2);
    const area = ((lado * altura) / 2).toFixed(2);

    div.innerHTML = `<h3>El area del triangulo es:</h3> <br> <h2>${area} cm^2</h2>`;


}

function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio = input.value;
    const diametro = radio*2;

    div.innerHTML = `<h3>El diametro del circulo es:</h3> <br> <h2>${diametro}</h2>`;
}

function calcularCircunferenciaCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio = input.value;
    const circunferencia = ((radio*2)*Math.PI).toFixed(2);

    div.innerHTML = `<h3>La circunferencia del circulo es:</h3> <br> <h2>${circunferencia}</h2>`;
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio = input.value;
    const area = ((radio**2)*Math.PI).toFixed(2);

    div.innerHTML = `<h3>El area del circulo es:</h3> <br> <h2>${area} cm^2</h2>`;

}