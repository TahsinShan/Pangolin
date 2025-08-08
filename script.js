
// Testimonial Carousel
const carousel = document.querySelector('.testimonial-carousel');
const slides = document.querySelectorAll('.testimonial-slide');
const dotsContainer = document.querySelector('.testimonial-dots');

let currentIndex = 0;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => showSlide(i));
  dotsContainer.appendChild(dot);
});

// Show slide
function showSlide(index) {
  currentIndex = index;
  const offset = -index * 100;
  carousel.style.transform = `translateX(${offset}%)`;

  const dots = dotsContainer.querySelectorAll('span');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Auto slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 6000);

// Initialize
showSlide(0);
