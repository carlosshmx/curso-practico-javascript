const cupones = [
    {
        name: "carlosshmx",
        discount: 15,    
    }, 
    {
        name: "invierno2021",
        discount : 20,
    }, 
    {
        name: "aprendiendo",
        discount: 25,
    }
];


function calcularPrecioConDescuento(precio, descuento){
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * (porcentajePrecioConDescuento))/100;

return precioConDescuento;
}



function onClickButtonPriceDiscount(){
    const inputPrice =  document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount =  document.getElementById("inputDiscount");
    let discountValue = inputDiscount.value;

    const inputCupon =  document.getElementById("inputCupon");
    const cuponValue = inputCupon.value; 

    if(cuponValue){   //si se ingreso un cupon, reescribe el discountValue con el correspondiente al cupon
        const cuponExist = cupones.find(element => element.name === cuponValue); // busca si existe un cupon con ese name
        if(cuponExist){
            discountValue = cuponExist.discount
            console.log(discountValue); // muestra el descuento actualizado
        }
        else{
            alert(`El cupón > ${cuponValue} < es invalido`);
        }
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = `$${precioConDescuento}`;
    
}