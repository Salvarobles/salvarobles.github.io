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

// const flecha = document.querySelectorAll('.flecha1')
// window.addEventListener('scroll', checkflecha)
//     checkflecha()

//     function checkflecha() {
//       const Bottom = window.innerHeight / 5 * 4
//        flecha.forEach(flecha1 => {
//         const flechaTop = flecha1.getBoundingClientRect().top
//         if (flechaTop < Bottom) {
//           flecha1.classList.add('flotante2')
//         } else {
//           flecha1.classList.remove('flotante')
//         }
//       })
//     }


// buttonSkill.onclick = function(){

//   if (document.getElementById('elemento-1') && document.getElementsByClassName('active') == true) {
//     document.getElementById('imagen-1').style.display = 'block';
//   } else {
//     document.getElementById('imagen-1').style.display = 'none';
//   }
  
// }

  var altura = window.innerHeight;
// if (altura < alturadepagina) {
//   document.getElementById('elementoImg').style.display = 'block';

// }
  function mostrar(){
      document.getElementById('elementoImg').style.display = 'block';
  }

  function ocultar(){
      document.getElementById('elementoImg').style.display = 'none';
  }