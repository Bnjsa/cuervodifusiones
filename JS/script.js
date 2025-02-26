// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aquí iría la lógica de autenticación
    if (email === 'admin@example.com' && password === '123456') {
        alert('Bienvenido!');
        window.location.href = 'feed.html'; // Redirige a la pantalla de eventos
    } else {
        alert('Credenciales incorrectas');
    }
});
