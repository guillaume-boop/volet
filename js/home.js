// JavaScript for the home page

document.addEventListener('DOMContentLoaded', function() {
  // Testimonials slider
  const testimonialSlider = {
    currentIndex: 0,
    testimonials: document.querySelectorAll('.testimonial-card'),
    dots: document.querySelectorAll('.testimonial-dot'),
    prevBtn: document.querySelector('.testimonial-prev'),
    nextBtn: document.querySelector('.testimonial-next'),
    
    init: function() {
      if (this.testimonials.length === 0) return;
      
      this.showTestimonial(0);
      
      // Event listeners
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => {
          this.prevTestimonial();
        });
      }
      
      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => {
          this.nextTestimonial();
        });
      }
      
      this.dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          this.showTestimonial(index);
        });
      });
      
      // Auto slide
      this.startAutoSlide();
    },
    
    showTestimonial: function(index) {
      // Hide all testimonials
      this.testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
      });
      
      // Remove active class from all dots
      this.dots.forEach(dot => {
        dot.classList.remove('active');
      });
      
      // Show the selected testimonial
      this.testimonials[index].classList.add('active');
      this.dots[index].classList.add('active');
      this.currentIndex = index;
    },
    
    nextTestimonial: function() {
      let nextIndex = this.currentIndex + 1;
      if (nextIndex >= this.testimonials.length) {
        nextIndex = 0;
      }
      this.showTestimonial(nextIndex);
    },
    
    prevTestimonial: function() {
      let prevIndex = this.currentIndex - 1;
      if (prevIndex < 0) {
        prevIndex = this.testimonials.length - 1;
      }
      this.showTestimonial(prevIndex);
    },
    
    startAutoSlide: function() {
      this.autoSlideInterval = setInterval(() => {
        this.nextTestimonial();
      }, 5000);
      
      // Pause auto slide on hover
      const sliderContainer = document.querySelector('.testimonials-slider');
      if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => {
          clearInterval(this.autoSlideInterval);
        });
        
        sliderContainer.addEventListener('mouseleave', () => {
          this.startAutoSlide();
        });
      }
    }
  };
  
  testimonialSlider.init();
  
  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  }
  
  // Animate hero content on load
  setTimeout(() => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('animated');
    }
  }, 100);
});