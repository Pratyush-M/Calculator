const add = function(a, b) {
    return a + b
}



const subtract = function(a, b) {
    return a - b
}



const multiply = function(a, b) {
    return a * b
}



const divide = function(a, b) {
    return a / b

}

let operate = function (a, b, c) {
    
    if (b == 'plus') {
        return add(a,c);
    }

    else if (b == 'minus') {
        return subtract(a,c);
    }
    
    else if (b == 'upon') {
        return divide(a,c);
    }

    else if (b == 'into') {
        return multiply(a,c);
    }

    else {
       return console.log('ERRUR');
    }
};



/* ##########################
    Button Selectors
########################## */

const clear = document.querySelector(".clear")

clear.addEventListener('click', () => { 
    return document.querySelector('p.displayText').textContent = "";
});

const numberOne = document.querySelector(".numberOne") 

numberOne.addEventListener('click', () => {
   return document.querySelector('p.displayText').textContent += 1;
});

const numberTwo = document.querySelector(".numberTwo") 

numberTwo.addEventListener('click', () => {
   return document.querySelector('p.displayText').textContent += 2;;
});
