// Dynamic Image Gallery
const galleryImages = [
  'images/photo1.jpg',
  'images/photo2.jpg',
  'images/photo3.jpg'
];
const galleryContainer = document.getElementById('galleryContainer');
galleryImages.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = "Balak Sangha";
  galleryContainer.appendChild(img);
});

// Dynamic Video Gallery
const videoFiles = [
  'videos/video1.mp4',
  'videos/video2.mp4'
];
const videoContainer = document.getElementById('videoContainer');
videoFiles.forEach(src => {
  const video = document.createElement('video');
  video.src = src;
  video.controls = true;
  videoContainer.appendChild(video);
});

// Current Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Join Us Form - WhatsApp notification
const joinForm = document.getElementById('joinForm');
joinForm.addEventListener('submit', function(e){
  e.preventDefault();
  const formData = new FormData(joinForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const numbers = ["7980762148","9330309071"];
  numbers.forEach(num => {
    const waLink = `https://wa.me/91${num}?text=${encodeURIComponent(`New Join Us Query from ${name} (${email}): ${message}`)}`;
    window.open(waLink,'_blank');
  });

  alert('Your query has been sent! Thank you.');
  joinForm.reset();
});
/* Smooth Scroll for Navbar Links */
document.querySelectorAll('header nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
// Dynamic Gallery
const galleryImages = ['images/photo1.jpg','images/photo2.jpg','images/photo3.jpg'];
const galleryContainer = document.getElementById('galleryContainer');
galleryImages.forEach(src=>{const img=document.createElement('img');img.src=src;img.alt="Balak Sangha";galleryContainer.appendChild(img);});

// Dynamic Video Gallery
const videoFiles = ['videos/video1.mp4','videos/video2.mp4'];
const videoContainer = document.getElementById('videoContainer');
videoFiles.forEach(src=>{const video=document.createElement('video');video.src=src;video.controls=true;videoContainer.appendChild(video);});

// Current Year
document.getElementById('currentYear').textContent=new Date().getFullYear();

// Join Us Form - WhatsApp notification
const joinForm = document.getElementById('joinForm');
joinForm.addEventListener('submit', function(e){
  e.preventDefault();
  const formData = new FormData(joinForm);
  const name=formData.get('name'); const email=formData.get('email'); const message=formData.get('message');
  const numbers=["7980762148","9330309071"];
  numbers.forEach(num=>{
    const waLink=`https://wa.me/91${num}?text=${encodeURIComponent(`New Join Us Query from ${name} (${email}): ${message}`)}`;
    window.open(waLink,'_blank');
  });
  alert('Your query has been sent! Thank you.');
  joinForm.reset();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// Reveal animations
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('show');});
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Particles.js
particlesJS("particles-js",{
  particles:{number:{value:55,density:{enable:true,value_area:900}},
    color:{value:"#d7b56d"},shape:{type:"circle"},opacity:{value:0.45,random:true},size:{value:2.8,random:true},
    line_linked:{enable:true,distance:140,color:"#ffffff",opacity:0.18,width:1},
    move:{enable:true,speed:1.7,direction:"none",random:false,straight:false}},
  interactivity:{detect_on:"canvas",events:{onhover:{enable:true,mode:"grab"},onclick:{enable:true,mode:"push"}},
    modes:{grab:{distance:150,line_linked:{opacity:0.45}},push:{particles_nb:3}}},
  retina_detect:true
});
// Build Swiper Slides
const galleryImages = ['images/photo1.jpg','images/photo2.jpg','images/photo3.jpg'];
const galleryWrapper = document.getElementById('galleryWrapper');
galleryImages.forEach(src => {
  galleryWrapper.innerHTML += `
    <div class="swiper-slide">
      <img src="${src}" alt="Balak Sangha Image">
    </div>`;
});

// Initialize Swiper for Images
new Swiper(".gallery-swiper", {
  loop:true,
  autoplay: { delay: 2500, disableOnInteraction: false },
  pagination: { el: ".gallery-swiper .swiper-pagination", clickable: true },
  navigation: { nextEl: ".gallery-swiper .swiper-button-next", prevEl: ".gallery-swiper .swiper-button-prev" },
});

// Video Slides
const videoFiles = ['videos/video1.mp4','videos/video2.mp4'];
const videoWrapper = document.getElementById('videoWrapper');
videoFiles.forEach(src => {
  videoWrapper.innerHTML += `
    <div class="swiper-slide">
      <video controls muted>
        <source src="${src}" type="video/mp4">
      </video>
    </div>`;
});

// Initialize Swiper for Videos
new Swiper(".video-swiper", {
  loop:true,
  autoplay: { delay: 3500, disableOnInteraction: false },
  pagination: { el: ".video-swiper .swiper-pagination", clickable: true },
  navigation: { nextEl: ".video-swiper .swiper-button-next", prevEl: ".video-swiper .swiper-button-prev" },
});
