class Breed{
    static all = []
    constructor({id, name}) {
        this.id = id
        this.name = name 

        Breed.all.push(this)
    }
}