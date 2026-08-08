// AREA UNTUK IMPORT FILE JS/ JS MODULE
import { cardProject } from "./card-project.js"
import { cardToolkit } from "./card-toolkit.js"
// AREA DOM ATAU BUAT NGAMBIL ELEMENT HTML, ATAU BUAT VARIABEL
const cardToolkits = document.querySelector('.card-toolkits')
const cardProjects =document.querySelector('.card-projects')
const navbar = document.querySelector('.navbar')
const humburgerBtn = document.querySelector('.humburger-btn')
const screenBlur = document.querySelector('.screen-blur')
const classLinkActive = document.getElementsByTagName('li')

console.log(classLinkActive)


console.log(classLinkActive)


// EVENT UNTUK TRIGGER BUKA/TUTUP BUTTON HAMBURGER MENU
humburgerBtn.addEventListener('click',()=>{
  navbar.classList.toggle('list-active')
  humburgerBtn.classList.toggle('humburger-btn-active')
  screenBlur.classList.toggle('screen-blur-active')
  document.body.classList.toggle('class-body-active')
})

// EVENT UNTUK NGE TRIGGER SAAT KLIK AREA WINDOW, UNTUK TUTUP NAVBAR SAAT TERBUKA/MUNCUL
window.addEventListener("click", (e)=>{
  if(!navbar.contains(e.target)&& !humburgerBtn.contains(e.target)){
  navbar.classList.remove('list-active')
  humburgerBtn.classList.remove('humburger-btn-active')
  screenBlur.classList.remove('screen-blur-active')
  document.body.classList.remove('class-body-active')
  }
})

for (const element of classLinkActive) {
  element.classList.toggle('class-li')
  element.addEventListener('click', ()=>{
  navbar.classList.remove('list-active')
  screenBlur.classList.remove('screen-blur-active')
  })
}

function sanitize(text){
  const container =document.createElement('div')
  container.textContent=text
  return container.innerHTML
}

cardToolkit.forEach(({id, img, title, description})=>{
  cardToolkits.insertAdjacentHTML("beforeend",
    `<div class="card1">
    <img src="${img}" width="35" height="35" alt="logo">
    <h4>${sanitize(title)}</h4>
    <p>${sanitize(description)}</p>
    </div>
    `
    )
    })

    cardProject.forEach(({id,img,title,description})=>{
      cardProjects.insertAdjacentHTML("beforeend",
    `<div class="card2">
    <div class="label"></div>
    <img src="${img}" alt="logo">
    <h4>${sanitize(title)}</h4>
    <p>${sanitize(description)}</p>
    </div>`

      )
    })