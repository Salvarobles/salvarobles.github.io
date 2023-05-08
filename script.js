const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkBoxes)
    checkBoxes()

    function checkBoxes() {
      const triggerBottom = window.innerHeight / 5 * 4
       boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
          box.classList.add('normal')
        } else {
          box.classList.remove('normal')
        }
      })
    }

const bienvenido = document.querySelector('.bienvenido');

document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    bienvenido.classList.add('display-none');
  }, 6000);

})


const navToggle = document.querySelector(".nav-toggle")
const menu = document.querySelector(".menu")

navToggle.addEventListener("click", () => {

  menu.classList.toggle("navbar_visible")

})


  var altura = window.innerHeight;
  function mostrar(){
      document.getElementById('elementoImg').style.display = 'block';
  }

  function ocultar(){
      document.getElementById('elementoImg').style.display = 'none';
  }