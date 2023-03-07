import data from "./amazing.js";
const divElementos= document.getElementById('cards')
let fragmento= document.createDocumentFragment();
for (let evento of data.events) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.style.width = '18rem'
    card.innerHTML = ` 
    <div class="card zoom bg-danger-subtle">
    <img src="${evento.image}" class="card-img-top " >
    <div class="card-body body">
      <h5 class="card-title">${evento.name}</h5>
      <p class="card-text bg-warning">${evento.description}</p>
      <div class=" d-grid gap-2 d-md-flex justify-content-md-end">
        <a href="./details.html" class="btn  btn-outline-danger me-md-2">Go to Details</a>
      </div>
    </div>
    </div>
    
    `
    fragmento.appendChild(card)
}
divElementos.appendChild(fragmento)

 