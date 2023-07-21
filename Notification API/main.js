(async()=>{



const showNotifications = () =>{
    const notification = new Notification('Notifications API', {
        body : 'This is the sample code for the notification API',
        icon : './js.png',
        vibrate : true
    });


    setTimeout(() => {
        notification.close();
        
    }, 10*1000);

    notification.addEventListener('click', () => {
        window.open('https://www.google.com/')
    })

}


const showError = () => {
    const error = document.querySelector('.error');
    error.style.display = 'block';
    error.textContent = 'You Blocked This Notification';

}

let grant = 'false';

if(Notification.permission === 'grant'){
    grant = 'true';
}
else if(Notification.permission !== 'denied'){
    let permission = await Notification.requestPermission();
    grant = permission === 'grant' ? 'true' : 'false';
}

grant ? showNotifications() : showError();










})();