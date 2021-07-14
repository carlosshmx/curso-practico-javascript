const dataBase = [];

function verifyExist(month , year){
    let entrieExist = dataBase.find(element => element.year === year && element.month === month); 
    if(entrieExist){
        return true;
        }
    else{
        return false;
    }
};

function esPar(number){
   return number  % 2 == 0;
}


function agregar(){
    const monthSelector = document.getElementById("month");
    const yearSelector = document.getElementById("year");
    const moneyInSelector = document.getElementById("moneyIn");

    const month = monthSelector.options[monthSelector.selectedIndex].text;
    const year = yearSelector.options[yearSelector.selectedIndex].text;
    let moneyIn = moneyInSelector.value;

   
    const existStatus = verifyExist(month, year);

    if(existStatus){
        alert("Ya existe este registro");
    }else{
        dataBase.push({"year":year, "month":month , "moneyIn":moneyIn});
        const container = document.querySelector(".list-container")
        const newElement = document.createElement("P");
        newElement.innerText = month + "    " + year + "    $" + moneyIn;
        container.appendChild(newElement);
    }

}

function crearTotal(){
    const totalMoneyIn = totalizar(dataBase)

    const container = document.querySelector("#result-text");
    container.innerText = "Total ingresado $" + totalMoneyIn; 

}

function totalizar(dataBaseIn){

    const moneyInArray = dataBaseIn.map(function (monthMoney) {   
        return parseInt(monthMoney.moneyIn);
    });
    const totalMoneyIn = moneyInArray.reduce(  
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    )
    return totalMoneyIn
}

function crearPromedio(){
    const medMoney = promedio(dataBase);

    const container = document.querySelector("#result-text");
    container.innerText = "Promedio mensual $" + medMoney;
}

function promedio(dataBaseIn){
    const totalMoneyIn = totalizar(dataBaseIn);
    const databaseLength = dataBaseIn.length;
    return (totalMoneyIn/databaseLength).toFixed(2);
     
}

function mediana(){
    const moneyInArray = dataBase.map(function (monthMoney) {   
        return parseInt(monthMoney.moneyIn);
    });
    moneyInArray.sort((a,b) => a - b);

    const arrayLength = moneyInArray.length;
    let mediana;


    if(esPar(moneyInArray.length)){
        const month1 = moneyInArray[(arrayLength/2) - 1];
        const month2 = moneyInArray[(arrayLength/2)];

        const promedio1y2 = (month1+month2)/2;
        mediana = promedio1y2;

    }else{
        mediana = moneyInArray[parseInt(arrayLength/2)]
    }

     const container = document.querySelector("#result-text");
    container.innerText = "Mediana $" + mediana;

}

