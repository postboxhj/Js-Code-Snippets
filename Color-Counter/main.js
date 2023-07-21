let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let reset = document.getElementById('reset');
let h2 = document.getElementById('h2');
let count = 0;
plus.addEventListener('click', function(){
    count++;
    h2.textContent = count;
    h2.style.color = randomHexColor();
});
minus.addEventListener('click', function(){
        count--;
        h2.style.color = (count < 0) ? 'red' : randomHexColor();    
        h2.textContent = count;
    
});
reset.addEventListener('click', function(){
 count = 0;
 h2.textContent = count;
 h2.style.color = 'blue';
});

function randomHexColor(){
    const hexColor = Math.floor(Math.random() * 16777216);
    const randomColor = "#" + hexColor.toString(16).padStart(6, '0');
    return randomColor;
}
