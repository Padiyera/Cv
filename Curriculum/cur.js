document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var Expecificaciones = document.getElementById('Expecificaciones').value;

    var data = 'Nombre: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Expecificaciones: ' + Expecificaciones;

    alert(data);
});