const boxes = document.querySelectorAll('.quesemueve')
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