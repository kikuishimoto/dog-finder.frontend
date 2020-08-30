const dogList = document.getElementById('dogs-list')
const dogForm = document.getElementById("dog-form")
const dogImage = document.getElementById("dog-image")
const dogBreed = document.getElementById("dog-breed")
const dogName = document.getElementById("dog-name")
const dogLocation = document.getElementById("dog-location")
const dogAge = document.getElementById("dog-age")
const dogEmail = document.getElementById("dog-email")
const dogDescription = document.getElementById("dog-description")
const allDogs = document.getElementById("all-dogs")
const dogsAdapter = new DogsAdapter





function handleFormSubmit(e){
    e.preventDefault()
    let newDogObj = {
        image_url: dogImage.value,
        name: dogName.value,
        location: dogLocation.value,
        age: dogAge.value,
        breed: dogBreed.value,
        description: dogDescription.value,
        email: dogEmail.value
    }
    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newDogObj)
    }

    fetch('http://127.0.0.1:3000/dogs', configObj)
    .then(res => res.json())
    .then(response => {
        addDogToDom(response.data)
    })

    dogForm.reset()
}
function deleteDog(id){
    let configObj = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }

    fetch(`http://127.0.0.1:3000/dogs/${id}`, configObj)
    .then(res => res.json())
    .then(json => {
        alert(json.message)
    })

    let dog = document.getElementById(`dog-${id}`)
    dog.remove()

}
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



document.addEventListener('DOMContentLoaded', () => {
    dogsAdapter.fetchDogs()
    dogForm.addEventListener('submit', handleFormSubmit)

})