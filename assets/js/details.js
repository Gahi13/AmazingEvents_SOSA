async function getEventos() {
  let data = await fetch("../amazing.json").then((response) => response.json()).then((data) => {
      return data;
  }).catch(err => console.log(err));
  return data;
}
let data= await getEventos()
let events = data.events
let currentDate = data.currentDate
//tomo el id de los eventos
const queryString = location.search
const params = new URLSearchParams(queryString)
const dataId = params.get('id')
const evento = events.find (evento => evento._id == dataId)

let detallesContainer= document.getElementById('detalles')
function cardDetails(evento, ubicacion){
    let div = document.createElement('div')
    div.classList= 'card-big d-flex gap-2 rounded p-3'
    div.innerHTML= `
    <div class="card mb-3 bg-danger-subtle" style="width: 100%" >
      <div class="row g-0">
        <div class="col-md-4" >
          <img src="${evento.image}" class="img-fluid rounded-start" style="width: 100%" alt="...">
        </div>
        <div class="col-md-8" >
          <div class="card-body" >
            <h2 class="card-title">${evento.name}</h2>
            <h3 class="card-text bg-info-subtle"><strong>Date: </strong> ${evento.date}</h3>
            <h3 class="card-text bg-info-subtle"><strong>Description: </strong> ${evento.description}</h3>
            <h3 class="card-text bg-info-subtle"><strong>Place: </strong> ${evento.place}</h3>
            <h3 class="card-text bg-info-subtle"><strong>Capacity: </strong> ${evento.capacity}</h3>
            <h3 class="card-text bg-info-subtle"><strong>Assistance: </strong> ${evento.assistance ? evento.assistance :evento.estimate}</h3>
            <h3 class="card-text bg-info-subtle"><strong>Price: </strong> ${evento.price}</h3>
            <div class=" d-grid gap-2 ">
              <input type="button" class="btn btn-outline-success me-md-2" style="font-size: 2.5rem" onclick="history.back()" name="Go back" value="Go back">
            </div>
          </div>
        </div>
      </div>
    </div>
        ` 
        ubicacion.appendChild(div)
}
cardDetails(evento,detallesContainer)
