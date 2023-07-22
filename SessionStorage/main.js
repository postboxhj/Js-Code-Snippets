const darkBtn = document.getElementById('dark-mode');
const lightBtn = document.getElementById('light-mode');


const mode = sessionStorage.getItem('theme');
console.log(mode);

if(mode){
    applyTheme('mode')
}else{
    applyTheme('light-mode');
}

function applyTheme(theme) {
    if( theme === 'dark-mode'){
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');

    }else{
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
    sessionStorage.setItem('theme', theme);
}

darkBtn.addEventListener('click', () => {
    applyTheme('dark-mode')
})
lightBtn.addEventListener('click', () => {
    applyTheme('light-mode')
})



