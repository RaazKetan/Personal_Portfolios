// window.addEventListener('scroll', function(){
//   if(window.pageYOffset > 150){
//      this.document.body.style.background = "black";
//   }
  
// })
var text = document.querySelector('.title'); 
window.addEventListener('scroll', ()=>{
  //fontSize on scroll
  const current = window.scrollY;
    text.style.fontSize = `clamp(1rem, ${current}px, 30rem)`;
     
    //Opacity change
    var limit = 500;
    if(current<=limit){
      text.style.opacity = 1- current/limit;
    }
});