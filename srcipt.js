const text = document.querySelector('#name');

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  const limit = 500;

  if (current > limit) {
    return;
  }

  text.style.fontSize = `clamp(3rem, ${current}px, 30rem)`;
  text.style.opacity = 1 - current / limit;

  if (text.style.opacity == 0) {
    window.removeEventListener('scroll', handleScroll);
  }
});






