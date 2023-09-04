import LocomotiveScroll from 'locomotive-scroll';
const scroll = new LocomotiveScroll();

var text = document.querySelector("#name");

window.addEventListener("scroll", () => {
  const current = Math.trunc(window.scrollY);
  const limit = 500;
  console.log(current);

  if (current > limit) {
    text.style.opacity = 0;
    return;
  }

  text.style.fontSize = `clamp(3rem, ${current}px, 30rem)`;
  text.style.opacity = 1 - current / limit;

  if (text.style.opacity == 0) {
    window.removeEventListener("scroll", handleScroll);
    text.style.position = "absolute";
  }
});
