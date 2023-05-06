setInterval(() => {

    const now = new Date();
    const fullDate = now.toLocaleString('default', 
    {
    weekday: 'long',
    year : 'numeric',
    month: 'long',
    day: 'numeric'
    });
    heading.innerHTML = `Today is ${fullDate}`


const currentTime = now.toLocaleTimeString();
time.innerHTML = `${currentTime}`;
    
}, 1000);

