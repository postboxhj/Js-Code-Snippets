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
    if( count != 0){
        count--;
    } else{
        count = 0;
    }
    
    h2.textContent = count;
    h2.style.color = randomHexColor();
});
reset.addEventListener('click', function(){
 count = 0;
 h2.textContent = count;
 h2.style.color = randomHexColor();
});

function randomHexColor(){
    const hexColor = Math.floor(Math.random() * 16777216);
    const randomColor = "#" + hexColor.toString(16).padStart(6, '0');
    return randomColor;
}
