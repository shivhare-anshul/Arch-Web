// Enhanced Hero Animations
document.addEventListener('DOMContentLoaded', () => {
    // Hero section animations
    const heroElements = document.querySelectorAll('.animate-slide-in, .animate-slide-in-delay, .animate-slide-in-delay-2');
    
    heroElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-50px)';
    });

    // Trigger hero animations on page load
    setTimeout(() => {
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.transition = 'all 1s ease-out';
                el.style.opacity = '1';
                el.style.transform = 'translateX(0)';
            }, index * 300);
        });
    }, 500);

    // Floating elements interaction
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.2) rotate(10deg)';
            element.style.color = 'rgba(44, 62, 80, 0.8)';
            element.style.transition = 'all 0.3s ease';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1) rotate(0deg)';
            element.style.color = 'rgba(44, 62, 80, 0.3)';
        });
    });

    // Welcome section animations
    const welcomeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const welcomeText = entry.target.querySelector('.welcome-text');
                const welcomeImages = entry.target.querySelector('.welcome-images');
                const valueItems = entry.target.querySelectorAll('.value-item');
                
                if (welcomeText) {
                    welcomeText.style.animation = 'fadeInUp 1s ease-out';
                }
                
                if (welcomeImages) {
                    welcomeImages.style.animation = 'fadeInUp 1s ease-out 0.3s both';
                }
                
                valueItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.animation = 'fadeInUp 0.8s ease-out both';
                    }, index * 200);
                });
                
                welcomeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const welcomeSection = document.querySelector('.welcome');
    if (welcomeSection) {
        welcomeObserver.observe(welcomeSection);
    }

    // Timeline animations
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const timelineItems = entry.target.querySelectorAll('.timeline-item');
                
                timelineItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.animation = `slideInTimeline 0.8s ease-out ${index * 0.2}s both`;
                    }, index * 200);
                });
                
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const timelineSection = document.querySelector('.design-process-timeline');
    if (timelineSection) {
        timelineObserver.observe(timelineSection);
    }

    // Features animations
    const featuresObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const featureCards = entry.target.querySelectorAll('.feature-card');
                
                featureCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.animation = `slideInFeature 0.8s ease-out ${index * 0.1}s both`;
                    }, index * 100);
                });
                
                featuresObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    const featuresSection = document.querySelector('.why-choose-us');
    if (featuresSection) {
        featuresObserver.observe(featuresSection);
    }

    // Timeline item hover effects
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Feature card hover effects
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        });
    });
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .stat, .contact-form, .team-member, .value-item, .process-step, .testimonial-card, .stat-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Portfolio Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// FAQ Toggle Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
const newsletterForm = document.querySelector('.newsletter-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const service = this.querySelector('select').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (!email) {
            alert('Please enter your email address.');
            return;
        }
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Subscribing...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Portfolio item hover effects
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px)';
        this.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Animate counters when stats section is visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('h4');
                counters.forEach(counter => {
                    const target = parseInt(counter.textContent);
                    animateCounter(counter, target);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Animate counters for stats items on about page
const statsItems = document.querySelectorAll('.stat-item h3');
if (statsItems.length > 0) {
    const statsItemsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent);
                animateCounter(entry.target, target);
                statsItemsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsItems.forEach(item => {
        statsItemsObserver.observe(item);
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #2c3e50;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    font-size: 18px;
`;

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to back to top button
backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.style.background = '#34495e';
    backToTopBtn.style.transform = 'translateY(-3px)';
});

backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.style.background = '#2c3e50';
    backToTopBtn.style.transform = 'translateY(0)';
});

// Dropdown menu functionality for mobile
const dropdowns = document.querySelectorAll('.dropdown');
const subDropdowns = document.querySelectorAll('.sub-dropdown');

dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    link.addEventListener('click', (e) => {
        e.preventDefault();
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
});

// Sub-dropdown functionality for mobile
subDropdowns.forEach(subDropdown => {
    const link = subDropdown.querySelector('.sub-dropdown-link');
    const menu = subDropdown.querySelector('.sub-dropdown-menu');
    
    link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Close other sub-dropdowns
        subDropdowns.forEach(otherSub => {
            if (otherSub !== subDropdown) {
                otherSub.classList.remove('active');
                otherSub.querySelector('.sub-dropdown-menu').style.display = 'none';
            }
        });
        
        // Toggle current sub-dropdown
        subDropdown.classList.toggle('active');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
        document.querySelectorAll('.sub-dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
        document.querySelectorAll('.sub-dropdown').forEach(sub => {
            sub.classList.remove('active');
        });
    }
}); 