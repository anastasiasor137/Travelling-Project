// const menuBtn = document.getElementById("menu-btn");
// const navLinks = document.getElementById("nav-links");
// const menuBtnIcon = menuBtn.querySelector("i");

// menuBtn.addEventListener("click", (e) => {
//   navLinks.classList.toggle("open");

//   const isOpen = navLinks.classList.contains("open");
//   menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
// });

// navLinks.addEventListener("click", (e) => {
//   navLinks.classList.remove("open");
// //   menuBtnIcon.setAttribute("class", "ri-menu-line");
// // });

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementsByClassName('.submitBtn').addEventListener('click', function() {
//       // Получаем значения введенных данных
//       const name = document.querySelector('.name').value;
//       const surname = document.querySelector('.surname').value;
//       const phone = document.getElementById('phone').value;

//       // Шаблон для проверки номера телефона
//       const phonePattern = /^8\d{10}$/;

//       // Проверка имени и фамилии на корректность (только буквы)
//       const namePattern = /^[А-Яа-яЁё\s]+$/;

//       // Проверка имени
//       if (!namePattern.test(name)) {
//           alert('Имя должно содержать только буквы');
//           return;
//       }

//       // Проверка фамилии
//       if (!namePattern.test(surname)) {
//           alert('Фамилия должна содержать только буквы');
//           return;
//       }

//       // Проверка номера телефона
//       if (!phonePattern.test(phone)) {
//           alert('Номер телефона должен начинаться с 8 и содержать 11 цифр');
//           return;
//       }

//       // Если все проверки пройдены, изменяем стиль кнопки
//       const button = document.getElementsByClassName('.submitBtn');
//       button.style.backgroundColor = 'green';
//       button.style.color = 'white';
//       button.textContent = 'Отправлено!';
//   });
// });

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