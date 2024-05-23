//Iterating Over Object Properties: Write a function that takes an object as an argument 
// and logs all of its properties and values.


function Student (obj : object){
    for (let key in obj){
        console.log(key + ':' + obj[key]) // both keys and values will print
    }
    for (let key in obj){
        console.log(key) // only keys will print
    }
    for (let key in obj){
        console.log(obj[key]) // only values will print
    }
}

Student ({maker: "Toyota", model: "Corolla", year: "2012"})
