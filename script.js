const navbar = document.querySelector('nav')
const humburgerBtn = document.querySelector('.humburger-btn')

humburgerBtn.addEventListener('click',()=>{
  navbar.classList.toggle('list-active')
  humburgerBtn.classList.toggle('humburger-btn-active')
})