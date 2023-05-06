

const button = document.getElementById('btn');
const output = document.getElementById('output');
const reset = document.getElementById('reset');

function fibonacci(n){
    const fib = [0,1]
    for (let i = 2; i <= n; i++){
        fib[i] = fib[i-1] + fib[i-2]
        }
        return fib;   
}


button.addEventListener('click', (e) => {
    e.preventDefault();
   const input = document.getElementById('inputNumber').value;
    const fibArray = fibonacci(input)
   output.innerHTML = `The fibonacci sequence for the number ${input} is:  (${fibArray})`;

});

reset.addEventListener('click', () =>{
    document.getElementById('inputNumber').value = '';
    output.innerHTML = '';
});
