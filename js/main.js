const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const result = document.getElementsByClassName('result')[0];

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const multiple = document.getElementById('multiple');

plus.addEventListener('click', ()=>{
    let hasil = Number(firstNumber.value)+Number(secondNumber.value);
    result.innerHTML = hasil;   
});

minus.addEventListener('click', ()=>{
    let hasil = Number(firstNumber.value)-Number(secondNumber.value);
    result.innerHTML = hasil;   
});

multiple.addEventListener('click', ()=>{
    let hasil = Number(firstNumber.value)*Number(secondNumber.value);
    result.innerHTML = hasil;   
});

divide.addEventListener('click', ()=>{
    let hasil = Number(firstNumber.value)/Number(secondNumber.value);
    result.innerHTML = hasil;   
});