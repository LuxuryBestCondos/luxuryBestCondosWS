function submitFAQ() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var description = document.querySelector('textarea').value;

    // Referencia a la base de datos donde se guardarán las FAQs
    var faqRef = firebase.database().ref('faqs');

    // Crear un nuevo FAQ y agregarlo a la base de datos
    faqRef.push({
        name: name,
        email: email,
        description: description
    }).then(function() {
        alert('FAQ guardada!');
        // Limpiar formulario
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.querySelector('textarea').value = '';
    }).catch(function(error) {
        alert('Falló crear la FAQ: ' + error.message);
    });
}