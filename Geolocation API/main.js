(()=>{


const message = document.querySelector('#message');
if(!navigator.geolocation){
    message.textContent = 'Your browser does not support geolocation';
    message.classList.add('error');
    return;
}


const btn = document.querySelector('#menu');
btn.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
})

 function  onSuccess(position){
    const { latitude, longitude } = position.coords;
    message.textContent = `Your location is: (ϕ${latitude} and λ${longitude})`;
    message.classList.add('success');
}

function onError(){
    message.textContent = `Failed to get your location`;
    message.classList.add('error');
}


})();