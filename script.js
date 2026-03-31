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
// Dynamic Image Gallery Swiper
const galleryImages = ['images/photo1.jpg','images/photo2.jpg','images/photo3.jpg'];
const galleryWrapper = document.getElementById('galleryWrapper');
galleryImages.forEach(src=>{
  galleryWrapper.innerHTML+=`<div class="swiper-slide"><img src="${src}" alt="Balak Sangha"></div>`;
});
new Swiper(".gallery-swiper",{loop:true,autoplay:{delay:2500,disableOnInteraction:false},pagination:{el:".gallery-swiper .swiper-pagination",clickable:true},navigation:{nextEl:".gallery-swiper .swiper-button-next",prevEl:".gallery-swiper .swiper-button-prev"}});

// Dynamic Video Gallery Swiper
const videoFiles = ['videos/video1.mp4','videos/video2.mp4'];
const videoWrapper = document.getElementById('videoWrapper');
videoFiles.forEach(src=>{
  videoWrapper.innerHTML=`<div class="swiper-slide"><video controls muted><source src="${src}" type="video/mp4"></video></div>`;
});
new Swiper(".video-swiper",{loop:true,autoplay:{delay:3500,disableOnInteraction:false},pagination:{el:".video-swiper .swiper-pagination",clickable:true},navigation:{nextEl:".video-swiper .swiper-button-next",prevEl:".video-swiper .swiper-button-prev"}});

// Current year
document.getElementById('currentYear').textContent=new Date().getFullYear();

// Join Us Form WhatsApp notification
const joinForm=document.getElementById('joinForm');
joinForm.addEventListener('submit',e=>{
  e.preventDefault();
  const f=new FormData(joinForm),name=f.get('name'),email=f.get('email'),msg=f.get('message');
  ["7980762148","9330309071"].forEach(n=>{
    const wa=`https://wa.me/91${n}?text=${encodeURIComponent(`New Join Us Query from ${name} (${email}): ${msg}`)}`;
    window.open(wa,'_blank');
  });
  alert('Your query has been sent! Thank you.');joinForm.reset();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',e=>{
  const target=document.querySelector(link.getAttribute('href'));if(!target)return;e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});
}));

// Scroll reveal
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('show');});},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Particles.js
particlesJS("particles-js",{particles:{number:{value:55,density:{enable:true,value_area:900}},color:{value:"#d7b56d"},shape:{type:"circle"},opacity:{value:0.45,random:true},size:{value:2.8,random:true},line_linked:{enable:true,distance:140,color:"#ffffff",opacity:0.18,width:1},move:{enable:true,speed:1.7,direction:"none",random:false,straight:false}},interactivity:{detect_on:"canvas",events:{onhover:{enable:true,mode:"grab"},onclick:{enable:true,mode:"push"}},modes:{grab:{distance:150,line_linked:{opacity:0.45}},push:{particles_nb:3}}},retina_detect:true});
// Load Gallery & Videos dynamically
fetch('gallery.json')
  .then(res => res.json())
  .then(data => {
    // Images
    const galleryWrapper = document.getElementById('galleryWrapper');
    data.images.forEach(src => {
      galleryWrapper.innerHTML += `
        <div class="swiper-slide">
          <img src="${src}" alt="Balak Sangha Gallery">
        </div>`;
    });

    new Swiper(".gallery-swiper", {
      loop: true,
      autoplay: { delay: 2500 },
      pagination: { el: ".gallery-swiper .swiper-pagination", clickable: true },
      navigation: { nextEl: ".gallery-swiper .swiper-button-next", prevEl: ".gallery-swiper .swiper-button-prev" },
    });

    // Videos
    const videoWrapper = document.getElementById('videoWrapper');
    data.videos.forEach(src => {
      videoWrapper.innerHTML += `
        <div class="swiper-slide">
          <video controls muted>
            <source src="${src}" type="video/mp4">
          </video>
        </div>`;
    });

    new Swiper(".video-swiper", {
      loop: true,
      autoplay: { delay: 3500 },
      pagination: { el: ".video-swiper .swiper-pagination", clickable: true },
      navigation: { nextEl: ".video-swiper .swiper-button-next", prevEl: ".video-swiper .swiper-button-prev" },
    });
  });
const newsList = [
  {
    title: "Balak Sangha wins local tournament",
    text: "Balak Sangha started strong in the Inter‑Club League with a thrilling win in the season opener!",
  },
  {
    title: "Youth finals next week",
    text: "The youth team prepares for next weekend’s finals — come support!",
  },
  {
    title: "New Trainings Added",
    text: "Structured training sessions added for U‑15 and U‑18 players every Saturday.",
  }
];

const newsContainer = document.getElementById("newsContainer");
newsList.forEach(item => {
  newsContainer.innerHTML += `
    <div class="news-card">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>`;
});
