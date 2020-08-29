const dogList = document.getElementById("dogs-list")
const dogForm = document.getElementById("dog-form")
const dogImage = document.getElementById("dog-image")
const dogBreed = document.getElementById("dog-breed")
const dogName = document.getElementById("dog-name")
const dogLocation = document.getElementById("dog-location")
const dogAge = document.getElementById("dog-age")
const dogEmail = document.getElementById("dog-email")
const dogDescription = document.getElementById("dog-description")
const allDogs = document.getElementById("all-dogs")
function addDogToDom(dog){
    dogList.innerHTML += `
    <div id="dog-${dog.id}">
        <li>
        <span class="image-url"> <img src="${dog.attributes.image_url}" width="100" height="100"> </span><br>
        <span class="name">Name: ${dog.attributes.name}</span><br>
        <span class="location">Location: ${dog.attributes.location}</span><br>
        <span class="age">Age: ${dog.attributes.age}</span><br>
        <span class="breed"> Breed: ${dog.attributes.breed.name}</span><br>
        <span class="description">Description: ${dog.attributes.description}</span><br>
        <span class="email"> Contact info: ${dog.attributes.email} </span>
        </li>
    </div>`
}

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
        <span class="breed"> Breed: ${dog.attributes.breed.name}</span><br>
        <span class="description">Description: ${dog.attributes.description}</span><br>
        <span class="email"> Contact info: ${dog.attributes.email} </span>
        </li>
        <button class="delete" data-id="${dog.id}">Delete</button>
        <button class="update" data-id="${dog.id}">Update</button>
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


function handleListClick(e) {
    if (e.target.className === "delete"){
        let id = e.target.dataset.id
        deleteDog(id)
    } 

}
document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
    dogForm.addEventListener('submit', handleFormSubmit)
    dogList.addEventListener('click', handleListClick)
})