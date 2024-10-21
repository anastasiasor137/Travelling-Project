const phoneInput = document.getElementById('phone')
const nameInput = document.getElementById('name')
const error = document.getElementById('errorText')
const success = document.getElementById('successText')
document.getElementById('submitBtn').addEventListener('click', (e) => {
    error.classList.add('d-none')
    success.classList.add('d-none')
    const phoneValue = phoneInput.value.trim()
    if (phoneValue.length === 0) {
        error.textContent = 'The phone number cannot be empty.'
        error.classList.remove('d-none')
        return;
    }
    
    const phoneRegex = /^8\d{10}$/
    if (!phoneRegex.test(phoneValue)) {
        error.textContent = 'The phone number must start with 8 and contain 11 digits.'
        error.classList.remove('d-none')
        return;
    }
    success.textContent = 'Great! We will recall you as soon as possible!'
    success.classList.remove('d-none')
    phoneInput.value = ''
    nameInput.value = ''
});

const navLinks = document.getElementById('navLinks')
let isMenuOpened = false
document.querySelector('.hamburger').addEventListener('click', () => {
    isMenuOpened = !isMenuOpened
    navLinks.style.display = isMenuOpened ? 'none' : 'block'
})

navLinks.addEventListener('click', () => {
    navLinks.style.display = 'none'
    isMenuOpened = false
})

window.onresize = () => {
    if (window.innerWidth > 1115){
        navLinks.style.display = 'flex'
    } else {
         navLinks.style.display = ''
    }
}