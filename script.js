// =============================================
// Smooth Scrolling for Navigation Links
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// =============================================
// Intersection Observer for Animations
// =============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});
// =============================================
// Particle Animation for Hero Section
// =============================================
const createParticles = () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Clear existing particles
    document.querySelectorAll('.particle').forEach(p => p.remove());
    
    // Create particles based on screen size
    const particleCount = window.innerWidth < 768 ? 8 : 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 2px and 6px (smaller on mobile)
        const size = window.innerWidth < 768 ? 
            Math.random() * 2 + 1 : 
            Math.random() * 4 + 2;
            
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `-10px`;
        
        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        
        // Animation with random duration and delay
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        hero.appendChild(particle);
    }
    
    // Recreate particles on resize (with debounce)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(createParticles, 250);
    });
};

// In the window.addEventListener('load', ...)
window.addEventListener('load', () => {
    // Existing code...
    createParticles();
});

// Initialize particles on DOM ready as well
document.addEventListener('DOMContentLoaded', createParticles);

// =============================================
// Navigation Effects
// =============================================
window.addEventListener('scroll', () => {
    // Navbar background change
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    
    if (navbar && hero) {
        const heroHeight = hero.offsetHeight;
        
        if (window.scrollY > heroHeight - 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    }
    
    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// =============================================
// Mobile Menu Functionality
// =============================================
const initMobileMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Empêche le défilement quand le menu est ouvert
            if (navLinks.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });

        // Ferme le menu quand on clique sur un lien
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
            });
        });
    }
};

// =============================================
// Project Modal Functionality
// =============================================
const projectsData = {
    mockup: {
        title: "University Student Portal",
        image: "image/mockup1.jpg",
        description: "The project is a student companion app that centralizes schedules, grades, announcements, and personal info. It includes an AI chatbot for quick university-related answers.",
        figmaUrl: "https://www.figma.com/design/nRN3XfEvfb6uGREyRooLm0/pentadesigners?node-id=0-1&t=NU15K6q2PxOJU9P8-1"
    },
    neuron: {
        title: "Neuron website",
        image: "image/neuron.jpg",
        description: "Neuron, a medical practice management platform, needed a web redesign to improve accessibility and workflow for doctors and assistants.",
        figmaUrl: "https://www.figma.com/design/XvIFgYifVwj8e03BWLUH6h/Challenge-3?node-id=0-1&p=f&t=CztxVjoHSv2wwF7I-0"
    },
    book: {
        title: "Yume hon",
        image: "image/book.jpg",
        description: "This AR/VR app transforms books into immersive experiences with a 3D library, narration, and AI-powered interactions.It includes social features.",
        figmaUrl: "https://www.figma.com/design/nRN3XfEvfb6uGREyRooLm0/pentadesigners?node-id=183-3212&t=NU15K6q2PxOJU9P8-1"
    },
    hanoi: {
        title: "Hanoi Game",
        image: "image/hanoi.jpg",
        description: "This is a colorful puzzle game inspired by the classic Tower of Hanoi, set in a vibrant world themed around the Indian festival of Holi.",
        figmaUrl: "https://www.figma.com/design/1wNl0xeUvGImWv3KOtSn0v/HANOI?node-id=0-1&t=GUabQ8SbFPKmx6pQ-1"
    },
    assirem: {
        title: "Assirem app",
        image: "image/assirem.jpg",
        description: "Assirem is a mobile app that connects volunteers with associations to foster mutual support and social engagement.",
        figmaUrl: "https://www.figma.com/design/hV5uLEkGe4EdV7dhMxUqDt/ASIREM-FONDATION?node-id=0-1&t=kcOFSPh487uivGXn-1"
    },
    vamos: {
        title: "Vamos website",
        image: "image/vamos.jpg",
        description: "Vamos is a travel website that helps users discover and book top destinations for their next vacation.With a clean and vibrant interface",
        figmaUrl: "https://www.figma.com/design/wm1LdqI8qX7tJMatKRzhTT/Vamos-site?node-id=0-1&t=DGrbD1idJlJuKPlp-1"
    },
    logo10: {
        title: "Logos collections",
        image: "image/logo10.jpg",
        description: "stylish showcase of modern logo designs featuring various brands.The designs demonstrate a professional branding aesthetics across different industries.",
        figmaUrl: "#"
    },
    cartevisite: {
        title: "business card",
        image: "image/cartevisite.jpg",
        description: "A collection of business card designs for Algerian businesses, showcasing a variety of styles and branding approaches.",
        figmaUrl: "#"
    }
};

const openModal = (projectKey) => {
    const project = projectsData[projectKey];
    const modal = document.getElementById('projectModal');
    
    if (!modal) return;
    
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('figma-link').href = project.figmaUrl;
    
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 50);
};

const closeModal = () => {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
};

