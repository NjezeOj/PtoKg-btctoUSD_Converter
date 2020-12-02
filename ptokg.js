const ptokg = {
    displayValue: '0',
}

function inputdigit(digit){
    const{displayValue} = ptokg;

    ptokg.displayValue = displayValue === '0'? digit : displayValue + digit;
}

function decimalpoint(dot){
    
    if(!ptokg.displayValue.includes(dot)){
        ptokg.displayValue += dot;
    }
}

function poundtokilo(){
    const{displayValue} = ptokg;
    const inputValue = parseFloat(displayValue);
    const b = inputValue * 0.453592;
    ptokg.displayValue = String(b);
}

function updateDisplay(){
    screen = document.querySelector('.calculator-screen');
    screen.value = ptokg.displayValue;
}


const keys = document.querySelector('.Calculator-keys');

keys.addEventListener('click', (event)=>{
    const{target} = event;
    if(!target.matches('button')){
        return;
    }

    else if(target.classList.contains('operator')){
        console.log('Operator', target.value);
    }

    else if(target.classList.contains('conversion')){
        poundtokilo(target.value);
        updateDisplay();
    }

    else if (target.classList.contains('decimal')) {
        decimalpoint(target.value);
        updateDisplay();
    }

    else {
        inputdigit(target.value);
        updateDisplay();
    }
    

});