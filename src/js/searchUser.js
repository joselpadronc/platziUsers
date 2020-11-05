// Elementos para funcionalidades 
let usernameField = document.getElementById('username-field')
const btnSearch = document.getElementById('btn-search')
const userModal = document.querySelector('.userModal')
const userModalBtnClose = document.getElementById('userModal-cerrar')

// Elementos para pintar datos
const userModalImgPerfil = document.getElementById('userModal-imgPerfil')
const userModalNamePerson = document.getElementById('userModal-nombrePersona')
const userModalUsernamePerson = document.getElementById('userModal-usernamePersona')
const userModalWebPerson = document.getElementById('userModal-webPersona')
const userModalRanckPerson = document.getElementById('userModal-ranckPersona')

const API = 'https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@'
let user = usernameField.value
let APIData

const searchingUser = () => {
  fetch(`${API}${user}`)
    .then((response) => {
      APIData = response.json()
      console.log(APIData)
      return APIData
    })
    .catch((data) => console.log(data))
}

const fillDataCard = (APIData) => {
  userModalImgPerfil.src = APIData.userData.avatar
  userModalNamePerson.innerText = APIData.userData.name
  userModalUsernamePerson.innerText = APIData.userData.username
  userModalWebPerson.href = APIData.userData.website
  webPersona.innerText = 'Sitio web'
  userModalRanckPerson.innerText = APIData.userData.platzi_rank + ' pts'
}


const showModal = btnSearch.addEventListener('click', () => {
  userModal.style.display = 'flex'
  searchingUser()
  fillDataCard(APIData)
})

const closeModal = userModalBtnClose.addEventListener('click', () => {
  userModal.style.display = 'none'
})

