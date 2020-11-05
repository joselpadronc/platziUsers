// Elementos para funcionalidades 
let usernameField = document.getElementById('username-field')
const btnSearch = document.getElementById('btn-search')
const userModal = document.querySelector('.userModal')
const userModalBtnClose = document.getElementById('userModal-cerrar')
const loader = document.getElementById('loader')

// Elementos para pintar datos
const userModalImgPerfil = document.getElementById('userModal-imgPerfil')
const userModalNamePerson = document.getElementById('userModal-nombrePersona')
const userModalUsernamePerson = document.getElementById('userModal-usernamePersona')
const userModalWebPerson = document.getElementById('userModal-webPersona')
const userModalRanckPerson = document.getElementById('userModal-ranckPersona')
const userModalcoursesPerson = document.getElementById('userModal-cursosPersona')
const userModalcareersPerson = document.getElementById('userModal-carrerasPersona')
const userModalDescPerson = document.getElementById('userModal-descPersona')
const userModalBtnPerfil = document.getElementById('userModal-btnPerfil')

const API = 'https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@'
let APIData

const searchingUser = () => {
  let user = usernameField.value

  fetch(`${API}${user}`)
    .then((response) => {
      if(response.ok) {
        response.json()
          .then((JSONresponse) => {
            fillDataCard(JSONresponse)
          })
          .catch((error) => {
            console.error(error);
          })
          return user
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
  userModalcareersPerson.innerText = APIData.userData.careers.length + ' Carrera/s'
  userModalDescPerson.innerText = APIData.userData.description
  userModalBtnPerfil.href = APIData.userData.profile_url
}


const showModal = btnSearch.addEventListener('click', () => {
  if (usernameField.value === "") {
    alert('Ingresa el nombre de usuario')
  } else {
    searchingUser()
    loader.style.display = 'flex'
    setTimeout(()=>{
      loader.style.display = 'none'
      userModal.style.display = 'flex'
    },500)
    fillDataCard(APIData)
  }
})

const closeModal = userModalBtnClose.addEventListener('click', () => {
  userModal.style.display = 'none'
})

