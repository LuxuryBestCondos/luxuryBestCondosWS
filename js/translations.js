function changeLanguage(selectedLang) {
    fetch('js/translations.json')
        .then(response => response.json())
        .then(translations => {
            document.getElementById('hero_heading').textContent = translations[selectedLang].hero_heading;
            document.getElementById('hero_description').textContent = translations[selectedLang].hero_description;
            document.getElementById('hero_button').textContent = translations[selectedLang].hero_button;

            document.getElementById('nav_home').textContent = translations[selectedLang].home;
            document.getElementById('nav_who_we_are').textContent = translations[selectedLang].who_we_are;
            document.getElementById('nav_services').textContent = translations[selectedLang].services;
            document.getElementById('nav_faq').textContent = translations[selectedLang].faq;
            document.getElementById('nav_sign_in').textContent = translations[selectedLang].sign_in;
            document.getElementById('nav_register').textContent = translations[selectedLang].register;

            document.getElementById('label_location').textContent = translations[selectedLang].location;
            document.getElementById('input_type_location').placeholder = translations[selectedLang].type_location;
            document.getElementById('label_person').textContent = translations[selectedLang].person;
            document.getElementById('label_check_in').textContent = translations[selectedLang].check_in;
            document.getElementById('input_check_in').placeholder = translations[selectedLang].check_in_date;
            document.getElementById('label_check_out').textContent = translations[selectedLang].check_out;
            document.getElementById('input_check_out').placeholder = translations[selectedLang].check_out_date;
            document.getElementById('btn_search').textContent = translations[selectedLang].search;

            document.getElementById('top_vacation_destinations').textContent = translations[selectedLang].top_vacation_destinations;
            document.getElementById('villa').textContent = translations[selectedLang].villa;
            document.getElementById('villa_items').textContent = translations[selectedLang].villa_items;
            document.getElementById('hotel').textContent = translations[selectedLang].hotel;
            document.getElementById('hotel_items').textContent = translations[selectedLang].hotel_items;
            document.getElementById('resort').textContent = translations[selectedLang].resort;
            document.getElementById('resort_items').textContent = translations[selectedLang].resort_items;
            document.getElementById('cottage').textContent = translations[selectedLang].cottage;
            document.getElementById('cottage_items').textContent = translations[selectedLang].cottage_items;
            document.getElementById('bungalow').textContent = translations[selectedLang].bungalow;
            document.getElementById('bungalow_items').textContent = translations[selectedLang].bungalow_items;
            document.getElementById('duplex').textContent = translations[selectedLang].duplex;
            document.getElementById('duplex_items').textContent = translations[selectedLang].duplex_items;
            document.getElementById('business_hotel').textContent = translations[selectedLang].business_hotel;
            document.getElementById('business_hotel_items').textContent = translations[selectedLang].business_hotel_items;
            document.getElementById('chain_hotel').textContent = translations[selectedLang].chain_hotel;
            document.getElementById('chain_hotel_items').textContent = translations[selectedLang].chain_hotel_items;
            document.getElementById('view_more').textContent = translations[selectedLang].view_more;

            document.getElementById('customer_feedback').textContent = translations[selectedLang].customer_feedback;
            document.getElementById('quality_service').textContent = translations[selectedLang].quality_service;

            document.getElementById('popular_links').textContent = translations[selectedLang].popular_links;
            document.getElementById('trust_safety').textContent = translations[selectedLang].trust_safety;
            document.getElementById('feature_hotels').textContent = translations[selectedLang].feature_hotels;
            document.getElementById('hotel_booking').textContent = translations[selectedLang].hotel_booking;
            document.getElementById('contact_us').textContent = translations[selectedLang].contact_us;
            
            document.getElementById('copyright').textContent = translations[selectedLang].copyright;
            document.getElementById('privacy_policy').textContent = translations[selectedLang].privacy_policy;
            document.getElementById('terms_conditions').textContent = translations[selectedLang].terms_conditions;
            document.getElementById('send').textContent = translations[selectedLang].send;

        })
        .catch(error => console.error('Error loading translations:', error));
}