const navbar = document.querySelector('.navbar')
const humburgerBtn = document.querySelector('.humburger-btn')

humburgerBtn.addEventListener('click',()=>{
  navbar.classList.toggle('list-active')
  humburgerBtn.classList.toggle('humburger-btn-active')
})
window.addEventListener("click", (e)=>{
  console(e.target.classList(humburgerBtn))
})