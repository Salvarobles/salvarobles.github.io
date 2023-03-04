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
function disableScroll(){  
  window.scrollTo(0, 0);
}

window.addEventListener('scroll', disableScroll);

window.removeEventListener('scroll', disableScroll);  
