const tipButtons = document.querySelectorAll('.tip-button')


tipButtons.forEach((button) => {
  let coin = button.querySelector('.coin')
  coin.maxMoveLoopCount = 90

  button.addEventListener('click', () => {
    if (button.clicked) return

    button.classList.add('clicked')
    setTimeout(() => {
      coin.sideRotationCount = Math.floor(Math.random() * 5) * 90
      coin.maxFlipAngle = (Math.floor(Math.random() * 4) + 3) * Math.PI
      button.clicked = true
      flipCoin()
    }, 50)
  })

  const flipCoin = () => {
    coin.moveLoopCount = 0
    flipCoinLoop()
  }

  const resetCoin = () => {
    coin.style.setProperty('--coin-x-multiplier', 0)
    coin.style.setProperty('--coin-scale-multiplier', 0)
    coin.style.setProperty('--coin-rotation-multiplier', 0)
    coin.style.setProperty('--shine-opacity-multiplier', 0.4)
    coin.style.setProperty('--shine-bg-multiplier', '50%')
    coin.style.setProperty('opacity', 1)
    setTimeout(() => {
      button.clicked = false
    }, 300)
  }

  const flipCoinLoop = () => {
    coin.moveLoopCount++
    let percentageCompleted = coin.moveLoopCount / coin.maxMoveLoopCount
    coin.angle = -coin.maxFlipAngle * Math.pow((percentageCompleted - 1), 2) + coin.maxFlipAngle
    coin.style.setProperty('--coin-y-multiplier', -11 * Math.pow(percentageCompleted * 2 - 1, 4) + 11)
    coin.style.setProperty('--coin-x-multiplier', percentageCompleted)
    coin.style.setProperty('--coin-scale-multiplier', percentageCompleted * 0.6)
    coin.style.setProperty('--coin-rotation-multiplier', percentageCompleted * coin.sideRotationCount)
    coin.style.setProperty('--front-scale-multiplier', Math.max(Math.cos(coin.angle), 0))
    coin.style.setProperty('--front-y-multiplier', Math.sin(coin.angle))

    coin.style.setProperty('--middle-scale-multiplier', Math.abs(Math.cos(coin.angle), 0))
    coin.style.setProperty('--middle-y-multiplier', Math.cos((coin.angle + Math.PI / 2) % Math.PI))

    coin.style.setProperty('--back-scale-multiplier', Math.max(Math.cos(coin.angle - Math.PI), 0))
    coin.style.setProperty('--back-y-multiplier', Math.sin(coin.angle - Math.PI))

    coin.style.setProperty('--shine-opacity-multiplier', 4 * Math.sin((coin.angle + Math.PI / 2) % Math.PI) - 3.2)
    coin.style.setProperty('--shine-bg-multiplier', -40 * (Math.cos((coin.angle + Math.PI / 2) % Math.PI) - 0.5) + '%')
    if (coin.moveLoopCount < coin.maxMoveLoopCount) {
      if (coin.moveLoopCount === coin.maxMoveLoopCount - 6) button.classList.add('shrink-landing')
      window.requestAnimationFrame(flipCoinLoop)
    } else {
      button.classList.add('coin-landed')
      coin.style.setProperty('opacity', 0)
      setTimeout(() => {
        button.classList.remove('clicked', 'shrink-landing', 'coin-landed')
        setTimeout(() => {
          resetCoin()
        }, 300)
      }, 1500)
    }
  }
})

var text = document.querySelector("#name");

var media = window.screen.availWidth;
console.log(media);
var size = 2;
if(media == 1280){
  size = "2em";
}
size =  Number(size.replace(/em$/, ''));
console.log(size);
window.addEventListener("scroll", () => {
  const current = Math.trunc(window.scrollY);
  const limit = 500;
  console.log(current);

  if (current > limit) {
    text.style.opacity = 0;
    return;
  }

  text.style.fontSize = `clamp(3em, ${current}px, 30rem)`;
  text.style.opacity = 1 - current / limit;

  if (text.style.opacity == 0 && current == 1000) {
    window.removeEventListener("scroll", handleScroll);
    text.style.position = "absolute";
  }
});
