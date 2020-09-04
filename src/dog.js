class Dog{
    static all = []
    constructor({image_url, name, location, age, breed, description, email, id, breed_id}){
        this.image_url = image_url
        this.name = name 
        this.location =location 
        this.age = age
        this.breed = breed
        this.description = description
        this.email = email 
        this.id = id 
        this.breed_id = breed_id

        this.element = document.createElement('div')
        this.element.id = `dog-${this.id}`
        this.dogList = document.getElementById("dogs-list")
        this.element.addEventListener('click', this.handleListClick)

        Dog.all.push(this)
    }
    get breeds(){
        return Breed.all.find((breed) => breed.id == dog.breed_id)

    }

    handleListClick = (e)=>{
        if (e.target.className === "delete"){
            let id = e.target.dataset.id
            dogsAdapter.deleteDog(id)
            this.element.remove()
        }
       else if(e.target.className === 'update'){
             let dogId = e.target.dataset.id
             e.target.className = "save"
             e.target.innerText = "Save"
             addUpdateDogFields(dogId)
         } else if(e.target.className === 'save'){
             let dogId = e.target.dataset.id
             e.target.className = "update"
             e.target.innerText = "Update"
             dogsAdapter.sendPatchRequest(dogId)
         }
     }
    attachToDom = () => {
        this.dogList.append(this.fullRender())
        this.addEventListeners()
        
    }
    addEventListeners(){
        this.element.addEventListener('click', this.handleListClick)
    }
    fullRender(){
        this.element.innerHTML = `
        <li>
        <span class="image-url"> <img src="${this.image_url}" width="100" height="100"> </span><br>
        <label> Name: </label>
        <span class="name">${this.name}</span><br>
        <label> Location: </label>
        <span class="location">${this.location}</span><br>
        <label> Age: </label>
        <span class="age">${this.age}</span><br>
        <label> Breed: </label>
        <span class="breed"> ${this.breed.name}</span><br>
        <label> Description: </label>
        <span class="description">${this.description}</span><br>
        <label> Email: </label>
        <span class="email"> ${this.email} </span>
        </li>
        <button class="delete" data-id="${this.id}">Delete</button>
        <button class="update" data-id="${this.id}"> Update </button>
        <hr>
        
    
        `
        return this.element;
    }
    updateDogOnDom({image_url, name, location, age, breed, description, email}){
        //let liDog = document.querySelector(`#item-${item.id} li`)
        this.image_url = image_url
        this.name = name 
        this.location =location 
        this.age = age
        this.breed = breed
        this.description = description
        this.email = email 
        this.fullRender()
    }

}
