//Default Parameters: Write a function that greets a user. It should take the user's name as a
// parameter and say hello. If no name is given, it should greet an anonymous user.

function greet (personName : string = "Anonymous") { // default parameter
    console.log(`Hello ${personName} , How are you?`)
}

console.log(greet("Sania")) // replacing default parameter
console.log(greet())// print default parameter
