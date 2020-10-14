// const imgPerfil = document.getElementById('img-perfil')
// const nombrePersona = document.getElementById('nombre-persona')
// const usernamePersona = document.getElementById('username-persona')
// const webPersona = document.getElementById('web-persona')
// const ranckPersona = document.getElementById('ranck-persona')
// const descPersona = document.getElementById('desc-persona')


const fetchData = require('./fetchData')
const API = 'https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@'

const getData = async (url_api) => {
  try {
    const data = await fetchData(url_api)
    const user = await fetchData(`${API}joselpadronc`)

    console.log(user)
  } catch (error) {
    console.error(error)
  }
}

let APIData = getData(API)

const fillDataCard = (APIData) => {
  console.log(APIData.userData.avatar)
  console.log(APIData.userData.name)
  console.log(APIData.userData.username)
  console.log(APIData.userData.platzi_rank)
  console.log(APIData.userData.description)
}

fillDataCard(APIData)