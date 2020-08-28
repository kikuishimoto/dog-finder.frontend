const dogList = document.getElementById("dogs-list")
function fetchDogs() {
    fetch('http://127.0.0.1:3000/breeds')
    .then(res => res.json())
    .then(addDogsToDom)
}
function addDogsToDom(response){
    
    data = response.data
    
    data.forEach(dog => {
        dogList.innerHTML += `<li> id="dog-${dog.id}" ${dog.attributes.name}</li>`
    })
}
document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
})