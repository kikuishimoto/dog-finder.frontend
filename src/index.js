const dogList = document.getElementById("dogs-list")
const dogForm = document.getElementById("dog-form")
const dogImage = document.getElementById("dog-image")
const dogBreed = document.getElementById("dog-breed")
const dogName = document.getElementById("dog-name")
const dogLocation = document.getElementById("dog-location")
const dogAge = document.getElementById("dog-age")
const dogEmail = document.getElementById("dog-email")
const dogDescription = document.getElementById("dog-description")

function fetchDogs() {
    fetch('http://127.0.0.1:3000/dogs')
    .then(res => res.json())
    .then(addDogs)
}
function addDogs(response){
    response.data.forEach(dog => {
       addDogToDom(dog)
    })
}
function addDogToDom(dog){
    dogList.innerHTML += `
    <div id="dog-${dog.id}">
        <li>
        <span class="image-url"> <img src="${dog.attributes.image_url}" width="100" height="100"> </span><br>
        <span class="name">Name: ${dog.attributes.name}</span><br>
        <span class="location">Location: ${dog.attributes.location}</span><br>
        <span class="age">Age: ${dog.attributes.age}</span><br>
        <span class="breed"> Breed: ${dog.attributes.breed}</span><br>
        <span class="description">Description: ${dog.attributes.description}</span><br>
        <span class="email"> Contact info: ${dog.attributes.email} </span>
        </li>
    </div>`
}
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
document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
    dogForm.addEventListener('submit', handleFormSubmit)
})