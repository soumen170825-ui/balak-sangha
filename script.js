// Scroll animation
const sections = document.querySelectorAll('.fade-section');

window.addEventListener('scroll', () => {
sections.forEach(sec => {
const top = sec.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
sec.classList.add('active');
}
});
});

// Counter animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
let count = 0;
let target = +counter.innerText;

let update = () => {
count += target / 100;
if(count < target){
counter.innerText = Math.ceil(count);
setTimeout(update, 20);
}else{
counter.innerText = target + "+";
}
};

update();
});