// =============================================
// Certifications Modal Functionality
// =============================================
const certsData = {
    design: {
        title: "Graphic Design Certification",
        images: ["image/graphic1.jpg", "image/graphic2.jpg", "image/graphic3.jpg"],
        description: "Comprehensive graphic design certification covering Adobe tools and visual design principles."
    },
    tech: {
        title: "Tech Conference Participation",
        images: ["image/techconference.jpg"],
        description: "Active participation in tech conferences on cybersecurity and digital innovation."
    },
    hackathon: {
        title: "Experia Hackathon Participation",
        images: ["image/experia.jpg"],
        description: "Participated in the Experia Design Hackathon — ranked 3rd out of 35 participants."
    },
    hackathon2: {
        title: "Holllow dev Hackathon Participation",
        images: ["image/hachaton1.jpg"],
        description: "Collaborated in a 48-hour development hackathon, building an innovative web application."
    },
    ideathon: {
        title: "Creative Ideathon Participation",
        images: ["image/ideathon.jpg"],
        description: "Contributed creative solutions and pitched ideas for digital transformation."
    }
};

const openCertModal = (certKey) => {
    const cert = certsData[certKey];
    const modal = document.getElementById('certModal');
    
    if (!modal) return;
    
    document.getElementById('cert-modal-title').textContent = cert.title;
    
    const modalBody = document.querySelector('#certModal .modal-body');
    if (!modalBody) return;
    
    modalBody.innerHTML = `
        <div class="cert-images-container"></div>
        ${cert.images.length > 1 ? `
            <button class="cert-nav cert-prev">❮</button>
            <button class="cert-nav cert-next">❯</button>
        ` : ''}
    `;
    
    const imagesContainer = modalBody.querySelector('.cert-images-container');
    let currentIndex = 0;
    
    const showImage = (index) => {
        if (!imagesContainer) return;
        
        imagesContainer.innerHTML = '';
        const imgContainer = document.createElement('div');
        imgContainer.className = 'cert-image-container';
        
        const img = document.createElement('img');
        img.src = cert.images[index];
        img.className = 'cert-image';
        img.alt = cert.title;
        
        imgContainer.appendChild(img);
        imagesContainer.appendChild(imgContainer);
    };
    
    showImage(0);
    
    if (cert.images.length > 1) {
        const prevBtn = modalBody.querySelector('.cert-prev');
        const nextBtn = modalBody.querySelector('.cert-next');
        
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                currentIndex = (currentIndex - 1 + cert.images.length) % cert.images.length;
                showImage(currentIndex);
            });
            
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                currentIndex = (currentIndex + 1) % cert.images.length;
                showImage(currentIndex);
            });
        }
    }
    
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 50);
};

const closeCertModal = () => {
    const modal = document.getElementById('certModal');
    if (!modal) return;
    
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
};

// =============================================
// Modal Close Handlers
// =============================================
window.onclick = function(event) {
    const certModal = document.getElementById('certModal');
    if (event.target === certModal) {
        closeCertModal();
    }
    
    const projectModal = document.getElementById('projectModal');
    if (event.target === projectModal) {
        closeModal();
    }
};

// =============================================
// Contact Form Handling
// =============================================
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.submit-btn');
        if (!submitBtn) return;
        
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = 'Message envoyé !';
            submitBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #20b038 100%)';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                this.reset();
            }, 2000);
        }, 1500);
    });
}

// =============================================
// Window Resize Optimization
// =============================================
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// =============================================
// Typing Effect for Hero Subtitle
// =============================================
const typeWriter = (element, text, speed = 100) => {
    if (!element) return;
    
    let i = 0;
    element.innerHTML = '';
    
    const type = () => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    type();
};

// =============================================
// Skills Animation
// =============================================
const animateSkills = () => {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.animation = 'slideInUp 0.5s ease forwards';
        }, index * 100);
    });
};

// Add CSS for skill animation
const skillStyle = document.createElement('style');
skillStyle.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .skill-tag {
        opacity: 0;
    }
    
    .skill-category.visible .skill-tag {
        animation: slideInUp 0.5s ease forwards;
    }
`;
document.head.appendChild(skillStyle);

// Add staggered animation delay to skill tags
document.querySelectorAll('.skill-category').forEach(category => {
    const tags = category.querySelectorAll('.skill-tag');
    tags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
    });
});

// =============================================
// Circle Animation
// =============================================
const animateCircles = () => {
    const circles = document.querySelectorAll('.circle-layer');
    circles.forEach((circle, index) => {
        circle.style.transform = `rotate(${index * 45}deg)`;
    });
};

// =============================================
// Initialize All Functions on Load
// =============================================
window.addEventListener('load', () => {
    // Typing effect
    const subtitle = document.querySelector('.hero .subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        setTimeout(() => {
            typeWriter(subtitle, originalText, 50);
        }, 1000);
    }
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Animate circles
    animateCircles();
});

document.addEventListener('DOMContentLoaded', () => {
    animateCircles();
});