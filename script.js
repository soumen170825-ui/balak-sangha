// WhatsApp link
const whatsappBtn = document.getElementById("whatsapp");
whatsappBtn.href = "https://wa.me/7980762148";

// QR Code generation
const qr = new QRious({
    element: document.createElement('canvas'),
    value: 'https://www.facebook.com/profile.php?id=61578133274974',
    size: 200
});

document.getElementById('qr-code').appendChild(qr.element);
// WhatsApp link
const whatsappBtn = document.getElementById("whatsapp");
whatsappBtn.href = "https://wa.me/7980762148";

// QR Code generation for Facebook page
const qr = new QRious({
    element: document.createElement('canvas'),
    value: 'https://www.facebook.com/profile.php?id=61578133274974',
    size: 200
});

document.getElementById('qr-code').appendChild(qr.element);
