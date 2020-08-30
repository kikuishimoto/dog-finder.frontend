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



function handleListClick(e) {
    if (e.target.className === "delete"){
        let id = e.target.dataset.id
        deleteDog(id)
    } 

}
document.addEventListener('DOMContentLoaded', () => {
    dogsAdapter.fetchDogs()
    dogForm.addEventListener('submit', handleFormSubmit)
    //dogList.addEventListener('click', handleListClick)
})