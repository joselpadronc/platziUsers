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
const userModalcoursesPerson = document.getElementById('userModal-cursosPersona')
const userModalcareersPerson = document.getElementById('userModal-carrerasPersona')
const userModalDescPerson = document.getElementById('userModal-descPersona')

const API = 'https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@'
let APIData

const searchingUser = () => {
  let user = usernameField.value

  fetch(`${API}${user}`)
    .then((response) => {
      if(response.ok) {
        console.log(`user ${user}`)
        console.log(response)
        response.json()
          .then((JSONresponse) => {
            console.log(JSONresponse)
            fillDataCard(JSONresponse)
          })
          .catch((error) => {
            console.error(error);
          })
      }

      return APIData
    })
    .catch((data) => console.log(data))
}

const fillDataCard = (APIData) => {
  userModalImgPerfil.src = APIData.userData.avatar
  userModalNamePerson.innerText = APIData.userData.name
  userModalUsernamePerson.innerText = APIData.userData.username
  userModalWebPerson.href = APIData.userData.website
  userModalWebPerson.innerText = 'Sitio web'
  userModalRanckPerson.innerText = APIData.userData.platzi_rank + ' pts'
  userModalcoursesPerson.innerText = APIData.userData.courses.length + ' Cursos'
  userModalcareersPerson.innerText = APIData.userData.careers.length + ' Carreras'
  userModalDescPerson.innerText = APIData.userData.description
}


const showModal = btnSearch.addEventListener('click', () => {
  userModal.style.display = 'flex'
  searchingUser()
  fillDataCard(APIData)
})

const closeModal = userModalBtnClose.addEventListener('click', () => {
  userModal.style.display = 'none'
})

