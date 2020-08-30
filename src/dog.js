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

        Dog.all.push(this)
    }
    attachToDom(){
        this.dogList.append(this.fullRender())
    }
    fullRender(){
        dogList.innerHTML += `
        <li>
        <span class="image-url"> <img src="${this.image_url}" width="100" height="100"> </span><br>
        <span class="name">Name: ${this.name}</span><br>
        <span class="location">Location: ${this.location}</span><br>
        <span class="age">Age: ${this.age}</span><br>
        <span class="breed"> Breed: ${this.breed.name}</span><br>
        <span class="description">Description: ${this.description}</span><br>
        <span class="email"> Contact info: ${this.email} </span>
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
    }

}
