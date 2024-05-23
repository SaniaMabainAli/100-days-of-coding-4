//Iterating Over Object Properties: Write a function that takes an object as an argument 
// and logs all of its properties and values.
function Student(obj) {
    for (var key in obj) {
        console.log(key + ':' + obj[key]); // both keys and values will print
    }
    for (var key in obj) {
        console.log(key); // only keys will print
    }
    for (var key in obj) {
        console.log(obj[key]); // only values will print
    }
}
Student({ maker: "Toyota", model: "Corolla", year: "2012" });
