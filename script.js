// ================================
// FINANCIAL FREEDOM ACADEMY - INTERACTIVE FEATURES
// ================================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to nav items on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form submission handling (if using Formspree or similar)
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Let the form submit naturally if using Formspree
        // Or add custom handling here
        
        // Optional: Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // If using custom AJAX submission, prevent default and handle it here
        // For Formspree, just let it submit naturally
    });
}

// Animate elements on scroll (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.service-card, .problem-card, .principle-card, .testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Mobile menu toggle (basic implementation)
// You can enhance this with a hamburger menu later
const createMobileMenu = () => {
    const nav = document.querySelector('.navbar .container');
    const navMenu = document.querySelector('.nav-menu');
    
    // Only add mobile menu on small screens
    if (window.innerWidth <= 768) {
        const menuBtn = document.createElement('button');
        menuBtn.className = 'mobile-menu-btn';
        menuBtn.innerHTML = '☰';
        menuBtn.style.cssText = `
            display: block;
            background: var(--primary-color);
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1.5rem;
        `;
        
        menuBtn.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.background = 'white';
            navMenu.style.padding = '1rem';
            navMenu.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
        
        if (!document.querySelector('.mobile-menu-btn')) {
            nav.appendChild(menuBtn);
        }
    }
};

// Initialize mobile menu
if (window.innerWidth <= 768) {
    createMobileMenu();
}

// Reinitialize on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }
});

// Add WhatsApp click tracking (optional analytics)
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('WhatsApp link clicked');
        // Add your analytics tracking here if needed
    });
});

// Stats counter animation (for hero section)
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = stat.textContent;
        // Only animate if it's a number
        if (target.includes('N$')) {
            // Animate money values
            const value = parseFloat(target.replace(/[^0-9.]/g, ''));
            let current = 0;
            const increment = value / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = 'N$' + current.toFixed(1) + 'M+';
                }
            }, 30);
        }
    });
};

// Run stats animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// Add current year to footer
const updateFooterYear = () => {
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear && footerYear.textContent.includes('2024')) {
        const currentYear = new Date().getFullYear();
        footerYear.textContent = footerYear.textContent.replace('2024', currentYear);
    }
};

updateFooterYear();

console.log('Financial Freedom Academy website loaded successfully! 🎯');
