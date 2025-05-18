document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Reset previous error messages
      const errorMessages = document.querySelectorAll('.error-message');
      errorMessages.forEach(message => {
        message.style.display = 'none';
      });
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Validate form
      let isValid = true;
      
      if (name === '') {
        showError('name', 'Veuillez entrer votre nom');
        isValid = false;
      }
      
      if (email === '') {
        showError('email', 'Veuillez entrer votre email');
        isValid = false;
      } else if (!isValidEmail(email)) {
        showError('email', 'Veuillez entrer un email valide');
        isValid = false;
      }
      
      if (message === '') {
        showError('message', 'Veuillez entrer votre message');
        isValid = false;
      }
      
      if (isValid) {
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Envoi en cours...';
        submitButton.disabled = true;
        
        // Simulate API call with timeout
        setTimeout(() => {
          contactForm.reset();
          contactForm.style.display = 'none';
          formSuccess.style.display = 'block';
          
          // Reset form after 5 seconds for demo purposes
          setTimeout(() => {
            contactForm.style.display = 'block';
            formSuccess.style.display = 'none';
            submitButton.textContent = originalText;
            submitButton.disabled = false;
          }, 5000);
        }, 1500);
      }
    });
  }
  
  // Helper functions
  function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId).nextElementSibling;
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});