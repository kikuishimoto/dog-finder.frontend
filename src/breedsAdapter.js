class BreedsAdapter{
    constructor(){
        this.baseURL = 'http://127.0.0.1:3000/breeds'

    }
    fetchBreeds(){
        fetch("http://127.0.0.1:3000/breeds")
        .then(res => res.json())
        .then(response =>{
            response.data.forEach((e)=>{
                this.sanAndInitBreed(e)
            })
        })
    }
    
    sanAndInitBreed(response){
        let breed = new Breed({id: response.id, name: response.attributes.name}) 
        breed.attachToDom()
    }
}