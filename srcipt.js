// window.addEventListener('scroll', function(){
//   if(window.pageYOffset > 150){
//      this.document.body.style.background = "black";
//   }
  
// })
var text = document.querySelector('.title');

window.addEventListener('scroll', ()=>{
  // var text = document.getElementsByClassName("title");
  const current = window.scrollY;
    text.style.fontSize = `clamp(1rem, ${current}px, 22rem)`;
});