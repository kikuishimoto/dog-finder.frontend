const dogList = document.getElementById('dogs-list')
const dogForm = document.getElementById("dog-form")
const allDogs = document.getElementById("all-dogs")
const dogsAdapter = new DogsAdapter





function addUpdateDogFields(dogId){
    let dog = document.querySelector(`#dog-${dogId} li`)
    let image_url = dog.querySelector('.image-url').innerHTML.split(" ")[2].split('"')[1]
    let name = dog.querySelector('.name').innerText 
    let location = dog.querySelector('.location').innerText
    let age = dog.querySelector('.age').innerText
    let breed = dog.querySelector('.breed').innerText
    let description = dog.querySelector('.description').innerText
    let email = dog.querySelector('.email').innerText


    let updateForm = `
    <input type="text" value="${image_url}" name="image_url" id="update-image_url-${dogId}">
    <input type="text" value="${name}" name="name" id="update-name-${dogId}">
    <input type="text" value="${location}" name="location" id="update-location-${dogId}">
    <input type="text" value="${age}" name="age" id="update-age-${dogId}">
    <input type="text" value="${breed}" name="breed" id="update-breed-${dogId}">
    <input type="text" value="${description}" name="description" id="update-description-${dogId}">
    <input type="text" value="${email}" name="email" id="update-email-${dogId}">
    `

    let formDiv = document.createElement('div')
    formDiv.id = `update-form-${dogId}`
    formDiv.innerHTML = updateForm
    dog.append(formDiv)
}

function hideBtnLoadForm(e){
    e.target.hidden = true
    const newForm = document.getElementById('new-form-container')
    newForm.hidden = false
}


document.addEventListener('DOMContentLoaded', () => {
    dogsAdapter.fetchDogs()
    dogForm.addEventListener('submit', dogsAdapter.handleFormSubmit)
    const newFormBtn = document.getElementById('new-form-btn')
    newFormBtn.addEventListener('click', hideBtnLoadForm)


})