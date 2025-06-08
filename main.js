// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check if theme preference is stored in localStorage
const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
document.documentElement.classList.toggle('dark', currentTheme === 'dark');

themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.classList.toggle('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
});

// Navigation scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Update active link
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// GSAP animations
const animateOnScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from(section, {
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                        ease: 'power2.out'
                    });
                }
            });
        }, {
            threshold: 0.2
        });
        observer.observe(section);
    });
};

// Project data
const projects = [{
        title: 'E-commerce Website',
        description: 'A modern e-commerce platform built with React and Firebase',
        image: 'https://via.placeholder.com/800x600',
        github: '#',
        live: '#'
    },
    {
        title: 'Weather App',
        description: 'A responsive weather application using OpenWeather API',
        image: 'https://via.placeholder.com/800x600',
        github: '#',
        live: '#'
    },
    // Add more projects as needed
];

// Populate projects section
const projectsContainer = document.querySelector('#projects .grid');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-card-content">
            <h3 class="project-card-title">${project.title}</h3>
            <p class="project-card-description">${project.description}</p>
            <div class="project-card-links">
                <a href="${project.github}" class="project-card-link" target="_blank">GitHub</a>
                <a href="${project.live}" class="project-card-link" target="_blank">Live Demo</a>
            </div>
        </div>
    `;
    projectsContainer.appendChild(projectCard);
});

// Form validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Basic validation
    if (!data.name || !data.email || !data.message) {
        alert('Please fill in all fields');
        return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', data);

    // Clear form and show success message
    contactForm.reset();
    alert('Thank you for your message! I will get back to you soon.');
});

// Initialize animations
animateOnScroll();

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});