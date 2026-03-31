// Smooth fade-in for QR and WhatsApp
window.addEventListener('DOMContentLoaded', () => {
  const qr = document.querySelector('.qr-container');
  const whatsapp = document.querySelector('.whatsapp-container');

  setTimeout(() => qr.classList.add('fade-in'), 500);        // delay 0.5s
  setTimeout(() => whatsapp.classList.add('fade-in'), 1000); // delay 1s
});
