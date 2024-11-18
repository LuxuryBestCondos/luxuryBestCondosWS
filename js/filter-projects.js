function updateLogoAndFilterHotels() {
    const location = document.getElementById('location').value; // Ubicación seleccionada
    const logo = document.getElementById('dynamic-logo');
    const hotelCards = document.querySelectorAll('.hotel-card');
  
    // Actualizar el logo
    logo.textContent = location || 'LOGO';
  
    // Filtrar tarjetas según la ubicación seleccionada
    hotelCards.forEach((card) => {
      if (card.getAttribute('data-location') === location) {
        card.style.display = 'block'; // Mostrar
      } else {
        card.style.display = 'none'; // Ocultar
      }
    });
  
    // Verificar si todos los campos están llenos
    checkFields();
  }
  
  function checkFields() {
    const location = document.getElementById('location').value;
    const date = document.getElementById('appointment-date').value;
    const pickupTime = document.getElementById('pickup-time').value;
    const dropoffTime = document.getElementById('dropoff-time').value;
    const specifications = document.getElementById('project-specifications').value;
  
    // Habilitar el botón solo si todos los campos están completos
    const searchBtn = document.getElementById('search-btn');
    searchBtn.disabled = !(location && date && pickupTime && dropoffTime && specifications);
  }
  
  function searchData() {
    // Implementa la lógica para enviar los datos
    alert('Search initiated with selected data!');
  }