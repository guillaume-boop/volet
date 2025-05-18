// JavaScript for the products page

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for product tabs
  const productTabs = document.querySelectorAll('.products-tabs a');
  
  productTabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all tabs
      productTabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Get the target section
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Scroll to the target section
        const headerOffset = 140; // Header + tabs height
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Highlight active tab on scroll
  const productSections = document.querySelectorAll('.product-section');
  
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + 150; // Add offset for header and tabs
    
    productSections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const sectionId = section.getAttribute('id');
        
        productTabs.forEach(tab => {
          tab.classList.remove('active');
          
          if (tab.getAttribute('href') === `#${sectionId}`) {
            tab.classList.add('active');
          }
        });
      }
    });
  });
  
  // FAQ accordion
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', function() {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
  
  // Image hover effect
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const image = this.querySelector('.product-image img');
      if (image) {
        image.style.transform = 'scale(1.05)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      const image = this.querySelector('.product-image img');
      if (image) {
        image.style.transform = 'scale(1)';
      }
    });
  });
});