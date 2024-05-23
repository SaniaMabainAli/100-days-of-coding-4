//Function Expressions vs. Function Declarations: Compare function expressions and declarations 
// by creating one of each that performs the same task, such as squaring a number.

function squaring(num : number) : number { // function declaration
    let square : number = num * num
    return square
}

let square = function (num : number) : number{ // function expression
    let square : number = num * num
    return square
}
console.log(squaring(5))
console.log(square(5))