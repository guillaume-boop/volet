// JavaScript for the services page

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for service links
  const serviceLinks = document.querySelectorAll('.service-card a');
  
  serviceLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const headerOffset = 100;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Service card hover effects
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.service-icon');
      if (icon) {
        icon.style.transform = 'scale(1.1)';
        icon.style.color = 'var(--color-accent)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.service-icon');
      if (icon) {
        icon.style.transform = 'scale(1)';
        icon.style.color = 'var(--color-primary)';
      }
    });
  });
  
  // Process list animation
  const processList = document.querySelector('.process-list');
  
  if (processList) {
    const processItems = processList.querySelectorAll('li');
    
    const animateProcessItems = function() {
      processItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animated');
        }, 300 * index);
      });
    };
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateProcessItems();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(processList);
  }
  
  // Benefits cards hover effect
  const benefitCards = document.querySelectorAll('.benefit-card');
  
  benefitCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.backgroundColor = 'var(--color-primary)';
      this.style.color = 'var(--color-white)';
      
      const icon = this.querySelector('.benefit-icon');
      const heading = this.querySelector('h4');
      const paragraph = this.querySelector('p');
      
      if (icon) icon.style.color = 'var(--color-accent)';
      if (heading) heading.style.color = 'var(--color-white)';
      if (paragraph) paragraph.style.color = 'rgba(255, 255, 255, 0.8)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.backgroundColor = 'var(--color-white)';
      this.style.color = 'var(--color-text)';
      
      const icon = this.querySelector('.benefit-icon');
      const heading = this.querySelector('h4');
      const paragraph = this.querySelector('p');
      
      if (icon) icon.style.color = 'var(--color-primary)';
      if (heading) heading.style.color = 'var(--color-primary)';
      if (paragraph) paragraph.style.color = 'var(--color-text-light)';
    });
  });
  
  // Table row hover effect
  const tableRows = document.querySelectorAll('.comparison-table tr');
  
  tableRows.forEach(row => {
    if (!row.querySelector('th')) { // Skip header row
      row.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(30, 58, 138, 0.05)';
      });
      
      row.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'var(--color-white)';
      });
    }
  });
});