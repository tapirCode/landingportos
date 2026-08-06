import { cardProject } from "./card-project.js"
import { cardToolkit } from "./card-toolkit.js"
const cardToolkits = document.querySelector('.card-toolkits')
const cardProjects =document.querySelector('.card-projects')
const navbar = document.querySelector('.navbar')
const humburgerBtn = document.querySelector('.humburger-btn')

humburgerBtn.addEventListener('click',()=>{
  navbar.classList.toggle('list-active')
  humburgerBtn.classList.toggle('humburger-btn-active')
})
window.addEventListener("click", (e)=>{
  console(e.target.classList(humburgerBtn))
})

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