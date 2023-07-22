const toggle = document.getElementById('toggle-mode');



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

function toggleTheme(){
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    applyTheme(newTheme);
}


toggle.addEventListener('click', toggleTheme);


