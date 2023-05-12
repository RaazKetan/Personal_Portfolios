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

const iconContainer = document.querySelector('.icon-container');
  const createText = document.querySelector('.create');

  setInterval(() => {
    iconContainer.style.display = 'block';
    createText.style.opacity = 0;
    setTimeout(() => {
      createText.style.display = 'none';
      iconContainer.style.opacity = 1;
    }, 1000);
  }, 1000);




