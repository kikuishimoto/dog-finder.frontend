class Dog{
    static all = []
    constructor({image_url, name, location, age, breed, description, email, id}){
        this.image_url = image_url
        this.name = name 
        this.location =location 
        this.age = age
        this.breed = breed
        this.description = description
        this.email = email 
        this.id = id 

        this.element = document.createElement('div')
        this.element.id = `dog-${this.id}`
        this.dogList = document.getElementById("dogs-list")
        this.element.addEventListener('click', this.handleListClick)

        Dog.all.push(this)
    }
    handleListClick = (e)=>{
        if (e.target.className === "delete"){
            let id = e.target.dataset.id
             deleteDog(id)
        } else if(e.target.className === 'update'){
             let dogId = e.target.dataset.id
             e.target.className = "save"
             e.target.innerText = "Save"
             addUpdateDogFields(dogId)
         } else if(e.target.className === 'save'){
             let dogId = e.target.dataset.id
             e.target.className = "update"
             e.target.innerText = "Update"
             debugger
             dogsAdapter.sendPatchRequest(dogId)
         }
     }
    attachToDom(){
        this.dogList.append(this.fullRender())
    }
    fullRender(){
        this.element.innerHTML += `
        <li>
        <span class="image-url"> <img src="${this.image_url}" width="100" height="100"> </span><br>
        <label> Name: </label>
        <span class="name">${this.name}</span><br>
        <span class="location">${this.location}</span><br>
        <span class="age">${this.age}</span><br>
        <span class="breed"> ${this.breed.name}</span><br>
        <span class="description">${this.description}</span><br>
        <span class="email"> ${this.email} </span>
        </li>
        <button class="delete" data-id="${this.id}">Delete</button>
        <button class="update" data-id="${this.id}">Update</button>
    
        `
        return this.element
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
