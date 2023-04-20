let textarea =document.querySelector('#textarea');
let counter = document.querySelector('.counter');
let reset = document.getElementById('btn-reset');

textarea.addEventListener('input',  updateCounter);

function updateCounter(){
    let count = textarea.value.length
    counter.textContent = `${count} Characters`};

window.addEventListener('load', updateCounter);

reset.addEventListener('click', function(){
 textarea.value = '';
 updateCounter();

});