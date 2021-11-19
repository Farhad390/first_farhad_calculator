
// Clean Button
const cleanBtn = document.querySelector('#cleanBtn');

function allClean(){
    document.querySelector('#clac__display').value = '';
}



// Calculate
function clculate(newValue){
    document.querySelector('#clac__display').value += newValue;
}

// Result
function result(){
    const a = document.querySelector('#clac__display').value;
    const b = eval(a);
    document.querySelector('#clac__display').value = b;
}