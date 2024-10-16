document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!validateFullName(fullName)) {
        alert('Invalid full name');
        return;
    }

    if (!validateEmail(email)) {
        alert('Invalid email address');
        return;
    }

    if (!validatePhone(phone)) {
        alert('Invalid phone number');
        return;
    }

    // Показываем QR-код
    document.getElementById('qrCodeContainer1').style.display = 'block';
});

function validateFullName(name) {
    return name.length > 0; // Простая проверка на наличие имени
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Проверка email формата
    return regex.test(email);
}

function validatePhone(phone) {
    const regex = /^\+?[0-9\s\-]{10,15}$/; // Простая проверка номера телефона
    return regex.test(phone);
}

// Получаем элементы
const modal = document.getElementById("contactWidgetModal");
const openButton = document.getElementById("openWidgetButton");
const closeButton = document.getElementsByClassName("close")[0];

// Открытие модального окна при нажатии на кнопку
openButton.onclick = function() {
    modal.style.display = "block";
}

// Закрытие модального окна при нажатии на крестик
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Закрытие модального окна при клике вне его области
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
