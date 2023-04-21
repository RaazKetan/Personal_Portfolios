const text = document.querySelector('#name');
const container = document.querySelector('.container');

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  const limit = 400;

  if (current > limit) {
    return;
  }

  text.style.fontSize = `clamp(3rem, ${current}px, 30rem)`;
  text.style.opacity = 1 - current / limit;

  if (text.style.opacity <= 0.01) {
    window.removeEventListener('scroll', handleScroll);
    container.style.opacity = 1;
  }
});
