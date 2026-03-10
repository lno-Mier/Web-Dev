const ageInput = document.querySelector('.age_input');
const nameInput = document.querySelector('.name_input');
const submitBtn = document.querySelector('.submit_button');
const messageArea = document.querySelector('.message_area');
const greeting = document.getElementById('greeting');

submitBtn.disabled = true;

function checkAccess() {
    const age = parseInt(ageInput.value);
    const name = nameInput.value.trim();

    if (age >= 18 && name.length > 0) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

ageInput.addEventListener('input', checkAccess);
nameInput.addEventListener('input', checkAccess);

submitBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();

    greeting.textContent = `WELCOME TO 18+ CLUB, ${name.toUpperCase()}!`;

    messageArea.style.display = 'block';

    ageInput.style.display = 'none';
    nameInput.style.display = 'none';
    submitBtn.style.display = 'none';
    document.querySelector('h2').style.display = 'none';

    setTimeout(() => {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }, 3000);
});