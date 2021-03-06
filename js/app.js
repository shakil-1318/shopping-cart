function getProductInput(product,price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else{
        if(productNumber < 1){
            return;
        }
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update phone total
    const phoneTotal = document.getElementById(product + '-total');
    phoneTotal.innerText =  productNumber * price ;
     
    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalAmount = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = totalAmount;

}

document.getElementById('phone-plus').addEventListener('click', function(){
    getProductInput('phone',1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    getProductInput('phone',1219, false);
});
//case number event handler
document.getElementById('case-plus').addEventListener('click', function(){
    getProductInput('case',59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    getProductInput('case',59, false);
});