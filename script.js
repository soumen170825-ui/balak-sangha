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
