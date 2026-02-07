const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add('show');
    }
  });
});

function openLetter(){
  document.getElementById('letter').classList.add('show');
}
