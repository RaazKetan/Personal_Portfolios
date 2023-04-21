const text = document.querySelector('#name');
// const container = document.querySelector('.container');

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  const limit = 500;

  if (current > limit) {
    return;
  }

  text.style.fontSize = `clamp(3rem, ${current}px, 30rem)`;
  text.style.opacity = 1 - current / limit;

  if (text.style.opacity <= 0.2) {
    window.removeEventListener('scroll', handleScroll);
    // container.style.opacity = 0;
  }
});

const moon = document.querySelector('.moon');

function changeMoon() {
  if (moon.textContent === 'C') {
    moon.textContent = '🌙'; // Replace "C" with crescent moon
    moon.classList.add('hidden'); // Hide "C"
  } else {
    moon.textContent = 'C'; // Replace crescent moon with "C"
    moon.classList.remove('hidden'); // Show "C"
  }
}

setInterval(() => {
  changeMoon();
}, 1000);



