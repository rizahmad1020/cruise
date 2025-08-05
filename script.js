  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector('i');
      
      // Toggle current question
      question.classList.toggle('active');
      answer.classList.toggle('show');
      icon.classList.toggle('fa-chevron-up');
      
      // Close other open answers
      document.querySelectorAll('.faq-question').forEach(q => {
        if (q !== question && q.classList.contains('active')) {
          q.classList.remove('active');
          q.nextElementSibling.classList.remove('show');
          q.querySelector('i').classList.remove('fa-chevron-up');
        }
      });
    });
  });

    // Bounce animation for buttons
    function bounce(btn) {
      btn.classList.add("cruise-bounce");
      setTimeout(() => btn.classList.remove("cruise-bounce"), 600);
    }

    // Countdown Timer
    const countdown = () => {
      const deadline = new Date();
      deadline.setDate(deadline.getDate() + 9);
      deadline.setHours(23, 59, 59, 0);

      const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = deadline - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        if (distance < 0) {
          clearInterval(countdownTimer);
          document.getElementById('countdown').innerHTML = "<div class='expired'>Offer Expired!</div>";
        }
      };

      updateCountdown();
      const countdownTimer = setInterval(updateCountdown, 1000);
    };

    // Carousel functionality
    let currentImage = 0;
    const images = [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
    ];

    const overlays = [
      { title: "Mediterranean Majesty", subtitle: "7-Night Luxury Cruise" },
      { title: "Khuzama Adventure", subtitle: "5-Night Desert Cruise" },
      { title: "Caribbean Paradise", subtitle: "10-Night Tropical Escape" }
    ];

    function showImage(index) {
      currentImage = (index + images.length) % images.length;
      const img = document.getElementById("carouselImage");
      img.src = images[currentImage];
      
      const overlay = document.querySelector(".carousel-overlay");
      overlay.querySelector("h3").textContent = overlays[currentImage].title;
      overlay.querySelector("p").textContent = overlays[currentImage].subtitle;
      
      // Update dots
      document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentImage);
      });
    }

    function prevImage() {
      showImage(currentImage - 1);
    }

    function nextImage() {
      showImage(currentImage + 1);
    }

    function currentSlide(index) {
      showImage(index);
    }

    // Auto-rotate carousel
    let carouselInterval = setInterval(nextImage, 5000);

    function resetCarouselInterval() {
      clearInterval(carouselInterval);
      carouselInterval = setInterval(nextImage, 5000);
    }

    document.querySelectorAll('.cruise-arrow, .dot').forEach(element => {
      element.addEventListener('click', resetCarouselInterval);
    });

    // Mobile menu toggle
    function toggleMenu() {
      document.getElementById("mobileMenu").classList.toggle("show");
      document.body.classList.toggle("no-scroll");
    }

    // Tab switching
    function switchTab(index) {
      document.querySelectorAll('.cruise-tab').forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
      });
      
      document.querySelector('.cruise-search-form').classList.toggle('active', index === 0);
      document.querySelector('.cruise-manage-form').classList.toggle('active', index === 1);
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
      countdown();
      showImage(0);
    });


    /* Remarkable section*/
      function toggleCard(card) {
    // Close all other open cards first
    document.querySelectorAll('.cruise-card').forEach(item => {
      if (item !== card && item.classList.contains('expanded')) {
        item.classList.remove('expanded');
      }
    });
    
    // Toggle the clicked card
    card.classList.toggle('expanded');
  }

  // Header
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('show');
    document.body.classList.toggle('no-scroll');
  }

  // Mobile dropdown functionality
  document.querySelectorAll('.dropdown-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      this.parentElement.classList.toggle('active');
    });
  });

  


  /* New England */

  document.addEventListener('DOMContentLoaded', function() {
    // Port accordion functionality
    const portAccordion = document.getElementById('nePortAccordion');
    const portItems = portAccordion.querySelectorAll('.ne-port-item');
    
    portItems.forEach(item => {
        const header = item.querySelector('.ne-port-header');
        const content = item.querySelector('.ne-port-content');
        
        header.addEventListener('click', function() {
            // Close all other open items
            portItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.ne-port-content').style.maxHeight = '0';
                    otherItem.querySelector('.ne-port-header').setAttribute('aria-expanded', 'false');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
                header.setAttribute('aria-expanded', 'true');
            } else {
                content.style.maxHeight = '0';
                header.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Excursion buttons functionality
    const excursionButtons = document.querySelectorAll('.ne-port-excursion-btn');
    
    excursionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const port = this.getAttribute('data-port');
            alert(`Showing available excursions for ${port.charAt(0).toUpperCase() + port.slice(1)}. This would typically open a modal or link to excursions page.`);
            // In a real implementation, you would link to excursions or open a modal
        });
    });
    
    // Keyboard accessibility for accordion
    portItems.forEach(item => {
        const header = item.querySelector('.ne-port-header');
        
        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
    });
});