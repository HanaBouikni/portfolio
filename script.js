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

// Intersection Observer for fade-in animations
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

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    const heroHeight = hero.offsetHeight;
    
    if (window.scrollY > heroHeight - 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
    
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
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Gallery Modal Functions
const projectsData = {
    mockup: {
        title: "University Student Portal ",
        image: "image/mockup1.jpg",
        description: "The project is a student companion app that centralizes schedules, grades, announcements, and personal info. It includes an AI chatbot for quick university-related answers. ",
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
        figmaUrl: "hhttps://www.figma.com/design/nRN3XfEvfb6uGREyRooLm0/pentadesigners?node-id=183-3212&t=NU15K6q2PxOJU9P8-1"
    },
    hanoi: {
        title: " Hanoi Game",
        image: "image/hanoi.jpg",
        description: "This is a colorful puzzle game inspired by the classic Tower of Hanoi, set in a vibrant world themed around the Indian festival of Holi.",
        figmaUrl: "https://www.figma.com/design/1wNl0xeUvGImWv3KOtSn0v/HANOI?node-id=0-1&t=GUabQ8SbFPKmx6pQ-1"
    },
    assirem: {
        title: " Assirem app ",
        image: "image/assirem.jpg",
        description: "Assirem is a mobile app that connects volunteers with associations to foster mutual support and social engagement.",
        figmaUrl: "https://www.figma.com/design/hV5uLEkGe4EdV7dhMxUqDt/ASIREM-FONDATION?node-id=0-1&t=kcOFSPh487uivGXn-1"
    },
    vamos: {
        title: " Vamos website",
        image: "image/vamos.jpg",
        description: "Vamos is a travel website that helps users discover and book top destinations for their next vacation.With a clean and vibrant interface",
        figmaUrl: "https://www.figma.com/design/wm1LdqI8qX7tJMatKRzhTT/Vamos-site?node-id=0-1&t=DGrbD1idJlJuKPlp-1"
    },
    logo10: {
        title: "Logos collections",
        image: "image/logo10.jpg",
        description: "stylish showcase of modern logo designs featuring various brands.The designs demonstrate a professional branding aesthetics across different industries.",
        figmaUrl: "https://www.figma.com/file/votre-lien-logo10"
    },
    cartevisite: {
        title: "business card ",
        image: "image/cartevisite.jpg",
        description: "A collection of business card designs for Algerian businesses, showcasing a variety of styles and branding approaches.",
        figmaUrl: "https://www.figma.com/file/votre-lien-cartevisite"
    }
};

function openModal(projectKey) {
    const project = projectsData[projectKey];
    const modal = document.getElementById('projectModal');
    
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('figma-link').href = project.figmaUrl;
    
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 50);
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
}

// Certifications Modal Data
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

function openCertModal(certKey) {
    const cert = certsData[certKey];
    const modal = document.getElementById('certModal');
    
    document.getElementById('cert-modal-title').textContent = cert.title;
    
    const modalBody = document.querySelector('#certModal .modal-body');
    modalBody.innerHTML = `
        <div class="cert-images-container"></div>
        ${cert.images.length > 1 ? `
            <button class="cert-nav cert-prev">❮</button>
            <button class="cert-nav cert-next">❯</button>
        ` : ''}
    `;
    
    const imagesContainer = modalBody.querySelector('.cert-images-container');
    let currentIndex = 0;
    
    function showImage(index) {
        imagesContainer.innerHTML = '';
        const imgContainer = document.createElement('div');
        imgContainer.className = 'cert-image-container';
        
        const img = document.createElement('img');
        img.src = cert.images[index];
        img.className = 'cert-image';
        img.alt = cert.title;
        
        imgContainer.appendChild(img);
        imagesContainer.appendChild(imgContainer);
    }
    
    // Show first image
    showImage(0);
    
    // Navigation handlers
    if (cert.images.length > 1) {
        document.querySelector('.cert-prev').addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + cert.images.length) % cert.images.length;
            showImage(currentIndex);
        });
        
        document.querySelector('.cert-next').addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % cert.images.length;
            showImage(currentIndex);
        });
    }
    
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 50);
}

function closeCertModal() {
    const modal = document.getElementById('certModal');
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
}

// Fermer la modal en cliquant à l'extérieur
window.onclick = function(event) {
    const modal = document.getElementById('certModal');
    if (event.target === modal) {
        closeCertModal();
    }
    
    const projectModal = document.getElementById('projectModal');
    if (event.target === projectModal) {
        closeModal();
    }
}
// Fermer la modal en cliquant à l'extérieur
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Contact form handling
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    const submitBtn = this.querySelector('.submit-btn');
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

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Typing effect for hero subtitle
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

// Initialize typing effect after page load
window.addEventListener('load', () => {
    const subtitle = document.querySelector('.hero .subtitle');
    const originalText = subtitle.textContent;
    setTimeout(() => {
        typeWriter(subtitle, originalText, 50);
    }, 1000);
});

// Skills animation on scroll
function animateSkills() {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.animation = 'slideInUp 0.5s ease forwards';
        }, index * 100);
    });
}

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
// Animation supplémentaire pour les cercles
document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle-layer');
    circles.forEach((circle, index) => {
        circle.style.transform = `rotate(${index * 45}deg)`;
    });
});