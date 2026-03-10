let loadBtn = document.querySelector('#loadBtn');
let statusMessage = document.querySelector('#statusMessage');
let usersContainer = document.querySelector('#usersContainer');

loadBtn.addEventListener('click', async () => {
    containers.innerHTML = '';
    statusMessage.textContent = 'Loading...';
    statusMessage.className = 'loading';
    loadBtn.disabled = true;

    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok) throw new Error('Network response was not ok');

        const users = await response.json();

        statusMessage.textContent = '';

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            userCard.innerHTML = `
                <h3>`

        });
    }
});