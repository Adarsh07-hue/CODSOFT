let s = document.getElementById('screen');

function press(val) { 
    s.value += val; 
}

function clearScreen() { 
    s.value = ''; 
}

function equal() { 
    try {
        s.value = eval(s.value); 
    } catch(err) {
        s.value = 'Error';
    }
}