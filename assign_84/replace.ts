//Replacing Text in a String: Write a function that takes a sentence and replaces all instances 
//of the word "JavaScript" with "TypeScript".

function instance_replace (sentence : string){
    return sentence.replace(/javascript/g, "typescript")
}

console.log(instance_replace("I am learning javascript by javascript masters."))