


// const url = 'https://jsonplaceholder.typicode.com/users';

// const message = document.getElementById('message');
// const userList = document.getElementById('user-list');

// async function fetchData() {
//   try {
//     const response = await fetch(url);
    
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const data = await response.json();

//     userList.innerHTML = '';

//     data.forEach(userData => {
//       const listItem = document.createElement('li');
//       listItem.innerHTML = `
//         <p><strong>ID:</strong> ${userData.id}</p>
//         <p><strong>Name:</strong> ${userData.name}</p>
//         <p><strong>Username:</strong> ${userData.username}</p>
//         <p><strong>Email:</strong> ${userData.email}</p>
//         <p><strong>Address:</strong> ${userData.address.street}, ${userData.address.suite}, ${userData.address.city}, ${userData.address.zipcode}</p>
//         <p><strong>Geo Location:</strong> Latitude: ${userData.address.geo.lat}, Longitude: ${userData.address.geo.lng}</p>
//         <p><strong>Phone:</strong> ${userData.phone}</p>
//         <p><strong>Website:</strong> ${userData.website} </p>
//         <p><strong>Company Name:</strong> ${userData.company.name}</p>
//         <p><strong>Catchphrase:</strong> ${userData.company.catchPhrase}</p>
//         <p><strong>Company BS:</strong> ${userData.company.bs}</p>`;

//       userList.appendChild(listItem);
//     });
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// fetchData();



const url = 'https://jsonplaceholder.typicode.com/photos';

const message = document.querySelector('#message');
const userList = document.querySelector('#user-list');


async function fetchData(){

    try{

        const response = await fetch(url);
    if(!response.ok){
        throw new Error('Fetching data failed');
    }

    const data = await response.json();

    userList.innerHTML = '';

    data.forEach(user => {
        const listItem = document.createElement('li');
        listItem.innerHTML = 
        `<p><strong>User Id :</strong> ${user.albumId} </p>
        <p><strong>Id :</strong> ${user.id} </p>
        <p><strong>Title :</strong></strong> ${user.title} </p>
        <p><strong>Url :</strong> ${user.url} </p>
        <img src="${user.thumbnailUrl}" alt="Thumbnail">`;
        userList.appendChild(listItem);
    });

    }
    catch (error) {
        console.error('Error fetching data:', error);
      }
    
}

fetchData();