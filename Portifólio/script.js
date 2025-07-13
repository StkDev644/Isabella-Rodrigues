// Loading Screen
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.classList.add('hidden');
            setTimeout(() => {
                loading.style.display = 'none';
            }, 500);
        }, 1000);
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

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
        navbar.style.boxShadow = '0 2px 20px rgba(255, 143, 163, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal, .skill-card, .project-card, .certificate-card, .contact-card');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

// Add reveal class to elements
document.addEventListener('DOMContentLoaded', () => {
    // Add reveal class to elements that should animate
    const elementsToReveal = document.querySelectorAll('.skill-card, .project-card, .certificate-card, .contact-card, .glass-card');
    elementsToReveal.forEach(element => {
        element.classList.add('reveal');
    });
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Contact Form Functionality with FormSubmit
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitButton.disabled = true;
    
    try {
        // Send form data to FormSubmit
        const formData = new FormData(contactForm);
        
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            // Success message
            showNotification('Mensagem enviada com sucesso! Em breve entrarei em contato.', 'success');
            contactForm.reset();
            
            // Reset form labels
            const labels = contactForm.querySelectorAll('label');
            labels.forEach(label => {
                label.style.top = '1rem';
                label.style.fontSize = 'var(--font-size-base)';
                label.style.color = 'var(--text-light)';
            });
            
            // Trigger confetti effect
            setTimeout(() => {
                createConfetti();
            }, 500);
            
        } else {
            throw new Error('Erro no envio');
        }
        
    } catch (error) {
        console.error('Erro no envio:', error);
        showNotification('Erro ao enviar mensagem. Entre em contato diretamente pelo e-mail: zzzgams@gmail.com', 'error');
    } finally {
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Form field animations
const formGroups = document.querySelectorAll('.form-group');

formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    const label = group.querySelector('label');
    
    if (input && label) {
        // Check if input has value on load
        if (input.value) {
            label.style.top = '-0.5rem';
            label.style.fontSize = 'var(--font-size-xs)';
            label.style.color = 'var(--primary-color)';
            label.style.fontWeight = '600';
        }
        
        input.addEventListener('focus', () => {
            label.style.top = '-0.5rem';
            label.style.fontSize = 'var(--font-size-xs)';
            label.style.color = 'var(--primary-color)';
            label.style.fontWeight = '600';
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                label.style.top = '1rem';
                label.style.fontSize = 'var(--font-size-base)';
                label.style.color = 'var(--text-light)';
                label.style.fontWeight = '400';
            }
        });
        
        input.addEventListener('input', () => {
            if (input.value) {
                label.style.top = '-0.5rem';
                label.style.fontSize = 'var(--font-size-xs)';
                label.style.color = 'var(--primary-color)';
                label.style.fontWeight = '600';
            }
        });
    }
});

// Hover effects for cards
const cards = document.querySelectorAll('.skill-card, .project-card, .certificate-card, .contact-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = card.style.transform.replace('scale(1)', 'scale(1.02)');
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = card.style.transform.replace('scale(1.02)', 'scale(1)');
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.gradient-text');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 150);
        }, 1000);
    }
});

// Particle effect for hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            pointer-events: none;
        `;
        hero.appendChild(particle);
    }
}

// Add floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles);

// Intersection Observer for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all reveal elements
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll('.reveal');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});

// Add floating elements to hero section
function addFloatingElements() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const shapes = ['circle', 'square', 'triangle'];
    const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)'];
    
    for (let i = 0; i < 8; i++) {
        const element = document.createElement('div');
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        element.style.cssText = `
            position: absolute;
            width: ${Math.random() * 60 + 20}px;
            height: ${Math.random() * 60 + 20}px;
            background: ${color};
            opacity: 0.1;
            border-radius: ${shape === 'circle' ? '50%' : shape === 'triangle' ? '0' : '10px'};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatSlow ${Math.random() * 20 + 15}s linear infinite;
            pointer-events: none;
            z-index: 1;
        `;
        
        if (shape === 'triangle') {
            element.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        }
        
        hero.appendChild(element);
    }
}

// Add slow floating animation
const slowFloatStyle = document.createElement('style');
slowFloatStyle.textContent = `
    @keyframes floatSlow {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.1;
        }
        50% {
            opacity: 0.2;
        }
        100% {
            transform: translateY(-50vh) rotate(180deg);
            opacity: 0.1;
        }
    }
`;
document.head.appendChild(slowFloatStyle);

// Initialize floating elements
document.addEventListener('DOMContentLoaded', addFloatingElements);

// Add cursor trail effect
let mouseX = 0;
let mouseY = 0;
let trail = [];

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Create trail element
    const trailElement = document.createElement('div');
    trailElement.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${mouseX - 3}px;
        top: ${mouseY - 3}px;
        opacity: 0.6;
        transition: all 0.1s ease;
    `;
    
    document.body.appendChild(trailElement);
    
    // Remove trail element after animation
    setTimeout(() => {
        if (trailElement.parentNode) {
            trailElement.parentNode.removeChild(trailElement);
        }
    }, 1000);
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
}

window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scroll-progress');
    if (scrollProgress) {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }
});

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', createScrollProgress);

// Add confetti effect for form submission
function createConfetti() {
    const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)', 'var(--mint-green)', 'var(--soft-blue)'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}%;
            top: -10px;
            animation: confettiFall ${Math.random() * 3 + 2}s linear forwards;
            pointer-events: none;
            z-index: 10000;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
}

// Add confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Confetti effect is now triggered in the form submission handler

// Add tilt effect to cards
function addTiltEffect() {
    const cards = document.querySelectorAll('.skill-card, .project-card, .certificate-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });
}

// Initialize tilt effect
document.addEventListener('DOMContentLoaded', addTiltEffect); 