class DogsAdapter{
    constructor(){
        this.baseUrl = "http://127.0.0.1:3000/dogs"
    }
    fetchDogs(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(json => {
            json.data.forEach((el)=>{
               let dog = new Dog(el.attributes)
               dog.attachToDom()
            })
        })
    }
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
                Accept: "application/json"
            },
            body: JSON.stringify(dogObj)
        }
        fetch(this.baseURL + `/${dogId}`, configObj)
        .then(res => res.json())
        .then(response => updateDogOnDom(response.data))
    }
}