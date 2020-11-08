import fetchData from './fetchData.js'

const imgPerfil = document.getElementById('img-perfil')
const nombrePersona = document.getElementById('nombre-persona')
const usernamePersona = document.getElementById('username-persona')
const webPersona = document.getElementById('web-persona')
const ranckPersona = document.getElementById('ranck-persona')
const descPersona = document.getElementById('desc-persona')
const usersCard = document.getElementById('users-card')
const cardLoader = document.getElementById('card-loader')

const API = 'https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@'

let username = 'joselpadronc'
let APIData


window.onload = async function() {
  cardLoader.style.display = 'block'
  await fetchData(API+username)
      .then( (response) => {
        APIData = response
        while (response.readyState !== 4) {
          cardLoader.style.display = 'none'
          usersCard.style.display = 'block'
          return fillDataCard(APIData)
        }
      })

      .catch( (error) => {
        console.error(error)
      })
}

const fillDataCard = (APIData) => {
  imgPerfil.src = APIData.userData.avatar
  nombrePersona.innerText = APIData.userData.name
  usernamePersona.innerText = APIData.userData.username
  webPersona.href = APIData.userData.website
  webPersona.innerText = 'Sitio web'
  ranckPersona.innerText = APIData.userData.platzi_rank + ' pts'
  descPersona.innerText = APIData.userData.description
}