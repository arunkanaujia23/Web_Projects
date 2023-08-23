let nav__link = document.querySelectorAll('.nav__link');
let nav__dropdown = document.querySelector('.nav__dropdown')


nav__link.forEach((node) => {
   
    node.addEventListener('click', () => {
        nav__dropdown.classList.toggle('nav__dropdown__active')
      
    })

})