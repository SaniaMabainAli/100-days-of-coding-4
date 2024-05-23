//Default Parameters: Write a function that greets a user. It should take the user's name as a
// parameter and say hello. If no name is given, it should greet an anonymous user.
function greet(personName) {
    if (personName === void 0) { personName = "Anonymous"; }
    console.log("Hello ".concat(personName, " , How are you?"));
}
console.log(greet("Sania")); // replacing default parameter
console.log(greet()); // print default parameter
