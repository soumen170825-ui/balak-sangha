// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const nav = document.querySelector('header nav ul');
const toggleBtn = document.createElement('div');
toggleBtn.innerHTML = '&#9776;';
toggleBtn.classList.add('menu-toggle');
document.querySelector('header .container').appendChild(toggleBtn);
toggleBtn.addEventListener('click', () => { nav.classList.toggle('show'); });

// Generate Facebook QR Code dynamically
const facebookURL = "https://www.facebook.com/BalakSangha";
const qrImg = document.getElementById('facebook-qr');
qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(facebookURL)}`;

// WhatsApp click-to-chat
const phoneNumber = "917980762148"; // India +91
const whatsappBtn = document.getElementById('whatsapp-btn');
whatsappBtn.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello Balak Sangha, I would like to know more about your club.")}`;

// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);
faders.forEach(fader => { appearOnScroll.observe(fader); });