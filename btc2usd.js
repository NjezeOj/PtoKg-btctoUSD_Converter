const ptokg = {
    displayValue: '0',
}

function inputdigit(digit) {
    const { displayValue } = ptokg;

    ptokg.displayValue = displayValue === '0' ? digit : displayValue + digit;
}

function decimalpoint(dot) {

    if (!ptokg.displayValue.includes(dot)) {
        ptokg.displayValue += dot;
    }
}

function btctousd() {
    const{displayValue} = ptokg;
    fetch(`https://blockchain.info/ticker`)
    .then(response=>response.json())
    .then(data => {btc = data.USD.last;
    let doll = displayValue * btc;
    ptokg.displayValue = String(doll);});
}

function updateDisplay() {
    screen = document.querySelector('.calculator-screen');
    screen.value = ptokg.displayValue;
}


const keys = document.querySelector('.Calculator-keys');

keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    else if (target.classList.contains('operator')) {
        console.log('Operator', target.value);
    }

    else if (target.classList.contains('conversion')) {
        btctousd(target.value);
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