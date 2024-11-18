const sendEmail = () => {
    const serviceID = 'service_un9an71'; // Reemplaza con tu Service ID
    const templateID = 'template_vv1thr7'; // Reemplaza con tu Template ID

    // Captura los valores del formulario
    const params = {
        name: document.getElementById('wname').value,
        email: document.getElementById('wemail').value,
        phone: document.getElementById('wphone').value,
        description: document.querySelector('textarea').value
    };

    // Enviar el correo usando EmailJS
    emailjs.send(serviceID, templateID, params)
        .then((response) => {
            alert('¡Mensaje enviado exitosamente!');
            console.log('Éxito:', response.status, response.text);
        })
        .catch((error) => {
            alert('Hubo un error al enviar el mensaje.');
            console.error('Error:', error);
        });
};

// Agrega el evento al botón de envío
document.querySelector('.primary-btn').addEventListener('click', (e) => {
    e.preventDefault(); // Evita el refresco de la página
    sendEmail();
});