class Breed{
    static all = []
    constructor({id, name}) {
        this.id = id
        this.name = name 
        this.element = document.createElement("li")
        this.element.id = `breed-${id}`
        this.breedList = document.getElementById('breed-list')

        Breed.all.push(this)
    }

    fullRender(){
        this.element.innerHTML = `
            <h4> ${this.name}<h4>
        `
        return this.element

    }
    dogs(){
        return Dog.all.filter((dog)=> dog.breed_id == this.id)
    }
    attachToDom(){
        this.breedList.append(this.fullRender())
        this.addEventListeners()
    }
    addEventListeners(){
        this.element.addEventListener('click', this.displayItems)

    }
    displayItems = () => {
        document.getElementById('dogs-list').innerHTML =``
        this.dogs().forEach((d)=>{
            d.attachToDom()
        })

    }
}