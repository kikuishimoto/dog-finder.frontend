class DogsAdapter{
    constructor(){
        this.baseUrl = "http://127.0.0.1:3000/dogs"
    }
    #index
    fetchDogs(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(json => {
            json.data.forEach((el)=>{
               new Dog(el.attributes)
               //dog.attachToDom()
            })
        })
    }

    //update
    sendPatchRequest(dogId){
        const image_url = document.getElementById(`update-image_url-${dogId}`).value
        const name = document.getElementById(`update-name-${dogId}`).value
        const location = document.getElementById(`update-location-${dogId}`).value
        const age = document.getElementById(`update-age-${dogId}`).value
        const breed = document.getElementById(`update-breed-${dogId}`).value
        const description = document.getElementById(`update-description-${dogId}`).value
        const email = document.getElementById(`update-email-${dogId}`).value
        let dogObj = {
            image_url,
            name,
            location,
            age, 
            breed,
            description,
            email
        }
        let configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(dogObj)
        }
        fetch(this.baseUrl + `/${dogId}`, configObj)
        .then(res => res.json())
        .then(response => {
            let dog = Dog.all.find((i)=> i.id === response.data.attributes.id)
            dog.updateDogOnDom(response.data.attributes)
        })
        let form = document.getElementById(`update-form-${dogId}`)
        form.remove()
        
    }

    //delete
    deleteDog(id){
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
    
        //let dog = document.getElementById(`dog-${id}`)
        //dog.remove()
    
    }
    
    //CREATE
    handleFormSubmit(e){
        e.preventDefault()
        const image_url = document.getElementById("dog-image").value
        const breed = document.getElementById("dog-breed").value
        const name = document.getElementById("dog-name").value
        const location = document.getElementById("dog-location").value
        const age = document.getElementById("dog-age").value
        const email = document.getElementById("dog-email").value
        const description = document.getElementById("dog-description").value
  
        let newDogObj = {
            name: name,
            age: age,
            location: location,
            description: description,
            breed: breed,
            email: email,
            image_url: image_url

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
        .then(res => {
            let dog = new Dog(res.data.attributes)
            dog.attachToDom()
        })
    
        dogForm.reset()
        const newForm = document.getElementById('new-form-container')
        newForm.hidden = true
        const newFormBtn = document.getElementById('new-form-btn')
        newFormBtn.hidden = false
    }
}